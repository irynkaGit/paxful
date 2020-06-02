import React, {FC} from "react";
import {IAvatarProps} from "./interfaces";
import style from './Avatar.scss';

export const Avatar: FC<IAvatarProps> = ({src}) => (<img className={style.avatar} src={src}/>);