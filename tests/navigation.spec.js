import { test, expect } from '@playwright/test';

test('Navigate to MachineBuilder', async ({ page }) => {
  await page.goto('https://vention.io');
  //console.log('Navigated to the homepage.');

  // Look for "plateforme" button
  const plateformeButton = page.locator('button:has-text("Plateforme")').first();
  await plateformeButton.hover();
  //console.log('Hovered over the Plateforme button.');

  // Wait for the dropdown to appear
  const plateformeDropdown = page.locator('div.navbar-v2-platform');
  //console.log('Waiting for the dropdown to become visible...');
  await expect(plateformeDropdown).toBeVisible({ timeout: 7000 });
  //console.log('Dropdown became visible.');

  // Verify the "MachineBuilder" link is visible
  const machineBuilderLink = plateformeDropdown.locator('a:has-text("MachineBuilder")');
  await expect(machineBuilderLink).toBeVisible();
  //console.log('Found the MachineBuilder link.');

  // Click the "MachineBuilder" link
  await machineBuilderLink.click();
  console.log('Clicked the MachineBuilder link.');

  // Verify the URL is correct
  await expect(page).toHaveURL('https://vention.io/fr/machine-builder');
  //console.log('Successfully navigated to the MachineBuilder page.');
});

test('Navigate to Applications', async ({ page }) => {
    //console.log('Navigating to the homepage.');
    await page.goto('https://vention.io');
  
    // Hover over the "Applications" button
    //console.log('Hovering over the Applications button.');
    const applicationsButton = page.locator('button:has-text("Applications")').first(); // Use .first() to avoid strict mode issues
    await applicationsButton.hover();
  
    // Wait for the dropdown to become visible
    //console.log('Waiting for the Applications dropdown to become visible.');
    const applicationsDropdown = page.locator('div.navbar-v2-menu-dropdown:has-text("Applications personnalisées")');
    await expect(applicationsDropdown).toBeVisible({ timeout: 5000 });
  
    // Verify the "Découvrez toutes les applications" link exists
    //console.log('Verifying the "Découvrez toutes les applications" link exists.');
    const allApplicationsLink = applicationsDropdown.locator('a:has-text("Découvrez toutes les applications")');
    await expect(allApplicationsLink).toBeVisible();
  
    // Click the "Découvrez toutes les applications" link
    //console.log('Clicking the "Découvrez toutes les applications" link.');
    await allApplicationsLink.click();
  
    // Verify the URL navigates to the correct page
    //console.log('Verifying navigation to the /applications page.');
    await expect(page).toHaveURL('https://vention.io/fr/applications');
});
  
test('Navigate to Boutique', async ({ page }) => {
    //console.log('Navigating to the homepage.');
    await page.goto('https://vention.io');
  
    // Hover over the "Applications" button
    //console.log('Hovering over the Applications button.');
    const boutiqueButton = page.locator('button:has-text("Boutique")').first(); // Use .first() to avoid strict mode issues
    await boutiqueButton.hover();
  
    // Wait for the dropdown to become visible
    //console.log('Waiting for the Applications dropdown to become visible.');
    const boutiqueDropdown = page.locator('div.navbar-v2-menu-dropdown:has-text("Boutique Vention")');
    await expect(boutiqueDropdown).toBeVisible({ timeout: 5000 });
  
    // Verify the "Découvrez toutes les applications" link exists
    //console.log('Verifying the "Découvrez toutes les applications" link exists.');
    const allBoutiqueLink = boutiqueDropdown.locator('a:has-text("Achetez sur le marché")');
    await expect(allBoutiqueLink).toBeVisible();
  
    // Click the "Découvrez toutes les applications" link
    //console.log('Clicking the "Découvrez toutes les applications" link.');
    await allBoutiqueLink.click();
  
    // Verify the URL navigates to the correct page
    //console.log('Verifying navigation to the /applications page.');
    await expect(page).toHaveURL('https://vention.io/parts-library');
});
  
test('Vention Site Navigation: Navigate to Resources - Documentation', async ({ page }) => {
    // Navigate to the homepage
    //console.log('Navigating to the homepage.');
    await page.goto('https://vention.io');
  
    // Hover over the Resources button
    //console.log('Hovering over the Resources button.');
    const resourcesButton = page.locator('button.navbar-v2-menu-item-button:has-text("Ressources")');
    await resourcesButton.hover();
  
    // Wait for the dropdown menu to become visible
    //console.log('Waiting for the Resources dropdown to become visible.');
    const resourcesDropdown = page.locator('div.navbar-v2-menu-dropdown.navbar-v2-resources-dropdown');
    await expect(resourcesDropdown).toBeVisible();
  
    // Click the Documentation link
    //console.log('Clicking the Documentation link.');
    const documentationLink = resourcesDropdown.locator('a:has-text("Documentation")');
    await documentationLink.click();
  
    // Verify the URL navigates to the Documentation page
    //console.log('Verifying the URL navigates to the Documentation page.');
    await expect(page).toHaveURL('https://vention.io/resources');
  });
  


test('Navigate to Communauté and open Forum', async ({ page }) => {
    //console.log('Navigating to the homepage.');
    await page.goto('https://vention.io');
  
    // Hover over the Communauté button
    //console.log('Hovering over the Communauté button.');
    const communauteButton = page.locator('button:has-text("Communauté")').first();
    await communauteButton.hover();
  
    // Wait for the dropdown menu to become visible
    //console.log('Waiting for the Communauté dropdown to become visible.');
    const communauteDropdown = page.locator('div.navbar-v2-menu-dropdown.navbar-v2-community-dropdown');
    await expect(communauteDropdown).toBeVisible();
  
    // Verify the "Forum" link exists in the dropdown
    //console.log('Verifying the Forum link exists.');
    const forumLink = communauteDropdown.locator('a:has-text("Rendez-vous au forum")');
    await expect(forumLink).toBeVisible();
  
    // Click the "Forum" link
    //console.log('Clicking the Forum link.');
    await forumLink.click();
  
    // Verify the URL navigates to the forum
    //console.log('Verifying the URL is correct.');
    await expect(page).toHaveURL('https://forum.vention.io/');
  });
  