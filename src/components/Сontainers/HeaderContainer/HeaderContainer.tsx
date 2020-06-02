import React, {FC, useEffect, useState} from 'react';
import {useWindowSize} from "@reach/window-size";
import {useDispatch, useSelector} from "react-redux";
import {getCurrentTradeIDSelector, getCurrentTradeSelector, userSelector} from "src/selectors";
import {setUser} from "src/actions";
import {admin} from "src/mocs/trade.mocks";
import style from './HeaderContainer.scss';

export const HeaderContainer: FC = () => {
    const [isOpenMenu, setOpenMenu] = useState<boolean>(false);
    const {width} = useWindowSize();
    const currentUser = useSelector(userSelector);
    const currentTradeID = useSelector(getCurrentTradeIDSelector);
    const currentTrade = useSelector(getCurrentTradeSelector);

    const dispatch = useDispatch();

    const changeUser = (id: number) => () => dispatch(setUser(id === 1 ? currentTrade.man : admin));

    const changeUSerBtn = (
        <span className={`${style["header-item"]} ${style["header-btn"]}`} onClick={changeUser(currentUser.id)}>
                    {(!currentUser.id || currentUser.id === 1) ?
                        "Admin" :
                        "User"}
                </span>);

    const onClickHandler = () => {
        setOpenMenu((state) => !state);
    }

    useEffect(() => {
        currentTrade && currentUser.id !== 1 && dispatch(setUser(currentTrade.man));
    }, [currentTradeID])

    return (<header className={style.header}>
        <div className={style["header-container"]}>
            <div className={style["header-top"]}>
                <div>
                    {width <= 1024 && (<span className={style["header-burger"]} onClick={onClickHandler}>
                    {isOpenMenu ? "X" : "="}
                </span>)}
                    <a href="/" className={style["header-logo"]}>
                        PAXFUL
                    </a>
                </div>
                {width <= 1024 && changeUSerBtn}
            </div>
            {(width > 1024 || isOpenMenu) &&
            (<nav className={style["header-nav"]}>
                <a href="#" className={style["header-item"]}>Buy bitcoins</a>
                <a href="#" className={style["header-item"]}>Sell bitcoins</a>
                <a href="#" className={style["header-item"]}>Wallet</a>
                <a href="#" className={style["header-item"]}>Support</a>
                {width > 1024 && changeUSerBtn}
            </nav>)}
        </div>
    </header>);
};