// playwright.config.js
module.exports = {
    use: {
      locale: 'en-US', 
      headless: true,
      extraHTTPHeaders: {
        'Accept-Language': 'en-US,en;q=0.9'
      },
    },
  };
  