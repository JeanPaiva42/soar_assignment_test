import { Page } from '@playwright/test';
import WelcomeModal from "../../pageComponents/pageComponents/WelcomeModal";

export const dismissWelcomeModal = async (page: Page): Promise<void> => {
    const welcomeModal = new WelcomeModal(page);

    try {
        if (await (await welcomeModal.dismissWelcomeModalButton()).isVisible()) {
            await (await welcomeModal.dismissWelcomeModalButton()).click();
        }
    } catch (error) {
        console.log('Error attempting to click the button:', error);
    }
}