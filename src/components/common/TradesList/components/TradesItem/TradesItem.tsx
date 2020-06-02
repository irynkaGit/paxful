import React, {FC} from "react";
import {useDispatch} from "react-redux";
import {setCurrentTradeID} from "src/actions";
import {Avatar, Bitcoins} from "src/components/common";
import {ITradeItemProps} from "./interfaces";
import style from "./TradesItem.scss";

export const TradesItem: FC<ITradeItemProps> = ({item, isActive, notification, closeList}) => {
    const {
        id,
        man,
        status,
        paySystem,
        amountUSD,
        tradeStatus,
    } = item;
    const dispatch = useDispatch();
    const onclickHandler = (id: number) => () => {
        closeList && closeList();
        history.pushState('', '', `/?trade=${id}`);
        dispatch(setCurrentTradeID(id))
    };

    return (
        <span className={style["trades-item"] + " " + (isActive && style["trades-item_active"])}
              onClick={onclickHandler(id)}>
            <div className={style["trades-info"]}>
                <div className={`${style["trades-status"]} 
                                ${(isActive || !notification) && style["trades-status_read"]}`}/>
                <div className={`${style["trades-full-info"]}`}>
                    <span className={style["trades-man"]}>{man.name} </span>
                    <span className={style["trades-process"]}>{status} </span>
                    <div className={style["trades-pay-system"]}>
                        {paySystem}
                    </div>
                    <div className={style["trades-count"]}>
                        {amountUSD} USD (<Bitcoins usd={amountUSD}/> BTC)
                    </div>
                </div>
            </div>
            <div className={style["trades-avatar"]}>
                <Avatar src={man.avatar}/>
                <div className={tradeStatus === "paid" ? style["trades-payed"] : style["trades-not-payed"]}>
                    {tradeStatus}
                </div>
            </div>
        </span>);
};