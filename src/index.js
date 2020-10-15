
import * as serviceWorker from './serviceWorker';
import React from 'react';
import { Provider } from 'react-redux';
import ReactDom from "react-dom"
import App  from './App';
import { createStore } from 'redux';
import remaindersReducer from './reducer';


//createing a store
const store = createStore(remaindersReducer)

    ReactDom.render(
    <Provider store={store}>
        <App />
    </Provider>,
     document.getElementById('root')
    );
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
