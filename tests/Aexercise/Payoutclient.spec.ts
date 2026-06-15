import {expect, test } from '@playwright/test';
import { login } from '../Admin/LoginHelper';

import { makerLogin } from '../Aexercise/commonfunHelper';
import { claimEntity} from './commonfunHelper'
import { viewEntity} from './commonfunHelper'
import{approveEntity } from './commonfunHelper'


test('Payout client', async ({ page }) => {
  await login(page);  // LoginHelper.ts file yaha call ho raha hai
  await page.locator('a[href="#/wallet-owner"]').click();
  await page.getByText('Add Payout Client').click();
  await page.locator('#operatorName').click();
  await page.locator('#operatorName').fill('mohit');
  await page.locator('#operatorEmail').click();
  await page.locator('#operatorEmail').fill('mohit@remittanceshub.com');
  await page.locator('#registerCountryCode').selectOption('100132');
  await page.locator('span').filter({ hasText: 'Select' }).first().click();
  await page.getByRole('textbox', { name: 'multiselect-search' }).click();
  await page.getByRole('textbox', { name: 'multiselect-search' }).fill('usd-usa');
  await page.getByText('USD-USA').first().click();
  await page.locator('.dropdown-multiselect__caret').first().click();
  await page.locator('span').filter({ hasText: 'Select' }).first().click();
  await page.getByRole('textbox', { name: 'multiselect-search' }).click();
  await page.getByRole('textbox', { name: 'multiselect-search' }).fill('usd-usa');
  await page.getByText('USD-USA').nth(2).click();
  await page.locator('span').filter({ hasText: 'USD-USA x' }).nth(3).click();
  await page.locator('#entityType').selectOption('100000');
  await page.locator('#entityRegistrationNumber').click();
  await page.locator('#entityRegistrationNumber').fill('REG4567');
  await page.locator('#regulatoryLicenceNumber').click();
  await page.locator('#regulatoryLicenceNumber').fill('LIC5678');
  await page.locator('#regulatoryLicenceType').click();
  await page.locator('#regulatoryLicenceType').fill('Passport');
  await page.locator('#authorizePersonName').click();
  await page.locator('#authorizePersonName').fill('Mohit');
  await page.locator('#authorizePersonPhoneNumber').click();
  
  const mobileNumber = Math.floor(1000000000 + Math.random() * 9000000000).toString();

await page.locator('#authorizePersonPhoneNumber').fill(mobileNumber);

  await page.locator('#authorizePersonId').click();
  await page.locator('#authorizePersonId').fill('password');
  await page.getByRole('button', { name: 'event' }).nth(1).click();
  await page.getByLabel('Select year').selectOption('2036');
  await page.getByText('25', { exact: true }).click();
  await page.locator('span').filter({ hasText: 'Select' }).first().click();
  await page.getByText('Africa FX Change C2B').click();
  await page.getByRole('button', { name: 'Next' }).click();
  await page.locator('#addressLine1').click();
  await page.locator('#addressLine1').fill('Malawi');
  await page.locator('#regionName').selectOption('100173');
  await page.locator('#city').selectOption('100199');
  //await page.pause();
  await page.locator('.custom-hyperlink').click();

  await page.getByRole('button', { name: 'Next' }).click();
  await page.waitForTimeout(7000);

const responsePromise = page.waitForResponse(
  response =>
    response.url().includes('/partner') &&
    response.status() === 200
);


  await page.getByRole('button', { name: 'Skip' }).click();
  await page.waitForTimeout(4000);

const response = await responsePromise;
const responseBody = await response.json();

console.log(JSON.stringify(responseBody, null, 2));

const checkwalletOwnerCode = responseBody.walletOwner.code;

console.log('check walletOwner Code:', checkwalletOwnerCode);

await makerLogin(page, 'lalit.maker', 'Admin@1234');// commonfunHelper Maker login call ho rha hai



    // Ya agar tumhare helper functions already bane hue hain:
     await claimEntity(page);
     await viewEntity(page);
     await approveEntity(page);

 

});