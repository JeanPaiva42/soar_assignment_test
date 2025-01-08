import { Locator, Page } from 'playwright-core';
import BaseComponent from '../../BaseComponent';

class WelcomeModal extends BaseComponent {

    constructor(page: Page) {
        super(page)
    }

    async dismissWelcomeModalButton(): Promise<Locator> {
        return (await this.page.getByLabel('Close Welcome Banner'));
    }
}

export default WelcomeModal;