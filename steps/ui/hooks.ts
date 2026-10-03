import {
  After,
  Before,
  BeforeAll,
  World,
  setWorldConstructor,
  AfterAll,
  setDefaultTimeout,
} from '@cucumber/cucumber';
import { chromium, Browser, Page } from '@playwright/test';

setDefaultTimeout(60000);

let browser: Browser;

BeforeAll(async () => {
  browser = await chromium.launch();
});

export class CustomWorld extends World {
  page!: Page;
}

setWorldConstructor(CustomWorld);

Before(async function (this: CustomWorld) {
  this.page = await browser.newPage();
});

After(async function (this: CustomWorld) {
  await this.page.close();
});

AfterAll(async function () {
  await browser.close();
});
