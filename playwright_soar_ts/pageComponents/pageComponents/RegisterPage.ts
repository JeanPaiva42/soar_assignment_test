import { Locator, Page } from 'playwright-core';
import BaseComponent from '../../BaseComponent';

class RegisterPage extends BaseComponent {

    constructor(page: Page) {
        super(page)
    }

    async emailInputField(): Promise<Locator> {
        return (await this.page.locator('#emailControl'));
    }

    async passwordInputField(): Promise<Locator> {
        return (await this.page.locator('#passwordControl'));
    }

    async passwordConfirmationInputField(): Promise<Locator> {
        return (await this.page.locator('#repeatPasswordControl'));
    }

    async securityAnswerInputField(): Promise<Locator> {
        return (await this.page.locator('#securityAnswerControl'));
    }

    async securityQuestionDropdown(): Promise<Locator> {
        return (await this.page.locator('[name="securityQuestion"]'));
    }

    async passwordAdviceToggle(): Promise<Locator> {
        return (await this.page.locator('#mat-slide-toggle-1'));
    }
    

    async invalidEmailErrorMessage(): Promise<Locator> {
        return (await this.page.locator('#mat-error-0'));
    }

    async invalidPasswordErrorMessage(): Promise<Locator> {
        return (await this.page.locator('#mat-error-1'));
    }

    async invalidPasswordConfirmationErrorMessage(): Promise<Locator> {
        return (await this.page.locator('#mat-error-2'));
    }

    async invalidSecurityQuestionErrorMessage(): Promise<Locator> {
        return (await this.page.locator('#mat-error-3'));
    }

    async invalidSecurityAnswerErrorMessage(): Promise<Locator> {
        return (await this.page.locator('#mat-error-4'));
    }

    async registerButton(): Promise<Locator> {
        return (await this.page.locator('#registerButton'));
    }

    async securityQuestionOption(): Promise<Locator> {
        return (await this.page.locator('#mat-option-1'));
    }



    // id="mat-error-4"
    // id="mat-error-6"
    // async invalidPasswordConfirmationErrorMessage(): Promise<Locator> {
    //     return (await this.page.locator('#securityAnswerControl'));
    // }
}

export default RegisterPage;