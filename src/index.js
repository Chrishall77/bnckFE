import React from 'react';
import ReactDOM from 'react-dom';
import './styling/stylesheets/browser.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from "./data/store";
import { Provider } from "react-redux";

ReactDOM.render(
    
    <Provider store={ store }>
        <App />
    </Provider>
    , document.getElementById("root")
); 

serviceWorker.unregister();
