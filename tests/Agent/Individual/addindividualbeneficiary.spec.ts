import { test, expect } from '@playwright/test';
import { agentLogin } from '../../Aexercise/commonfunHelper';

test('Add Individual beneficiary', async ({ page }) => {

  await agentLogin(page, '1000009109', 'Admin@123');

  //await page.pause();
  await page.getByText('Individual').click();
  await page.locator('td:nth-child(10) > a:nth-child(5)').first().click();
  await page.getByText('Add Individual Beneficiary').click();
  await page.getByRole('textbox', { name: 'First Name *' }).click();
  //await page.getByRole('textbox', { name: 'First Name *' }).fill('Kittu1');
  const randomName = 'Kittu' + Math.floor(Math.random() * 100);
  await page.getByRole('textbox', { name: 'First Name *' }).fill(randomName);
  await page.getByRole('textbox', { name: 'Last Name *' }).click();
  await page.getByRole('textbox', { name: 'Last Name *' }).fill('sharma');
  await page.getByLabel('Gender *').selectOption('male');
  await page.getByLabel('Nationality *').selectOption('MWI');
  await page.getByRole('textbox', { name: 'Beneficiary Mobile *' }).click();
  await page.getByRole('textbox', { name: 'Beneficiary Mobile *' }).fill('894796604');
  //await page.pause();
  await page.getByLabel('Country *').selectOption('MWI');
  await page.getByRole('textbox', { name: 'Address Line1 *' }).click();
  await page.getByRole('textbox', { name: 'Address Line1 *' }).fill('United Arab Emirates');
  await page.getByRole('textbox', { name: 'State *' }).click();
  await page.getByRole('textbox', { name: 'State *' }).fill('United Arab Emirates');
  await page.getByRole('textbox', { name: 'City *' }).click();
  await page.getByRole('textbox', { name: 'City *' }).fill('United Arab Emirates');
  await page.getByLabel('Country *').selectOption('ARE');
  await page.getByRole('textbox', { name: 'Address Line1 *' }).click();
  await page.getByRole('textbox', { name: 'Address Line1 *' }).fill('United Arab Emirates');
  await page.getByRole('textbox', { name: 'Address Line1 *' }).click();
  await page.locator('#remittance_wrap').click();
  await page.getByRole('textbox', { name: 'Address Line1 *' }).click();
  await page.locator('div').filter({ hasText: /^State \*$/ }).click();
  await page.getByRole('textbox', { name: 'State *' }).fill('United Arab Emirates');
  await page.getByRole('textbox', { name: 'Bank Name *' }).click();
  await page.getByRole('textbox', { name: 'Bank Name *' }).fill('Emirates Islamic Bank PJSC');
  await page.getByRole('textbox', { name: 'IBAN *' }).click();
  await page.getByRole('textbox', { name: 'IBAN *' }).fill('AE110260000959024298101');
  await page.getByRole('textbox', { name: 'Swift Code *' }).click();
  await page.getByRole('textbox', { name: 'Swift Code *' }).fill('EBILAEADXXX');
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.waitForTimeout(5000); 
  
});