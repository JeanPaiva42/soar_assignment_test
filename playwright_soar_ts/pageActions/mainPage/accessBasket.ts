import { expect, Page } from '@playwright/test';
import MainPage from "../../pageComponents/pageComponents/MainPage";

export const accessBasket = async (page: Page): Promise<void> => {
    const mainPage = new MainPage(page);
    await page.waitForLoadState('networkidle');
    
    await (await mainPage.basketButton()).click();
    await page.waitForLoadState('networkidle');
}