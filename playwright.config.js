// playwright.config.js
module.exports = {
  use: {
    channel: 'chrome',
    // Context options
    viewport: { width: 1280, height: 720 },
    ignoreHTTPSErrors: true,

    // Artifacts
    screenshot: 'on',
    //trace :'on',
    //video: 'on',
  },
  reporter: [ ['dot'], ['experimental-allure-playwright'], [ 'json', {  outputFile: 'results.json' }] ],
};