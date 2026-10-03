import { test, expect } from '@playwright/test';
import { getAccessToken } from '../src/api/authClient';
import { createItemQuote } from '../src/api/itemQuoteClient';
import { itemQuoteBody } from '../src/fixtures/itemQuoteScenario';

test('validates the real createItemQuote call', async ({ request }) => {
  const token = await getAccessToken(request);
  const result = await createItemQuote(request, token, itemQuoteBody);
  expect(result.successInd).toBe(true);
  expect(result.status).toBe(200);
  expect(result.data.referenceId).toBeTruthy();
});
