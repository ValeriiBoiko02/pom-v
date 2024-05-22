import { test, expect } from '../utils/test.fixtures'

test.describe('Header', {tag:'@header'}, () => {

    test.describe('Header logo', () => {

      test('Logo is visible', async ({ homePage }) => {
        expect(await homePage.headerComponent.isLogoVisible()).toBe(true);
      });
    })

    test.describe('Header buttons are visible', () => {

      test('Home button is visible',async ({ homePage }) => {
        expect(await homePage.headerComponent.isHomeButtonVisible()).toBe(true);
      });

      test('Projects button is visible', async ({ homePage }) => {
        expect(await homePage.headerComponent.isProjectsButtonVisible()).toBe(true);
      });

      test('Contacts button is visible', async ({ homePage }) => {
        expect(await homePage.headerComponent.isContactsButtonVisible()).toBe(true);
      });
    })

    test.describe('Dark and Light theme', () => {

      test('Switch to the dark theme', async ({ homePage }) => {
        await homePage.headerComponent.turnOnTheme('dark')
        expect(await homePage.isDarkThemeActive()).toBe(true);
      });

      test('Switch to the light theme', async ({ homePage }) => {
        await homePage.headerComponent.turnOnTheme('light')
        expect(await homePage.isDarkThemeActive()).toBe(false);
      });
    })
  })