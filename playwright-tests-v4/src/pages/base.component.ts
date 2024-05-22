import { Locator } from '@playwright/test';

export class BaseComponent {
  readonly container: Locator;

  constructor(container: Locator) {
    this.container = container;
  }
}
