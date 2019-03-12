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
    } else if (this.state.isLogIn === true &&
       this.state.startGame === true &&
        this.state.forestButton === false &&
         this.state.mountainButton === false &&
          this.state.shopButton === false) {
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
    } else if (this.state.forestButton === true &&
       this.state.enemyEncounter === false &&
        this.state.trapEncounter === false &&
         this.state.rewardEncounter === false) {
      return (
        <div>
          <Forest
            handleBackButton={this.handleBackButton}
            handleEnemyButton={this.handleEnemyButton}
            handleTrapButton={this.handleTrapButton}
            handleRewardButton={this.handleRewardButton} />
        </div>
      )
    } else if (this.state.enemyEncounter === true) {
      return (
        <div>
          <Enemy 
            handleBackButton={this.handleBackButton}/>
          </div>
      )
    } else if (this.state.trapEncounter === true) {
      return (
      <div>
        <Trap
          handleBackButton={this.handleBackButton}/>
      </div>
      )
    } else if (this.state.rewardEncounter === true) {
      return (
        <div>
          <Reward 
            handleBackButton={this.handleBackButton}/>
        </div>
      )
    }
    else if (this.state.mountainButton === true) {
      return (
        <div>
          <Mountain
            handleBackButton={this.handleBackButton} />
        </div>
      )
    }




  }

}

export default App;