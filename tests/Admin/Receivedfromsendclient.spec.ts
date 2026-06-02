import { test } from '@playwright/test';
import { login } from './LoginHelper';

test('Admin login file', async ({ page }) => {
  await login(page);  // 🔥 yaha call ho raha hai

  await page.getByRole('link', { name: 'Received from send client' }).click();
  await page.getByLabel('Bank Account*').selectOption('1000008951');
  await page.locator('#institutions').getByRole('textbox').click();
  await page.locator('#institutions').getByRole('textbox').fill('conver');
  await page.getByText('Convera send client (').click();
  await page.getByRole('textbox', { name: 'Amount send *' }).click();
  await page.getByRole('textbox', { name: 'Amount send *' }).fill('100');
  await page.getByRole('textbox', { name: 'Amount received *' }).click();
  await page.getByRole('textbox', { name: 'Amount received *' }).fill('99');
  await page.getByLabel('Purpose of payment*').selectOption('PREP');
  await page.getByRole('textbox', { name: 'Remarks to client' }).click();
  await page.getByRole('textbox', { name: 'Remarks to client' }).fill('TEST');
  await page.getByRole('button', { name: 'Submit' }).click();
  
  await page.waitForTimeout(1000);

});