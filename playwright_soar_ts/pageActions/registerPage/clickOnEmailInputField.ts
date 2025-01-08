import { Page } from '@playwright/test';
import RegisterPage from "../../pageComponents/pageComponents/RegisterPage";

export const clickOnEmailInputField = async (page: Page): Promise<void> => {
    const registerPage = new RegisterPage(page);
    return (await registerPage.emailInputField()).click();
}