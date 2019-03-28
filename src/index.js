import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import AppHead from './containers/AppHead.jsx';
import AppFoot from './containers/AppFoot.jsx';

ReactDOM.render(<AppHead appTitle={'Questionable'}/>, document.getElementById('app-head'));
ReactDOM.render(<AppFoot />, document.getElementById('app-foot'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
