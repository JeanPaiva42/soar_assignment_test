import { Page } from '@playwright/test';
import RegisterPage from "../../pageComponents/pageComponents/RegisterPage";

export const insertPasswordConfirmation = async (page: Page, userPassword: string): Promise<void> => {
    const registerPage = new RegisterPage(page);
    return (await registerPage.passwordConfirmationInputField()).type(userPassword);
}