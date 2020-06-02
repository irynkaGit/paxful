import {IMessage} from "src/interfaces";

export interface IChatMessageProps {
    message: IMessage;
    currentUser: boolean;
}