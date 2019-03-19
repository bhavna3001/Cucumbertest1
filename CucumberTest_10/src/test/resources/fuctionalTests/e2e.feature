# new feature
# Tags: optional
    
Feature: To test end to end CarShop recently saved items

 #without examples(data driven)
#Scenario: User able to view the recently viewd items in the cart
        #Given user is on Home Page
        #When  User clicks on menu button on the right corner
        #And   User clicks on Sign in button from the menuBar
        #And   User clicks on SignIn button and enters "bhavi.sharma3001@gmail.com" and "password"



    #with examples
    Scenario Outline: User able to view the recently viewd items in the cart

        Given user is on Home Page
        When  User clicks on menu button on the right corner
        And   User clicks on Sign in button from the menuBar
        And   User clicks on SignIn button and enters "<username>" and "<password>"
        Then  Close the browser



 Examples:
     | username | password |
     | username1 | test1 |
     | usernmae2 | test2 |