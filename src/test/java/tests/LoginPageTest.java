package tests;

import base.BaseTest;
import org.testng.Assert;
import org.testng.annotations.Test;

public class LoginPageTest extends BaseTest {

    @Test
    public void verifyLoginPageLoads() {

        driver.get("http://localhost:5000/#/login");

        Assert.assertTrue(
                driver.getPageSource().contains("Welcome Back")
        );
    }
}
