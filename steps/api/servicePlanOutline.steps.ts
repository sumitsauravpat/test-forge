import { createBdd } from 'playwright-bdd';
import { test } from '../../src/fixtures/bddFixtures';
import { patchServicePlan } from '../../src/api/responseDetailsClient';
import { servicePlanBody } from '../../src/fixtures/servicePlanScenario';
import { servicePlanValues } from '../../src/fixtures/servicePlanValues';

const { When } = createBdd(test);

When(
  'I patch a service plan with offering {string}',
  async ({ request, scenarioContext }, offeringLabel) => {
    const offeringId = servicePlanValues[offeringLabel as keyof typeof servicePlanValues];

    const patchedBody = {
      ...servicePlanBody,
      subscriberRatePlan: [
        { ...servicePlanBody.subscriberRatePlan[0], ratePlanProductOfferingId: offeringId },
      ],
    };

    scenarioContext.response = await patchServicePlan(request, scenarioContext.token, patchedBody);
  },
);
