import { createBdd } from 'playwright-bdd';
import { test } from '../../src/fixtures/bddFixtures';
import { patchServicePlan } from '../../src/api/responseDetailsClient';
import { servicePlanBody } from '../../src/fixtures/servicePlanScenario';
import { servicePlanValues } from '../../src/fixtures/servicePlanValues';

const { When } = createBdd(test);

function resolveLabel(label: string): string {
  return servicePlanValues[label as keyof typeof servicePlanValues];
}

When(
  'I patch a service plan with the following details:',
  async ({ request, scenarioContext }, dataTable) => {
    const value = dataTable.rowsHash();

    const patchedBody = {
      ...servicePlanBody,
      distributionChannelId: resolveLabel(value.distributionChannelId),
      customerCategoryId: resolveLabel(value.customerCategoryId),
      planItems: [
        {
          ...servicePlanBody.planItems[0],
          offeringId: resolveLabel(value.offeringId),
        },
      ],
    };

    scenarioContext.response = await patchServicePlan(request, scenarioContext.token, patchedBody);
  },
);
