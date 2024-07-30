const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://coe-webstore.tdlbox.com/",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
