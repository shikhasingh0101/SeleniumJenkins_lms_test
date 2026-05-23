const { Builder } = require('selenium-webdriver');

(async function () {

  let driver = await new Builder()
    .forBrowser('chrome')
    .build();

  try {

    await driver.get(
      'http://localhost:5000/#/login'
    );

    console.log('Opening page...');

    await driver.sleep(15000);

    const source =
      await driver.getPageSource();

    console.log(
      source.includes('Welcome Back')
    );

    console.log(
      source.includes('Username')
    );

  } finally {

    await driver.quit();

  }

})();
