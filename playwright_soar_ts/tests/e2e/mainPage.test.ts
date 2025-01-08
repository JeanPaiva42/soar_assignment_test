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

test.describe('Verifications on the main page', async () => {

  test.beforeEach(async ({ page }) => {
    mainPage = new MainPage(page);

    await page.goto(baseUrl);

    await userAttemptsTo.dismissWelcomeModal(page);
    await userAttemptsTo.dismissCookiesModal(page);
    await page.locator('.cdk-overlay-backdrop').waitFor({ state: 'hidden' });
  });

  test('displays all items in the same page', async ({ page }) => {
    const itemsPerPageNumber = '48';

    await userAttemptsTo.selectItemsPerPage(page, itemsPerPageNumber);

    await expect(await mainPage.itemsPerPageDropdown()).toContainText(itemsPerPageNumber);
    await expect(await mainPage.nextItemsPageButton()).toBeDisabled();
  });


  test('opens Apple Juice product Modal', async ({ page }) => {
    const productName = 'Apple Juice (1000ml)';
    const productModal = new ProductModal(page);

    await (await mainPage.getProductItem(productName)).click();
    await (await productModal.reviewListButton()).click();

    await expect(await productModal.closeProductModalButton()).toBeVisible();

    await expect(await productModal.reviewListButton()).toHaveAttribute('aria-expanded', 'true');

    await (await productModal.closeProductModalButton()).click();
    await expect(await productModal.closeProductModalButton()).not.toBeVisible();
  });

});
