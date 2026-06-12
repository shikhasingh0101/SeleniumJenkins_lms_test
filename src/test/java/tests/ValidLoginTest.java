package tests;

import base.BaseTest;
import org.openqa.selenium.By;
import org.testng.Assert;
import org.testng.annotations.Test;

public class ValidLoginTest extends BaseTest {

    @Test
    public void validLogin() throws InterruptedException {

        driver.get("http://localhost:5000/#/login");

        driver.findElement(By.cssSelector("input")).sendKeys("student");

        driver.findElements(By.cssSelector("input"))
                .get(1)
                .sendKeys("student123");

        driver.findElement(By.tagName("button")).click();

        Thread.sleep(3000);

        Assert.assertTrue(
                driver.getCurrentUrl().contains("profile")
        );
    }
}
