const { Builder } = require('selenium-webdriver');

(async function () {

 let driver = await new Builder()
 .forBrowser('chrome')
 .build();

 try {

   await driver.get(
     'http://localhost:5000/#/register'
   );

   const url =
     await driver.getCurrentUrl();

   if(url.includes('register'))
     console.log('REGISTER TEST PASSED');
   else
     console.log('REGISTER TEST FAILED');

 } finally {

   await driver.quit();

 }

})();
