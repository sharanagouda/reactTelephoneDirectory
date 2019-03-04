import React, { Component } from 'react';
import Main from './component/Main';
import './App.css';
import {applyMiddleware, createStore} from "redux";
import rootReducers from "./reducers";
import {Provider} from "react-redux";
import storage from "redux-persist/lib/storage";
import {persistStore, persistReducer} from "redux-persist";
import promise from "redux-promise";
import logger from "redux-logger";
import thunk from 'redux-thunk';
import {PersistGate} from "redux-persist/integration/react";
import {BrowserRouter} from "react-router-dom";

const persistConfig={
  key:"root",
  storage,
  whitelist:[],
  blacklist:[]
}
const persistedReducer = persistReducer(persistConfig,rootReducers)

const store = createStore(persistedReducer,{}, applyMiddleware(thunk,promise,logger))
const persistor = persistStore(store);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <BrowserRouter>
             <Main/>
          </BrowserRouter>
        </PersistGate>
      </Provider>
    );
  }
}

export default App;
