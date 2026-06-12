package tests;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.Assert;
import org.testng.annotations.Test;

public class TC02_RegisterUserTest {

    @Test
    public void registerUser() throws Exception {

        WebDriver driver = new ChromeDriver();

        driver.get("http://localhost:5000/#/register");

        Thread.sleep(5000);

        Assert.assertTrue(
                driver.getCurrentUrl().contains("register")
        );

        driver.quit();
    }
}