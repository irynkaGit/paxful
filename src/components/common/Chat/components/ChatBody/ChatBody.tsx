import React, {FC, useEffect, useRef} from "react";
import {ChatMessage} from "../index";
import {IChatBodyProps} from "./interfaces";
import style from "./ChatBody.scss";

export const ChatBody: FC<IChatBodyProps> = ({chat, currentUser}) => {
    const scroll = useRef<HTMLHeadingElement>(null);
    useEffect(() => {
        scroll.current && scroll.current.scroll({top: scroll.current.clientHeight, left: 0, behavior: 'smooth'});
    },)

    return (
        <div className={style["chat-body"]}>
            <div className={style["chat-body-container"]} ref={scroll}>
                {chat.messages.map(({id, sender, ...message}) =>
                    (<ChatMessage
                        key={id}
                        currentUser={(sender.id === currentUser.id)}
                        message={{id, sender, ...message}}/>)
                )}
            </div>
        </div>
    );
};
