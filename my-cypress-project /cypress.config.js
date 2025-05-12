const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://www.flipkart.com/", // Change to your application URL
    supportFile: 'cypress/support/e2e.js',
    specPattern: "cypress/e2e/**/*.cy.{js,ts}",


    env: {
      lambdatest: {
        user: 'roshank',
        key: 'LT_pdN9i3brrjhqvhD82BuHMGL29zUl83MBQpdartL2hae9QdE',
        tunnel: false, // Enables LambdaTest Tunnel
        browser: "chrome", // Change to firefox, edge, etc.
        browserVersion: "latest",
        os: "Windows",
        osVersion: "10",
      },
    },
  },
});
