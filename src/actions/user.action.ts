import {createAction} from "redux-actions";
import {Dispatch} from "redux";
import {IMan} from "../interfaces";

export const setUserAction = createAction("SET_USER_ACTION");

export const setUser = (user: IMan) => (dispatch: Dispatch) => {
    dispatch(setUserAction(user));
};
