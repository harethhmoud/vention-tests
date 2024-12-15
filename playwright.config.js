// playwright.config.js

module.exports = {
  // "list" -> prints results in the console
  // "allure-playwright" -> generates Allure-compatible results
  reporter: [
    ['list'],
    ['allure-playwright']
  ],

  use: {
    locale: 'en-US', 
    headless: true,
    extraHTTPHeaders: {
      'Accept-Language': 'en-US,en;q=0.9'
    },
  },
};
