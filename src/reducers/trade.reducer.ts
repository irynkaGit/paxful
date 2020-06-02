import {handleActions} from "redux-actions";
import {
    deleteTradesListAction,
    setTradesListAction,
    setCurrentTradeAction,
    setCurrentTradeIDAction
} from "src/actions/trade.action";
import {ITrade} from "../interfaces";

export const tradeReducer = handleActions(
    {
        [`${setTradesListAction}`]: (state, {payload}) => ({...state, trades: payload}),
        [`${setCurrentTradeAction}`]: (state: any, {payload}) => {
            const {trades = [], currentTrade = 0} = {...state};
            const newTrades = trades.map((item: ITrade) => {
                if (item.id.toString() === currentTrade.toString()) {
                    return payload;
                }
                return item;
            });
            return {...state, trades: [...newTrades]}
        },
        [`${setCurrentTradeIDAction}`]: (state, {payload}) => {
            return {...state, currentTrade: payload}
        },
        [`${deleteTradesListAction}`]: (state, {payload}) => {
            const {trades = []} = {...state};
            const newTradeList: Array<ITrade> = trades.filter((item: ITrade) => item.id !== payload);
            return {trades: newTradeList, currentTrade: newTradeList[0]?.id};
        },
    },
    {}
);
