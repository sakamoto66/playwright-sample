// playwright.config.js
module.exports = {
    reporter: !process.env.CI
      // Default 'list' reporter for the terminal
      ? 'list'
      // Two reporters for CI:
      // - concise "dot"
      // - comprehensive json report
      : [ ['dot'], [ 'junit', {  outputFile: 'results.xml' }] ],
  };