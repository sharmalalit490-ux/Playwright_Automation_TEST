import { test } from '@playwright/test';
import { login } from './LoginHelper';

test('Admin login file', async ({ page }) => {
  await login(page);  // 🔥 yaha call ho raha hai

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
  await page.getByRole('textbox', { name: 'Amount to be paid' }).fill('100');
  await page.getByLabel('Reason For Adjustment').selectOption('One Time Fee');
  await page.getByRole('textbox', { name: 'Remarks To Client' }).click();
  await page.getByRole('textbox', { name: 'Remarks To Client' }).fill('TEST');
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.waitForTimeout(1000);
  
});