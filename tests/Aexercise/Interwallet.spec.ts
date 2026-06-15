import {expect, test } from '@playwright/test';
import { login } from '../Admin/LoginHelper';
import { makerLogin } from './commonfunHelper';
import { claimEntity} from './commonfunHelper'
import { viewEntity} from './commonfunHelper'
import{approveEntity } from './commonfunHelper'

test('Admin login file', async ({ page }) => {

  await login(page);  // yaha call ho raha hai
  await page.waitForTimeout(2000);

  await page.getByRole('link', { name: 'Inter Wallet Transfer' }).click(); //Interwallet select

  await page.waitForTimeout(3000);

  await page.locator('#remittanceUserType').click();  // Entity Type dropdown open
  await page.waitForTimeout(500);

  await page.selectOption('#remittanceUserType', '100000'); // Send Client
 
  await page.waitForTimeout(500);

  await page.locator('.ng-input').click();  // Entity Name dropdown open
  await page.waitForTimeout(500);

  await page.locator('.ng-option').filter({ hasText: 'Convera Send Client' }).click(); // Select Entity Name
  await page.waitForTimeout(500);

  await page.locator('#walletTypeArrSender').click();  // From Settlement Currency dropdown open
  await page.waitForTimeout(500);

  await page.selectOption('#walletTypeArrSender', '100003'); //Select USD-USA
  await page.waitForTimeout(500);

  await page.getByLabel('To Settlement Currency*').selectOption('100149');
  await page.waitForTimeout(500);
  await page.getByRole('textbox', { name: 'Amount *', exact: true }).click();

  await page.getByRole('textbox', { name: 'Amount *', exact: true }).fill('1');
  await page.waitForTimeout(500)
  await page.getByRole('textbox', { name: 'Rate *' }).click();
  await page.waitForTimeout(300)
  await page.getByRole('textbox', { name: 'Rate *' }).fill('1');
  await page.waitForTimeout(300)
  await page.getByRole('textbox', { name: 'Margin % *' }).click();
  await page.waitForTimeout(300)
  await page.getByRole('textbox', { name: 'Margin % *' }).fill('1');
  await page.waitForTimeout(300)
  await page.getByRole('textbox', { name: 'Remarks *' }).click();
  await page.waitForTimeout(300)
  await page.getByRole('textbox', { name: 'Remarks *' }).fill('Test');
  await page.waitForTimeout(300)
  await page.locator('.p-2 > div:nth-child(3)').click();
  
 const responsePromise = page.waitForResponse(
  response =>
    response.url().includes('/manualAdjustment') &&
    response.status() === 201);

  await page.getByRole('button', { name: 'Submit' }).click();

  await makerLogin(page, 'lalit.maker', 'Admin@1234'); // commonfunHelper Maker login call ho rha hai
  
  const response = await responsePromise;
  const responseBody = await response.json();
  
  const checkerCode = responseBody.currencyConversion.code.toString();
  
  console.log("Checker Code:", checkerCode);
  
  await makerLogin(page, 'lalit.maker', 'Admin@1234');// commonfunHelper Maker login call ho rha hai
   
   await page.waitForSelector('table tbody tr');
  
  // Checker code wali row find karo
  const row = page.locator('tbody tr').filter({
    has: page.locator(`td:text-is("${checkerCode}")`)
  });
  
  await expect(row).toBeVisible();
  const makerCode = (await row.locator('td').nth(1).textContent())?.trim();
  console.log("Maker Code:", makerCode);
  
  // Match validation
  if (makerCode === checkerCode) {
  
    // Ya agar tumhare helper functions already bane hue hain:
    await claimEntity(page);
    await viewEntity(page);
    await approveEntity(page);
  
    console.log("Transaction Successfully");
     } 
  else {
  
    throw new Error(
      'Checker Code (${checkerCode}) and Maker Code (${makerCode}) not matched'
    );
  }
  
});