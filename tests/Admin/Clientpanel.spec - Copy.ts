import { test } from '@playwright/test';
import { login } from './LoginHelper';

test('Admin login file', async ({ page }) => {
  await login(page);  // 🔥 yaha call ho raha hai


  await page.locator('a[href="#/wallet-owner"]').click();
  await page.waitForTimeout(1000);
  await page.locator('a:has-text("Add Payout Client")').click();
  await page.fill('#operatorName', 'Remittanceshub'); // Payout Client Name
  await page.fill('#operatorEmail', 'lalit.sharma@remittanceshub.com');  //Payout Client Email 
  await page.locator('#registerCountryCode').click(); // Country Dropdown Malawi
  await page.locator('#registerCountryCode').selectOption('100132');  
  // SELECT Payout currency
  await page.locator('span').filter({ hasText: 'Select' }).first().click();
  await page.getByText('AED').first().click();
  // SELECT Settlement currency 
  await page.locator('span').filter({ hasText: 'Select' }).first().click();
  await page.getByText('USD-USA').nth(1).click();
  await page.locator('.dropdown-multiselect--active > .dropdown-multiselect__caret').click();
  await page.locator('#entityType').selectOption('100000');
  await page.locator('#entityRegistrationNumber').click();
  await page.locator('#entityRegistrationNumber').fill('REG23456');
  await page.locator('#regulatoryLicenceNumber').click();
  await page.locator('#regulatoryLicenceNumber').fill('LIC56789');
  await page.locator('#regulatoryLicenceType').click();
  await page.locator('#regulatoryLicenceType').fill('REGLIC98765');
  await page.locator('#authorizePersonName').click();
  await page.locator('#authorizePersonName').fill('Remittanceshub');

  // await page.pause();
  const randomPhone = '9' + Math.floor(100000000 + Math.random() * 900000000);
  await page.locator('#authorizePersonPhoneNumber').click();
  await page.locator('#authorizePersonPhoneNumber').fill(randomPhone);
  await page.locator('#authorizePersonId').click();
  await page.locator('#authorizePersonId').fill('lalit');
  await page.getByRole('button', { name: 'event' }).nth(1).click();
  await page.getByLabel('Select year').selectOption('2035');
  await page.getByLabel('Monday, April 30,').getByText('30', { exact: true }).click();
  await page.locator('div:nth-child(21) > div > div > div > .ng-untouched.ng-pristine.ng-invalid > .multiselect-dropdown > div > .dropdown-btn > span:nth-child(2) > .dropdown-multiselect__caret').click();
  await page.getByText('Business to Business').click();
  await page.getByText('Business to Customer').click();
  await page.getByText('Customer to Customer').click();
  await page.getByText('Customer to Business').click();
  await page.getByRole('button', { name: 'Next' }).click();
  await page.waitForTimeout(3000);
  //Address
  await page.locator('#addressLine1').click();
  await page.locator('#addressLine1').fill('Malawi');
  await page.locator('#regionName').selectOption('100173');
  await page.locator('#city').selectOption('100199');
  await page.locator('.custom-hyperlink').click();
  await page.getByRole('button', { name: 'Next' }).click();
  //Bank Detail
  await page.waitForTimeout(6000);
  await page.getByRole('button', { name: 'Skip' }).click(); 
  


})