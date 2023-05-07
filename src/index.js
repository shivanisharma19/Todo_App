import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { store } from './app/store.js'
import { Provider } from 'react-redux';
import './style/app.css';

ReactDOM.render(
 <React.StrictMode>
  <Provider store={store} >
    <App />
    </Provider>
  </React.StrictMode>,
    document.getElementById('app')
);