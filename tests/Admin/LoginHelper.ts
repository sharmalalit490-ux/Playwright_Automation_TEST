import { Page } from '@playwright/test';

export async function login(page: Page) {

  await page.goto('https://staging-admin.remittanceshub.com:8165/#/authentication/login');
  await page.fill('#exampleInputEmail', 'lalit.checker');
  await page.fill('#exampleInputPassword', 'Test@123');
  await page.waitForTimeout(500);
  await page.getByRole('button', { name: 'Login' }).click();
  await page.waitForTimeout(700);

  }


