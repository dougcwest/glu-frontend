import 'bootstrap/dist/css/bootstrap.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import ReduxThunk from "redux-thunk";
import rootReducer from './reducers/index';
import promise from "redux-promise";

import App from './App';

//const createStoreWithMiddleware = applyMiddleware(ReduxThunk, promise)(createStore);

const store = createStore(rootReducer, {}, applyMiddleware(ReduxThunk, promise));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
); 


