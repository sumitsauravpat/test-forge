// Purpose — playwright-bdd steps have no `this`/World like traditional Cucumber; this fixture replaces it
import { test as base } from 'playwright-bdd';

export type BddFixtures = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  scenarioContext: Record<string, any>;
};

export const test = base.extend<BddFixtures>({
  // eslint-disable-next-line no-empty-pattern
  scenarioContext: async function ({}, use) {
    await use({});
  },
});
