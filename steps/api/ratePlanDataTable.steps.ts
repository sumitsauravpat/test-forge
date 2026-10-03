import { createBdd } from 'playwright-bdd';
import { test } from '../../src/fixtures/bddFixtures';
import { patchRatePlan } from '../../src/api/salesSummaryClient';
import { ratePlanBody } from '../../src/fixtures/ratePlanScenario';

const { When } = createBdd(test);

When(
  'I patch a rate plan with the following details:',
  async ({ request, scenarioContext }, dataTable) => {
    const value = dataTable.rowsHash();

    const patchedBody = {
      ...ratePlanBody,
      distributionChannelId: value.distributionChannelId,
      customerCategoryId: value.customerCategoryId,
      subscriberRatePlan: [
        {
          ...ratePlanBody.subscriberRatePlan[0],
          ratePlanProductOfferingId: value.ratePlanProductOfferingId,
        },
      ],
    };

    scenarioContext.response = await patchRatePlan(request, scenarioContext.token, patchedBody);
  },
);
