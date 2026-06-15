import { test } from '@playwright/test';
import { login } from './LoginHelper';
import fs from 'fs';
test('Adminuser', async ({ page }) => {

  await login(page);  // yaha call ho raha hai
  
  await page.waitForTimeout(2000);
  await page.locator('a[href="#/user"]').click();
  await page.locator('a[href="#/user/add"]').click();
  await page.locator('#role_code').click();
  await page.locator('#role_code').selectOption('100000');
  await page.keyboard.press('Escape');
  await page.waitForTimeout(500);


  function randomString(length: number) {
  const chars = 'lorem';
  let result = '';

  for (let i = 0; i < length; i++) {
    result += chars.charAt(
      Math.floor(Math.random() * chars.length)
    );
  }

  return result;
}

//await page.pause();

await page.fill('#first_name', 'shubham');
await page.fill('#last_name', 'kumar');
const userName = 'shubham' + randomString(4) + '.maker';
const email = 'shubham' + randomString(2);


await page.fill('#user_name', userName);
await page.fill('#email', email);


// console.log(userName);
// console.log(email);

const randomOneDigits = Math.floor(Math.random() * 100).toString().padStart(1, '0');

const mobileNumber = '894796605' + randomOneDigits;

await page.fill('#mobile_number', mobileNumber);



  const AdminuserResponse = page.waitForResponse(
  response =>
    response.url().includes('/api/v1/user') &&
    response.request().method() === 'POST'
);

page.on('response', response => {
  console.log('Response URL =>', response.url());
});


  await page.getByRole('button', { name: 'Save' }).click();
 

  // Yaha code
const apiResponse = await AdminuserResponse;
const responseBody = await apiResponse.json();

const CheckeruserCode = responseBody.user.code;

console.log('checker User Code =', CheckeruserCode);

fs.writeFileSync('entity.json',JSON.stringify({ CheckeruserCode }));
 
});