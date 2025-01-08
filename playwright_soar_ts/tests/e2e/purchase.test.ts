import { userAttemptsTo } from "../../pageActions/index";
import { test, expect } from '@playwright/test';
import MainPage from "../../pageComponents/pageComponents/MainPage";
import OrderSummaryPage from "../../pageComponents/pageComponents/OrderSummaryPage";

var mainPage: MainPage;
const registerUrl = 'https://juice-shop.herokuapp.com/#/register';
const addressUrl = 'https://juice-shop.herokuapp.com/#/address/select'
const newUserObject = {
  registerEmail: `user-test-${Date.now()}@test.com`,
  registerPassword: `T@est1234`,
  securityAnswer: 'Idk'
}

test.describe('Verifications on the purchase page', async () => {

  test.beforeEach(async ({ page }) => {
    mainPage = new MainPage(page);

    await page.goto(registerUrl, { waitUntil: 'networkidle' });

    await userAttemptsTo.dismissWelcomeModal(page);
    await userAttemptsTo.dismissCookiesModal(page);
    await page.locator('.cdk-overlay-backdrop').waitFor({ state: 'hidden' });

    await userAttemptsTo.createNewAccount(page, newUserObject);
    const { registerEmail, registerPassword } = newUserObject;
    await userAttemptsTo.loginToAccount(page, registerEmail, registerPassword);
  });

  // these will be separated in a different file with a different setup
  test('complete a product purchase flow', async ({ page }) => {
    const addressObject = {
      userCountry: 'Fake Country',
      userName: 'Fake Name',
      userMobileNumber: '3333333',
      userZipCode: '332211',
      userAddress: 'Fake Address',
      userCity: 'Fake City',
      userState: 'Fake State'
    }
    const cardInfoObject = {
      cardName: 'Test User',
      cardNumber: '4242424242424242'
    }
    const appleJuice = 'Apple Juice (1000ml)';

    await userAttemptsTo.addProductToBasket(page, appleJuice);
    await userAttemptsTo.closeProductAddedToBasketToast(page);

    await userAttemptsTo.accessBasket(page);

    // checking out the products
    await page.waitForLoadState('networkidle');
    await userAttemptsTo.checkoutItems(page);

    // confirm we are on the add address page
    await expect(page).toHaveURL(addressUrl);

    await userAttemptsTo.addNewAddress(page, addressObject);
    await userAttemptsTo.selectTheFirstAddress(page, addressObject);

    await userAttemptsTo.selectFirstDeliveryOption(page);

    // add card
    await userAttemptsTo.addANewCard(page, cardInfoObject);
    await userAttemptsTo.selectTheFirstCardOption(page, cardInfoObject);

    // order summary
    const orderSummaryPage = new OrderSummaryPage(page);
    await userAttemptsTo.submitOrder(page);
    await expect(await orderSummaryPage.confirmationText()).toBeVisible();
  });


});
