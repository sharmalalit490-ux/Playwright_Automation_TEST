import { test } from '@playwright/test';
import { login } from './LoginHelper';

test('Admin login file', async ({ page }) => {
  await login(page);  // 🔥 yaha call ho raha hai

  await page.getByRole('link', { name: 'Bank Account' }).click();
  await page.getByText('Add Bank/Collection Account').click();
  await page.locator('#bankName').click();
  await page.locator('#bankName').fill('HDFC bank');
  await page.locator('#ownerName').click();
  await page.locator('#ownerName').fill(')12345');
  await page.locator('#ownerName').press('ArrowLeft');
  await page.locator('#ownerName').press('ArrowLeft');
  await page.locator('#ownerName').press('ArrowLeft');
  await page.locator('#ownerName').fill('56789');
  await page.getByText('Bank Location *Select country').click();
  await page.locator('#registerCountryCode').selectOption('100102');
  await page.locator('#groupCode').selectOption('Regular Bank');
  await page.getByRole('button', { name: 'Next' }).click();
  await page.locator('#accountName').click();
  await page.locator('#accountName').fill('Rishi kumar');
  await page.locator('#accountType').selectOption('100001');
  await page.locator('#finInstitutionCode').click();
  await page.locator('#accountName').click();
  await page.locator('#accountName').click();
  await page.locator('#accountName').fill('Billas');
  await page.locator('#finInstitutionCode').click();
  await page.locator('#finInstitutionCode').fill('HDFC bank');
  await page.locator('#finInstitutionCode').press('ArrowLeft');
  await page.locator('#finInstitutionCode').press('ArrowLeft');
  await page.locator('#finInstitutionCode').press('ArrowLeft');
  await page.locator('#finInstitutionCode').fill('HDFC Bank');
  await page.locator('#branchNameAndAddress').click();
  await page.locator('#branchNameAndAddress').fill('Jaipur');
  await page.locator('#accountNumber').click();
  // await page.pause();
  await page.locator('#accountNumber').fill('0987654321');
  await page.locator('#confirmAccountNumber').click();
  await page.locator('#confirmAccountNumber').fill('0987654321');
  await page.getByRole('button', { name: 'Done' }).click();
  await page.locator('#accountNumber').click();
  await page.locator('#accountNumber').fill('0987654321');
  await page.getByRole('button', { name: 'Done' }).click();
  await page.getByRole('button', { name: 'Done' }).click();
  await page.getByRole('button', { name: 'Previous' }).click();
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByRole('button', { name: 'Done' }).click();
  
  await page.locator('#accountNumber').click();
  await page.locator('#accountNumber').fill('987654321');
  await page.locator('#confirmAccountNumber').click();
  await page.locator('#confirmAccountNumber').fill('987654321');
  await page.getByRole('button', { name: 'Done' }).click();

});