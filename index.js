import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App'
//import * as serviceWorker from './serviceWorker';

//import reportWebVitals from './reportWebVitals';
 //import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/jquery-3.4.1.min.js'
//import 'bootstrap/dist/js/bootstrap.js'

ReactDOM.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
//serviceWorker.register();