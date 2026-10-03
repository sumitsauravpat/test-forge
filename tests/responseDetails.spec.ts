import { test, expect } from '@playwright/test';
import { getAccessToken } from '../src/api/authClient';
import { patchServicePlan, getResponseDetails } from '../src/api/responseDetailsClient';
import { servicePlanBody } from '../src/fixtures/servicePlanScenario';

test('creates a quote and verifies the response details match', async ({ request }) => {
  const token = await getAccessToken(request);
  const patchServicePlanResponse = await patchServicePlan(request, token, servicePlanBody);

  const referenceId = patchServicePlanResponse.data.referenceId;
  const responseDetailsResponse = await getResponseDetails(request, token, referenceId);
  expect(responseDetailsResponse.successInd).toBe(true);
  expect(responseDetailsResponse.status).toBe(200);
  expect(responseDetailsResponse.data.referenceId).toBe(referenceId);
});
