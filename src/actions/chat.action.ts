import {createAction} from "redux-actions";
import {Dispatch} from "redux";
import {chats} from "src/mocs/trade.mocks";
import {IChat} from "../interfaces";

export const setChatListAction = createAction("SET_CHAT_LIST_ACTION");
export const setChatAction = createAction("SET_CHAT_ACTION");

export const setChatList = (chatList?: Array<IChat>) => (dispatch: Dispatch) => {
    dispatch(setChatListAction(chatList || chats));
};

export const setChat = (chat: IChat) => (dispatch: Dispatch) => {
    dispatch(setChatAction(chat));
};