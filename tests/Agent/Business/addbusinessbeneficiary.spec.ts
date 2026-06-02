import { test, expect } from '@playwright/test';
import { login } from '../agentlogin';

test('Agentfile login', async ({ page }) => {
  await login(page);
  // now continue your test
  await expect(page).toHaveURL(/login/); // Yha call ho rha hai login page  


  await page.locator('a[href="#/customers/corporatelist"]').click();
  // await page.getByRole('link', { name: ' Business' }).click();
  await page.locator('a:nth-child(7)').first().click();
  await page.getByText('Add Business Beneficiary').click();
  await page.getByRole('textbox', { name: 'Business Name *' }).click();
  await page.getByRole('textbox', { name: 'Business Name *' }).fill('SAG Info ');
  await page.getByLabel('Nature of Business *').selectOption('RHT002');
  await page.getByLabel('Business Registration Issued At *').selectOption('ARE');
  await page.getByLabel('Business Registration Type *').selectOption('RHB002');
  await page.getByRole('textbox', { name: 'Business Primary Contact' }).click();
  await page.getByRole('textbox', { name: 'Business Primary Contact' }).fill('123456789');
  await page.getByRole('textbox', { name: 'Business Email *' }).click();
  await page.getByRole('textbox', { name: 'Business Email *' }).fill('admin@cms.com');
  await page.getByLabel('Country *').selectOption('ARE');
  await page.getByRole('textbox', { name: 'Address Line1 *' }).click();
  await page.getByRole('textbox', { name: 'Address Line1 *' }).fill('United Arab Emirates');
  await page.getByRole('textbox', { name: 'State *' }).click();
  await page.getByRole('textbox', { name: 'State *' }).fill('United Arab Emirates');
  await page.getByRole('textbox', { name: 'City *' }).click();
  await page.getByRole('textbox', { name: 'City *' }).fill('American');
  await page.getByRole('textbox', { name: 'IBAN *' }).click();
  await page.getByRole('textbox', { name: 'IBAN *' }).fill('AE110260000959024298101');
  await page.getByRole('textbox', { name: 'Bank Name *' }).click();
  await page.getByRole('textbox', { name: 'Bank Name *' }).fill('AE110260000959024298101');
  await page.getByRole('textbox', { name: 'Swift Code *' }).click();
  await page.getByRole('textbox', { name: 'Swift Code *' }).fill('EBILAEADXXX');
  await page.getByRole('button', { name: 'Submit' }).click();

  await page.waitForTimeout(5000);

 });
