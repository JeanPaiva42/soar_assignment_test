import { Page } from '@playwright/test';
import BasketPage from '../../pageComponents/pageComponents/BasketPage';

export const deleteItemFromBasket = async (page: Page, productName: string): Promise<void> => {
    const basketPage = new BasketPage(page);

    await page.waitForLoadState('networkidle');
    await (await basketPage.deleteItem()).click();
    await (await basketPage.basketItemName(productName)).waitFor({ state: 'detached' });
    await page.waitForLoadState('networkidle');
}
