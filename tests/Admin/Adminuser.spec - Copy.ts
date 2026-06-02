import { test } from '@playwright/test';
import { login } from './LoginHelper';

test('Admin login file', async ({ page }) => {

  await login(page);  // 🔥 yaha call ho raha hai
  
  await page.waitForTimeout(2000);
  await page.locator('a[href="#/user"]').click();
  await page.locator('a[href="#/user/add"]').click();
  await page.locator('#role_code').click();
  await page.locator('#role_code').selectOption('100000');
  await page.keyboard.press('Escape');
  await page.waitForTimeout(500);
  await page.fill('#first_name', 'Shyam01');
  await page.fill('#last_name', 'sharma');
  await page.fill('#user_name', 'Shyam01.maker');
  await page.fill('#email', 'Ankoor.bindal');
  await page.fill('#mobile_number', '56782345613');
  await page.pause();
  await page.getByRole('button', { name: 'Save' }).click();
 
  await page.waitForTimeout(2000);
});