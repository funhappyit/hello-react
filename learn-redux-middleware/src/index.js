import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { applyMiddleware, createStore } from "redux";
import rootReducer, { rootSaga } from "./modules";
import { Provider } from 'react-redux';
import { createLogger } from 'redux-logger';
import {thunk} from 'redux-thunk'; // 중괄호 없이 가져와야 합니다.
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';

const logger = createLogger();
const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  rootReducer,
  applyMiddleware(logger,thunk,sagaMiddleware)
);
sagaMiddleware.run(rootSaga);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
      <App/>
  </Provider>
);



