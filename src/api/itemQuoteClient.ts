import { APIRequestContext } from '@playwright/test';
import { env } from '../config/env';
import { ItemQuoteResponse } from '../types/itemQuote.types';

// Purpose — the third real endpoint from the original Postman collection; creates a device/item quote
export async function createItemQuote(
  request: APIRequestContext,
  token: string,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  body: any,
): Promise<ItemQuoteResponse> {
  const response = await request.post(env.itemQuoteUrl, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    data: body,
  });

  const value = await response.json();
  return value;
}
