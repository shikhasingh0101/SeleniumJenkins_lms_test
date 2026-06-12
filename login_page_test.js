const { Builder } = require('selenium-webdriver');

(async function () {

  let driver = await new Builder()
      .forBrowser('chrome')
      .build();

  try {

      await driver.get('http://localhost:5000/#/login');

      await driver.sleep(3000);

      const title = await driver.getTitle();
      const url = await driver.getCurrentUrl();

      console.log("Title:", title);
      console.log("URL:", url);

      if (title === "frontend" && url.includes("/#/login")) {
          console.log("LOGIN PAGE TEST PASSED");
      } else {
          console.log("LOGIN PAGE TEST FAILED");
      }

  } finally {
      await driver.quit();
  }

})();
