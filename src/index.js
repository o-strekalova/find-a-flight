import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import {createStore, applyMiddleware} from "redux";
import createSagaMiddleware from "redux-saga";
import {watchLoadFlights} from "./js/sagas";
import {ActionCreator, reducer} from "./js/reducer";
import App from "./js/components/app";
import "./styles/index.scss";

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  reducer,
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(watchLoadFlights);

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.querySelector(`#root`)
);
