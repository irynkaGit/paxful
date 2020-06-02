import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getCurrentPrice, setChatList, setCurrentTradeID, setTradeList, setUser} from "../../actions";
import {admin} from "../../mocs/trade.mocks";
import {routeSelector} from "../../selectors";
import {TabContainer, TradesContainer} from "../Сontainers";
import style from './TabPage.scss';

export const TradePage = () => {
    const {query}: any = useSelector(routeSelector);
    const currentTradeID = query?.trade;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setUser(admin));
        dispatch(setChatList());
        dispatch(getCurrentPrice());
        dispatch(setTradeList());
        dispatch(setCurrentTradeID(currentTradeID || 1));
    }, [currentTradeID]);

    return (<div className={style.main}>
        <div className={style["main-container"]}>
            <TabContainer/>
            <TradesContainer/>
        </div>
    </div>);
};
