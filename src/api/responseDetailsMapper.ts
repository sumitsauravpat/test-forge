import { ResponseDetailsResponse } from '../types/responseDetails.types';

// Purpose — translates the real server's field names (salesSummary/salesSummaryItems/
// ratePlanQuoteItemId/dueTodayNoTaxAmount/dueMonthlyNoTaxAmount) into our own, so no caller
// in this project ever reads the server's raw vocabulary. The negative-test error shape
// (bffError, no data/salesSummary at all) has nothing to remap, so it passes through untouched.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function mapResponseDetails(raw: any): ResponseDetailsResponse {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const mapped: any = { ...raw };

  if (raw?.data?.salesSummary) {
    mapped.data = {
      ...raw.data,
      planSummary: {
        state: raw.data.salesSummary.state,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        planSummaryItems: (raw.data.salesSummary.salesSummaryItems ?? []).map((item: any) => ({
          quoteItemId: item.ratePlanQuoteItemId,
          dueTodayAmount: item.dueTodayNoTaxAmount,
          dueMonthlyAmount: item.dueMonthlyNoTaxAmount,
        })),
      },
    };
    delete mapped.data.salesSummary;
  }

  return mapped;
}
