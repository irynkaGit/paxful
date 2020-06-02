import {combineReducers} from "redux";
import {connectRouter} from 'connected-react-router';
import {History} from 'history';
import {tradeReducer} from "./trade.reducer";
import {userReducer} from "./user.reducer";
import {currentPriceReducer} from "./currentprice.reducer";
import {chatReducer} from "./chat.reducer";

const createRootReducer = (history: History) => combineReducers({
    router: connectRouter(history),
    trade: tradeReducer,
    currentUser: userReducer,
    chats: chatReducer,
    currentPrice: currentPriceReducer,
});

export default createRootReducer
