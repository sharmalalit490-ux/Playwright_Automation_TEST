import { Page } from '@playwright/test';
import { readExcel } from './excelreader';
import path from 'path';

export async function login(page: Page) {
  const excelPath = path.join(__dirname, 'exceldata.xlsx');

  const users = readExcel(excelPath, 'exceldata') as any[];

  const user = users[0];

  await page.goto('http://192.168.100.10:8060/#/authentication/login');

  await page.fill('#exampleInputEmail', String(user.username));
  await page.fill('#exampleInputPassword', String(user.password));

  await page.getByRole('button', { name: 'Login' }).click();

  await page.waitForTimeout(3000);
}