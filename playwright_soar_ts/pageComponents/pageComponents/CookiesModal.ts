import { Locator, Page } from 'playwright-core';
import BaseComponent from '../../BaseComponent';

class CookiesModal extends BaseComponent {

    constructor(page: Page) {
        super(page)
    }

    async dismissCookiesModalButton(): Promise<Locator> {
        return (await this.page.getByLabel('dismiss cookie message'));
    }
}

export default CookiesModal;