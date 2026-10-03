import { createBdd } from 'playwright-bdd';
import { test } from '../../src/fixtures/bddFixtures';
import { patchRatePlan } from '../../src/api/salesSummaryClient';
import { ratePlanBody } from '../../src/fixtures/ratePlanScenario';

const { When } = createBdd(test);

When(
  'I patch a rate plan with offering {string}',
  async ({ request, scenarioContext }, offeringId) => {
    const patchedBody = {
      ...ratePlanBody,
      subscriberRatePlan: [
        { ...ratePlanBody.subscriberRatePlan[0], ratePlanProductOfferingId: offeringId },
      ],
    };

    scenarioContext.response = await patchRatePlan(request, scenarioContext.token, patchedBody);
  },
);
