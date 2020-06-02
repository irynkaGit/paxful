import React, {FC} from "react";
import {useSelector} from "react-redux";
import {currentPriceSelector} from "src/selectors/currentprice.selector";

export const Bitcoins: FC<{ usd: number }> = ({usd}) => {
    const currentPrice = useSelector(currentPriceSelector);
    const amountBTN = currentPrice ? (usd / currentPrice).toFixed(6) : 0;

    return (<span>{amountBTN}</span>);
};
