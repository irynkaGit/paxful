import {ITrade} from "src/interfaces";

export interface ITradeItemProps {
    isActive: boolean;
    item: ITrade;
    notification: boolean;
    closeList?: () => void;
}