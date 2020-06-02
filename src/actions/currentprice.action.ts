import {createAction} from "redux-actions";
import {Dispatch} from "redux";

export const getCurrentPriceAction = createAction("GET_CURRENT_PRICE_ACTION");

export const getCurrentPrice = () => (dispatch: Dispatch) => {
    return setInterval(() =>
        fetch(`https://api.coindesk.com/v1/bpi/currentprice/USD.json`).
        then(res => res.json()).
        then(data => dispatch(getCurrentPriceAction(data))).
        catch((res) => new Error(res))
    , 10000);
};
