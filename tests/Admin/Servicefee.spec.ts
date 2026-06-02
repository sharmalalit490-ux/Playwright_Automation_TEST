import { test } from '@playwright/test';
import { login } from './LoginHelper';

test('Admin login file', async ({ page }) => {
  await login(page);  // 🔥 yaha call ho raha hai

  await page.locator('a[href*="templatefee"]').click();
  await page.getByRole('link', { name: 'Add Fee Template' }).click();
  await page.locator('#userType').click();
  await page.waitForTimeout(1000);
  await page.locator('#userType').selectOption('100000');
  await page.locator('#walletOwner').click();
  await page.waitForTimeout(1000);
  await page.locator('#walletOwner').selectOption('1000009039');

  await page.pause();
  await page.getByRole('button', { name: 'Save' }).click();
  await page.waitForTimeout(3000);

  await page.locator('a:has(i.fa-cog)').click();
  await page.locator('#serviceTypeCode').click();
  await page.waitForTimeout(2000);
  await page.getByLabel('Service Type *').selectOption('100000');
  await page.locator('#sendCurrencyCode').click();
  await page.getByLabel('#sendCurrencyCode').selectOption('100003');
  await page.waitForTimeout(3000);
  

});