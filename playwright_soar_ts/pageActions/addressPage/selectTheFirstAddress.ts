import { Page } from '@playwright/test';
import AddressPage from '../../pageComponents/pageComponents/AddressPage';

export const selectTheFirstAddress = async (page: Page, addressObject: any): Promise<void> => {
    const addressPage = new AddressPage(page);

    await (await addressPage.firstAddressRadio()).click();
    await page.waitForLoadState('networkidle');
    // await expect(await addressPage.continueButton()).toBeEnabled();
    await (await addressPage.continueButton()).click();
    await page.waitForLoadState('networkidle');

}