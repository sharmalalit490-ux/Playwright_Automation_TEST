import { test } from '@playwright/test';
import { login } from '../Admin/LoginHelper';

test('Admin login file', async ({ page }) => {
  await login(page);  // yaha call ho raha hai

  await page.getByRole('link', { name: 'System Wallet' }).click();
  await page.locator('td:nth-child(8) > a:nth-child(2)').first().click();
  await page.getByRole('button', { name: 'Update' }).click();
  await page.locator('#businessName').click();
  await page.locator('#businessName').fill('RHUB');
  await page.getByRole('button', { name: 'Update' }).click();
  await page.getByRole('tab', { name: 'Address' }).click();
  await page.getByRole('tab', { name: 'Wallet' }).click();
  await page.getByRole('button', { name: 'Update' }).click();
  await page.waitForTimeout(2000);

});