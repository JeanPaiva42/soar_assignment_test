import { expect, Page } from '@playwright/test';
import { } from '.';
import RegisterPage from "../../pageComponents/pageComponents/RegisterPage";
import { clickOnEmailInputField } from './clickOnEmailInputField';
import { clickOnPasswordConfirmationInputField } from './clickOnPasswordConfirmationInputField';
import { clickOnPasswordInputField } from './clickOnPasswordInputField';
import { clickOnSecurityAnswerInputField } from './clickOnSecurityAnswerInputField';
import { insertPassword } from './insertPassword';
import { insertPasswordConfirmation } from './insertPasswordConfirmation';
import { insertSecurityQuestionAnswer } from './insertSecurityQuestionAnswer';
import { insertUserEmail } from './insertUserEmail';

export const createNewAccount = async (page: Page, newUserObject: any): Promise<void> => {
    const registerPage = new RegisterPage(page);
    const { registerEmail, registerPassword, securityAnswer } = newUserObject;
    await clickOnEmailInputField(page);
    await insertUserEmail(page, registerEmail);

    await clickOnPasswordInputField(page);
    await insertPassword(page, registerPassword);

    await clickOnPasswordConfirmationInputField(page);
    await insertPasswordConfirmation(page, registerPassword);

    await (await registerPage.securityQuestionDropdown()).scrollIntoViewIfNeeded();
    await (await registerPage.securityQuestionDropdown()).click();
    await page.keyboard.press('Enter');

    await clickOnSecurityAnswerInputField(page);
    await insertSecurityQuestionAnswer(page, securityAnswer);

    // re-clicks in the email field so the last one triggers an error
    await expect(await registerPage.registerButton()).toBeEnabled();
    return await (await registerPage.registerButton()).click();
}