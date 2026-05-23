const { Builder, By } = require('selenium-webdriver');

(async function () {

  let driver = await new Builder()
    .forBrowser('chrome')
    .build();

  await driver.get('http://localhost:5000/#/login');

  await driver.sleep(5000);

  const elements = await driver.findElements(By.css('*'));

  for (let i = 0; i < elements.length; i++) {
    try {
      const html = await elements[i].getAttribute('outerHTML');

      if (
        html.includes('Username') ||
        html.includes('Password') ||
        html.includes('Login')
      ) {
        console.log('\nFOUND:\n');
        console.log(html);
      }

    } catch (e) {}
  }

  await driver.quit();

})();
