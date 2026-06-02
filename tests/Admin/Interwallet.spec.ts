import { test } from '@playwright/test';
import { login } from './LoginHelper';

test('Admin login file', async ({ page }) => {

  await login(page);  // 🔥 yaha call ho raha hai
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

  await page.getByRole('textbox', { name: 'Amount *', exact: true }).fill('1000');
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
  await page.waitForTimeout(300)
  await page.getByRole('button', { name: 'Submit ' }).click();
  await page.waitForTimeout(4000)


 
});