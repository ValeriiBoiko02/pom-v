import { Locator } from "@playwright/test";
import { BaseComponent } from "../base.component";

const DARK_THEME = 'dark'
const LIGHT_THEME = 'light'

type Theme = typeof DARK_THEME | typeof LIGHT_THEME

export class HeaderComponent extends BaseComponent {
    private readonly _logoElement: Locator
    private readonly _homeButton: Locator
    private readonly _projectsButton: Locator
    private readonly _contactsButton: Locator
    private readonly _themeButton: Locator

    constructor(container: Locator) {
        super(container)
        this._logoElement = this.container.locator('.logo')
        this._homeButton = this.container.getByRole('link', { name: 'Home' })
        this._projectsButton = this.container.getByRole('link', { name: 'Projects' })
        this._contactsButton = this.container.getByRole('link', { name: 'Contacts' })
        this._themeButton = this.container.locator('.dark-mode-btn')
    }

    get getLogoElement(){
        return this._logoElement
    }

    get getHomeButton(){
        return this._homeButton
    }
    
    get getProjectsButton(){
        return this._projectsButton
    }

    get getContactsButton(){
        return this._contactsButton
    }

    async turnOnTheme(theme: Theme) {
        const isDarkModeActive = await this._themeButton.evaluate((el) => el.classList.contains('dark-mode-btn--active'));
        if ((theme === DARK_THEME && !isDarkModeActive) || (theme === LIGHT_THEME && isDarkModeActive)) {
            await this._themeButton.click();
        }
    }
}
