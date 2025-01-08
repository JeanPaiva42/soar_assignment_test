import { Page } from '@playwright/test';
import PaymentPage from '../../pageComponents/pageComponents/PaymentPage';

export const addANewCard = async (page: Page, cardObject: any): Promise<void> => {
    const paymentPage = new PaymentPage(page);
    const { cardName, cardNumber } = cardObject;

    await (await paymentPage.addNewCardSpan()).click();

    await (await paymentPage.cardNameInput()).waitFor({ state: 'visible' });
    await (await paymentPage.submitNewCardButton()).waitFor({ state: 'visible' });
    await (await paymentPage.expirationMonthInput()).click();
    await (await paymentPage.expirationMonthInput()).type('1');
    await page.keyboard.press('Enter');

    await (await paymentPage.expirationMonthInput()).click();
    await (await paymentPage.cardNameInput()).waitFor({ state: 'visible' });
    await (await paymentPage.expirationYearInput()).click();
    await (await paymentPage.expirationYearInput()).type('2');
    await page.keyboard.press('Enter');

    await (await paymentPage.cardNameInput()).click();
    await (await paymentPage.cardNameInput()).type(cardName);

    await (await paymentPage.cardNumberInput()).waitFor({ state: 'visible' });

    await (await paymentPage.cardNumberInput()).click();
    await (await paymentPage.cardNumberInput()).type(cardNumber);
    await (await paymentPage.cardNameInput()).waitFor({ state: 'visible' });

    await (await paymentPage.submitNewCardButton()).click();
    await page.waitForLoadState('networkidle');

        //success toast -> locator('snack-bar-container')
}