import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from "react-redux"
import {PersistGate} from "redux-persist/integration/react"
import {store,persistor} from "./redux/store"
import swDev from "./swDev"
import {isMobile} from "react-device-detect"
import AppMobile from "./AppMobile"
ReactDOM.render(
  <React.StrictMode>
  <Provider store={store}>
    <PersistGate persistor={persistor} >
    {isMobile?<AppMobile/>: <App />}
  </PersistGate>
  </Provider>
</React.StrictMode>,
  document.getElementById('root')
);


swDev()
