import { Page } from "@playwright/test"

// Locators
export const getLogoElement = (page:Page) => page.locator('.logo')
export const getHomeButton = (page:Page) => page.getByRole('link', { name: 'Home' })
export const getProjectsButton = (page:Page) => page.getByRole('link', { name: 'Projects' })
export const getContactsButton = (page:Page) => page.getByRole('link', { name: 'Contacts' })
export const getThemeButton = (page:Page) => page.locator('.dark-mode-btn')

export const turnOnTheme = async (page: Page, theme: 'dark'|'light') =>{
    const isDarkModeActive = await getThemeButton(page).evaluate((el) => el.classList.contains('dark-mode-btn--active'));
        if ((theme === 'dark' && !isDarkModeActive) || (theme === 'light' && isDarkModeActive)) {
            await getThemeButton(page).click();
        }
} 