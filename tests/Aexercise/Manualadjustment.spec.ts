import {expect, test } from '@playwright/test';
import { login } from '../Admin/LoginHelper';

import { makerLogin } from './commonfunHelper';
import { claimEntity} from './commonfunHelper'
import { viewEntity} from './commonfunHelper'
import{approveEntity } from './commonfunHelper'


test('Admin login file', async ({ page }) => {
  await login(page);  // LoginHelper.ts file yaha call ho raha hai
await page.pause();
  await page.getByRole('link', { name: 'Manual Adjustment' }).click();
  await page.locator('#fromAccountType').selectOption('100006');
  await page.locator('#walletowners').getByRole('textbox').click();
  await page.locator('#walletowners').getByRole('textbox').fill('usd');
  await page.getByText('USD BANK ACCOUNT (1000008930 )').click();
  await page.locator('#toAccountType').selectOption('100000');
  await page.locator('#toWalletowner').getByRole('textbox').click();
  await page.locator('#toWalletowner').getByRole('textbox').fill('sani');
  await page.getByText('Sanity send client (1000009109 )').click();
  await page.getByLabel('Currency*').selectOption('100003');
  await page.getByRole('textbox', { name: 'Amount to be paid' }).click();
  await page.getByRole('textbox', { name: 'Amount to be paid' }).fill('2');
  await page.getByLabel('Reason For Adjustment').selectOption('One Time Fee');
  await page.getByRole('textbox', { name: 'Remarks To Client' }).click();
  await page.getByRole('textbox', { name: 'Remarks To Client' }).fill('TEST');
  await page.waitForTimeout(1000);
  
//Resposne capture krne k liye
const responsePromise = page.waitForResponse(
  response =>
    response.url().includes('/manualAdjustment') &&
    response.status() === 201
);

  await page.getByRole('button', { name: 'Submit' }).click();
  
const response = await responsePromise;
const responseBody = await response.json();

const checkerCode = responseBody.currencyConversion.code.toString();

console.log("Checker Code:", checkerCode);

await makerLogin(page, 'lalit.maker', 'Admin@1234');// commonfunHelper Maker login call ho rha hai
 
 await page.waitForSelector('table tbody tr');

// Checker code wali row find karo
const row = page.locator('tbody tr').filter({
  has: page.locator(`td:text-is("${checkerCode}")`)
});

await expect(row).toBeVisible();
const makerCode = (await row.locator('td').nth(1).textContent())?.trim();
console.log("Maker Code:", makerCode);

// Match validation
if (makerCode === checkerCode) {

  // Ya agar tumhare helper functions already bane hue hain:
  await claimEntity(page);
  await viewEntity(page);
  await approveEntity(page);

  console.log("Transaction Successfully");
   } 
else {

  throw new Error(
    'Checker Code (${checkerCode}) and Maker Code (${makerCode}) not matched'
  );
}
});