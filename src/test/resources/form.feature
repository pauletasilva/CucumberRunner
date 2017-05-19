Feature: Form validation
  The HTML form we will be working at is available at:
  https://www.w3schools.com/php/demo_form_validation_complete.php
  The form contains various input fields: required and optional text fields, radio buttons, and a submit button.
  The validation rules for the form are as follows:
  Field Validation Rules
  ___ ___
  Name Required. + Must only contain letters and whitespace
  E-mail Required. + Must contain a valid email address (with @ and .)
  Website Optional. If present, it must contain a valid URL
  Comment Optional. Multi-line input field (textarea)
  Gender Required. Must select one
  Error messages should be generated if needed, i.e. if the user tries to submit the form without
  filling out the required fields.
  Background:
    Given I navigate to the form
  @error
  Scenario: Name empty
    Given the "name" field is empty
    When the form is submitted
    Then the "Name is required" error message should be shown for the "name" field
  @error
  Scenario: Name filled out but invalid
    Given the "name" field is filled out with: "!!!"
    When the form is submitted
    Then the "Only letters and white space allowed" error message should be shown for the "name" field
  @noerror
  Scenario: Name filled out and valid
    Given the "name" field is filled out with: "Justino Figueiredo"
    When the form is submitted
    Then no error message should be shown for the "name" field
  @error
  Scenario: Email empty
    Given the "email" field is empty
    When the form is submitted
    Then the "Email is required" error message should be shown for the "email" field
  @error
  Scenario: Email filled out but invalid
    Given the "email" field is filled out with: "JustinoFigueiredo"
    When the form is submitted
    Then the "Invalid email format" error message should be shown for the "email" field
  @noerror
  Scenario: Email filled out and valid
    Given the "email" field is filled out with: "JustinoFigueiredo@email.com"
    When the form is submitted
    Then no error message should be shown for the "email" field



  @noerror
  Scenario Outline: All fields filled out and valid
    Given the fields are filled out with: "<name>", "<email>", "<website>", "<gender>"
    When the form is submitted
    Then no error message should be shown

    Examples:
      | name | email | website | gender |
      | Maria Albertina | maria@example.com | www.maria.com | female |
      | Justino Figueiredo | justino@example.pt | http://www.justino.pt | male |

    # Scenario Outline: All fields filled out and invalid
    @noerror
    Scenario Outline: All fields filled out and invalid
      Given the fields are filled out with: "<name>", "<email>", "<website>", "<gender>"
      When the form is submitted
      Then a error message should be shown

      Examples:
        | name | email | website | gender |
        | 111 | 111 | 111 | female |
        | 222 | 222 | 222 | male |