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
  reporter: "junit",
  reporterOptions:{
    mochaFile: "results/my-test-output-[hash].xml",
    toConsole: true
  }
});
