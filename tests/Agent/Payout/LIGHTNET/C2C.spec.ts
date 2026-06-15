import { test, expect } from '@playwright/test';
import { agentLogin } from '../../../Aexercise/commonfunHelper';

test('C2C LIGHTNET', async ({ page }) => {

await agentLogin(page, '1000009109', 'Admin@123'); // login file yha call ho rhe hai
test.setTimeout(120000);

  for (let i = 1; i <= 4; i++) {
  console.log(i);

  await page.locator('a[href="#/payout/c2c"]').click();
  await page.getByText('New Customer').click();
  await page.getByLabel('Source Country*').selectOption('MWI');
  await page.getByLabel('Settlement Currency *').selectOption('USD-USA');
  await page.getByLabel('Payin Currency*').selectOption('USD-USA');
  await page.getByLabel('Payout Currency*').selectOption('USD-USA');
  await page.getByLabel('Payin Mode*').selectOption('Cash');
  await page.getByRole('textbox', { name: 'Payout Amount (USD-USA)' }).click();
  await page.getByRole('textbox', { name: 'Payout Amount (USD-USA)' }).fill('100');
  await page.getByRole('textbox', { name: 'Payout Amount (USD-USA)' }).click();
  await page.getByRole('textbox', { name: 'Payout Amount (USD-USA)' }).click
  await page.waitForTimeout(2000);
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByRole('button', { name: 'Next' }).click();

 //sender detail

 await page.getByRole('textbox', { name: 'First Name *' }).click();
  await page.getByRole('textbox', { name: 'First Name *' }).fill('Ravi');
  await page.getByRole('textbox', { name: 'Last Name *' }).click();
  await page.getByRole('textbox', { name: 'Last Name *' }).fill('sharm');
  await page.getByRole('textbox', { name: 'Last Name *' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Last Name *' }).fill('sharm');
  await page.getByRole('textbox', { name: 'Last Name *' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Last Name *' }).fill('sharma');
  await page.getByRole('textbox', { name: 'Sender Mobile*' }).click();
  await page.getByRole('textbox', { name: 'Sender Mobile*' }).fill('1234567890');
  await page.getByRole('button').nth(3).click();
  await page.getByLabel('Thursday, May 1,').getByText('1', { exact: true }).click();
  await page.getByLabel('Gender *').selectOption('male');
  await page.getByLabel('ID Type *').selectOption('RHD005');
  await page.getByLabel('Nationality *').selectOption('USA');
  await page.getByRole('button').nth(4).click();
  await page.getByLabel('Friday, May 1,').getByText('1', { exact: true }).click();
  await page.getByRole('button').nth(5).click();
  await page.getByLabel('Select year').selectOption('2036');
  await page.getByLabel('Friday, May 30,').getByText('30').click();
  await page.getByRole('textbox', { name: 'Email' }).click();
  await page.getByLabel('Occupation *').selectOption('RHO003');
  await page.getByRole('link').filter({ hasText: /^$/ }).nth(1).click();
  await page.getByLabel('Document Type (Atleast one').selectOption('RHD002');
  
  const fileChooserPromise = page.waitForEvent('filechooser');
  await page.getByRole('button', { name: 'Document Upload*' }).click();
  const fileChooser = await fileChooserPromise;
  await fileChooser.setFiles('C:/Users/Lalit/Desktop/Office-detail/LillyTech-Image.jpg');
  await page.locator('button[type="submit"]:has-text("Upload")').click();
  await page.waitForTimeout(2000); 
  await page.getByRole('button', { name: 'Close' }).click();
  await page.getByRole('textbox', { name: 'Address Line1 *' }).click();
  await page.getByRole('textbox', { name: 'Address Line1 *' }).fill('Malawi');
  await page.getByRole('textbox', { name: 'State *' }).click();
  await page.getByRole('textbox', { name: 'State *' }).fill('Malawi');
  await page.getByRole('textbox', { name: 'City *' }).click();
  await page.getByRole('textbox', { name: 'City *' }).fill('Malawi');
  await page.getByRole('textbox', { name: 'Pin Code *' }).click();
  await page.getByRole('textbox', { name: 'Pin Code *' }).fill('303503');
  await page.getByRole('textbox', { name: 'ID Number *' }).click();
  await page.getByRole('textbox', { name: 'ID Number *' }).fill('ID2345');
  await page.getByRole('button', { name: 'Next' }).click();

 // Receiver detail

  await page.getByRole('textbox', { name: 'First Name *' }).click();
  await page.getByRole('textbox', { name: 'First Name *' }).fill('Mukul');
  await page.getByRole('textbox', { name: 'First Name *' }).press('Tab');
  await page.getByRole('textbox', { name: 'Middle Name' }).press('Tab');
  await page.getByRole('textbox', { name: 'Last Name *' }).fill('sharma');
  
  await page.getByRole('textbox', { name: 'Beneficiary Mobile *' }).click();
  await page.getByRole('textbox', { name: 'Beneficiary Mobile *' }).fill('8947966054');
  await page.locator('#customerRegistrationIssuedAt').selectOption('USA');
  await page.getByLabel('Gender *').selectOption('male');
  await page.getByLabel('Nationality *').selectOption('USA');
  await page.getByRole('textbox', { name: 'Address Line1 *' }).click();
  await page.getByRole('textbox', { name: 'Address Line1 *' }).fill('United states');
  await page.getByRole('textbox', { name: 'State *' }).click();
  await page.getByRole('textbox', { name: 'State *' }).fill('United states');
  await page.getByRole('textbox', { name: 'City *' }).click();
  await page.getByRole('textbox', { name: 'City *' }).fill('United states');
  await page.getByRole('textbox', { name: 'Pin Code *' }).click();
  await page.getByRole('textbox', { name: 'Pin Code *' }).fill('303502');
  await page.getByLabel('Bank Name *').selectOption('ALL US BANKS');
  await page.getByRole('textbox', { name: 'Account Number / IBAN *' }).click();
  await page.getByRole('textbox', { name: 'Account Number / IBAN *' }).fill('123456789');
  await page.getByRole('textbox', { name: 'Routing Number*' }).click();
  await page.getByRole('textbox', { name: 'Routing Number*' }).fill('021000021');
  await page.getByRole('button', { name: 'Next' }).click();

  // Compliance

  //await page.pause();
  await page.getByRole('textbox', { name: 'Description Text / Invoice' }).click();
  await page.getByRole('textbox', { name: 'Description Text / Invoice' }).fill('TEST2345');

  const xpath = "RHP00" + i; 

  //console.log(xpath);
  await page.getByLabel('Remittance Purpose *').selectOption(xpath);

 
  await page.getByLabel('Source Of Fund *').selectOption('RHS003');
  await page.getByLabel('Relationship *').selectOption('RHR004');
  await page.locator('#remittance_tabs').getByRole('link').filter({ hasText: /^$/ }).click();
  const fileChooserPromise2 = page.waitForEvent('filechooser');
  await page.getByRole('button', { name: 'Document Upload*' }).click();
  const fileChooser2 = await fileChooserPromise2;
  await fileChooser2.setFiles('C:/Users/Lalit/Desktop/Office-detail/LillyTech-Image.jpg');
  await page.locator('button[type="submit"]:has-text("Upload")').click();
  await page.getByRole('button', { name: 'Close' }).click();
  await page.getByRole('button', { name: 'Next' }).click();

  // Transaction Details

  await page.locator('input[type="password"]').click();
  await page.locator('input[type="password"]').fill('1234');
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.waitForTimeout(2000);  
  await page.getByRole('link', { name: 'Customer to Business' }).click();
  
 }

});