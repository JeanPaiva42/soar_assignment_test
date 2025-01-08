import { Locator, Page } from 'playwright-core';
import BaseComponent from '../../BaseComponent';

class AddressPage extends BaseComponent {

    constructor(page: Page) {
        super(page)
    }

    async addNewAddressButton(): Promise<Locator> {
        return (await this.page.locator('[aria-label="Add a new address"]'));
    }

    async countryInput(): Promise<Locator> {
        return (await this.page.locator('[data-placeholder="Please provide a country."]'));
    }

    async nameInput(): Promise<Locator> {
        return (await this.page.locator('[data-placeholder="Please provide a name."]'));
    }

    async mobileNumberInput(): Promise<Locator> {
        return (await this.page.locator('[data-placeholder="Please provide a mobile number."]'));
    }

    async zipCodeInput(): Promise<Locator> {
        return (await this.page.locator('[data-placeholder="Please provide a ZIP code."]'));
    }

    async addressInput(): Promise<Locator> {
        return (await this.page.locator('[data-placeholder="Please provide an address."]'));
    }

    async cityInput(): Promise<Locator> {
        return (await this.page.locator('[data-placeholder="Please provide a city."]'));
    }

    async stateInput(): Promise<Locator> {
        return (await this.page.locator('[data-placeholder="Please provide a state."]'));
    }

    async submitButton(): Promise<Locator> {
        return (await this.page.locator('#submitButton'));
    }

    async firstAddressRadio(): Promise<Locator> {
        return (await this.page.locator('mat-radio-button').nth(0));
    }

    async continueButton(): Promise<Locator> {
        return (await this.page.locator('[aria-label="Proceed to payment selection"]'));
    }

    async firstShippintOptionRadio(): Promise<Locator> {
        return (await this.page.locator('mat-row').nth(0));
    }



}

export default AddressPage;