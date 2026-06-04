package tests;

import base.BaseTest;
import org.openqa.selenium.By;
import org.testng.Assert;
import org.testng.annotations.Test;

public class InvalidLoginTest extends BaseTest {

    @Test
    public void invalidLogin() throws InterruptedException {

        driver.get("http://localhost:5000/#/login");

        driver.findElement(By.cssSelector("input"))
                .sendKeys("wronguser");

        driver.findElements(By.cssSelector("input"))
                .get(1)
                .sendKeys("wrongpass");

        driver.findElement(By.tagName("button")).click();

        Thread.sleep(2000);

        Assert.assertTrue(
                driver.getPageSource().contains("Login")
        );
    }
}
