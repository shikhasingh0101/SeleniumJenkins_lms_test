const { Builder } = require('selenium-webdriver');

(async function () {

  let driver = await new Builder()
    .forBrowser('chrome')
    .build();

  try {

    await driver.get(
      'http://localhost:50041/#/login'
    );

    console.log(
      'LMS Login Page Opened Successfully'
    );

    await driver.sleep(5000);

  } finally {

    await driver.quit();

  }

})();
