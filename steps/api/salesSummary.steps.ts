import { createBdd } from 'playwright-bdd';
import { test } from '../../src/fixtures/bddFixtures';
import { getAccessToken } from '../../src/api/authClient';
import { patchRatePlan, getSalesSummary } from '../../src/api/salesSummaryClient';
import { ratePlanBody } from '../../src/fixtures/ratePlanScenario';
import { expect } from '@playwright/test';

// Purpose — matches each salesSummary.feature line to the real API client functions, sharing data via scenarioContext
const { Given, When, Then } = createBdd(test);

Given('I have a valid access token', async ({ request, scenarioContext }) => {
  scenarioContext.token = await getAccessToken(request);
});

When('I patch a rate plan with valid subscriber details', async ({ request, scenarioContext }) => {
  scenarioContext.response = await patchRatePlan(request, scenarioContext.token, ratePlanBody);
});

Then('the response should include a valid quoteId', async ({ scenarioContext }) => {
  expect(scenarioContext.response.data.quoteId).toBeTruthy();
});

Then(
  'the quoteId should match when I fetch the sales summary',
  async ({ request, scenarioContext }) => {
    const salesSummaryResponse = await getSalesSummary(
      request,
      scenarioContext.token,
      scenarioContext.response.data.quoteId,
    );
    expect(salesSummaryResponse.data.quoteId).toBe(scenarioContext.response.data.quoteId);
  },
);
