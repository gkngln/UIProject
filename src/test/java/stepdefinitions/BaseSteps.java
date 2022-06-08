package stepdefinitions;

import common.BaseClass;
import common.ReadConfig;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.By;

import java.util.ArrayList;

public class BaseSteps extends BaseClass{
    private BaseClass base;

    public BaseSteps(BaseClass base) {
        this.base = base;
    }

    @When("I closed '(.*)' popup form")
    public void iClosedPopupForm(String elementName) {
        base.driver.findElement(By.id(ReadConfig.getProperty(elementName))).click();
    }

    @When("I click a '(.*)' by '(.*)' web element")
    public void iClickAButton(String elementName, String type) throws InterruptedException {
        String _type=type;
        Thread.sleep(1500);
        if(_type.equals("xpath")) {
            base.driver.findElement(By.xpath(ReadConfig.getProperty(elementName))).click();
        }
        else if (_type.equals("id")) {
            base.driver.findElement(By.id(ReadConfig.getProperty(elementName))).click();
        }
        else if (_type.equals("className")) {
            base.driver.findElement(By.className(ReadConfig.getProperty(elementName))).click();
        }
    }

    @Then("I should see url include '(.*)'")
    public void iShouldSeeUrlInclude(String expectedURL) {
        String URL = base.driver.getCurrentUrl();
        Assert.assertTrue(URL.contains(expectedURL));
    }

    @When("I fill '(.*)' by '(.*)' textbox as '(.*)'")
    public void iFillTextboxAs(String elementName, String type, String text) throws InterruptedException {
        String _type=type;
        Thread.sleep(1500);
        if(_type.equals("xpath")) {
            base.driver.findElement(By.xpath(ReadConfig.getProperty(elementName))).sendKeys(text);
        }
        else if (_type.equals("id")) {
            base.driver.findElement(By.id(ReadConfig.getProperty(elementName))).sendKeys(text);
        }
        else if (_type.equals("className")) {
            base.driver.findElement(By.className(ReadConfig.getProperty(elementName))).sendKeys(text);
        }
    }

    @Then("I should see '(.*)' by '(.*)' text is '(.*)'")
    public void iShouldSeeTextIs(String elementName, String type, String expectedText) throws InterruptedException {
        String _type=type;
        Thread.sleep(1500);
        if(_type.equals("xpath")) {
            Assert.assertEquals(expectedText, base.driver.findElement(By.xpath(ReadConfig.getProperty(elementName))).getText());
        }
        else if (_type.equals("id")) {
            Assert.assertEquals(expectedText, base.driver.findElement(By.id(ReadConfig.getProperty(elementName))).getText());
        }
        else if (_type.equals("className")) {
            Assert.assertEquals(expectedText, base.driver.findElement(By.className(ReadConfig.getProperty(elementName))).getText());
        }
    }

    @Given("I navigate to webpage")
    public void iNavigateToWebpage() throws InterruptedException {
        base.driver.get(ReadConfig.getProperty("TrendyolURL"));
        Thread.sleep(3000);
    }

    @When("Switch to new tab")
    public void switchToNewTab() {
        String oldTab = base.driver.getWindowHandle();
        ArrayList<String> newTab = new ArrayList<String>(base.driver.getWindowHandles());
        newTab.remove(oldTab);
        base.driver.switchTo().window(newTab.get(0));
    }

    @When("Wait '(.*)' seconds")
    public void waitSeconds(String ms) throws InterruptedException {
        int _ms=Integer.parseInt(ms);
        Thread.sleep(_ms);
    }
}
