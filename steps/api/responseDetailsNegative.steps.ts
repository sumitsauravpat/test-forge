import { createBdd } from 'playwright-bdd';
import { test } from '../../src/fixtures/bddFixtures';
import { getResponseDetails } from '../../src/api/responseDetailsClient';
import { servicePlanValues } from '../../src/fixtures/servicePlanValues';
import { expect } from '@playwright/test';

const { When, Then } = createBdd(test);

When(
  'I fetch the Response Details using an invalid or nonexistent quoteId.',
  async ({ request, scenarioContext }) => {
    scenarioContext.responseInvalid = await getResponseDetails(
      request,
      scenarioContext.token,
      '494c4624-f425-4343-aaf4-ddef10dbde28',
    );
  },
);

Then(
  'the response of Response Details should be 404 for invalid quoteId',
  async ({ scenarioContext }) => {
    expect(scenarioContext.responseInvalid.status).toBe(404);
  },
);

Then(
  'the error body of response should be {string}',
  async ({ scenarioContext }, errorCodeLabel) => {
    const expectedCode = servicePlanValues[errorCodeLabel as keyof typeof servicePlanValues];
    expect(scenarioContext.responseInvalid.bffError.code).toBe(expectedCode);
  },
);
