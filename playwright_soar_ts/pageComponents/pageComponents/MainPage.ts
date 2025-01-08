import { Locator, Page } from 'playwright-core';
import BaseComponent from '../../BaseComponent';

class MainPage extends BaseComponent {

    constructor(page: Page) {
        super(page)
    }

    async itemsPerPageDropdown(): Promise<Locator> {
        return (await this.page.locator('mat-select[role="combobox"]'));
    }

    async selectItemsPerPageNumber(itemsPerPageNumber: string): Promise<Locator> {
        return (await this.page.locator('mat-option').getByText(itemsPerPageNumber));
    }

    async nextItemsPageButton(): Promise<Locator> {
        return (await this.page.getByLabel('Next page'));
    }

    async previousItemsPageButton(): Promise<Locator> {
        return (await this.page.getByLabel('Previous page'));
    }

    async getProductItem(productName: string): Promise<Locator> {
        return (await this.page.locator('mat-card').filter({ hasText: productName }));
    }

    async addProductToBasket(productName: string): Promise<Locator> {
        return (await this.page.locator('mat-card').filter({ hasText: productName }).locator('[aria-label="Add to Basket"]'));
    }

    async basketButton(): Promise<Locator> {
        return (await this.page.locator('[aria-label="Show the shopping cart"]'));
    }

    async itemAddedToBasketToast(): Promise<Locator> {
        return (await this.page.locator('snack-bar-container'));
    }

    async closeAddItemToBasketToastButton(): Promise<Locator> {
        return (await this.page.getByRole('button', { name: 'X', exact: true }));
    }
}

export default MainPage;