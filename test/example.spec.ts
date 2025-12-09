import { test, expect } from '@playwright/test';

test('Google test', async ({ page }) => {
  await page.goto('https://google.com');
  await expect(page).toHaveTitle(/Google/);
});
import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './test',       // folder where your test files are
  timeout: 30000,           // max time per test in ms
  retries: 0,               // number of retries if test fails
  reporter: [['list'], ['html']], // console list + HTML report
  use: {
    headless: true,         // set false to see browser
    viewport: { width: 1280, height: 720 },
    ignoreHTTPSErrors: true,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },
});
