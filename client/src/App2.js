import React from 'react';
import './App.css';
import Explore from './components/Explore'
import Battle from "./components/Battle"
import Town from './components/Locations/Town'
import HomePage from "./components/HomePage"
import LogSuccess from "./components/LogSuccess"
import Forest from "./components/Locations/Forest"
import Mountain from "./components/Locations/Mountain"
import Shop from "./components/TownLogic/Shop"
import Trap from "./components/ExploreLogic/Trap"
import Reward from "./components/ExploreLogic/Rewards"
import Chest from "./components/ExploreLogic/Chest"


import {BrowserRouter, Link, Switch, Route} from 'react-router-dom'
/*
  state = {
    toDashboard: false,
  }
  handleSubmit = (user) => {
    saveUser(user)
      .then(() => this.setState(() => ({
        toDashboard: true
      })))
  }
  render() {
    if (this.state.toDashboard === true) {
      return <Redirect to='/dashboard' />
    }
*/

class App extends React.Component {
  state = {
    isLogIn: false,
    startGame: false,
    forestButton: false,
    mountainButton: false,
    shopButton: false,
    enemyEncounter: false,
    trapEncounter: false,
    rewardEncounter: false
  }
///handle buttons
  // When Log-In is pressed
  handleLoginButton = (event) => {
    event.preventDefault()
    this.setState({ isLogIn: true })
  }
  // When Start-game is pressed
  handleStartGameButton = (event) => {
    event.preventDefault()
    this.setState({ startGame: true })
  }
  // When Forest btn in town is pressed
  handleForestButton = (event) => {
    event.preventDefault()
    this.setState({ forestButton: true })
  }
  //When Mountain btn in town is pressed
  handleMountainButton = (event) => {
    event.preventDefault()
    this.setState({ mountainButton: true })
  }
  //When Back btn in forest/mountain is pressed
  handleBackButton = (event) => {
    event.preventDefault()
    this.setState({ forestButton: false, mountainButton: false, shopButton: false, enemyEncounter: false, trapEncounter: false, rewardEncounter: false })
  }
  //When Shop btn in town is pressed
  handleShopButton = (event) => {
    event.preventDefault()
    this.setState({ shopButton: true })
  }

  //Needed so I can style the page, going to delete later 
  /* --------------------------------- FROM HERE ---------------------------------*/

  handleEnemyButton = (event) => {
    event.preventDefault()
    this.setState({ enemyEncounter: true })
  }

  handleTrapButton = (event) => {
    event.preventDefault()
    this.setState({ trapEncounter: true })
  }

  handleRewardButton = (event) => {
    event.preventDefault()
    this.setState({ rewardEncounter: true })
  }

  /* --------------------------------- TO HERE ---------------------------------*/

  handleLogIn = (event) => {
    event.preventDefault()
    this.setState({
      [event.target.name]: event.target.value
    })
  }

///hnadle buttons
  render() {  //Nav is for diagnostics, remove when done
    return (
      <BrowserRouter>
        <div>
          <header className="MainHeader">
            runEscape
          </header>
              {/* <nav>
                <Link to={'/'}> HomePage </Link> |
                <Link to={'/login'}> LogSuccess </Link> |
                <Link to={'/town'}> Town </Link> |
                <Link to={'/battle'}> Battle </Link> |
                <Link to={'/explore'}> Explore </Link> |
                <Link to={'/forest'}> Forest </Link> |
                <Link to={'/shop'}> Shop </Link> |
                <Link to={'/mountain'}> Mountain </Link> |
                <Link to={'/trap'}> Trap </Link> |
                <Link to={'/reward'}> Reward </Link> |
                <Link to={'/chest'}> Chest </Link> |
              </nav> */}
          <div className="displayLogic">
            {this.state.isLogIn === false ?
              <HomePage
                handleLoginButton={this.handleLoginButton}
              /> :
              this.state.isLogIn === true &&
              this.state.startGame === false ?
              <LogSuccess
                handleStartGameButton={this.handleStartGameButton}
              /> :
              this.state.isLogIn === true &&
              this.state.startGame === true &&
              this.state.forestButton === false &&
              this.state.mountainButton === false &&
              this.state.shopButton === false ?
              <Town
                handleForestButton={this.handleForestButton}
                handleMountainButton={this.handleMountainButton}
                handleShopButton={this.handleShopButton}
              /> :
              this.state.shopButton === true ?
              <Shop
                handleBackButton={this.handleBackButton}
              /> :
              this.state.forestButton === true ?
              <Forest
                handleBackButton={this.handleBackButton}
              /> :
              this.state.mountainButton === true ?
              <Mountain
                handleBackButton={this.handleBackButton}
              /> :
              <></>
            }
          </div>
          <div className="Routes">
          {/* <Switch>
            <Route path={'/'} component={HomePage} />
            <Route path={'/login'} component={LogSuccess} />
            <Route
             path={'/town'}
             render={
               props =>
                <Town {...props}
                handleForestButton={this.handleForestButton}
                handleMountainButton={this.handleMountainButton}
                handleShopButton={this.handleShopButton}
            />} />
            <Route path={'/battle'} component={Battle} />
            <Route path={'/explore'} component={Explore} />
            <Route path={'/forest'} component={Forest} />
            <Route path={'/shop'} component={Shop} />
            <Route path={'/mountain'} component={Mountain} />
            <Route path={'/trap'} component={Trap} />
            <Route path={'/reward'} component={Reward} />
            <Route path={'/chest'} component={Chest} />
          </Switch> */}
          </div>
        </div>
      </BrowserRouter>
) } }

  export default App;