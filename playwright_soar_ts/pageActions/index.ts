import { userAttemptsTo as addressPageActions } from './addressPage';
import { userAttemptsTo as mainPageActions } from './mainPage';
import { userAttemptsTo as basketModalActions } from './basketPage';
import { userAttemptsTo as cookiesModalActions } from './cookiesModal';
import { userAttemptsTo as welcomeModalActions } from './welcomeModal';
import { userAttemptsTo as registerPageActions } from './registerPage';
import { userAttemptsTo as loginPageActions } from './loginPage';
import { userAttemptsTo as deliveryPageActions } from './deliveryPage';
import { userAttemptsTo as paymentPageActions } from './paymentPage';
import { userAttemptsTo as orderSummaryPageActions } from './orderSummaryPage';


export const userAttemptsTo = {
    ...addressPageActions,
    ...deliveryPageActions,
    ...mainPageActions,
    ...basketModalActions,
    ...cookiesModalActions,
    ...loginPageActions,
    ...paymentPageActions,
    ...welcomeModalActions,
    ...registerPageActions,
    ...orderSummaryPageActions
};

