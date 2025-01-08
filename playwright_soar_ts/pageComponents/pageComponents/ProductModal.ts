import { Locator, Page } from 'playwright-core';
import BaseComponent from '../../BaseComponent';

class ProductModal extends BaseComponent {

    constructor(page: Page) {
        super(page)
    }

    async reviewListButton(): Promise<Locator> {
        return (await this.page.getByRole('button', { name: 'Reviews (' }));
    }

    async closeProductModalButton(): Promise<Locator> {
        return (await this.page.getByLabel('Close Dialog'));
    }



}
export default ProductModal;