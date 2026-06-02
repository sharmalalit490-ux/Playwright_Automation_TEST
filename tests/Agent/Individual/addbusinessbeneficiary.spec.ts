import { test, expect } from '@playwright/test';
import { login } from '../agentlogin';

test('Agent login file', async ({ page }) => {
  await login(page);
  // now continue your test
  await expect(page).toHaveURL(/login/); // Yha call ho rha hai login page

  await page.getByText('Individual').click();
  await page.locator('td:nth-child(10) > a:nth-child(5)').first().click();
  await page.getByText('Add Business Beneficiary').click();
  await page.getByRole('textbox', { name: 'Business Name *' }).click();
  await page.getByRole('textbox', { name: 'Business Name *' }).fill('Dhruv pvt');
  await page.getByLabel('Nature of Business *').selectOption('RHT002');
  await page.getByLabel('Business Registration Issued At *').selectOption('MWI');
  await page.getByRole('textbox', { name: 'Business Primary Contact' }).click();
  await page.getByRole('textbox', { name: 'Business Primary Contact' }).fill('9089786745');
  await page.getByRole('textbox', { name: 'Business Email *' }).click();
  await page.getByRole('textbox', { name: 'Business Email *' }).fill('test@test.com');
  await page.getByLabel('Business Registration Type *').selectOption('RHB002');
  await page.getByLabel('Country *').selectOption('MWI');
  await page.getByRole('textbox', { name: 'Address Line1 *' }).click();
  await page.getByRole('textbox', { name: 'Address Line1 *' }).fill('Malawi');
  await page.getByRole('textbox', { name: 'State *' }).click();
  await page.getByRole('textbox', { name: 'State *' }).fill('Malawi');
  await page.getByRole('textbox', { name: 'City *' }).click();
  await page.getByRole('textbox', { name: 'City *' }).fill('Malawi');
  await page.getByRole('textbox', { name: 'IBAN *' }).click();
  await page.getByRole('textbox', { name: 'IBAN *' }).fill('AE110260000959024298101');
  await page.getByRole('textbox', { name: 'Bank Name *' }).click();
  await page.getByRole('textbox', { name: 'Bank Name *' }).fill('Emirates Islamic Bank PJSC');
  await page.getByRole('textbox', { name: 'Swift Code *' }).click();
  await page.getByRole('textbox', { name: 'Swift Code *' }).fill('EBILAEADXXX');
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.waitForTimeout(5000); 


});