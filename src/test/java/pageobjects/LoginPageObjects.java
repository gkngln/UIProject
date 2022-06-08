package pageobjects;

import common.BaseClass;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;


public class LoginPageObjects  {


    WebDriver ldriver;

    public LoginPageObjects(WebDriver rdriver)
    {
        ldriver=rdriver;
        PageFactory.initElements(rdriver, this);
        System.out.println("Wellcome to LoginPage.java");
    }
    /*
    public LoginPageObjects(WebDriver rdriver)
    {
        ldriver=rdriver;
        PageFactory.initElements(rdriver, this);
        System.out.println("Wellcome to LoginPage.java");
    }*/
    @FindBy(id="login-email")
    @CacheLookup
    public WebElement txtMail;

    @FindBy(id="login-password-input")
    @CacheLookup
    public WebElement txtPassword;

    @FindBy(xpath = "//button[@class='q-primary q-fluid q-button-medium q-button submit']")
    @CacheLookup
    public WebElement btnLogin;

    @FindBy(id ="Rating-Review")
    @CacheLookup
    public WebElement closePopup;

    @FindBy(xpath="//p[.='Giriş Yap']")
    @CacheLookup
    public WebElement firsLoginBtn;

    @FindBy(className="link-text")
    @CacheLookup
    public WebElement myAccountInfo;

    @FindBy(xpath="//span[@class='message']")
    @CacheLookup
    public WebElement errorMessage;

    @FindBy(id ="onetrust-accept-btn-handler")
    @CacheLookup
    public WebElement btnCookies;

    public void setMail(String mail)
    {
        txtMail.sendKeys(mail);
    }

    public void setPassword(String pwd)
    {
        txtPassword.sendKeys(pwd);
    }

}
