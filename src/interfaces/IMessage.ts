import {IMan} from "./IMan";

export interface IMessage {
    id:number;
    sender: IMan;
    text: string;
    date: string;
    isRead: boolean;
}
