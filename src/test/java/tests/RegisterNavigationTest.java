package tests;

import base.BaseTest;
import org.openqa.selenium.By;
import org.testng.Assert;
import org.testng.annotations.Test;

public class RegisterNavigationTest extends BaseTest {

    @Test
    public void registerNavigation() {

        driver.get("http://localhost:5000/#/login");

        driver.findElement(
                By.linkText("Don't have an account? Register here"))
                .click();

        Assert.assertTrue(
                driver.getCurrentUrl().contains("register")
        );
    }
}
