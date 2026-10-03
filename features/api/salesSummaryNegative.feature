Feature: Negative-Sales Summary Response Validation of invalid QuoteId
  @regression
  Scenario: To validate test Sales Summary Response of invalid  QuoteId
    Given I have a valid access token
    When I fetch the Sales Summary Response using an invalid or nonexistent quoteId.
    Then the response of Sales Summary should be 404 for invalid quoteId
    And the error body of response should be "BFF-QUOTE-NOT-FOUND"
