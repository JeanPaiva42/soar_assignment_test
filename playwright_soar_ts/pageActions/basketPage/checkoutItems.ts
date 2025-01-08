import { Page } from '@playwright/test';
import BasketPage from '../../pageComponents/pageComponents/BasketPage';

export const checkoutItems = async (page: Page): Promise<void> => {
    const basketPage = new BasketPage(page);

    await (await basketPage.checkoutButton()).waitFor({ state: 'visible' });
    await (await basketPage.checkoutButton()).click();
    await page.waitForLoadState('networkidle');
}