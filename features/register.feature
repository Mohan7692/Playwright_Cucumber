Feature: Register User

  Scenario: Register a new user successfully

    Given User launches the browser
    And User navigates to Automation Exercise website
    Then Home page should be visible

    When User clicks Signup Login button
    Then New User Signup should be visible

    When User enters name and email
    And User clicks Signup button

    Then Enter Account Information should be visible

    When User fills account information
    And User fills address details
    And User clicks Create Account button

    Then Account Created message should be displayed

    When User clicks Continue button

    Then Logged in as username should be displayed

    When User deletes the account

    Then Account Deleted message should be displayed