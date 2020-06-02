import {IMan, ITrade, ICurrentPriceModel, IChat} from "./index";
import {History} from 'history';

export interface ITradeList {
    trades: Array<ITrade>;
    currentTrade: number;
}

export interface ITradeListStore {
    trade: ITradeList;
}

export interface IChatList {
    chats: Array<IChat>;
}

export interface ICurrentUser {
    currentUser: IMan;
}

export interface ILocation {
    router: History;
}

export interface ICurrentPrice {
    currentPrice: ICurrentPriceModel;
}
