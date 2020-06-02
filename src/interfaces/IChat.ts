import {IMessage, IMan} from "./";

export interface IChat {
    id: number;
    people: Array<IMan>;
    messages: Array<IMessage>;
}
