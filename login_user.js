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

    const url = await driver.getCurrentUrl();

    console.log('Current URL:', url);

    if (url.includes('/profile')) {
      console.log('LOGIN TEST PASSED');
    } else {
      console.log('LOGIN TEST FAILED');
    }

  } finally {
    await driver.quit();
  }

})();
