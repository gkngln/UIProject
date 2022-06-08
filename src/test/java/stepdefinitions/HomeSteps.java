package stepdefinitions;

import common.BaseClass;
import common.ReadConfig;
import cucumber.api.java.en.When;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;

import java.io.IOException;
import java.net.HttpURLConnection;
import java.net.MalformedURLException;
import java.net.ProtocolException;
import java.net.URL;
import java.util.List;

public class HomeSteps extends BaseClass {
    private final BaseClass base;

    public HomeSteps(BaseClass base) {
        this.base = base;
    }

    @When("image link control")
    public void imageLinkControl() throws InterruptedException {
        List<WebElement> elements = base.driver.findElements(By.cssSelector(ReadConfig.getProperty("TabCatagoryItems")));
        int elementsCount = elements.size();
        System.out.println("Total xpath: " + elementsCount);
        int x = 1;
        while (x <= elementsCount) {
            String xpath = "(//a[@class='category-header'])[" + x + "]";
            //String element = elements.get(x).getAttribute("href");
            base.driver.findElement(By.xpath(xpath)).click();
            //System.out.println(x + ". element tıklandı");

            //String firstComponentXpath="//*[@id=\"browsing-gw-homepage\"]/div/div/div/article[2]";
            String firstComponentXpath = "(//span[@class='image-container'])[1]";
            base.driver.findElement(By.xpath(firstComponentXpath)).click();

            int y = 1;
            while (y <= 4) {
                String productElementXpath = "(//div[@class='products']//img)["+ y +"]";
                WebElement image = base.driver.findElement(By.xpath(productElementXpath));
                String src = image.getAttribute("src");
                //System.out.println(src);

                System.out.println(y + ". element tıklandı");

                HttpURLConnection huc = null;
                String url = src;
                int respCode = 200;
                try {

                    huc = (HttpURLConnection) (new URL(url).openConnection());

                    huc.setRequestMethod("HEAD");

                    huc.connect();

                    respCode = huc.getResponseCode();

                    if (respCode >= 400) {
                        System.out.println(url + " is a broken link");
                    } else {
                        System.out.println(url + " is a valid link");
                    }

                } catch (ProtocolException e) {
                    throw new RuntimeException(e);
                } catch (IOException e) {
                    throw new RuntimeException(e);
                }
                y++;
            }
            x++;
        }
//
        //  for (int i = 0; i < elementsCount; i++) {
//
        //      Iterator<WebElement> it = elements.iterator();
//
        //  }
    }
}
