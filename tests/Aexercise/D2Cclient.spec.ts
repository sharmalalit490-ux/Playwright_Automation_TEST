import {expect, test } from '@playwright/test';
import { login } from '../Admin/LoginHelper';

import { makerLogin } from '../Aexercise/commonfunHelper';
import { claimEntity} from './commonfunHelper'
import { viewEntity} from './commonfunHelper'
import{approveEntity } from './commonfunHelper'

test('test', async ({ page }) => {
 await login(page);  // LoginHelper.ts file yaha call ho raha hai
 
  await page.locator('a[href="#/wallet-owner"] span').click();
  await page.locator('a:has-text("Add D2C Client")').click();
  // D2C Client Name
await page.locator('#operatorName').click();
const operatorNameSuffix = Math.floor(10 + Math.random() * 90);
const operatorName = `Abha${operatorNameSuffix}at`;
await page.locator('#operatorName').fill(operatorName);
console.log('Operator Name:', operatorName);
 //await page.pause();

//Send Client Email
const letters = 'abcdefghijklmnopqrstuvwxyz';
const randomChars =
letters[Math.floor(Math.random() * letters.length)] +
letters[Math.floor(Math.random() * letters.length)];
const email = `abhay${randomChars}@remittanceshub.com`;
await page.locator('#operatorEmail').fill(email);
console.log(email);

// Country
 await page.locator('#registerCountryCode').selectOption('100132');
  
  // SELECT Settlement currency 
  await page.locator('span').filter({ hasText: 'Select' }).first().click();
  await page.getByText('USD-USA').nth(1).click();
  await page.locator('.dropdown-multiselect--active > .dropdown-multiselect__caret').click();

  // EntityType
  await page.locator('#entityType').selectOption('100000');


  await page.locator('#entityRegistrationNumber').click();
  await page.locator('#entityRegistrationNumber').fill('REG23456');

  await page.locator('#regulatoryLicenceNumber').click();
  await page.locator('#regulatoryLicenceNumber').fill('LIC56789');

  await page.locator('#regulatoryLicenceType').click();
  await page.locator('#regulatoryLicenceType').fill('REGLIC98765');

  await page.locator('#authorizePersonName').click();
  await page.locator('#authorizePersonName').fill(operatorName);

  // await page.pause();
  const randomPhone = '941400' + Math.floor(1000 + Math.random() * 9000);
  await page.locator('#authorizePersonPhoneNumber').fill(randomPhone);
  console.log('Phone Number:', randomPhone);

  await page.locator('#authorizePersonId').click();
  const authorizePersonIdSuffix = Math.floor(10 + Math.random() * 90);
  const authorizePersonID = `Ak${authorizePersonIdSuffix}at`;
  await page.locator('#authorizePersonId').fill(authorizePersonID);
  console.log('Authorize Person ID:', authorizePersonID);
 
//Select Date
  await page.getByRole('button', { name: 'event' }).nth(1).click();
  const today = new Date();
  const currentMonth = (today.getMonth() + 1).toString();
  const currentDate = today.getDate().toString();
 // Month = current month
  await page.locator('select[aria-label="Select month"]').selectOption(currentMonth);
 // Year = fixed 2036
  await page.locator('select[aria-label="Select year"]').selectOption('2036');
  // Current date select
  await page.getByRole('gridcell', { name: currentDate }).click();
  
  // Select service type 
  await page.locator('div:nth-child(25) > div > div > div > .ng-untouched.ng-pristine.ng-invalid > .multiselect-dropdown > div > .dropdown-btn').click();
  await page.getByText('Business to Business').click();
  await page.getByText('Business to Customer').click();
  await page.getByRole('listitem').filter({ hasText: 'Customer to Business' }).click();
  await page.getByText('Customer to Customer').click();
  await page.locator('.dropdown-multiselect--active > .dropdown-multiselect__caret').click();

  // Client Type
  await page.locator('#clientType').selectOption('Direct');
  
  // Thresold income
  await page.locator('#thresholdAmount').fill('100000000');

  await page.getByRole('button', { name: 'Next' }).click();
  await page.waitForTimeout(5000);
  //Address
  await page.locator('#addressLine1').click();
  await page.locator('#addressLine1').fill('Malawi');
  await page.locator('#regionName').selectOption('100173');
  await page.locator('#city').selectOption('100199');
  await page.locator('.custom-hyperlink').click();
  await page.getByRole('button', { name: 'Next' }).click();
 
  //Bank Detail
  await page.waitForTimeout(3000);
  await page.getByRole('button', { name: 'Skip' }).click(); 
  await page.waitForTimeout(5000);
  
  // File Upload
  await page.locator('input[type="file"]')
  .setInputFiles('C:\\Users\\Lalit\\Downloads\\remittanceshub_logo.jpg');
  //  await page.pause();
  await page.getByRole('button', { name: 'Upload' }).click();
  await page.getByRole('button', { name: 'Done' }).click();
  await page.waitForTimeout(8000);
  await makerLogin(page, 'lalit.maker', 'Admin@1234');// commonfunHelper Maker login call ho rha hai


    // Ya agar tumhare helper functions already bane hue hain:
     await claimEntity(page);
     await viewEntity(page);
     await approveEntity(page);

 

});