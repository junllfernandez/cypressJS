const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    "baseUrl": "https://mcdonalds.co.nz/",
    "reporter": "cypress-mochawesome-reporter",
    "reporterOptions": {
    "reportDir": "cypress/reports",
    "charts": true,
    "reportPageTitle": "McDonalds Test Report",
    "embeddedScreenshots": true,
    "inlineAssets": true,
    "quiet": true
  },
  "video": false,
  "trashAssetsBeforeRuns": true
  },
});