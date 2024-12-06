const { test, expect } = require('@playwright/test');

test.describe('Vention Homepage', () => {
  test('should load and display key elements', async ({ page }) => {
    await page.goto('https://www.vention.io/');

    const heroText = await page.textContent('h1');
    expect(heroText).toContain('Automatisation industrielle rapide et intuitive pour tous les fabricants');

    const startNowButton = page.locator('[data-analytic-id="home-header-start-building-button"]');
    await expect(startNowButton).toBeVisible();
    await startNowButton.click();

    // wait for a URL that includes "/signup" as English-French was causing problems
    await page.waitForURL('**/signup');
    expect(page.url()).toContain('/signup');

    // checking if sign up elements are visible
    await expect(page.locator('button:has-text("inscrire")')).toBeVisible();
  });
});
