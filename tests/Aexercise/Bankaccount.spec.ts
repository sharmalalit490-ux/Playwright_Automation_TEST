import { test } from '@playwright/test';
import { login } from '../Admin/LoginHelper';

import { makerLogin } from '../Aexercise/commonfunHelper';
import { claimEntity} from '../Aexercise/commonfunHelper'
import { viewEntity} from '../Aexercise/commonfunHelper'
import{approveEntity } from '../Aexercise/commonfunHelper'

test('Bank account', async ({ page }) => {
  await login(page);  // LoginHelper.ts file yaha call ho raha hai
 
  await page.getByRole('link', { name: 'Bank Account' }).click();
  await page.getByText('Add Bank/Collection Account').click();
  await page.waitForTimeout(2000);
  await page.locator('#bankName').click();
  await page.waitForTimeout(2000);
  await page.locator('#bankName').fill('Kotak');
  await page.locator('#ownerName').click();
  await page.locator('#ownerName').fill('0125');
  await page.locator('#registerCountryCode').selectOption('100233');
  await page.locator('#groupCode').selectOption('Regular Bank');
  await page.locator('span').filter({ hasText: 'Select' }).first().click();
  await page.getByLabel('Basic Information').getByRole('listitem').filter({ hasText: /^$/ }).click();
 
  await page.getByRole('textbox', { name: 'multiselect-search' }).fill('usd-usa');
  await page.getByText('USD-USA').click();
  await page.locator('.dropdown-multiselect__caret').click();
  await page.getByRole('button', { name: 'Next' }).click();
  await page.locator('#accountName').click();
  await page.locator('#accountName').fill('Saving');
  await page.locator('#accountType').selectOption('100001');
  await page.locator('#finInstitutionCode').click();
  await page.locator('#finInstitutionCode').fill('Kotak');
  await page.locator('#branchNameAndAddress').click();
  await page.locator('#branchNameAndAddress').fill('united kingdom');
  await page.locator('#accountNumber').click();
  await page.locator('#accountNumber').fill('1234567891234567');
  await page.locator('#confirmAccountNumber').click();
  await page.locator('#confirmAccountNumber').fill('1234567891234567');

  //Resposne capture krne k liye
const responsePromise = page.waitForResponse(
  response =>
    response.url().includes('walletOwner') &&
    response.status() === 200
);

  await page.getByRole('button', { name: 'Done' }).click();

const response = await responsePromise;
const responseBody = await response.json();

//console.log(JSON.stringify(responseBody, null, 2));

const ownerCode = responseBody.walletOwner.code;

console.log('Checkerowner Code:', ownerCode);

  await makerLogin(page, 'lalit.maker', 'Admin@1234');// commonfunHelper Maker login call ho rha hai

const checkerCode = await page.locator('table tbody tr td').nth(1).textContent();

console.log('Checker Code:', checkerCode?.trim());
//await page.pause();
if (ownerCode === checkerCode) {

  await claimEntity(page);
  await viewEntity(page);
  await approveEntity(page);

  console.log('Transaction Pass');

} else
   {
    console.log('Transaction Fail');
}
  
});