import { servicePlanValues } from './servicePlanValues';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const itemQuoteBody: any = {
  skus: [servicePlanValues.itemSku],
  paymentOption: servicePlanValues.itemPaymentOption,
  warranty: servicePlanValues.itemWarranty,
  serviceCode: servicePlanValues.itemServiceCode,
  brandName: 'TestBrand',
  channelId: servicePlanValues.itemChannelId,
  marketSegmentId: servicePlanValues.itemMarketSegment,
  customerCategoryId: servicePlanValues.defaultCategory,
  channelInfo: {
    role: 'User',
    repId: servicePlanValues.itemRepId,
    repInternalId: servicePlanValues.itemRepInternalId,
    channelContributionCode: '',
    repLanguage: 'en',
    repOutlets: [
      { outletId: servicePlanValues.itemOutletId, outletInternalId: servicePlanValues.itemOutletInternalId },
    ],
    orgNumber: servicePlanValues.itemOrgNumber,
    orgTypeCode: 'Dir',
    outletProvinces: ['ON'],
    salesPresence: '',
    storeId: '0000',
    orgInternalId: servicePlanValues.itemOrgInternalId,
    employeeId: null,
  },
};
