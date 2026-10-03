import { createBdd } from 'playwright-bdd';
import { test } from '../../src/fixtures/bddFixtures';
import { getAccessToken } from '../../src/api/authClient';
import { patchServicePlan, getResponseDetails } from '../../src/api/responseDetailsClient';
import { servicePlanBody } from '../../src/fixtures/servicePlanScenario';
import { expect } from '@playwright/test';

// Purpose — matches each responseDetails.feature line to the real API client functions, sharing data via scenarioContext
const { Given, When, Then } = createBdd(test);

Given('I have a valid access token', async ({ request, scenarioContext }) => {
  scenarioContext.token = await getAccessToken(request);
});

When('I patch a service plan with valid subscriber details', async ({ request, scenarioContext }) => {
  scenarioContext.response = await patchServicePlan(request, scenarioContext.token, servicePlanBody);
});

Then('the response should include a valid quoteId', async ({ scenarioContext }) => {
  expect(scenarioContext.response.data.quoteId).toBeTruthy();
});

Then(
  'the quoteId should match when I fetch the response details',
  async ({ request, scenarioContext }) => {
    const responseDetailsResponse = await getResponseDetails(
      request,
      scenarioContext.token,
      scenarioContext.response.data.quoteId,
    );
    expect(responseDetailsResponse.data.quoteId).toBe(scenarioContext.response.data.quoteId);
  },
);
