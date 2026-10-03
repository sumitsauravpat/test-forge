Feature: Service Plan Patch With Table-Driven Subscriber Details
  @regression
  Scenario: Patch a service plan using subscriber details provided as a table
    Given I have a valid access token
    When I patch a service plan with the following details:
      | distributionChannelId     | defaultChannel  |
      | customerCategoryId        | defaultCategory |
      | ratePlanProductOfferingId | defaultOffering |
    Then the response should include a valid quoteId
