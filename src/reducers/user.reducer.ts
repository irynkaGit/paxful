import {handleActions} from "redux-actions";
import {setUserAction} from "src/actions";

export const userReducer = handleActions(
    {
        [`${setUserAction}`]: (state, {payload}) => payload,
    },
    {}
);
