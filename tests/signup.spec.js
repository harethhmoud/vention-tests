const { test, expect } = require('@playwright/test');

test.describe('Vention Signup Page', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('https://auth.vention.io/en/signup');
    await page.pause();
});

/*
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

    // sign-up button
    await expect(page.locator('button:has-text("sign up")')).toBeVisible();

    // login link test
    await expect(page.locator('text="Already have an account?"')).toBeVisible();
  });

*/

/*
  test('should show an error for invalid input', async ({ page }) => {
    // enter an invalid email (not-an-email) and submit the form
    await page.fill('[placeholder="Enter your email"]', 'not-an-email');

    await page.click('button:has-text("Sign up")');

    // if invalid email is entered
    await expect(page.locator('text="You must enter a valid email address."')).toBeVisible();

    // if t&c isn't checked
    await expect(page.locator('text="You must agree to the terms and conditions to continue."')).toBeVisible();
  });
*/  
});



