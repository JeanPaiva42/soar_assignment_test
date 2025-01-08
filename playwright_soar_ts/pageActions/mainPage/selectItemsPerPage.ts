import { Page } from '@playwright/test';
import MainPage from "../../pageComponents/pageComponents/MainPage";

export const selectItemsPerPage = async (page: Page, numberOfItems: string): Promise<void> => {
    const mainPage = new MainPage(page);

    await (await mainPage.itemsPerPageDropdown()).click();
    await (await mainPage.selectItemsPerPageNumber(numberOfItems)).click();
}