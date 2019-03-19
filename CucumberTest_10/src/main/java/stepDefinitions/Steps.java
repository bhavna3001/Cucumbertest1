package stepDefinitions;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.By;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

import java.util.concurrent.TimeUnit;

public class Steps {
WebDriver driver;


    @Given("^user is on Home Page$")
        public void user_Is_On_Homepage(){
        System.setProperty("webdriver.chrome.driver","C:\\Users\\Bhavna PC\\Documents\\IdeaProjects\\Cucumbertest10\\CucumberTest_10\\chromedriver.exe");
        driver = new ChromeDriver();
        driver.manage().window().maximize();
        driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
        driver.get("https://www.carshop.co.uk/");
    }

    @When("^User clicks on menu button on the right corner$")
        public void user_Click_On_Menubutton(){
             driver.findElement(By.xpath("//a[@ ng-click='cc.svc.utils.openMenu()']")).click();
    }


     @When("^User clicks on Sign in button from the menuBar$")
        public void user_Click_On_SignIn_Button(){
             driver.findElement(By.xpath("//a[contains(.,'Sign In')]")).click();


    }

    @When("^User clicks on SignIn button and enters \"(.*)\" and \"(.*)\"$")
         public void user_Enter_Id_Password(String username,String password){
        driver.findElement(By.xpath("//input[@ id=\"username\"]")).sendKeys(username);
        driver.findElement(By.xpath("//input[@name='password']")).sendKeys(password);
        driver.findElement(By.xpath("//button[@type='submit']")).click();
    }

    @Then("^Close the browser$")
        public void close_the_browser(){
            driver.quit();
        }

/*    @When("^Click on carshop logo$")
        public void click_On_Carshop_Logo() {
        driver.findElement(By.xpath("(//img[@alt='CarShop Logo'])[1]")).click();
    }*/


    }



