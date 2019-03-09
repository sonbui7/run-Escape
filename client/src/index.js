import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';                                     //this was changed to render battle
import * as serviceWorker from './serviceWorker';

import Battle from "./components/Battle"                        //this was changed to render battle
ReactDOM.render(<Battle />, document.getElementById('root'));   //this was changed to render battle

// ReactDOM.render(<App />, document.getElementById('root'));   //this was changed to render battle

serviceWorker.unregister();
