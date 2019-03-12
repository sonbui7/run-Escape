import React from "react";
// import Battle from "./Battle";

import Chest from "./ExploreLogic/Chest";
import Nothing from "./ExploreLogic/Nothing";
import Trap from "./ExploreLogic/Trap";
import Choices from "./ExploreLogic/Choices"
import Battle from "./Battle";
import {BrowserRouter, Link, Switch, Redirect, Route} from 'react-router-dom'


// import axios from "axios";

class Explore extends React.Component {
    state = {
        chance: -1,
        battle: false
    }

explore = () => {
    //chance battle, chest, trap, nothing
    let rand = (Math.random()*100)
    if (rand > 10 && rand <= 90) {
    this.setState({
        chance: rand,
        battle: true
    })} else {
        this.setState({
            chance: rand,
            battle: false
        })
    }

    // this.setState(this.clear);
}

handleBattle = () => {
    this.handleBattle = this.handleBattle.bind(this)
    this.setState( {
      chance: -1,
      battle: false
    })
  }

    render() {
        return (
            <>            
            <div>
                <div>
                     {this.state.chance > 90 ?
                     <Chest /> :
                     this.state.chance > 10 ?
                     <Battle unmountBattle={this.handleBattle}/> :
                     this.state.chance > 5 ?
                    <Nothing /> :
                     this.state.chance > 0 ?
                    <Trap /> : 
                    <Choices />}
                </div>
                {this.state.battle === true ?
                <></> :
                (<div>
                <button className="explore" onClick={this.explore} value="explore">Explore</button>
                <button>Inventory</button>
                <button>Return to Town</button>
                </div>
                )}
            </div>
            </>
        )
    }
}
export default Explore;