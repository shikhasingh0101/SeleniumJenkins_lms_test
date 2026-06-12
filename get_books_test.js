const { Builder } = require('selenium-webdriver');

(async function () {

  let driver = await new Builder()
    .forBrowser('chrome')
    .build();

  try {

    await driver.get('http://localhost:5000');

    const response = await driver.executeAsyncScript(function(done) {

      fetch('http://localhost:4000/api/books')
        .then(res => res.json())
        .then(data => done(data))
        .catch(err => done({ error: err.toString() }));

    });

    console.log("Books Response:");
    console.log(response);

    if (Array.isArray(response)) {
      console.log("GET BOOKS TEST PASSED");
      console.log("Total Books:", response.length);
    } else {
      console.log("GET BOOKS TEST FAILED");
    }

  } finally {
    await driver.quit();
  }

})();
