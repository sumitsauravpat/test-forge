export interface BffAlert {
  code: string;
  message: string;
}

export interface ResponseDetailsItem {
  ratePlanQuoteItemId: string;
  dueTodayNoTaxAmount: number;
  dueMonthlyNoTaxAmount: number;
}

export interface ResponseDetailsResponse {
  successInd: boolean;
  status: number;
  bffAlerts?: BffAlert[];
  data: {
    quoteId: string;
    salesSummary: {
      state: string;
      salesSummaryItems: ResponseDetailsItem[];
    };
  };
}

export type PatchServicePlanResponse = ResponseDetailsResponse;
