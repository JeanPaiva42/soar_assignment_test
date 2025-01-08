import { Locator, Page } from 'playwright-core';
import BaseComponent from '../../BaseComponent';

class MainPage extends BaseComponent {

    constructor(page: Page) {
        super(page)
    }

    // for the first product
    async deleteItem(): Promise<Locator> {
        return (await this.page.locator('[data-icon="trash-alt"]').nth(0));
    }

    // for the first product
    async addItem(): Promise<Locator> {
        return (await this.page.locator('[data-icon="plus-square"]').nth(0));
    }

    // for the first product
    async removeItem(): Promise<Locator> {
        return (await this.page.locator('[data-icon="minus-square"]').nth(0));
    }

    async priceText(): Promise<Locator> {
        return (await this.page.locator('#price'));
    }

    async checkoutButton(): Promise<Locator> {
        return (await this.page.locator('#checkoutButton'));
    }

    async basketItemName(productName: string): Promise<Locator> {
        return (await this.page.locator('mat-cell').filter({ hasText: productName }));
    }

    async numberOfItemsInBasket(): Promise<Locator> {
        return (await this.page.locator('.warn-notification'));
    }


}

export default MainPage;