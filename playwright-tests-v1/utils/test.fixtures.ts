import { test as baseTest, expect } from '@playwright/test';
import { HomePage } from '../pages/home/home.page';
import { Page } from '@playwright/test';

export const test = baseTest.extend<{ homePage: HomePage }>({
  homePage: async ({ page }: { page: Page }, use) => {
    const homePage = new HomePage(page);
    await homePage.open();
    await use(homePage);
  },
});

export { expect };