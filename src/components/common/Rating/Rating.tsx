import React, {FC} from "react";
import {IRatingProps} from "./interfaces";
import style from "./Rating.scss";


export const Rating: FC<IRatingProps> = ({pros, cons}) => {
    return (
        <div className={style.rating}>
            <span className={style["rating-pros"]}> +{pros} </span>/
            <span className={style["rating-cons"]}> -{cons}  </span>
        </div>
    );
};
