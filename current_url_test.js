const { Builder } = require('selenium-webdriver');

(async function () {

 let driver = await new Builder()
 .forBrowser('chrome')
 .build();

 try {

   await driver.get(
     'http://localhost:5000/#/login'
   );

   console.log(
     await driver.getCurrentUrl()
   );

   console.log('URL TEST PASSED');

 } finally {

   await driver.quit();

 }

})();
