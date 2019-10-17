import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  fillFieldAdd(text) {
    element(by.css('todo-form input')).sendKeys(text);
  }

  submitForm() {
    element(by.css('todo-form button')).click();
  }

  getFirstTodoText() {
    return element(by.css('todo-item:first-of-type span')).getText()
  }
}
