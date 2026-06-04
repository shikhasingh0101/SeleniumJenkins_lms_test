const { Builder } = require('selenium-webdriver');

(async function () {

 let driver = await new Builder()
 .forBrowser('chrome')
 .build();

 try {

   await driver.get(
     'http://localhost:5000/#/profile'
   );

   const url =
     await driver.getCurrentUrl();

   if(url.includes('profile'))
     console.log('PROFILE TEST PASSED');
   else
     console.log('PROFILE TEST FAILED');

 } finally {

   await driver.quit();

 }

})();
