export interface BffAlert {
  code: string;
  message: string;
}

export interface SalesSummaryItem {
  ratePlanQuoteItemId: string;
  dueTodayNoTaxAmount: number;
  dueMonthlyNoTaxAmount: number;
}

export interface SalesSummaryResponse {
  successInd: boolean;
  status: number;
  bffAlerts?: BffAlert[];
  data: {
    quoteId: string;
    salesSummary: {
      state: string;
      salesSummaryItems: SalesSummaryItem[];
    };
  };
}

export type PatchRatePlanResponse = SalesSummaryResponse;
