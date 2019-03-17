$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("e2e.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "# new feature"
    },
    {
      "line": 2,
      "value": "# Tags: optional"
    }
  ],
  "line": 4,
  "name": "To test end to end CarShop recently saved items",
  "description": "",
  "id": "to-test-end-to-end-carshop-recently-saved-items",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 6,
  "name": "User able to view the recently viewd items in the cart",
  "description": "",
  "id": "to-test-end-to-end-carshop-recently-saved-items;user-able-to-view-the-recently-viewd-items-in-the-cart",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 7,
  "name": "user is on Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "User clicks on menu button on the right corner",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "User clicks on Sign in button from the menuBar",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User clicks on SignIn button and enters \"bhavi.sharma3001@gmail.com\" and \"password\"",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.user_Is_On_Homepage()"
});
formatter.result({
  "duration": 11138727986,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_Click_On_Menubutton()"
});
formatter.result({
  "duration": 150626400,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_Click_On_SignIn_Button()"
});
formatter.result({
  "duration": 1703663428,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "bhavi.sharma3001@gmail.com",
      "offset": 41
    },
    {
      "val": "password",
      "offset": 74
    }
  ],
  "location": "Steps.user_Enter_Id_Password(String,String)"
});
formatter.result({
  "duration": 877347346,
  "status": "passed"
});
});