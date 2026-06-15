import { test, expect } from '@playwright/test';
import { agentLogin } from '../../Aexercise/commonfunHelper';

test('User creation', async ({ page }) => {

 await agentLogin(page, '1000009109', 'Admin@123');

//  await page.pause();

  await page.getByRole('link', { name: 'Users' }).click();
  await page.locator('.custom-hyperlink').click();
  await page.getByText('Add User').click();
  await page.locator('#firstName').click();
  await page.locator('#firstName').fill('Sanityteller');
  await page.locator('#email').click();
  await page.locator('#email').fill('lalit.sharma@remittanceshub.com');
  await page.locator('#mobileNumber').click();
  await page.locator('#mobileNumber').fill('1234567899');
  await page.getByRole('button', { name: 'Add' }).click();
  await page.locator('td:nth-child(9) > a:nth-child(3)').first().click();
  await page.getByRole('checkbox', { name: 'AFRICA FXCHANGE' }).check();
  await page.getByRole('checkbox', { name: 'APPROVAL' }).check();
  await page.getByRole('checkbox', { name: 'BANK PAYOUT', exact: true }).check();
  await page.getByRole('button', { name: 'Save' }).click();
});