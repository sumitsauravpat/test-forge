import { APIRequestContext } from '@playwright/test';
import { env } from '../config/env';
import { ResponseDetailsResponse, PatchServicePlanResponse } from '../types/responseDetails.types';
import { mapResponseDetails } from './responseDetailsMapper';

// Purpose — this endpoint generates a brand-new real referenceId every call; tests chain that id into getResponseDetails
export async function patchServicePlan(
  request: APIRequestContext,
  token: string,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  body: any,
): Promise<PatchServicePlanResponse> {
  const response = await request.patch(`${env.baseUrl}/salesSummary/0/ratePlan`, {
    headers: {
      Authorization: `Bearer ${token}`,
      env: env.environment,
      'x-service-env': env.serviceEnv,
      'x-transaction-id': env.transactionId,
    },
    data: body,
  });

  const value = await response.json();
  return mapResponseDetails(value);
}

// Purpose — reads the quote created by patchServicePlan, used to verify the chained data actually matches
export async function getResponseDetails(
  request: APIRequestContext,
  token: string,
  referenceId: string,
): Promise<ResponseDetailsResponse> {
  const response = await request.get(`${env.baseUrl}/salesSummary/${referenceId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
      env: env.environment,
      'x-service-env': env.serviceEnv,
      'x-transaction-id': env.transactionId,
    },
  });

  const value = await response.json();
  return mapResponseDetails(value);
}
