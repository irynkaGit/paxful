import {createStore, applyMiddleware, Store, Middleware} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction';
import thunk from "redux-thunk";
import { createBrowserHistory, History } from 'history';
import createRootReducer from 'src/reducers';
import {routerMiddleware} from "connected-react-router";

export const history: History = createBrowserHistory();

const rootReducer = createRootReducer(history);

type AppState = ReturnType<typeof rootReducer>;


export const configureStore = (): Store<AppState> => {
    const middlewares: Array<Middleware> = [routerMiddleware(history), thunk];
    const enchancers = composeWithDevTools(applyMiddleware(...middlewares));
    const store = createStore(createRootReducer(history), undefined, enchancers);

    return store;
};
