package tests;

import base.BaseTest;
import org.openqa.selenium.By;
import org.testng.Assert;
import org.testng.annotations.Test;

public class EmptyPasswordTest extends BaseTest {

    @Test
    public void emptyPassword() {

        driver.get("http://localhost:5000/#/login");

        driver.findElement(By.cssSelector("input"))
                .sendKeys("student");

        driver.findElement(By.tagName("button"))
                .click();

        Assert.assertTrue(
                driver.getPageSource()
                        .contains("Please enter password")
        );
    }
}
