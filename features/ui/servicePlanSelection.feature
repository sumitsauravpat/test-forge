Feature: Validate the RatePlan and clicking Add now on BYOD page

  Scenario: Validate the RatePlan card priciing details and click the Add button on rateplan.
    Given I have sucessfully open the exampleservice page
    And validate the pricing of the rateplan card with $45 per mo
    When  I  click on the Add now button on the rateplan card
    Then validate the pop up window
