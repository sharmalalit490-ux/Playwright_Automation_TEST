import { test, expect } from '@playwright/test';
import { login } from '../agentlogin';

test('Agentfile login', async ({ page }) => {
  await login(page);
  // now continue your test
  await expect(page).toHaveURL(/login/); // Yha call ho rha hai login page  

//   await page.pause();
  await page.locator('a[href="#/customers/corporatelist"]').click();
  await page.locator('a:nth-child(7)').first().click();
  await page.getByText('Add Individual Beneficiary').click();
  await page.getByRole('textbox', { name: 'First Name *' }).click();
  //await page.getByRole('textbox', { name: 'First Name *' }).fill('chandan01');
  const randomName = 'chandan01' + Math.floor(Math.random() * 100);
  await page.getByRole('textbox', { name: 'First Name *' }).fill(randomName);
  await page.getByRole('textbox', { name: 'Last Name *' }).click();
  await page.getByRole('textbox', { name: 'Last Name *' }).fill('sharma');
  await page.getByLabel('Gender *').selectOption('male');
  await page.getByLabel('Nationality *').selectOption('ARM');
  await page.getByLabel('Nationality *').selectOption('AUS');
  await page.getByRole('textbox', { name: 'Beneficiary Mobile *' }).click();
  await page.getByRole('textbox', { name: 'Beneficiary Mobile *' }).fill('123456789');
  await page.getByLabel('Country *').selectOption('AUS');
  await page.getByRole('textbox', { name: 'Address Line1 *' }).click();
  await page.getByRole('textbox', { name: 'Address Line1 *' }).fill('Australia');
  await page.getByRole('textbox', { name: 'State *' }).click();
  await page.getByRole('textbox', { name: 'State *' }).fill('Australia');
  await page.getByRole('textbox', { name: 'City *' }).click();
  await page.getByRole('textbox', { name: 'City *' }).fill('Australia');
  await page.getByRole('textbox', { name: 'IBAN *' }).click();
  await page.getByRole('textbox', { name: 'IBAN *' }).fill('12345678');
  await page.getByRole('textbox', { name: 'Bank Name *' }).click();
  await page.getByRole('textbox', { name: 'Bank Name *' }).fill('Commonwealth Bank of Australia');
  await page.getByRole('textbox', { name: 'Swift Code *' }).click();
  await page.getByRole('textbox', { name: 'Swift Code *' }).fill('CTBAAU2SXXX');
  await page.getByRole('button', { name: 'Submit' }).click();


});