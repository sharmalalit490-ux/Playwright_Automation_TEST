import { test, expect } from '@playwright/test';
import { login } from '../Admin/LoginHelper';
import { makerLogin } from './commonfunHelper';
import { claimEntity} from './commonfunHelper'
import { viewEntity} from './commonfunHelper'
import{approveEntity } from './commonfunHelper'


test('Admin login file', async ({ page }) => {
  await login(page);  // LoginHelper.ts yaha call ho rahe hai
  await page.pause();
  await page.getByRole('link', { name: 'Received from send client' }).click();
  await page.getByLabel('Bank Account*').selectOption('1000008951');
  await page.locator('#institutions').getByRole('textbox').click();
  await page.locator('#institutions').getByRole('textbox').fill('conver');
  await page.getByText('Convera send client (').click();
  await page.getByRole('textbox', { name: 'Amount send *' }).click();
  await page.getByRole('textbox', { name: 'Amount send *' }).fill('2');
  await page.getByRole('textbox', { name: 'Amount received *' }).click();
  await page.getByRole('textbox', { name: 'Amount received *' }).fill('1');
  await page.getByLabel('Purpose of payment*').selectOption('PREP');
  await page.getByRole('textbox', { name: 'Remarks to client' }).click();
  await page.getByRole('textbox', { name: 'Remarks to client' }).fill('TEST');


// API Response
const responsePromise = page.waitForResponse(
  response =>
    response.url().includes('emoneyCreationV1') &&
    response.status() === 201
);

await page.getByRole('button', { name: 'Submit' }).click();


const response = await responsePromise;
const responseBody = await response.json();

console.log(responseBody);

const code = responseBody.emoneyCreation.code;

console.log(`Code: ${code}`);


// Yha pr login File Call ho rhe hai 
  await makerLogin(page, 'lalit.maker', 'Admin@1234');

//Maker Approval page
const apiCode = responseBody.emoneyCreation.code;
// Approval screen
const uiCode = await page.locator('table tbody tr:first-child td').nth(1).textContent();

expect(uiCode?.trim()).toBe(apiCode);

console.log('API Code:', apiCode);
console.log('UI Code:', uiCode?.trim());


  await claimEntity(page);
  await viewEntity(page);
  await approveEntity(page);

});