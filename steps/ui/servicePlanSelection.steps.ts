import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { CustomWorld } from './hooks';
import { env } from '../../src/config/env';

Given('I have successfully opened the plan selection page', async function (this: CustomWorld) {
  await this.page.goto(env.uiTestBaseUrl);
});

Given(
  'validate the pricing of the service plan card with $45 per mo',
  async function (this: CustomWorld) {
    await expect(this.page.getByRole('group', { name: '45 $' })).toBeVisible({ timeout: 15000 });
  },
);

When('I click on the Add now button on the service plan card', async function (this: CustomWorld) {
  await this.page.getByTestId('mfe-rate-plan-select-button').first().click();
});

Then('validate the pop up window', async function (this: CustomWorld) {
  await expect(
    this.page.getByRole('heading', { name: 'Are you joining as a new customer?' }),
  ).toBeVisible();
});
