import { test } from '@chromaui/test-archiver';

test('it is all good and will not be captured', async ({ page }) => {
  await page.goto('/');
});

test.describe('enable chromatic snaps', () => {
  test.use({ chromatic: { disableE2EAutoCapture: false } });
  
  test('it is all good and will be captured', async ({ page }) => {
    await page.goto('/');
  });
});

