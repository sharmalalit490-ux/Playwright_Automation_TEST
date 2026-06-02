import { test } from '@playwright/test';

import { login } from './LoginHelper';

test('Admin login file', async ({ page }) => {
  await login(page);  // 🔥 yaha call ho raha hai
  //await page.waitForTimeout(300)
  await page.locator('a[href="#/rolegroup"]').click();
  
  // await page.locator('a[href="#/rolegroup/add"]').click();
  // await page.fill('#name', 'Lorem17');
  // await page.locator('button[type="submit"] >> text=Add').click();
  // await page.pause()

  const randomName = 'Lorem' + (Math.floor(Math.random() * 100) + 1);
  await page.locator('a[href="#/rolegroup/add"]').click();
  await page.fill('#name', randomName);
  await page.locator('button[type="submit"] >> text=Add').click();


  await page.waitForTimeout(2000);
  
});