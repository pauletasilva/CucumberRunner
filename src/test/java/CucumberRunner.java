import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

/**
 * Created by João on 28/04/2017.
 */
@RunWith(Cucumber.class)
@CucumberOptions(format = {"pretty", "html:reports/test-report"})

public class CucumberRunner {
}
