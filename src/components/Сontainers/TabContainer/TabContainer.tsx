import React, {FC} from 'react';
import style from './TabContainer.scss';

export const TabContainer: FC = () => {
    return (<div className={style.tabs}>
        <span className={style["tabs-item"]}>Overview</span>
        <span className={style["tabs-item"]}>Trades</span>
        <span className={style["tabs-item"]}>Disputes</span>
        <span className={style["tabs-item"]}>Your offers</span>
        <span className={style["tabs-item"]}>My team</span>
        <span className={style["tabs-item"]}>Trade history</span>
    </div>);
};