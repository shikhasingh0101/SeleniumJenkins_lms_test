const { Builder, Key } = require('selenium-webdriver');

(async function () {

  let driver = await new Builder()
    .forBrowser('chrome')
    .build();

  try {

    await driver.get('http://localhost:5000/#/login');

    await driver.sleep(5000);

    await driver.switchTo().activeElement().sendKeys(
      Key.TAB,
      'shikha12356',
      Key.TAB,
      '123456',
      Key.TAB,
      Key.ENTER
    );

    await driver.sleep(5000);

    console.log(await driver.getCurrentUrl());

  } finally {
    await driver.quit();
  }

})();
