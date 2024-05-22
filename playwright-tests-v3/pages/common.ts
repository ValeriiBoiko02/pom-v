import { Page } from "@playwright/test";

export const navigate = async (page: Page, url: string = '/') => {
  await page.goto(url)
}

export const isDarkThemeActive = async (page: Page) => {
  const bodyClassAttribute = await page.locator('body').getAttribute('class');
  if (bodyClassAttribute === null) {
    return false
  }
  return bodyClassAttribute.includes('dark');
}