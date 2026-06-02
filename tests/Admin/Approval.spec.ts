import { test } from '@playwright/test';
import { login } from './LoginHelper';

test('Admin login file', async ({ page }) => {
await login(page);  // 🔥 yaha call ho raha hai

await page.getByRole('link').filter({ hasText: 'Approval' }).click();

//await page.pause();

await page.locator('a.custom-hyperlink:has(i.fa-eye text)').click();

});

