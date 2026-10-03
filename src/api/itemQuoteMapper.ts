import { ItemQuoteResponse } from '../types/itemQuote.types';

// Purpose — translates the real server's data.quoteId into our own data.referenceId
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function mapItemQuote(raw: any): ItemQuoteResponse {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const mapped: any = { ...raw };

  if (raw?.data) {
    mapped.data = {
      ...raw.data,
      referenceId: raw.data.quoteId,
    };
    delete mapped.data.quoteId;
  }

  return mapped;
}
