import { Page } from '@playwright/test';
import MainPage from "../../pageComponents/pageComponents/MainPage";

// this action now simply waits for the item to be added on the basket, by moving too fast we were risking entering the bastket too fast.
export const closeProductAddedToBasketToast = async (page: Page): Promise<void> => {
    const mainPage = new MainPage(page);

    await (await mainPage.closeAddItemToBasketToastButton()).waitFor({ state: 'detached' });
    await page.waitForLoadState('networkidle');
}