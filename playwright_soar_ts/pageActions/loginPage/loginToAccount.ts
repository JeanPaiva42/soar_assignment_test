import { Page } from '@playwright/test';
import LoginPage from '../../pageComponents/pageComponents/LoginPage';

export const loginToAccount = async (page: Page, registerEmail: string, registerPassword: string): Promise<void> => {
    const loginPage = new LoginPage(page);

    await (await loginPage.emailInputField()).type(registerEmail);
    await (await loginPage.passwordInputField()).type(registerPassword);
    await (await loginPage.loginButton()).click();
}