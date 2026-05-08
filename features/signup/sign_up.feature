Feature: Sign Up

  In order to access the full features of Automation Exercise
  As a new visitor
  I want to be able to create an account

  Scenario: Registering a new user account

    Given Alice is on the Automation Exercise login page
    When she signs up with the name "Alice Smith"
    And she completes the registration
    Then she should see that her account has been created
    And she should be logged in as "Alice Smith"
