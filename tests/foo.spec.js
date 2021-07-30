const { test, expect } = require('@playwright/test');

test.describe("describe area", () => {
    test('test area1', async ({ page }) => {
        await page.goto('https://playwright.dev/');
        const name = await page.innerText('.navbar__title');
        expect(name).toBe('Playwright');
    });
    test('test area2', async ({ page }) => {
      await page.goto('https://playwright.dev/');
      const name = await page.innerText('.navbar__title');
      expect(name).toBe('Playwright');
  });
  test('test area3', async ({ page }) => {
    expect(true).toBe(true);
  });
});
