import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux'; 
import logger from 'redux-logger';
import './index.css';
import App from './components/App/App';
import * as serviceWorker from './serviceWorker';

const defaultBook = {title: '', author:''};
const bookToAdd = (state = defaultBook, action) => {
  if(action.type === 'SET_NEW_BOOK') {
    return action.payload;
  } else if (action.type === 'SET_NEW_BOOK'){
    return action.payload;
  }
}
// {...state, title: action.payload.title}
// {...state, ...action.payload}

const bookList = (state = [], action) => {
  if (action.type === 'SET_BOOK_LIST'){
    return action.payload;
  }
  // TODO - set book list with data from server
  return state;
}

const reduxStore = createStore(
  combineReducers({
    bookList,
    bookToAdd
  }),
  applyMiddleware(logger)
);


ReactDOM.render(<Provider store={reduxStore}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
