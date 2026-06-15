import {expect, test } from '@playwright/test';
import { login } from '../Admin/LoginHelper';

import { makerLogin } from './commonfunHelper';
import { claimEntity} from './commonfunHelper'
import { viewEntity} from './commonfunHelper'
import{approveEntity } from './commonfunHelper'
test('Admin login file', async ({ page }) => {
  await login(page);  // LoginHelper.ts yaha call ho raha hai
await page.pause();
await page.getByRole('link', { name: 'Payment to payout client' }).click();
  await page.getByLabel('Bank Account*').selectOption('1000008930');
  await page.locator('#institutions').getByRole('textbox').click();
  await page.getByRole('option', { name: 'Convera payout (1000009111)' }).click();
  await page.getByLabel('Payout client settlement').selectOption('100003');
  await page.getByRole('textbox', { name: 'Amount to be transferred to' }).click();
  await page.getByRole('textbox', { name: 'Amount to be transferred to' }).fill('2');
  await page.getByRole('textbox').nth(3).fill('1');
  await page.getByRole('textbox', { name: 'Remarks' }).click();
  await page.getByRole('textbox', { name: 'Remarks' }).fill('Test payment');

//For Get API Response
const responsePromise = page.waitForResponse(
  response =>
    response.url().includes('/walletAdjustment') &&
    response.status() === 201
);



await page.getByRole('button', { name: 'Submit' }).click();


const response = await responsePromise;
const responseBody = await response.json();
// Find the code from walletadjustment API 
const checkerCode = responseBody.walletAdjustment.code.toString();
console.log("Checker Code:", checkerCode);

//  Maker Login
await makerLogin(page, 'lalit.maker', 'Admin@1234');


const codeCell = page.locator(`td:text-is("${checkerCode}")`);
await expect(codeCell).toBeVisible();
const makerCode = (await codeCell.textContent())?.trim();
console.log("Maker Code:", makerCode);


// Compare Checker & Maker Code
if (checkerCode === makerCode) {
    await claimEntity(page);
    await viewEntity(page);
    await approveEntity(page);

    console.log("Transaction Successfully");
   
} else {

    throw new Error(
      'Transaction Failed - Checker Code (${checkerCode}) and Maker Code (${makerCode}) not matched'
    );

}



});




