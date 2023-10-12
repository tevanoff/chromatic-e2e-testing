import { test } from './fixtures';

test('test using fixtures no chromatic', async ({ page, logme }) => {
  await page.goto('/');
});
