const { Builder } = require('selenium-webdriver');

(async function () {

 let driver = await new Builder()
 .forBrowser('chrome')
 .build();

 try {

   await driver.get(
     'http://localhost:5000'
   );

   const title =
     await driver.getTitle();

   console.log(title);

   console.log('HOME PAGE TEST PASSED');

 } finally {

   await driver.quit();

 }

})();
