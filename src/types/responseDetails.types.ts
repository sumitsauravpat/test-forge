export interface BffAlert {
  code: string;
  message: string;
}

// Our own renamed shape — what every caller in this project sees
export interface ResponseDetailsItem {
  quoteItemId: string;
  dueTodayAmount: number;
  dueMonthlyAmount: number;
}

export interface ResponseDetailsResponse {
  successInd: boolean;
  status: number;
  bffAlerts?: BffAlert[];
  data: {
    quoteId: string;
    planSummary: {
      state: string;
      planSummaryItems: ResponseDetailsItem[];
    };
  };
}

export type PatchServicePlanResponse = ResponseDetailsResponse;
