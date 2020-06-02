import React, {FC} from "react";
import moment from "moment";
import {Avatar} from "src/components/common/Avatar";
import {IChatMessageProps} from "./interfaces";
import style from "./ChatMessage.scss";

export const ChatMessage: FC<IChatMessageProps> = ({message, currentUser}) => {
    const {sender, text, date} = {...message};

    const avatar = (img: string) => (<div className={style["chat-message-avatar"]}>
        <Avatar src={img}/>
    </div>);

    const currentDay = new Date().getDate();
    const format = currentDay === new Date(date).getDate() ? 'h:mm a' : 'MMMM Do h:mm a';

    return (
        <div className={`${currentUser ? style["chat-out"] : style["chat-in"]}`}>
            <div className={style["chat-message"]}>
                {!currentUser && avatar(sender.avatar)}
                <div className={style["chat-message-body"]}>
                    <div className={style["chat-message-text"]}>{text}</div>
                    <div className={style["chat-message-time"]}>
                        {moment(new Date(date)).format(format)}
                    </div>
                </div>
                {currentUser && avatar(sender.avatar)}
            </div>
        </div>
    );
};
