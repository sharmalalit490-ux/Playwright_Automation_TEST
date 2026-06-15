import { test } from '@playwright/test';
import fs from 'fs';

test('Maker Approval', async ({ page }) => {

  await page.goto('http://192.168.100.10:8060/#/authentication/login');

  await page.fill('#exampleInputEmail', 'lalit.maker');
  await page.fill('#exampleInputPassword', 'Admin@1234');
  await page.getByRole('button', { name: 'Login' }).click();

  await page.getByRole('link').filter({ hasText: 'Approval' }).click();

  await page.pause();

const entityData = JSON.parse(fs.readFileSync('entity.json', 'utf-8'));

console.log('CheckerCode =', entityData);

const MakeruserCode = entityData.AdminuserCodeId;

console.log('Maker Code =', MakeruserCode);


if (entityData.trim() === MakeruserCode.trim()) {

    console.log('PASS - Checker & Maker Code Matched');

    // Claim
    await page.locator('i.fa-box-open').first().click();

    // View
    await page.locator('i.fas.fa-eye.text-primary').first().click();

    // Approve
    await page.getByRole('button', { name: 'Approve' }).click();

    console.log('User Approved Successfully');

} else {

    console.log('FAIL - Code Mismatch');
    console.log('Checker Code =', entityData);
    console.log('Maker Code =', MakeruserCode);

}




});

  