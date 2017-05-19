import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.htmlunit.HtmlUnitDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.util.logging.Level;
import java.util.logging.Logger;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertTrue;
import static org.junit.Assert.fail;

/**
 * Created by João on 28/04/2017.
 */
public class StepDefsForm {

    private static WebDriver driver;

    static {
        Logger.getLogger("").setLevel(Level.OFF);
        System.setProperty("webdriver.gecko.driver", "drivers\\geckodriver.exe");
        System.setProperty("webdriver.edge.driver", "drivers\\MicrosoftWebDriver.exe");
        System.setProperty("webdriver.chrome.driver", "drivers\\chromedriver.exe");
        System.setProperty("phantomjs.binary.path", "drivers\\phantomjs.exe"); //
        if (driver == null) {
            driver = new HtmlUnitDriver();
        }
    }
    @Given("^I navigate to the form$")
    public void iNavigateToTheForm() throws Throwable {
        driver.get("https://www.w3schools.com/php/demo_form_validation_complete.php");
    }
    @Given("^the \"([^\"]*)\" field is empty$")
    public void theFieldIsEmpty(String field) throws Throwable {
        WebElement webElement = driver.findElement(By.name(field));
        webElement.clear();
        assertEquals("", webElement.getText());
    }

    @When("^the form is submitted$")
    public void theFormIsSubmitted() throws Throwable {
        driver.findElement(By.name("submit")).click();
        String nameFieldText = driver.findElement(By.name("name")).getAttribute("value");
        assertTrue(driver.findElement(By.xpath("//body")).getText().contains(nameFieldText));
        String emailFieldText = driver.findElement(By.name("email")).getAttribute("value");
        assertTrue(driver.findElement(By.xpath("//body")).getText().contains(emailFieldText));
        String websiteFieldText = driver.findElement(By.name("website")).getAttribute("value");
        assertTrue(driver.findElement(By.xpath("//body")).getText().contains(websiteFieldText));
        String commentFieldText = driver.findElement(By.name("comment")).getAttribute("value");
        assertTrue(driver.findElement(By.xpath("//body")).getText().contains(commentFieldText));
    }
    @Then("^the \"([^\"]*)\" error message should be shown for the \"([^\"]*)\" field$")
    public void theErrorMessageShouldBeShownForTheField(String errorMessage, String field) throws Throwable {
        if (field.equals("name")) {
            assertTrue(driver.findElement(By.xpath("//form/span[1]")).getText().matches("\\* " + errorMessage));
        } else if (field.equals("email")) {
            assertTrue(driver.findElement(By.xpath("//form/span[2]")).getText().matches("\\* " + errorMessage));
        } else {
            fail("Unknown field: " + field);
        }
    }
    @Given("^the \"([^\"]*)\" field is filled out with: \"([^\"]*)\"$")
    public void theFieldIsFilledOutWith(String field, String value) throws Throwable {
        WebElement webElement = driver.findElement(By.name(field));
        webElement.clear();
        webElement.sendKeys(value);
        new WebDriverWait(driver, 2).until(ExpectedConditions.textToBePresentInElementValue(webElement, value));
    }
    @Then("^no error message should be shown for the \"([^\"]*)\" field$")
    public void noErrorMessageShouldBeShownForTheField(String field) throws Throwable {
        if (field.equals("name")) {
            String text = driver.findElement(By.xpath("//form/span[1]")).getText();
            assertTrue(text.matches("\\*"));
        } else if (field.equals("email")) {
            String text = driver.findElement(By.xpath("//form/span[2]")).getText();
            assertTrue(text.matches("\\*"));
        } else {
            fail("Unknown field: " + field);
        }
    }


    @Given("^the fields are filled out with: \"([^\"]*)\", \"([^\"]*)\", \"([^\"]*)\", \"([^\"]*)\"$")
    public void theFieldsAreFilledOutWith(String name, String email, String website, String gender) throws Throwable {
        WebElement webElement = driver.findElement(By.name("name"));
        webElement.clear();
        webElement.sendKeys(name);
        new WebDriverWait(driver, 2).until(ExpectedConditions.textToBePresentInElementValue(webElement, name));
        webElement = driver.findElement(By.name("email"));
        webElement.clear();
        webElement.sendKeys(email);
        new WebDriverWait(driver, 2).until(ExpectedConditions.textToBePresentInElementValue(webElement, email));
        webElement = driver.findElement(By.name("website"));
        webElement.clear();
        webElement.sendKeys(website);
        new WebDriverWait(driver, 2).until(ExpectedConditions.textToBePresentInElementValue(webElement, website));
        if (gender.equals("male")) {
            webElement = driver.findElement(By.xpath("(//input[@name='gender'])[1]"));
            webElement.click();
            new WebDriverWait(driver, 2).until(ExpectedConditions.elementToBeSelected(webElement));
        } else if (gender.equals("female")) {
            webElement = driver.findElement(By.xpath("(//input[@name='gender'])[2]"));
            webElement.click();
            new WebDriverWait(driver, 2).until(ExpectedConditions.elementToBeSelected(webElement));
        }
    }
    @Then("^no error message should be shown$")
    public void noErrorMessageShouldBeShown() throws Throwable {
        String text = driver.findElement(By.xpath("//form/span[1]")).getText();
        assertTrue(text.equals("*"));
        text = driver.findElement(By.xpath("//form/span[2]")).getText();
        assertTrue(text.equals("*"));
        text = driver.findElement(By.xpath("//form/span[3]")).getText();
        assertTrue(text.equals(""));
        text = driver.findElement(By.xpath("//form/span[4]")).getText();
        assertTrue(text.equals("*"));
    }

    @Then("^a error message should be shown$")
    public void aErrorMessageShouldBeShown() throws Throwable {
        String errorText = driver.findElement(By.xpath("//form/span[1]")).getText();
        assertTrue(errorText.equals("* Only letters and white space allowed"));
        errorText = driver.findElement(By.xpath("//form/span[2]")).getText();
        assertTrue(errorText.equals("* Invalid email format"));
        errorText = driver.findElement(By.xpath("//form/span[3]")).getText();
        assertTrue(errorText.equals("Invalid URL"));
        errorText = driver.findElement(By.xpath("//form/span[4]")).getText();
        assertTrue(errorText.equals("*"));
    }
}
