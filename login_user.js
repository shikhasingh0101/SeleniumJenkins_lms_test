const { Builder, Key } = require('selenium-webdriver');

(async function loginTest() {

  let driver = await new Builder()
    .forBrowser('chrome')
    .build();

  try {

    // Open login page
    await driver.get('http://localhost:5000/#/login');

    // Wait for page to load
    await driver.sleep(5000);

    // Username field
    await driver.actions()
      .sendKeys(
        Key.TAB,          // focus username
        'shikha12356',
        Key.TAB,          // move to password
        '123456',
        Key.TAB,          // move to eye icon
        Key.TAB,          // move to Login button
        Key.ENTER         // click Login
      )
      .perform();

    // Wait for login response
    await driver.sleep(5000);

    const currentUrl = await driver.getCurrentUrl();

    console.log('Current URL:', currentUrl);

    if (
      currentUrl.includes('/profile') ||
      currentUrl.includes('/dashboard') ||
      currentUrl.includes('/home')
    ) {
      console.log('LOGIN TEST PASSED');
      process.exitCode = 0;
    } else {
      console.log('LOGIN TEST FAILED');
      process.exitCode = 1;
    }

  } catch (err) {

    console.error('ERROR:', err);
    process.exitCode = 1;

  } finally {

    await driver.quit();

  }

})();
