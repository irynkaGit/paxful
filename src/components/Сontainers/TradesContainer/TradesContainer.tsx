import React, {FC, useState} from "react";
import {useSelector} from "react-redux";
import {useWindowSize} from "@reach/window-size";
import {getCurrentTradeSelector, userSelector} from "src/selectors";
import {TradesList, Chat, TradeInformation} from "src/components/common";
import {ChatHeader} from "src/components/common/Chat/components/ChatHeader";
import style from './TradesContainer.scss';

export const TradesContainer: FC = () => {
    const [openTradeList, setOpenTradeList] = useState<boolean>(false);
    const [openInfoList, setOpenInfoList] = useState<boolean>(false);
    const currentUser = useSelector(userSelector);
    const currentTrade = useSelector(getCurrentTradeSelector);
    const {width} = useWindowSize();

    const onClickTradeListBtn = () => {
        setOpenTradeList(state => !state);
        setOpenInfoList(() => false);
    };
    const onClickInformationBtn = () => {
        setOpenTradeList(() => false);
        setOpenInfoList(state => !state);
    }

    return (<div className={style.trades}>

        {width <= 981 && (<div className={style.navigation}>
            <div className={style.button} onClick={onClickTradeListBtn}>
                {openTradeList ? "X" : "T"}
            </div>
            {currentTrade && (<ChatHeader trade={currentTrade}/>)}
            <div className={style.button} onClick={onClickInformationBtn}>
                {openInfoList ? "X" : "I"}
            </div>
        </div>)}

        {(openTradeList || width > 981) && (<TradesList
            closeList={width <= 981 ? onClickTradeListBtn : () => {
            }}/>)}

        {currentTrade && (<div className={style.info}>
            <Chat trade={currentTrade} currentUser={currentUser}/>
            {(openInfoList || width > 981) && (<TradeInformation trade={currentTrade}/>)}
        </div>)}

    </div>);
};
