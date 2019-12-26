import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import {Provider} from "react-redux";

import {createStore} from "redux";

import reducers from "./redux/actions/reducers/index";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";



ReactDOM.render(
<Provider store={createStore(reducers)}>
<App />
</Provider>
 

,document.getElementById('root'));


