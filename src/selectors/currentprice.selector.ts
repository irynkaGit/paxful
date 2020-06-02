import {createSelector} from 'reselect';
import {ICurrentPrice} from "../interfaces/store.interfaces";

export const currentPriceSelector = createSelector(
    ({currentPrice}: ICurrentPrice) => {
        return currentPrice.bpi?.USD?.rate_float
    },
    (currentPrice:number) => currentPrice
);
