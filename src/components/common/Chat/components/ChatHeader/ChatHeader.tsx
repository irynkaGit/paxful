import React, {FC} from "react";
import {useDispatch} from "react-redux";
import {deleteTradeList} from "src/actions";
import deleteBtn from "src/assets/img/delete.svg";
import {Rating} from "src/components/common/Rating";
import {IChatHeaderProps} from "./interfaces";
import style from "./ChatHeader.scss";

export const ChatHeader: FC<IChatHeaderProps> = ({trade}) => {
    const {id, paySystem, man, pros, cons} = {...trade};
    const dispatch = useDispatch();

    const onClickDeleteHandler = () => {
        dispatch(deleteTradeList(id));
    }
    return (
        <div className={style["chat-header"]}>
            <div className={style["chat-btn"]}>
                <div className={style["chat-delete"]} onClick={onClickDeleteHandler}>
                    <img className={style["chat-image"]} src={deleteBtn}/>
                </div>
            </div>
            <div className={style["chat-pay-system"]}>{paySystem}</div>
            <div className={style["chat-man"]}>
                {man.name} <Rating pros={pros} cons={cons}/>
            </div>
        </div>
    );
};
