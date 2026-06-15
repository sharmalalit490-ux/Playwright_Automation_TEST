
import { Page,expect } from '@playwright/test';


// Admin Maker Login
export async function makerLogin(
    page: Page,
    userId: string,
    password: string
) {
    await page.goto('http://192.168.100.10:8060/#/authentication/login');

    await page.fill('#exampleInputEmail', userId);

    await page.fill('#exampleInputPassword', password);

    await page.getByRole('button', { name: 'Login' }).click();

    console.log(`Maker Login Successful: ${userId}`);

    await page.getByRole('link').filter({ hasText: 'Approval' }).click();
}

// Agent Login Function
export async function agentLogin(
    page: Page,
    userId: string,
    password: string
) {
    await page.goto('http://192.168.100.10:8030/#/login');

    await page.getByRole('textbox', { name: 'Please Enter Your User ID' }).fill(userId);

    await page.getByRole('button', { name: 'Sign In' }).click();

    await page.getByRole('textbox', { name: 'Password' }).fill(password);

    await page.getByRole('button', { name: 'Sign In' }).click();

    console.log(`Agent Login Successful: ${userId}`);
}

// Claim icon click
  export async function claimEntity(page: Page) {
    await page.locator('i.fas.fa-box-open.text-primary').first().click();
    console.log('Entity Claimed Successfully');

}

// View
export async function viewEntity(page: Page) {
  await page.locator('i.fas.fa-eye.text-primary').first().click(); 
  console.log('Entity Viewed Successfully');
}

// Approve
export async function approveEntity(page: Page) {
  await page.getByRole('button', { name: 'Approve' }).click();
  console.log('Entity Approved Successfully');
}


