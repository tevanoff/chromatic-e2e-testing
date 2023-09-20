import { test } from '@playwright/test';

test('it is all good just playwright', async ({ page }) => {
  await page.goto('/');
});

