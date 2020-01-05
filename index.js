import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import {Provider} from "react-redux";

import {createStore, applyMiddleware} from "redux";

import thunk from "redux-thunk";

import reducers from "./redux/actions/reducers/index";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";



ReactDOM.render(
<Provider store={createStore(reducers,applyMiddleware(thunk))}>
<App />
</Provider>
 

,document.getElementById('root'));


