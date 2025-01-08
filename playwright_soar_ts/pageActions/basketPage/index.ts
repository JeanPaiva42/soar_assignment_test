import { checkNumberOfItemsInTheBasket } from './checkNumberOfItemsInTheBasket';
import { checkoutItems } from './checkoutItems';
import { deleteItemFromBasket } from './deleteItemFromBasket';
import { increaseFirstBasketItemCount } from './increaseFirstBasketItemCount';
export const userAttemptsTo = {
    checkoutItems,
    checkNumberOfItemsInTheBasket,
    deleteItemFromBasket,
    increaseFirstBasketItemCount
};