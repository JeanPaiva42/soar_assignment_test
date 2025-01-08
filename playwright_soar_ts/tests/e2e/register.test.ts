import { userAttemptsTo } from "../../pageActions/index";
import { test, expect } from '@playwright/test';
import RegisterPage from "../../pageComponents/pageComponents/RegisterPage";
import { register } from "module";

var registerPage: RegisterPage;
const baseUrl: string = 'https://juice-shop.herokuapp.com/#/search';
const registerUrl: string = 'https://juice-shop.herokuapp.com/#/register';
const loginUrl: string = 'https://juice-shop.herokuapp.com/#/login';

test.describe('Verifications on user registration flow', async () => {

  test.beforeEach(async ({ page }) => {
    registerPage = new RegisterPage(page);
    await page.goto(registerUrl);
    await page.waitForLoadState('networkidle');

    await userAttemptsTo.dismissWelcomeModal(page);
    await userAttemptsTo.dismissCookiesModal(page);
    await page.locator('.cdk-overlay-backdrop').waitFor({ state: 'hidden' });
  });

  test('triggers register form fields errors', async ({ page }) => {

    await userAttemptsTo.clickOnEmailInputField(page);
    await userAttemptsTo.clickOnPasswordInputField(page);
    await userAttemptsTo.clickOnPasswordConfirmationInputField(page);

    await userAttemptsTo.clickOnSecurityAnswerInputField(page);

    // not the ideal but, got flaky behavior on this dropdown, so the escape press bypasses it
    await userAttemptsTo.clickOnSecurityQuestionDropdown(page);
    await page.keyboard.press('Escape');

    // re-clicks in the email field so the last one triggers an error
    await userAttemptsTo.clickOnEmailInputField(page);

    await expect(await registerPage.invalidEmailErrorMessage()).toBeVisible();
    await expect(await registerPage.invalidPasswordErrorMessage()).toBeVisible();
    await expect(await registerPage.invalidPasswordConfirmationErrorMessage()).toBeVisible();
    await expect(await registerPage.invalidSecurityQuestionErrorMessage()).toBeVisible();
    await expect(await registerPage.invalidSecurityAnswerErrorMessage()).toBeVisible();
  });

  test('successfully creates an account', async ({ page }) => {
    const newUserObject = {
      registerEmail: `user-test-${Date.now()}@test.com`,
      registerPassword: `T@est1234`,
      securityAnswer: 'Idk'
    }

    await page.waitForLoadState('networkidle');

    await userAttemptsTo.createNewAccount(page, newUserObject);

    // redirect to login page is made successfully
    await expect(page).toHaveURL(loginUrl);
  });

});
