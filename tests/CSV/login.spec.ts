import { test } from '@playwright/test';
import { readCSV } from './csvreader';
import path from 'path';

test('Login using CSV data', async ({ page }) => {


const csvPath = path.join(__dirname, 'testdata.csv');
const users = readCSV(csvPath);
  for (const user of users) {
    await page.pause();
console.log('User Object:', user);
console.log('Username:', user.username);
console.log('Password:', user.password);

    await page.goto('http://192.168.100.10:8060/#/authentication/login');

    await page.fill('#exampleInputEmail', user.username);
    await page.fill('#exampleInputPassword', user.password);

    await page.getByRole('button', { name: 'Login' }).click();

    // Optional wait
    await page.waitForTimeout(3000);
  }
});