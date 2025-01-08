import { Page } from '@playwright/test';
import DeliveryPage from '../../pageComponents/pageComponents/DeliveryPage';

export const selectFirstDeliveryOption = async (page: Page): Promise<void> => {
    const deliveryPage = new DeliveryPage(page);

    await (await deliveryPage.firstShippintOptionRadio()).click();
    await page.waitForLoadState('networkidle');
    // await (await deliveryPage.firstShippintOptionRadio()).click();
    // await page.waitForLoadState('networkidle');
    // await expect(await deliveryPage.continueButton()).toBeEnabled();
    await (await deliveryPage.continueButton()).click();

}