import { test } from '@chromatic-com/playwright';

test('it is all good', async ({ page }) => {
  await page.goto('/');
});

