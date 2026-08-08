Feature: Form-based authentication

  In order to use the carclinic application
  As a carclinic employee
  I'd like to login

  Background:
    Given Susan starts with the main landing page

  Scenario Outline: Using username and password to log in

    Write a description here about the scenario

    When she logs in using "<username>" and "<password>"
    Then she should see that authentication has <outcome>

    Examples:
      | username    | password | outcome   |
      | admin.user  | changeit | succeeded |
      | admin.user  | badpw123 | failed    |
      | staff.user  | changeit | succeeded |
      | staff.user  | badpw123 | failed    |

