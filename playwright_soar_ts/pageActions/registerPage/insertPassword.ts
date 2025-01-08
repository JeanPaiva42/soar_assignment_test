import { Page } from '@playwright/test';
import RegisterPage from "../../pageComponents/pageComponents/RegisterPage";

export const insertPassword = async (page: Page, userPassword: string): Promise<void> => {
    const registerPage = new RegisterPage(page);
    return (await registerPage.passwordInputField()).type(userPassword);

}