import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import reducer from './reducers';
import { watcher } from './sagas/saga';
import logger from 'redux-logger';
import createSagaMiddleware from "redux-saga";
import { createStore, applyMiddleware } from 'redux';
import WebFont from 'webfontloader';

const sagaMW = createSagaMiddleware();

const store = createStore(
  reducer, /*{
    order: [], 
    details: {
      location: ''
    },
    api: {
      data: {},
      success: '',
      error: ''
    }
  }, */
  applyMiddleware(sagaMW, logger)
);

sagaMW.run(watcher);

const app = () => {
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, 
document.getElementById('root'));
};

// postpone initiation of app until fonts are active
const webFontConfig = {
  google: {
      families: ['Fredoka One'],
  },
  classes: false,
  timeout: 1000,
  active: app, 
};


WebFont.load(webFontConfig);

serviceWorker.unregister();
