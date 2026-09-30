import { test, expect } from '@playwright/test';
import { getAccessToken } from '../src/api/authClient';
import { patchRatePlan, getSalesSummary } from '../src/api/salesSummaryClient';
import { ratePlanBody } from '../src/fixtures/ratePlanScenario';

test('creates a quote and verifies the sales summary matches', async ({ request }) => {
  const token = await getAccessToken(request);
  const patchRatePlanResponse = await patchRatePlan(request, token, ratePlanBody);

  const quoteId = patchRatePlanResponse.data.quoteId;
  const salesSummaryResponse = await getSalesSummary(request, token, quoteId);
  expect(salesSummaryResponse.successInd).toBe(true);
  expect(salesSummaryResponse.status).toBe(200);
  expect(salesSummaryResponse.data.quoteId).toBe(quoteId);
});
