import {handleActions} from "redux-actions";
import {setChatAction, setChatListAction} from "src/actions";
import {IChat} from "../interfaces";

export const chatReducer = handleActions(
    {
        [`${setChatListAction}`]: (state, {payload}) => payload,
        [`${setChatAction}`]: (state, {payload}) => {
            return { ...state, payload}
        },
    },
    {}
);
