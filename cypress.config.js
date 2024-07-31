const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env: {
    username: "valenika2001@gmail.com",
    password: "bazuka1408",
  },
  e2e: {
    viewportHeight: 1080,
    viewportWidth: 1920,
    baseUrl: "https://coe-webstore.tdlbox.com/",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
