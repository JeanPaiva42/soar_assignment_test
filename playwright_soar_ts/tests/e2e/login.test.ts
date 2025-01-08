import { userAttemptsTo } from "../../pageActions/index";
import { test, expect } from '@playwright/test';
import MainPage from "../../pageComponents/pageComponents/MainPage";
import ProductModal from "../../pageComponents/pageComponents/ProductModal";
import RegisterPage from "../../pageComponents/pageComponents/RegisterPage";
import LoginPage from "../../pageComponents/pageComponents/LoginPage";
import BasketPage from "../../pageComponents/pageComponents/BasketPage";
import AddressPage from "../../pageComponents/pageComponents/AddressPage";
import DeliveryPage from "../../pageComponents/pageComponents/DeliveryPage";
import PaymentPage from "../../pageComponents/pageComponents/PaymentPage";
import OrderSummaryPage from "../../pageComponents/pageComponents/OrderSummaryPage";

var mainPage: MainPage;
const baseUrl: string = 'https://juice-shop.herokuapp.com/#/search';
const registerUrl: string = 'https://juice-shop.herokuapp.com/#/register';
const newUserObject = {
  registerEmail: `user-test-${Date.now()}@test.com`,
  registerPassword: `T@est1234`,
  securityAnswer: 'Idk'
}

test.describe('Verifications on the login page', async () => {

  test('successfully logs into an account', async ({ page }) => {
    mainPage = new MainPage(page);

    await page.goto(registerUrl, { waitUntil: 'networkidle' });

    await userAttemptsTo.dismissWelcomeModal(page);
    await userAttemptsTo.dismissCookiesModal(page);
    await page.locator('.cdk-overlay-backdrop').waitFor({ state: 'hidden' });

    await userAttemptsTo.createNewAccount(page, newUserObject);
    const { registerEmail, registerPassword } = newUserObject;

    await userAttemptsTo.loginToAccount(page, registerEmail, registerPassword);
    await expect(page).toHaveURL(baseUrl);
  });

});
