import { test } from '@playwright/test';
import { login } from './LoginHelper';

test('Admin login file', async ({ page }) => {
  await login(page);  // 🔥 yaha call ho raha hai

await page.getByRole('link', { name: 'Payment to payout client' }).click();
  await page.getByLabel('Bank Account*').selectOption('1000008930');
  await page.locator('#institutions').getByRole('textbox').click();
  await page.getByRole('option', { name: 'Convera payout (1000009111)' }).click();
  await page.getByLabel('Payout client settlement').selectOption('100003');
  await page.getByRole('textbox', { name: 'Amount to be transferred to' }).click();
  await page.getByRole('textbox', { name: 'Amount to be transferred to' }).fill('100');
  await page.getByRole('textbox').nth(3).fill('99');
  await page.getByRole('textbox', { name: 'Remarks' }).click();
  await page.getByRole('textbox', { name: 'Remarks' }).fill('Test payment');
  await page.getByRole('button', { name: 'Submit' }).click();

   await page.waitForTimeout(1000);
  
});