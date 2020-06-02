import {createSelector} from 'reselect';
import {History} from 'history';
import {ILocation} from "../interfaces/store.interfaces";

export const routeSelector = createSelector(
    ({router}: ILocation) => router,
    (router: History) => router.location
);
