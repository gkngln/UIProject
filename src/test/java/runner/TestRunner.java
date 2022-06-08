package runner;

import org.junit.runner.RunWith;
        import cucumber.api.junit.Cucumber;
        import cucumber.api.CucumberOptions;

@RunWith(Cucumber.class)
@CucumberOptions(plugin={"html:target\\default-cucumber_reports.html",
        "json:target\\json-reports/cucumber.json",
        "junit:target\\xml-report/cucumber.xml" },
        features= "src/test/java/features",
        glue= {"stepdefinitions"}
        /*tags = {"@login","@search","@images"}*/)
public class TestRunner {

}