import { Locator, Page } from 'playwright-core';
import BaseComponent from '../../BaseComponent';

class OrderSummaryPage extends BaseComponent {

    constructor(page: Page) {
        super(page)
    }

    async checkoutOrderButton(): Promise<Locator> {
        return (await this.page.locator('#checkoutButton'));
    }

    async confirmationText(): Promise<Locator> {
        return (await this.page.locator('.confirmation'));
    }

}

export default OrderSummaryPage;