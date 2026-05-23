const { Builder } = require('selenium-webdriver');

(async function () {

  let driver = await new Builder()
    .forBrowser('chrome')
    .build();

  await driver.get('http://localhost:5000/#/login');

  await driver.sleep(5000);

  const body = await driver.findElement({ css: 'body' });

  const html = await body.getAttribute('innerHTML');

  console.log(html.includes('Username'));
  console.log(html.includes('Password'));
  console.log(html.includes('Login'));

  await driver.quit();

})();
