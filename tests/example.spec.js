// @ts-check
const { test, expect } = require('@playwright/test');

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects the URL to contain intro.
  await expect(page).toHaveURL(/.*intro/);
});

test('API reference link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the API reference link.
  await page.getByRole('link', { name: 'API reference' }).click();

  // Expects the URL to contain class-playwright.
  await expect(page).toHaveURL(/.*class-playwright/);
});