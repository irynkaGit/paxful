import {handleActions} from "redux-actions";
import {getCurrentPriceAction} from "src/actions";

export const currentPriceReducer = handleActions(
    {
        [`${getCurrentPriceAction}`]: (state, {payload}) => payload,
    },
    {}
);
