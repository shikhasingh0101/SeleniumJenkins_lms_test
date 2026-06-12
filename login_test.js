const { Builder } = require('selenium-webdriver');

(async function () {

  let driver = await new Builder()
    .forBrowser('chrome')
    .build();

  try {

    await driver.get(
      'http://localhost:5000/#/login'
    );

    const currentUrl =
      await driver.getCurrentUrl();

    console.log(currentUrl);

    if(currentUrl.includes('login')) {
      console.log('TEST PASSED');
    } else {
      console.log('TEST FAILED');
    }

    await driver.sleep(3000);

  } finally {

    await driver.quit();

  }

})();
