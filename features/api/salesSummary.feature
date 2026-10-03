Feature: Sales Summary Rate Plan Quote
  @smoke @regression
  Scenario: Creating a rate plan quote generates a valid quoteId
    Given I have a valid access token
    When I patch a rate plan with valid subscriber details
    Then the response should include a valid quoteId
    And the quoteId should match when I fetch the sales summary
