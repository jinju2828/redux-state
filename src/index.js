import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { createStore } from 'redux';
import counterApp from './reducers';

const store = createStore(counterApp);

const render = () =>{
    ReactDOM.render(
        <App store = {store} />,
        document.getElementById('root')
    );
}

store.subscribe(render);
render();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

