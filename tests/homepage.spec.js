const { test, expect } = require('@playwright/test');

test.describe('Vention Homepage', () => {
  test('should load and display key elements', async ({ page }) => {
    await page.goto('https://www.vention.io/');

    const heroText = await page.textContent('h1');
    expect(heroText).toContain('Automatisation industrielle rapide et intuitive pour tous les fabricants');

    const startNowButton = page.locator('[data-analytic-id="home-header-start-building-button"]');
    await expect(startNowButton).toBeVisible();
    await startNowButton.click();

    // Instead of waiting for the exact English URL, wait for a URL that includes "/signup"
    await page.waitForURL('**/signup');
    expect(page.url()).toContain('/signup');

    // From here, you can also check if sign-up elements are present
    // For example:
    await expect(page.locator('button:has-text("inscrire")')).toBeVisible();
  });
});
