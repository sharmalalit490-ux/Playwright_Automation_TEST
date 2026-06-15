import { test } from '@playwright/test';
import fs from 'fs';

test('Checker Approval', async ({ page }) => {
await page.pause();
  await page.goto('http://192.168.100.10:8060/#/authentication/login');

  await page.fill('#exampleInputEmail', 'lalit.maker');
  await page.fill('#exampleInputPassword', 'Admin@1234');
  await page.getByRole('button', { name: 'Login' }).click();

await page.getByRole('link').filter({ hasText: 'Approval' }).click();

  const entityData = JSON.parse(
    fs.readFileSync('entity.json', 'utf-8')
  );

  const MakerentityId = entityData.MakerentityId;

  console.log('Maker Entity ID =', MakerentityId);

  
 const checkerEntityId = await page
    .locator('tbody tr:first-child td:nth-child(2)').innerText();

    console.log("Checker Entity ID =", checkerEntityId);
if (MakerentityId.trim() === checkerEntityId.trim()) {

        console.log("PASS - Maker and Checker Entity IDs are SAME");

    await page.locator('i.fa-box-open').first().click();
    await page.locator('i.fas.fa-eye.text-primary').first().click();
    await page.getByRole('button', { name: 'Approve' }).click();
    } 
    else {
        console.log("FAIL - Entity IDs are DIFFERENT");
        console.log("Maker  =", MakerentityId);
        console.log("Checker =", checkerEntityId);
    }








    
});