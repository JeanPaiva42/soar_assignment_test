import { Page } from '@playwright/test';
import AddressPage from '../../pageComponents/pageComponents/AddressPage';

export const addNewAddress = async (page: Page, addressObject: any): Promise<void> => {
    const addressPage = new AddressPage(page);
    const { userCountry, userName, userMobileNumber,
        userZipCode, userAddress, userCity, userState } = addressObject;

    await (await addressPage.addNewAddressButton()).click();

    await (await addressPage.countryInput()).type(userCountry);
    await (await addressPage.nameInput()).type(userName);
    await (await addressPage.mobileNumberInput()).type(userMobileNumber);
    await (await addressPage.zipCodeInput()).type(userZipCode);
    await (await addressPage.addressInput()).type(userAddress);
    await (await addressPage.cityInput()).type(userCity);
    await (await addressPage.stateInput()).type(userState);
    await page.waitForLoadState('networkidle');
    await (await addressPage.submitButton()).click();
}