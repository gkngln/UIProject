package stepdefinitions;

import common.BaseClass;

import common.ReadConfig;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import io.github.bonigarcia.wdm.WebDriverManager;
import io.github.bonigarcia.wdm.managers.OperaDriverManager;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.opera.OperaDriver;
import org.openqa.selenium.safari.SafariDriver;

import java.util.concurrent.TimeUnit;

public class Hook extends BaseClass{
    private BaseClass base;

    public Hook(BaseClass base) {
        this.base = base;
    }

    @Before
    public void initDriver() {
        if(base.driver==null){
            switch (ReadConfig.getProperty("browser")){
                case "chrome":
                    WebDriverManager.chromedriver().setup();
                    base.driver=new ChromeDriver();
                    break;
                case "firefox":
                    WebDriverManager.firefoxdriver().setup();
                    base.driver=new FirefoxDriver();
                    break;
                case "safari":
                    WebDriverManager.getInstance(SafariDriver.class);
                    base.driver=new SafariDriver();
                    break;
                case "opera":
                    OperaDriverManager.operadriver().setup();
                    base.driver=new OperaDriver();
                    break;
            }
        }
        System.out.println("Open browser");
        base.driver.manage().window().maximize();
        base.driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);

    }

    @After
    public void teardown() {
        System.out.println("Close browser");
        base.driver.quit();
    }
}