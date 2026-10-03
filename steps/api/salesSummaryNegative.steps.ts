import { createBdd } from 'playwright-bdd';
import { test } from '../../src/fixtures/bddFixtures';
import { getSalesSummary } from '../../src/api/salesSummaryClient';
import { expect } from '@playwright/test';

const { When, Then } = createBdd(test);

When(
  'I fetch the Sales Summary Response using an invalid or nonexistent quoteId.',
  async ({ request, scenarioContext }) => {
    scenarioContext.responseInvalid = await getSalesSummary(
      request,
      scenarioContext.token,
      '494c4624-f425-4343-aaf4-ddef10dbde28',
    );
  },
);

Then(
  'the response of Sales Summary should be 404 for invalid quoteId',
  async ({ scenarioContext }) => {
    expect(scenarioContext.responseInvalid.status).toBe(404);
  },
);

Then('the error body of response should be "BFF-QUOTE-NOT-FOUND"', async ({ scenarioContext }) => {
  expect(scenarioContext.responseInvalid.bffError.code).toBe('BFF-QUOTE-NOT-FOUND');
});
