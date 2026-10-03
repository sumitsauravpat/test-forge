Feature: Negative Response Details Validation of invalid QuoteId
  @regression
  Scenario: To validate test Response Details of invalid QuoteId
    Given I have a valid access token
    When I fetch the Response Details using an invalid or nonexistent quoteId.
    Then the response of Response Details should be 404 for invalid quoteId
    And the error body of response should be "notFoundErrorCode"
