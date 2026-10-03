Feature: Rate Plan Patch Across Multiple Offerings
  @regression
  Scenario Outline: Validate the Rateplan patch  Response of multiple rateplan offering id's.
    Given I have a valid access token
    When I patch a rate plan with offering "<ratePlanProductOfferingId>"
    Then the response should include a valid quoteId

  Examples:
     | ratePlanProductOfferingId |
     | 2b9bece6-e1e0-4a89-917d-2b02b2cee8bc |
     | 2b9bece6-e1e0-4a89-917d-2b02b2cee999 |
