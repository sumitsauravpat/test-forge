Feature: Rate Plan Patch With Table-Driven Subscriber Details
  @regression
  Scenario: Patch a rate plan using subscriber details provided as a table
    Given I have a valid access token
    When I patch a rate plan with the following details:
      | distributionChannelId     | CPMS_CHANNELORGCODE_01799            |
      | customerCategoryId        | d4f04e79-85bc-4233-87df-04838f140ccb |
      | ratePlanProductOfferingId | 2b9bece6-e1e0-4a89-917d-2b02b2cee8bc |
    Then the response should include a valid quoteId
