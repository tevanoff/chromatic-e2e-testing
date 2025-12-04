import { test } from '@chromatic-com/playwright';

test('long file names', async ({ page }) => {
  await page.goto('/toolong');
});

