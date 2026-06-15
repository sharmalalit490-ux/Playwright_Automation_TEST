import { Page } from '@playwright/test';

export async function login(page: Page) {

  await page.goto('http://192.168.100.10:8060/#/authentication/login');
  await page.fill('#exampleInputEmail', 'lalit.checker');
  await page.fill('#exampleInputPassword', 'Admin@123');
  await page.waitForTimeout(500);
  await page.getByRole('button', { name: 'Login' }).click();
  await page.waitForTimeout(700);

  }


