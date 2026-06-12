const { Builder } = require('selenium-webdriver');

(async function () {

  let driver =
    await new Builder()
      .forBrowser('chrome')
      .build();

  try {

    await driver.get(
      'https://google.com'
    );

    console.log('CONNECTED');

  } finally {

    await driver.quit();

  }

})();
