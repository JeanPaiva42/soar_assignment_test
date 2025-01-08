import { Page } from '@playwright/test';
import PaymentPage from '../../pageComponents/pageComponents/PaymentPage';

export const selectTheFirstCardOption = async (page: Page, addressObject: any): Promise<void> => {
    const paymentPage = new PaymentPage(page);

    await (await paymentPage.firstCardOptionRadio()).click();
    await (await paymentPage.continueButton()).click();
    await page.waitForLoadState('networkidle');
}