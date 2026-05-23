const { Builder, By } = require('selenium-webdriver');

(async function () {

  let driver = await new Builder()
    .forBrowser('chrome')
    .build();

  try {

    await driver.get(
      'http://localhost:5000/#/login'
    );

    await driver.sleep(3000);

    let inputs =
      await driver.findElements(
        By.css('input')
      );

    console.log(
      'Inputs found:',
      inputs.length
    );

  } finally {

    await driver.quit();

  }

})();
