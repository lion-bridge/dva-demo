import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import dva from 'dva';

const app = dva();
app.model({
    namespace:'count',
    state: 0,
    reducers: {
        add: count => count + 1,
        minus: count => {
            // console.log('count=',count)
            return count - 1
        },
    }
});
app.router(() => <App />)
app.start('#root')
