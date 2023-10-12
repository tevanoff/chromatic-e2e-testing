import { mergedTest as test } from './fixtures';

test('test using fixtures with chromatic', async ({ page, logme }) => {
  await page.goto('/');
});