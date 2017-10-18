const path = require("path");
const fs = require("fs");

const React = require("react");
const { renderToString } = require("react-dom/server");

//const {default: configureStore} = require('../src/store')
const { default: App } = require("../src/App");
import { StaticRouter } from "react-router";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";

import rootReducer from "../src/reducer";
import Api from "../src/Api";

module.exports = function universalLoader(req, res) {
    const filePath = path.resolve(__dirname, "..", "build", "index.html");

    fs.readFile(filePath, "utf8", (err, htmlData) => {
        if (err) {
            console.error("read err", err);
            return res.status(404).end();
        }

        Api.events().then(({ events }) => {
            const Store = createStore(
                rootReducer,
                {
                    events: { events, page: 0 }
                },
                applyMiddleware(thunkMiddleware)
            );
            const context = {};

            const markup = renderToString(
                <Provider store={Store}>
                    <StaticRouter location={req.url} context={context}>
                        <App />
                    </StaticRouter>
                </Provider>
            );

            const RenderedApp = htmlData.replace("{{SSR}}", markup);
            res.send(RenderedApp);
        });
    });
};
