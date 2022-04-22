import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {BrowserRouter} from "react-router-dom"
import {ContextProvider} from "./context/Context";
import { Provider } from "react-redux";
import store from "./state";
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <ContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </ContextProvider>
    </Provider>
    
  </React.StrictMode>
)
