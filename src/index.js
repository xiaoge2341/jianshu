import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {rootReducer} from './store/reducer'
import {Provider} from 'react-redux'
import { createStore, applyMiddleware,  } from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import createSaga from 'redux-saga'
import {sagas} from './saga/index'

const saga = createSaga()
const store = createStore(rootReducer, {},composeWithDevTools(applyMiddleware(saga)))

saga.run(sagas)
ReactDOM.render(
  <Provider store = {store}>
    <App />
  </Provider>
  ,
  document.getElementById('root')
);

