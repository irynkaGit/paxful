import {IMan} from "./IMan";
import {IChat} from "./IChat";

export interface ITrade {
    id: number;
    man: IMan;
    chatID: number;
    chat: IChat;
    status: string;
    paySystem: string;
    amountUSD: number;
    tradeHASH: string;
    tradeStatus: string;
    ofTrades: number;
    pros: number;
    cons:number;
}