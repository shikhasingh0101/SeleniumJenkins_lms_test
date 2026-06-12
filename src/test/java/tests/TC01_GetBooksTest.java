package tests;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.Assert;
import org.testng.annotations.Test;

public class TC01_GetBooksTest {

    @Test
    public void getBooks() {

        WebDriver driver = new ChromeDriver();

        driver.get("http://localhost:5000");

        Assert.assertTrue(driver.getTitle().length() > 0);

        driver.quit();
    }
}
