import { test } from '@playwright/test';
import { login } from '../Admin/LoginHelper';
import path from 'path';
import { makerLogin } from './commonfunHelper';
import { claimEntity} from './commonfunHelper'
import { viewEntity} from './commonfunHelper'
import{approveEntity } from './commonfunHelper'

test('Admin login file', async ({ page }) => {
  await login(page);  // yaha call ho raha hai


  await page.getByRole('link', { name: 'FX Margin' }).click();
  //await page.pause();
  await page.getByRole('link', { name: 'Add FX Margin Template' }).click();
  await page.waitForTimeout(2000);
  await page.getByLabel('Client Type*').selectOption('100000'); // Select Client Type
  await page.waitForTimeout(2000);
  await page.locator('#walletOwner').selectOption('1000008956'); // Send client ID yha pr ye change hoga
  //await page.pause();
  await page.getByRole('button', { name: 'Save' }).click();
  await page.locator('td:nth-child(4) > a:nth-child(2)').click();
  await page.waitForTimeout(3000);

const downloadPromise = page.waitForEvent('download');
await page.getByRole('button', { name: /Download Sample File/i }).click();
const download = await downloadPromise;
await page.waitForTimeout(3000);
// Download folder me save karo
const filePath = path.join('C:/Users/Lalit/Downloads',await download.suggestedFilename());
await download.saveAs(filePath);
console.log('Downloaded File:', filePath);
await page.waitForTimeout(3000);
// Upload wahi file
await page.locator('input[type="file"]').setInputFiles(filePath);
await page.waitForTimeout(3000);
await page.getByRole('button', { name: 'Upload' }).click();

await makerLogin(page, 'lalit.maker', 'Admin@1234'); // commonfunHelper Maker login call ho rha hai
  
  await claimEntity(page);
  await viewEntity(page);
  await approveEntity(page);

});








