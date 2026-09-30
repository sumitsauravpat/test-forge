import { APIRequestContext } from '@playwright/test';
import { env } from '../config/env';
import { SalesSummaryResponse, PatchRatePlanResponse } from '../types/salesSummary.types';

// Purpose — this endpoint generates a brand-new real quoteId every call; tests chain that id into getSalesSummary
export async function patchRatePlan(
  request: APIRequestContext,
  token: string,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  body: any,
): Promise<PatchRatePlanResponse> {
  const response = await request.patch(`${env.baseUrl}/salesSummary/0/ratePlan`, {
    headers: {
      Authorization: `Bearer ${token}`,
      env: env.apiEnv,
      'x-mfe-env': env.mfeEnv,
      'x-mfe-transaction-id': env.mfeTransactionId,
    },
    data: body,
  });

  const value = await response.json();
  return value;
}

// Purpose — reads the quote created by patchRatePlan, used to verify the chained data actually matches
export async function getSalesSummary(
  request: APIRequestContext,
  token: string,
  quoteId: string,
): Promise<SalesSummaryResponse> {
  const response = await request.get(`${env.baseUrl}/salesSummary/${quoteId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
      env: env.apiEnv,
      'x-mfe-env': env.mfeEnv,
      'x-mfe-transaction-id': env.mfeTransactionId,
    },
  });

  const value = await response.json();
  return value;
}
