import { Page } from '@playwright/test';
import RegisterPage from "../../pageComponents/pageComponents/RegisterPage";

export const clickOnPasswordConfirmationInputField = async (page: Page): Promise<void> => {
    const registerPage = new RegisterPage(page);
    return (await registerPage.passwordConfirmationInputField()).click();
}