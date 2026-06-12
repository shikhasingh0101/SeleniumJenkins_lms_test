package tests;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.Assert;
import org.testng.annotations.Test;

public class TC04_InvalidLoginTest {

    @Test
    public void invalidLoginPageLoad() {

        WebDriver driver = new ChromeDriver();

        driver.get("http://localhost:5000/#/login");

        Assert.assertTrue(
                driver.getTitle().length() > 0
        );

        driver.quit();
    }
}