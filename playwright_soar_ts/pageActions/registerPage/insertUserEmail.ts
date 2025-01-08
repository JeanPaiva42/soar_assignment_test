import { Page } from '@playwright/test';
import RegisterPage from "../../pageComponents/pageComponents/RegisterPage";

export const insertUserEmail = async (page: Page, userEmail: string): Promise<void> => {
    const registerPage = new RegisterPage(page);
    return (await registerPage.emailInputField()).type(userEmail);
}