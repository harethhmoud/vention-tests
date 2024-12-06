const { test, expect } = require('@playwright/test');

test.describe('Vention Signup Page', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('https://auth.vention.io/fr/signup');
    await page.pause();
});


  test('should display sign-up form elements', async ({ page }) => {
    // main heading
    await expect(page.locator('h1')).toContainText("Rejoignez la platforme");

    // email input
    await expect(page.locator('[placeholder="Entrez votre e-mail"]')).toBeVisible();

    // Check the terms and conditions text and the checkbox
    // ensure text is present
    await expect(page.locator('text="politique de"')).toBeVisible();

    // ensure checkbox is present
    await page.check('input[type="checkbox"]');

    // check the sign-up button
    await expect(page.locator('button:has-text("S\'inscrire")')).toBeVisible();

    // check the login link
    await expect(page.locator('text="Vous avez déjà un compte? Connexion"')).toBeVisible();
  });
/*
  test('should show an error for invalid input', async ({ page }) => {
    // Fill in an invalid email
    await page.fill('[placeholder="Entrez votre e-mail"]', 'not-an-email');

    // Attempt to sign up without accepting conditions
    await page.click('button:has-text("S\'inscrire")');

    // Expect some validation error. You need to see what error appears.
    // If you run the test in headed mode and see a message like
    // "Vous devez entrer une adresse e-mail valide.", you can do:
    await expect(page.locator('text="Vous devez entrer une adresse e-mail valide."')).toBeVisible();

    // If there's also an error for not checking the conditions box, find that text and assert it as well:
    // await expect(page.locator('text="Vous devez accepter les termes et conditions pour continuer."')).toBeVisible();
  });
  */
});


