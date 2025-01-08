import { Page } from '@playwright/test';
import CookiesModal from "../../pageComponents/pageComponents/CookiesModal";

export const dismissCookiesModal = async (page: Page): Promise<void> => {
    const cookiesModal = new CookiesModal(page);

    try {
        if (await (await cookiesModal.dismissCookiesModalButton()).isVisible()) {
            await (await cookiesModal.dismissCookiesModalButton()).click();
        }
    } catch (error) {
        console.log('Error attempting to click the button:', error);
    }
}