import {createSelector} from 'reselect';
import {ITrade} from "../interfaces";
import {ITradeListStore} from "../interfaces/store.interfaces";

export const tradeListSelector = createSelector(
    ({trade}: ITradeListStore) => trade.trades,
    (trades: Array<ITrade>) => {
        return trades;
    }
);

export const getCurrentTradeSelector = createSelector(
    ({trade}: ITradeListStore) => trade.trades?.filter(({id}) =>
        id.toString() === trade.currentTrade?.toString())[0],
    (trade: ITrade) => trade
);

export const getCurrentTradeIDSelector = createSelector(
    ({trade}: ITradeListStore) => trade.currentTrade,
    (id: number) => id
);
