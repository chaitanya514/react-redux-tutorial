import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Provider} from "react-redux";
import App from './App';
import store from "./store";
import { addArticle } from "./actions";

window.store = store;
window.addArticle = addArticle;

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

