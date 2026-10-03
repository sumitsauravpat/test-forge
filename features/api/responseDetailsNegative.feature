Feature: Negative Response Details Validation of invalid ReferenceId
  @regression
  Scenario: To validate test Response Details of invalid ReferenceId
    Given I have a valid access token
    When I fetch the Response Details using an invalid or nonexistent referenceId.
    Then the response of Response Details should be 404 for invalid referenceId
    And the error body of response should be "notFoundErrorCode"
