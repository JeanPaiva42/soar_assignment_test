import { Locator, Page } from 'playwright-core';
import BaseComponent from '../../BaseComponent';

class DeliveryPage extends BaseComponent {

    constructor(page: Page) {
        super(page)
    }

    async continueButton(): Promise<Locator> {
        return (await this.page.locator('[aria-label="Proceed to delivery method selection"]'));
    }

    async firstShippintOptionRadio(): Promise<Locator> {
        return (await this.page.locator('mat-row').nth(0));
    }
}

export default DeliveryPage;