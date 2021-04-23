import { browser, by, element, WebElement } from 'protractor';

export class AppPage {
  async navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl);
  }

  async getAppElement(cssSelector: string): Promise<WebElement> {
    return element(by.css(cssSelector)).getWebElement();
  }

  async getMultipleElements(cssSelector: string): Promise<WebElement[]> {
    return element(by.css('body')).findElements(cssSelector)
  }
}
