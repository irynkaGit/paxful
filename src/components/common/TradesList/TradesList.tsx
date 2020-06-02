import React, {FC} from "react";
import {useSelector} from "react-redux";
import {tradeListSelector, getCurrentTradeIDSelector, userSelector} from "src/selectors";
import {TradesItem} from "./components";
import {IMessage, ITrade} from "src/interfaces";
import style from './TradesList.scss';

export const TradesList: FC<{closeList?: ()=> void}> = ({closeList}) => {
    const currentTradeID = useSelector(getCurrentTradeIDSelector);
    const tradeList: Array<ITrade> = useSelector(tradeListSelector);
    const currentUser = useSelector(userSelector);
    const isHasNotify = (messages: Array<IMessage>) => {
        let notification = false;
        messages.forEach(({sender, isRead}) => {
            if (sender.id !== currentUser.id && !isRead) {
                notification = true;
            }
        });
        return notification;
    }
    const isActive = (id: number) => {
        return (currentTradeID && id.toString() === currentTradeID.toString()) || false;
    };

    return (<div className={style["trades-list"]}>
        {tradeList && tradeList.map(({id, chat, ...item}: ITrade) =>
            (<TradesItem isActive={isActive(id)}
                         key={id}
                         item={{id, chat, ...item}}
                         notification={isHasNotify(chat.messages)}
                         closeList={closeList}
            />))}
    </div>);
};