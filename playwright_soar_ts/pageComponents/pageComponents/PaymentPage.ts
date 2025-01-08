import { Locator, Page } from 'playwright-core';
import BaseComponent from '../../BaseComponent';

class PaymentPage extends BaseComponent {

    constructor(page: Page) {
        super(page)
    }

    async continueButton(): Promise<Locator> {
        return (await this.page.locator('[aria-label="Proceed to review"]'));
    }

    async addNewCardSpan(): Promise<Locator> {
        return (await this.page.locator('span').filter({ hasText: "Add new card" }));
    }

    async cardNameInput(): Promise<Locator> {
        return await this.page.locator('div').filter({ hasText: /^Name \*$/ }).nth(2);
    }

    async cardNumberInput(): Promise<Locator> {
        return (await this.page.locator('div').filter({ hasText: /^Card Number \*$/ }).nth(1));
    }

    async expirationMonthInput(): Promise<Locator> {
        return (await this.page.getByLabel('Expiry Month *'));
    }

    async expirationYearInput(): Promise<Locator> {
        return (await this.page.getByLabel('Expiry Year *'));
    }

    async submitNewCardButton(): Promise<Locator> {
        return (await this.page.locator('#submitButton'));
    }

    async firstCardOptionRadio(): Promise<Locator> {
        return (await this.page.locator('mat-row').nth(0).locator('.mat-radio-outer-circle'));
    }
    async continuePaymentButton(): Promise<Locator> {
        return (await this.page.locator('[aria-label="Proceed to review"]'));
    }

}

export default PaymentPage;