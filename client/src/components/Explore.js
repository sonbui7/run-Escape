import React from "react";
import Battle from "./Battle";

import Chest from "./ExploreLogic/Chest";
import Nothing from "./ExploreLogic/Nothing";
import Trap from "./ExploreLogic/Trap";


// import axios from "axios";

class Explore extends React.Component {
    state = {
        chance: -1
    }

explore = () => {
    //chance battle, chest, trap, nothing
    this.setState({
        chance: (Math.random()*100)
    })
}

    render() {
        return (
            <>            
            <div>
                <p>What do you want to do?</p>
                <div>
                     {this.state.chance > 90 ?
                     <Chest /> :
                     this.state.chance > 10 ?
                    <Nothing /> :
                     this.state.chance > 5 ?
                    <Nothing chance={this.state.chance}/> :
                     this.state.chance > 0 ?
                    <Trap /> : 
                    <></>}
                </div>
                <button className="explore" onClick={this.explore} value="explore">Explore</button>
                <button>Inventory</button>
                <button>Return to Town</button>
            </div>
            </>
        )
    }
}
export default Explore;