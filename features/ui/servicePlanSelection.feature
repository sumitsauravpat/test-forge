Feature: Validate the Service Plan and clicking Add now on BYOD page

  Scenario: Validate the Service Plan card pricing details and click the Add button on the plan.
    Given I have successfully opened the plan selection page
    And validate the pricing of the service plan card with $45 per mo
    When I click on the Add now button on the service plan card
    Then validate the pop up window
