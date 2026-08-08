Feature: Form-based authentication

  In order to access the features available to me based on my role,
  As a carclinic employee,
  I want to log in to the application using my username and password.

  Background:
    Given Susan starts with the main landing page

  Scenario Outline: A user logs in with valid and invalid credentials

    When she navigates to the login page

    When she logs in using "<username>" and "<password>"
    Then she should see that authentication has <outcome>

    Examples:
      | username    | password | outcome   |
      | admin.user  | changeit | succeeded |
      | admin.user  | badpw123 | failed    |
      | staff.user  | changeit | succeeded |
      | staff.user  | badpw123 | failed    |

