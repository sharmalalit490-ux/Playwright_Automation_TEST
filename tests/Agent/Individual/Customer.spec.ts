import { test, expect } from '@playwright/test';
import { login } from '../agentlogin';

test('Agent login file', async ({ page }) => {
  await login(page);
  // now continue your test
  await expect(page).toHaveURL(/login/); // Yha call ho rha hai login page

  
  await page.getByText('Individual').click();
  await page.getByText('Customer', { exact: true }).click();
  const randomName = 'Atharv prasad' + Math.floor(Math.random() * 100);
  await page.getByLabel('First Name').fill(randomName);
  // await page.getByLabel('First Name').fill('Atharv prasad0');
  await page.getByLabel('Last Name').fill('sharma');
  await page.getByRole('button').nth(2).click();
  await page.getByLabel('Thursday, May 1,').getByText('1', { exact: true }).click();
  await page.getByLabel('Gender *').selectOption('male');
   await page.getByLabel('Nationality *').selectOption('MWI');
  await page.getByRole('textbox', { name: 'Mobile Number *' }).click();
  await page.getByRole('textbox', { name: 'Mobile Number *' }).fill('34567891267');
  await page.getByRole('textbox', { name: 'Email Id *' }).click();
  await page.getByRole('textbox', { name: 'Email Id *' }).fill('athravprasad@yopmail.com');
  await page.getByLabel('Occupation *').selectOption('RHO061');
  await page.getByRole('textbox', { name: 'Job Industry*' }).click();
  await page.getByRole('textbox', { name: 'Job Industry*' }).fill('IT');
  await page.getByRole('textbox', { name: 'Job Title*' }).click();
  await page.getByRole('textbox', { name: 'Job Title*' }).fill('QA');
  await page.getByLabel('Expected vol. of txn. in a').selectOption('100002');
  await page.getByLabel('ID Type *').selectOption('RHD002');
  await page.getByRole('textbox', { name: 'ID Number *' }).click();
  const randomId = 'ID' + Math.floor(Math.random() * 10000000);//testing
  await page.getByRole('textbox', { name: 'ID Number *' }).fill(randomId);
  // await page.getByRole('textbox', { name: 'ID Number *' }).fill('ID456786789');
  await page.getByRole('button').nth(4).click();
 await page.getByLabel('Friday, May 1,').getByText('1', { exact: true }).click();
  await page.getByRole('button').nth(5).click();
  await page.getByLabel('Select year').selectOption('2036');
 
  await page.getByText('18', { exact: true }).click();
  await page.getByLabel('ID Country *').selectOption('DZA');
  await page.getByLabel('ID Country *').selectOption('MWI');
  await page.getByRole('link').filter({ hasText: /^$/ }).nth(1).click();
  await page.getByLabel('Document Type (Atleast one').selectOption('RHD002');
  const fileChooserPromise = page.waitForEvent('filechooser');
  await page.getByRole('button', { name: 'Document Upload' }).click();
  const fileChooser = await fileChooserPromise;
  await fileChooser.setFiles('C:\Office-detail/LillyTech-Image.jpg');
  await page.locator('button[type="submit"]:has-text("Upload")').click();
  await page.getByRole('button', { name: 'Close' }).click();
  await page.getByLabel('Country *', { exact: true }).selectOption('MWI');
  await page.getByRole('textbox', { name: 'Address Line1 *' }).click();
  await page.getByRole('textbox', { name: 'Address Line1 *' }).fill('Malawi');
  await page.getByLabel('Residence Status *').selectOption('100004');
  await page.getByRole('textbox', { name: 'State *' }).click();
  await page.getByRole('textbox', { name: 'State *' }).fill('Malawi');
  await page.getByRole('textbox', { name: 'City *' }).click();
  await page.getByRole('textbox', { name: 'City *' }).fill('Malawi');
  await page.getByRole('textbox', { name: 'Pin Code *' }).click();
   await page.pause();
  await page.getByRole('textbox', { name: 'Pin Code *' }).fill('123456');
  await page.getByRole('button', { name: 'Submit' }).click();

  await page.waitForTimeout(5000);
  




});