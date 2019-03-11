import React from 'react';
import './App.css';
import Explore from './components/Explore'
import Battle from "./components/Battle"
import Town from './components//Town'

import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'


class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="MainHeader">
          <header>
            runEscape
      </header>
          <nav>
            <Link to={`/`}>Explore</Link> |
            <Link to={`/towntest`}>Town</Link> |
            <Link to={`/battletest`}>Battle</Link>
          </nav>
          <Switch>
            <Route exact path='/' component={Explore} />
            <Route exact path='/towntest' component={Town} />
            <Route exact path='/battletest' component={Battle} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default App;