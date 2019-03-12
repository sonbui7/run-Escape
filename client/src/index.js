import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App2';                                     //this is the base
import * as serviceWorker from './serviceWorker';

// import Battle from "./components/Battle"                        //this is for battle
// ReactDOM.render(<Battle />, document.getElementById('root'));   //this is for battle

// import Explore from "./components/Explore"                        //this is for explore
// ReactDOM.render(<Explore />, document.getElementById('root'));   //this is for explore



ReactDOM.render(<App />, document.getElementById('root'));   //this is the base

serviceWorker.unregister();
