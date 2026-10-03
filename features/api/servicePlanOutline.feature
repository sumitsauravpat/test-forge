Feature: Service Plan Patch Across Multiple Offerings
  @regression
  Scenario Outline: Validate the Service Plan patch Response of multiple service plan offering id's.
    Given I have a valid access token
    When I patch a service plan with offering "<servicePlanOfferingId>"
    Then the response should include a valid quoteId

  Examples:
     | servicePlanOfferingId |
     | defaultOffering       |
     | invalidOffering       |
