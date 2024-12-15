import { test, expect } from '@playwright/test';

test('Navigate to MachineBuilder', async ({ page }) => {
  await page.goto('https://vention.io');
  //console.log('Navigated to the homepage.');

  //const plateformeButton = page.locator('button:has-text("Plateforme")').first();
  const plateformeButton = page.locator('button:has-text("Platform")').first();
  await plateformeButton.hover();
  //console.log('Hovered over the Plateforme button.');

  const plateformeDropdown = page.locator('div.navbar-v2-platform');
  //console.log('Waiting for the dropdown to become visible...');
  await expect(plateformeDropdown).toBeVisible({ timeout: 7000 });
  //console.log('Dropdown became visible.');

  const machineBuilderLink = plateformeDropdown.locator('a:has-text("MachineBuilder")');
  await expect(machineBuilderLink).toBeVisible();
  //console.log('Found the MachineBuilder link.');

  await machineBuilderLink.click();
  //console.log('Clicked the MachineBuilder link.');

  //await expect(page).toHaveURL('https://vention.io/fr/machine-builder');
  await expect(page).toHaveURL('https://vention.io/machine-builder');
  //console.log('Successfully navigated to the MachineBuilder page.');
});

test('Navigate to Applications', async ({ page }) => {
    //console.log('Navigating to the homepage.');
    await page.goto('https://vention.io');
  
    //console.log('Hovering over the Applications button.');
    const applicationsButton = page.locator('button:has-text("Applications")').first(); // Use .first() to avoid strict mode issues
    await applicationsButton.hover();
  
    //const applicationsDropdown = page.locator('div.navbar-v2-menu-dropdown:has-text("Applications personnalisées")');
    const applicationsDropdown = page.locator('div.navbar-v2-menu-dropdown:has-text("Custom Applications")');
    await expect(applicationsDropdown).toBeVisible({ timeout: 5000 });
  
    //console.log('Verifying the "Découvrez toutes les applications" link exists.');
    //const allApplicationsLink = applicationsDropdown.locator('a:has-text("Découvrez toutes les applications")');
    const allApplicationsLink = applicationsDropdown.locator('a:has-text("See all applications")');
    await expect(allApplicationsLink).toBeVisible();
  
    //console.log('Clicking the "Découvrez toutes les applications" link.');
    await allApplicationsLink.click();
  
    //console.log('Verifying navigation to the /applications page.');
    //await expect(page).toHaveURL('https://vention.io/fr/applications');
    await expect(page).toHaveURL('https://vention.io/applications');
});
  
test('Navigate to Boutique', async ({ page }) => {
    //console.log('Navigating to the homepage.');
    await page.goto('https://vention.io');
  
    //console.log('Hovering over the Shop button.');
    //const boutiqueButton = page.locator('button:has-text("Boutique")').first(); // Use .first() to avoid strict mode issues
    const boutiqueButton = page.locator('button:has-text("Shop")').first(); // Use .first() to avoid strict mode issues
    await boutiqueButton.hover();
  
    //console.log('Waiting for the Shop dropdown to become visible.');
    //const boutiqueDropdown = page.locator('div.navbar-v2-menu-dropdown:has-text("Boutique Vention")');
    const boutiqueDropdown = page.locator('div.navbar-v2-menu-dropdown:has-text("Shop Vention")');
    await expect(boutiqueDropdown).toBeVisible({ timeout: 5000 });
  
    //console.log('Verifying the "Shop the marketplace" link exists.');
    //const allBoutiqueLink = boutiqueDropdown.locator('a:has-text("Achetez sur le marché")');
    const allBoutiqueLink = boutiqueDropdown.locator('a:has-text("Shop the marketplace")');
    await expect(allBoutiqueLink).toBeVisible();
  
    await allBoutiqueLink.click();
  
    // Verify the URL navigates to the correct page
    //console.log('Verifying navigation to the /parts-library page.');
    await expect(page).toHaveURL('https://vention.io/parts-library');
});
  
test('Navigate to Resources - Documentation', async ({ page }) => {
    //console.log('Navigating to the homepage.');
    await page.goto('https://vention.io');
  
    //console.log('Hovering over the Resources button.');
    //const resourcesButton = page.locator('button.navbar-v2-menu-item-button:has-text("Ressources")');
    const resourcesButton = page.locator('button.navbar-v2-menu-item-button:has-text("Resources")');
    await resourcesButton.hover();
  
    //console.log('Waiting for the Resources dropdown to become visible.');
    const resourcesDropdown = page.locator('div.navbar-v2-menu-dropdown.navbar-v2-resources-dropdown');
    await expect(resourcesDropdown).toBeVisible();
  
    //console.log('Clicking the Documentation link.');
    const documentationLink = resourcesDropdown.locator('a:has-text("Documentation")');
    await documentationLink.click();
  
    //console.log('Verifying the URL navigates to the Documentation page.');
    await expect(page).toHaveURL('https://vention.io/resources');
  });
  


test('Navigate to Communauté and open Forum', async ({ page }) => {
    //console.log('Navigating to the homepage.');
    await page.goto('https://vention.io');
  
    //console.log('Hovering over the Communauté button.');
    //const communauteButton = page.locator('button:has-text("Communauté")').first();
    const communauteButton = page.locator('button:has-text("Community")').first();
    await communauteButton.hover();
  
    //console.log('Waiting for the Communauté dropdown to become visible.');
    const communauteDropdown = page.locator('div.navbar-v2-menu-dropdown.navbar-v2-community-dropdown');
    await expect(communauteDropdown).toBeVisible();
  
    //console.log('Verifying the Forum link exists.');
    //const forumLink = communauteDropdown.locator('a:has-text("Rendez-vous au forum")');
    const forumLink = communauteDropdown.locator('a:has-text("Go to forum")');
    await expect(forumLink).toBeVisible();
  
    // Click the "Forum" link
    //console.log('Clicking the Forum link.');
    await forumLink.click();
  
    // Verify the URL navigates to the forum
    //console.log('Verifying the URL is correct.');
    await expect(page).toHaveURL('https://forum.vention.io/');
  });
  