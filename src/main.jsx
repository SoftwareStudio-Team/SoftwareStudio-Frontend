import 'react-toastify/dist/ReactToastify.css';
import './styles/markdown.css';
import './styles/index.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';

import store from './state';

import App from './App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <ToastContainer autoClose={3000} position="bottom-right" />
      <App />
    </Provider>
  </React.StrictMode>,
);
