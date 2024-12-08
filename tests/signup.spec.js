const { test, expect } = require('@playwright/test');

test.describe('Vention Signup Page', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('https://auth.vention.io/en/signup');
    await page.pause();
});


  test('should display sign-up form elements', async ({ page }) => {
    await page.goto('https://auth.vention.io/en/signup');

    // if running in headed mode
    // await page.pause();

    await expect(page.locator('h1')).toContainText("Manufacturing Automation Platform");

    await expect(page.locator('[placeholder="Enter your email"]')).toBeVisible();

    const checkbox = page.getByRole('checkbox', { name: /I agree to Vention/ });
    await checkbox.click();
    await expect(checkbox).toHaveAttribute('aria-checked', 'true');
    
    // just check for the checkbox itself as the <a> tag was causing problems when looking for the text
    await page.check('input[type="checkbox"]');

    // Check the sign-up button
    await expect(page.locator('button:has-text("sign up")')).toBeVisible();

    // Check the login link text
    await expect(page.locator('text="Already have an account?"')).toBeVisible();
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



