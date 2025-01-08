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
const loginUrl: string = 'https://juice-shop.herokuapp.com/#/login';

test.describe('Verifications on the Basket flows', async () => {

  test.beforeEach(async ({ page }) => {
    mainPage = new MainPage(page);
    const newUserObject = {
      registerEmail: `user-test-${Date.now()}@test.com`,
      registerPassword: `T@est1234`,
      securityAnswer: 'Idk'
    }

    await page.goto(registerUrl, { waitUntil: 'networkidle' });

    await userAttemptsTo.dismissWelcomeModal(page);
    await userAttemptsTo.dismissCookiesModal(page);
    await page.locator('.cdk-overlay-backdrop').waitFor({ state: 'hidden' });

    // could be replaced by a single action 'createAccountAndLogin'
    await userAttemptsTo.createNewAccount(page, newUserObject);
    const { registerEmail, registerPassword } = newUserObject;
    await userAttemptsTo.loginToAccount(page, registerEmail, registerPassword);
  });

  test('adds items to the basket', async ({ page }) => {
    const appleJuice = 'Apple Juice (1000ml)';
    const applePomace = 'Apple Pomace';
    const numberOfProductsToBeAdded = 2;

    await userAttemptsTo.addProductToBasket(page, appleJuice);
    await userAttemptsTo.closeProductAddedToBasketToast(page);

    // doing it twice
    await page.waitForLoadState('networkidle');

    await userAttemptsTo.addProductToBasket(page, applePomace);

    await expect(await mainPage.itemAddedToBasketToast()).toBeVisible();

    await userAttemptsTo.closeProductAddedToBasketToast(page);
    await page.waitForLoadState('networkidle');

    expect(await userAttemptsTo.checkNumberOfItemsInTheBasket(page)).toEqual(numberOfProductsToBeAdded);
  });


  test('delete items inside the basket', async ({ page }) => {
    // go to cart and play with the values and delete the first item
    const basketPage = new BasketPage(page);
    const appleJuice = 'Apple Juice (1000ml)';
    const initialProductCounter = await userAttemptsTo.checkNumberOfItemsInTheBasket(page);
    await userAttemptsTo.addProductToBasket(page, appleJuice);
    await userAttemptsTo.closeProductAddedToBasketToast(page);

    await userAttemptsTo.accessBasket(page);
    await (await basketPage.addItem()).waitFor({ state: 'visible' });
    await expect(await (await basketPage.checkoutButton()).isEnabled()).toBe(true);

    await page.waitForLoadState('networkidle');

    // delete item now
    const basketValueBeforeProductRemoval = (await (await basketPage.priceText()).textContent());

    await userAttemptsTo.deleteItemFromBasket(page, appleJuice);

    const basketValueAfterProductRemoval = (await (await basketPage.priceText()).textContent());
    expect(basketValueAfterProductRemoval).not.toEqual(basketValueBeforeProductRemoval);
    await expect(await (await basketPage.checkoutButton()).isEnabled()).toBe(false);
  });

});
