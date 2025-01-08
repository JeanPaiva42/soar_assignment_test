import { Page } from '@playwright/test';
import BasketPage from '../../pageComponents/pageComponents/BasketPage';

export const increaseFirstBasketItemCount = async (page: Page): Promise<void> => {
    const basketPage = new BasketPage(page);

    await (await basketPage.addItem()).click();
    await page.waitForLoadState('networkidle');
}