const { Builder } = require('selenium-webdriver');

(async function() {

  let driver = await new Builder()
    .forBrowser('chrome')
    .build();

  await driver.get('http://localhost:5000/#/login');

  await driver.sleep(5000);

  const source = await driver.getPageSource();

  console.log(source.substring(0, 10000));

  await driver.quit();

})();
