import {createSelector} from 'reselect';
import {IMan} from "../interfaces";
import {ICurrentUser} from "../interfaces/store.interfaces";

export const userSelector = createSelector(
    ({currentUser}: ICurrentUser) => currentUser,
    (user: IMan) => user
);
