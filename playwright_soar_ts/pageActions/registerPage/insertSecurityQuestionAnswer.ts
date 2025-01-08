import { Page } from '@playwright/test';
import RegisterPage from "../../pageComponents/pageComponents/RegisterPage";

export const insertSecurityQuestionAnswer = async (page: Page, securityAnswer: string): Promise<void> => {
    const registerPage = new RegisterPage(page);
    return (await registerPage.securityAnswerInputField()).type(securityAnswer);
}