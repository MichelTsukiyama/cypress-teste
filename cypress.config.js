const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  env:{
    CODE: "${{ secrets.CODE }}"
  },
 reporter: 'cypress-multi-reporters',
  reporterOptions: {
    configFile: 'reporter-config.js',
  },
});
