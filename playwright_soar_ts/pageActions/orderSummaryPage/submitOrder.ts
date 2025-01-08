import { Page } from '@playwright/test';
import OrderSummaryPage from '../../pageComponents/pageComponents/OrderSummaryPage';

export const submitOrder = async (page: Page): Promise<void> => {
    const orderSummaryPage = new OrderSummaryPage(page);

    await page.waitForLoadState('networkidle');
    await (await orderSummaryPage.checkoutOrderButton()).click();
    await page.waitForLoadState('networkidle');
}