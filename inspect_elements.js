const { Builder, By } = require('selenium-webdriver');

(async function () {

  let driver = await new Builder()
    .forBrowser('chrome')
    .build();

  await driver.get('http://localhost:5000/#/login');

  await driver.sleep(5000);

  const elements = await driver.findElements(By.css('*'));

  console.log('Total elements:', elements.length);

  for (let i = 0; i < Math.min(elements.length, 100); i++) {
    try {
      const tag = await elements[i].getTagName();
      const text = await elements[i].getText();

      if (text.trim()) {
        console.log(tag + ' => ' + text);
      }
    } catch (e) {}
  }

  await driver.quit();

})();
