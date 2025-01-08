import { Locator, Page } from 'playwright-core';
import BaseComponent from '../../BaseComponent';

class LoginPage extends BaseComponent {

    constructor(page: Page) {
        super(page)
    }

    async emailInputField(): Promise<Locator> {
        return (await this.page.locator('#email'));
    }

    async passwordInputField(): Promise<Locator> {
        return (await this.page.locator('#password'));
    }

    async loginButton(): Promise<Locator> {
        return (await this.page.locator('#loginButton'));
    }
}

export default LoginPage;