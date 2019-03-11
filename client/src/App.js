import React, { Component } from 'react';
import './App.css';
import HomePage from "./components/Home"
import Town from "./components/Town"
import LogSuccess from "./components/LogSuccess"
import Forest from "./components/Forest"
import Mountain from "./components/Mountain"
import Shop from "./components/Shop"
import Enemy from "./components/Enemy"
import Trap from "./components/Trap"
import Reward from "./components/Reward"



class App extends Component {
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
    this.setState({ forestButton: false, mountainButton: false, shopButton: false })
  }
  //When Shop btn in town is pressed
  handleShopButton = (event) => {
    event.preventDefault()
    this.setState({ shopButton: true })
  }

/* --------------------------------- FROM HERE ---------------------------------*/
  handleEnemyButton = (event) => {
    event.preventDefault ()
    this.setState ({ enemyEncounter: true })
  }

  handleTrapButton = (event) => {
    event.preventDefault ()
    this.setState ({ trapEncounter: true })
  }

  handleRewardButton = (event) => {
    event.preventDefault ()
    this.setState ({ rewardEncounter: true })
  }

/* --------------------------------- TO HERE ---------------------------------*/

  handleLogIn = (event) => {
    event.preventDefault()
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    if (this.state.isLogIn === false) {
      return (
        <div>
          <HomePage
            handleLoginButton={this.handleLoginButton} />
        </div>
      )
    } else if (this.state.isLogIn === true && this.state.startGame === false) {
      return (
        <div>
          <LogSuccess
            handleStartGameButton={this.handleStartGameButton} />
        </div>
      )
    } else if (this.state.isLogIn === true && this.state.startGame === true && this.state.forestButton === false && this.state.mountainButton === false && this.state.shopButton === false) {
      return (
        <div>
          <Town
            handleForestButton={this.handleForestButton}
            handleMountainButton={this.handleMountainButton}
            handleShopButton={this.handleShopButton} />
        </div>
      )
    } else if (this.state.shopButton === true) {
      return (
        <div><Shop
          handleBackButton={this.handleBackButton} /></div>
      )
    } else if (this.state.forestButton === true) {
      return (
        <div>
          <Forest
            handleBackButton={this.handleBackButton} />
        </div>
      )
    } else if (this.state.mountainButton === true) {
      return (
        <div>
          <Mountain
            handleBackButton={this.handleBackButton} />
        </div>
      )
    }




  }


















  //       <div className="App">
  //  {/* {this.state.isLogIn ? (
  //           <div>
  //           <LogSuccess 
  //             handleStartGameButton ={this.handleStartGameButton} />
  //           {this.state.startGame ? (
  //             <Town />
  //           ) : (
  //             <Town />
  //           )}
  //           </div>
  //         ) : (
  //             <HomePage
  //               handleLoginButton={this.handleLoginButton} />
  //           )} */}

  //       </div>
}

export default App;
