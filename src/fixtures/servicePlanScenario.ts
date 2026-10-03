import { servicePlanValues } from './servicePlanValues';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const servicePlanBody: any = {
  planItems: [
    {
      businessGroupId: servicePlanValues.businessGroupId,
      offeringId: servicePlanValues.defaultOffering,
      marketingBundleId: servicePlanValues.marketingBundleId,
      action: 'PATCH',
      planTerm: 'Monthly',
      productInventoryInstanceId: '',
      addressQualificationId: '',
    },
  ],
  quoteId: '',
  billingAccountNumber: '',
  distributionChannelId: servicePlanValues.defaultChannel,
  customerCategoryId: servicePlanValues.defaultCategory,
  brandName: 'TestBrand',
  marketId: servicePlanValues.marketId,
  customerId: '',
  mobileServiceList: '',
  homeServiceList: '',
  channelInfo: {
    role: 'User',
    channelContributionCode: '',
    orgTypeCode: 'DL',
    orgInternalId: servicePlanValues.orgInternalId,
    orgNumber: servicePlanValues.orgNumber,
    outletProvinces: ['ON'],
    loginId: servicePlanValues.loginId,
    repId: servicePlanValues.repId,
    repInternalId: servicePlanValues.repInternalId,
    repOutlets: [
      { outletInternalId: servicePlanValues.outletInternalId, outletId: servicePlanValues.outletId },
    ],
    repLanguage: 'EN',
    assistedChannel: true,
  },
  apiVersionName: 'active',
  extendedParameters: { preAuthorizedPaymentMethod: ['PAC'] },
  productFamilyName: 'Mobility',
  multiCartInd: false,
};
