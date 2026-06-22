const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  webServer: {
    command: 'npm start',
    url: 'http://localhost:3000',
    reuseExistingServer: false,
    timeout: 120000,
  },
});