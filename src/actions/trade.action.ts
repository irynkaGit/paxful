import {createAction} from "redux-actions";
import {Dispatch} from "redux";
import {TradeList} from "../mocs/trade.mocks";
import {ITrade} from "../interfaces";

export const setTradesListAction = createAction("SET_TRADE_LIST_ACTION");
export const setCurrentTradeIDAction = createAction("SET_CURRENT_TRADE_ID_ACTION");
export const setCurrentTradeAction = createAction("SET_CURRENT_TRADE_ACTION");
export const deleteTradesListAction = createAction("DELETE_TRADE_LIST_ACTION");

export const setTradeList = () => (dispatch: Dispatch) => {
    dispatch(setTradesListAction(TradeList));
};

export const setCurrentTradeID = (tradeID: number) => (dispatch: Dispatch) => {
    dispatch(setCurrentTradeIDAction(tradeID));
};

export const setCurrentTrade = (trade: ITrade) => (dispatch: Dispatch) => {
    dispatch(setCurrentTradeAction(trade));
};

export const deleteTradeList = (id: number) => (dispatch: Dispatch) => {
    dispatch(deleteTradesListAction(id));
};
