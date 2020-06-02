import React from "react";
import {Provider} from "react-redux";
import {Route} from "react-router";
import {ConnectedRouter} from "connected-react-router";
import {configureStore, history} from "src/store/store";
import {HeaderContainer} from "./Сontainers/HeaderContainer";
import {TradePage} from "./TradePage";

export const App = () => {
    return (<Provider store={configureStore()}>
        <ConnectedRouter history={history}>
            <HeaderContainer/>
            <Route path={["/", "/:tender?"]} component={TradePage}/>
        </ConnectedRouter>
    </Provider>);
};
