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
formatter.scenarioOutline({
  "comments": [
    {
      "line": 6,
      "value": "#Scenario: User able to view the recently viewd items in the cart"
    },
    {
      "line": 7,
      "value": "#Given user is on Home Page"
    },
    {
      "line": 8,
      "value": "#When  User clicks on menu button on the right corner"
    },
    {
      "line": 9,
      "value": "#And   User clicks on Sign in button from the menuBar"
    },
    {
      "line": 10,
      "value": "#And   User clicks on SignIn button and enters \"bhavi.sharma3001@gmail.com\" and \"password\""
    },
    {
      "line": 14,
      "value": "#with examples"
    }
  ],
  "line": 15,
  "name": "User able to view the recently viewd items in the cart",
  "description": "",
  "id": "to-test-end-to-end-carshop-recently-saved-items;user-able-to-view-the-recently-viewd-items-in-the-cart",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 17,
  "name": "user is on Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "User clicks on menu button on the right corner",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "User clicks on Sign in button from the menuBar",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "User clicks on SignIn button and enters \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "Close the browser",
  "keyword": "Then "
});
formatter.examples({
  "line": 25,
  "name": "",
  "description": "",
  "id": "to-test-end-to-end-carshop-recently-saved-items;user-able-to-view-the-recently-viewd-items-in-the-cart;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 26,
      "id": "to-test-end-to-end-carshop-recently-saved-items;user-able-to-view-the-recently-viewd-items-in-the-cart;;1"
    },
    {
      "cells": [
        "username1",
        "test1"
      ],
      "line": 27,
      "id": "to-test-end-to-end-carshop-recently-saved-items;user-able-to-view-the-recently-viewd-items-in-the-cart;;2"
    },
    {
      "cells": [
        "usernmae2",
        "test2"
      ],
      "line": 28,
      "id": "to-test-end-to-end-carshop-recently-saved-items;user-able-to-view-the-recently-viewd-items-in-the-cart;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 27,
  "name": "User able to view the recently viewd items in the cart",
  "description": "",
  "id": "to-test-end-to-end-carshop-recently-saved-items;user-able-to-view-the-recently-viewd-items-in-the-cart;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 17,
  "name": "user is on Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "User clicks on menu button on the right corner",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "User clicks on Sign in button from the menuBar",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "User clicks on SignIn button and enters \"username1\" and \"test1\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "Close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.user_Is_On_Homepage()"
});
formatter.result({
  "duration": 8541320611,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_Click_On_Menubutton()"
});
formatter.result({
  "duration": 208189911,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_Click_On_SignIn_Button()"
});
formatter.result({
  "duration": 1475395451,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "username1",
      "offset": 41
    },
    {
      "val": "test1",
      "offset": 57
    }
  ],
  "location": "Steps.user_Enter_Id_Password(String,String)"
});
formatter.result({
  "duration": 827866445,
  "status": "passed"
});
formatter.match({
  "location": "Steps.close_the_browser()"
});
formatter.result({
  "duration": 735426983,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "User able to view the recently viewd items in the cart",
  "description": "",
  "id": "to-test-end-to-end-carshop-recently-saved-items;user-able-to-view-the-recently-viewd-items-in-the-cart;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 17,
  "name": "user is on Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "User clicks on menu button on the right corner",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "User clicks on Sign in button from the menuBar",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "User clicks on SignIn button and enters \"usernmae2\" and \"test2\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "Close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.user_Is_On_Homepage()"
});
formatter.result({
  "duration": 7744405742,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_Click_On_Menubutton()"
});
formatter.result({
  "duration": 255576494,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_Click_On_SignIn_Button()"
});
formatter.result({
  "duration": 1419390506,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "usernmae2",
      "offset": 41
    },
    {
      "val": "test2",
      "offset": 57
    }
  ],
  "location": "Steps.user_Enter_Id_Password(String,String)"
});
formatter.result({
  "duration": 898285722,
  "status": "passed"
});
formatter.match({
  "location": "Steps.close_the_browser()"
});
formatter.result({
  "duration": 730418914,
  "status": "passed"
});
});