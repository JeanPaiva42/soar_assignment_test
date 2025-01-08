import { Page } from '@playwright/test';
import BasketPage from '../../pageComponents/pageComponents/BasketPage';

export const checkNumberOfItemsInTheBasket = async (page: Page): Promise<Number> => {
    const basketPage = new BasketPage(page);

    await page.waitForLoadState('networkidle');
    return Number(await (await basketPage.numberOfItemsInBasket()).textContent());
}

