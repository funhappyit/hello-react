import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {applyMiddleware, createStore} from "redux";
import rootReducer from "./modules";
import {Provider} from 'react-redux';
import loggerMiddleware from "./lib/loggerMiddleware";
import {createLogger} from 'redux-logger';
import { thunk } from 'redux-thunk';
//
// const store = createStore(rootReducer,applyMiddleware(loggerMiddleware));
//
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//     <Provider store={store}>
//         <App/>
//     </Provider>
// );

// const logger = createLogger();
// const store = createStore(rootReducer,applyMiddleware(logger));
//
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//     <Provider store={store}>
//         <App/>
//     </Provider>
//
// )

const logger = createLogger();
const store = createStore(rootReducer, applyMiddleware(logger,thunk));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
      <App/>
  </Provider>
);
