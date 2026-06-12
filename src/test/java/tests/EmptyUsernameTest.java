package tests;

import base.BaseTest;
import org.openqa.selenium.By;
import org.testng.Assert;
import org.testng.annotations.Test;

public class EmptyUsernameTest extends BaseTest {

    @Test
    public void emptyUsername() {

        driver.get("http://localhost:5000/#/login");

        driver.findElements(By.cssSelector("input"))
                .get(1)
                .sendKeys("student123");

        driver.findElement(By.tagName("button"))
                .click();

        Assert.assertTrue(
                driver.getPageSource()
                        .contains("Please enter username")
        );
    }
}
