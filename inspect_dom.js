const { Builder } = require('selenium-webdriver');

(async function () {

  let driver = await new Builder()
    .forBrowser('chrome')
    .build();

  try {

    await driver.get(
      'http://localhost:5000/#/login'
    );

    await driver.sleep(10000);

    let body = await driver.executeScript(
      "return document.body.innerHTML"
    );

    console.log(body.substring(0,2000));

  } finally {

    await driver.quit();

  }

})();
