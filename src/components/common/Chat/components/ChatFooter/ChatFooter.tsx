import React, {ChangeEvent, FC, useState} from "react";
import {IChatFooterProps} from "./interfaces";
import style from "./ChatFooter.scss";

export const ChatFooter: FC<IChatFooterProps> = ({sendMessage}) => {
    const [inputValue, setInputValue] = useState<string>("");
    const onChangeHandler = (input: ChangeEvent<HTMLInputElement>) => {
        setInputValue(input.target.value)
    };

    const onClickHandler = () => {
        const value = inputValue;
        setInputValue("");
        value && sendMessage(value);
    };

    return (
        <div className={style["chat-footer"]}>
            <div className={style["chat-footer-container"]}>
                <input
                    placeholder={"Type your message..."}
                    className={style["chat-footer-input"]}
                    value={inputValue}
                    onChange={onChangeHandler}
                />
                <button className={style["chat-footer-btn"]} onClick={onClickHandler}>Send</button>
            </div>
        </div>
    );
};
