import {createSelector} from 'reselect';
import {IMan} from "../interfaces";
import {ICurrentUser} from "../interfaces/store.interfaces";

export const chatSelector = createSelector(
    ({currentUser}: ICurrentUser) => currentUser,
    (user: IMan) => user
);
