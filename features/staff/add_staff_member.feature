Feature: Adding staff members

  In order to keep the carclinic team roster up to date
  As a carclinic administrator
  I want to add new staff members

  Background:
    Given Susan starts with the main landing page
    And she logs in using "admin.user" and "changeit"
    And she navigates to the Staff page

  Scenario: Adding a new staff member with valid details

    When she adds a new staff member with the following details:
      | First Name | Last Name | Email                      | Phone Number | Role     |
      | Jamie      | Rivera    | jamie.rivera@carclinic.com | 555-0192     | Mechanic |
    Then she should see "Jamie Rivera" listed as a member of staff

  Scenario Outline: Attempting to add a staff member with a required field missing

    When she attempts to add a new staff member without providing a <field>
    Then the staff member should not be added

    Examples:
      | field        |
      | first name   |
      | last name    |
      | email        |
      | phone number |
      | role         |
