import { Page } from "@playwright/test";
import { HeaderComponent } from "./common-components/header.component";

export class BasePage {
    readonly page: Page
    readonly headerComponent: HeaderComponent

    constructor(page: Page) {
        this.page = page
        this.headerComponent = new HeaderComponent(this.page.locator('.nav'))
    }

    protected async navigate(url: string): Promise<void> {
        await this.page.goto(url);
    }

    async isDarkThemeActive(): Promise<boolean> {
        const bodyClassAttribute = await this.page.locator('body').getAttribute('class');
        if (bodyClassAttribute === null) {
          return false
        }
        return bodyClassAttribute.includes('dark');
      }
}