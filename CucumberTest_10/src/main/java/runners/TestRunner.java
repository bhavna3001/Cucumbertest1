package runners;


import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
        features = "src/test/resources/fuctionalTests",
        glue ={"stepDefinitions"},
format ={"pretty", "html:test-output", "junit:junit_xml/cucumber.xml"},
        dryRun = false

           )
public class TestRunner {


}


