import React, {FC, useEffect} from "react";
import {useDispatch} from "react-redux";
import {deleteTradeList, setCurrentTrade} from "src/actions";
import {ChatHeader, ChatBody, ChatFooter} from "./components";
import {IChatProps} from "./interfaces";
import {IMessage} from "src/interfaces";
import style from "./Chat.scss";
import {useWindowSize} from "@reach/window-size";

export const Chat: FC<IChatProps> = ({trade, currentUser}) => {
    const dispatch = useDispatch();
    const {width} = useWindowSize();

    const sendMessage = (messageText: string) => {
        const message: IMessage = {
            id: trade.chat.messages.length + 1,
            sender: currentUser,
            text: messageText,
            date: new Date().toString(),
            isRead: false
        }
        const messages = [...trade.chat.messages, message];
        dispatch(setCurrentTrade({...trade, chat: {...trade.chat, messages: [...messages]}}))
    };

    const deleteNotification = () => {
        const messages = trade.chat.messages.map(({sender, isRead, ...message}) => {
            if (sender.id !== currentUser.id) isRead = true;
            return {sender, isRead, ...message}
        });
        dispatch(setCurrentTrade({...trade, chat: {...trade.chat, messages}}));
    };

    useEffect(deleteNotification, [currentUser, trade.id]);

    return (
        <div className={style.chat}>
            {trade && (
                <>
                {width > 981 && (<ChatHeader trade={trade}/>)}
                    <ChatBody currentUser={currentUser} chat={trade.chat}/>
                    <ChatFooter sendMessage={sendMessage}/>
                </>
            )}
        </div>
    );
};
