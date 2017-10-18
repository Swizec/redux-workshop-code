import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { createStore, applyMiddleware } from "redux";

import thunkMiddleware from "redux-thunk";
import logger from "redux-logger";

import registerServiceWorker from "./registerServiceWorker";

import rootReducer from "./reducer";
import Api from "./Api";

Api.events().then(({ events }) => {
    const Store = createStore(
        rootReducer,
        {
            events: { events, page: 0 }
        },
        composeWithDevTools(applyMiddleware(thunkMiddleware, logger))
    );

    ReactDOM.hydrate(
        <Provider store={Store}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Provider>,
        document.getElementById("root")
    );
});
