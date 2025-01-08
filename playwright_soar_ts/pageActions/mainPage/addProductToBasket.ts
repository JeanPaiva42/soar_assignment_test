import { expect, Page } from '@playwright/test';
import MainPage from "../../pageComponents/pageComponents/MainPage";

export const addProductToBasket = async (page: Page, productName: string): Promise<void> => {
    const mainPage = new MainPage(page);

    await (await mainPage.addProductToBasket(productName)).click(); 
    await page.waitForLoadState('networkidle');
}