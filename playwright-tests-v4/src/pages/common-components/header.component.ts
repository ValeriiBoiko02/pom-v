import { BaseComponent } from '../base.component';

const DARK_THEME = 'dark';
const LIGHT_THEME = 'light';

type Theme = typeof DARK_THEME | typeof LIGHT_THEME;

export class HeaderComponent extends BaseComponent {
  get getLogoLocator() {
    return this.container.locator('.logo');
  }
  get getHomeButtonLocator() {
    return this.container.getByRole('link', { name: 'Home' });
  }
  get getProjectsButtonLocator() {
    return this.container.getByRole('link', { name: 'Projects' });
  }
  get getContactsButtonLocator() {
    return this.container.getByRole('link', { name: 'Contacts' });
  }
  get getThemeButtonLocator() {
    return this.container.locator('.dark-mode-btn');
  }

  async turnOnTheme(theme: Theme) {
    const isDarkModeActive = await this.getThemeButtonLocator.evaluate((el) =>
      el.classList.contains('dark-mode-btn--active'),
    );
    if (
      (theme === DARK_THEME && !isDarkModeActive) ||
      (theme === LIGHT_THEME && isDarkModeActive)
    ) {
      await this.getThemeButtonLocator.click();
    }
  }
}
