Feature: Response Details Service Plan Quote
  @smoke @regression
  Scenario: Creating a service plan quote generates a valid referenceId
    Given I have a valid access token
    When I patch a service plan with valid subscriber details
    Then the response should include a valid referenceId
    And the referenceId should match when I fetch the response details
