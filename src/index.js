import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css';
import App from './App';
import {BrowserRouter,Route,Router} from 'react-router-dom'

import store from './store';
import history from './history'
// import * as taskservices from './services/taskservices'


// taskservices.getTasks().then(res =>
//   {
//     console.log(res)
//   })


// console.log(store.getState())
// ReactDOM.render(
// <Provider store={store}>
//   <BrowserRouter>
//   <Route component={App}/>
//   </BrowserRouter>
// </Provider>,
// document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
    <Route component={App}/>
    </Router>
  </Provider>,
  document.getElementById('root')
  );