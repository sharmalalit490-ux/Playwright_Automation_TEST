import { Page } from '@playwright/test';

export async function login(page: Page) {
  await page.goto('http://192.168.100.10:8030/#/login');

  await page.getByRole('textbox', { name: 'Please Enter Your User ID' }).fill('1000009109');

  await page.getByRole('button', { name: 'Sign In' }).click();

  await page.getByRole('textbox', { name: 'Password' }).fill('Admin@123');

  await page.getByRole('button', { name: 'Sign In' }).click();
}
  