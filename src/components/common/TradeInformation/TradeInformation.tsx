import React, {FC} from "react";
import {Avatar, Bitcoins, Rating} from "src/components/common/index";
import style from "./TradeInformation.scss";
import {ITradeInformationProps} from "./interfaces";

export const TradeInformation: FC<ITradeInformationProps> = ({trade}) => {
    const {man, pros, cons, tradeStatus, tradeHASH, ofTrades, amountUSD} = trade;

    return (
        <div className={style.information}>
            <div className={style["information-header"]}>
                <div className={style["information-top"]}>
                    <p className={style["information-title"]}>
                        You are trading with <span className={style["information-man"]}> {man.name}</span>
                    </p>
                    <p className={style["information-start"]}>started 23 minutes ago</p>
                </div>
                <button className={style["information-btn"]}>
                    Release bitcoins
                </button>
            </div>
            <div className={style["information-table"]}>
                <div className={style["information-item"]}>
                    <Avatar src={"src/assets/img/man.jpg"}/>
                    <div className={style["information-rating"]}><Rating pros={pros} cons={cons}/></div>
                </div>
                <div className={style["information-item"]}>
                    <div className={style["information-item__title"]}>#OF Trades</div>
                    <div className={style["information-item__title"]}>{ofTrades}</div>
                </div>
                <div className={style["information-item"]}>
                    <div className={style["information-item__title"]}>Trade Status</div>
                    <div className={style["information-item__bright"]}>{tradeStatus}</div>
                </div>
                <div className={style["information-item"]}>
                    <div className={style["information-item__title"]}>Trade HASH</div>
                    {tradeHASH}
                </div>
                <div className={style["information-item"]}>
                    <div className={style["information-item__title"]}>Amount USD</div>
                    <div className={style["information-item__text"]}>{amountUSD}</div>
                </div>
                <div className={style["information-item"]}>
                    <div className={style["information-item__title"]}>Amount BTN</div>
                    <Bitcoins usd={amountUSD}/>
                </div>
            </div>
        </div>
    );
};
