// //pushes db info
// import React from "react";
// import axios from "axios";

// // setInfo = ()  => {}

// //C&P placeholder

// const Rewards = props => (
//   <div className="Rewards">
//     Rewards!</div>
// )

// export default Rewards;


import React from "react"

 const Reward = () => (
    <div class="container">
        <div id="health"></div>
        <div id="gameTextBox">
            <button type="button" class="btn btn-primary">Action 1</button>
            <button type="button" class="btn btn-primary">Action 2</button>
            <button type="button" class="btn btn-primary">Action 3</button>
            <button type="button" class="btn btn-primary">Action 4</button>
        </div>

         <button type="button" class="btn btn-primary">Escape</button>
        <div id="playerLootBox">Gold: <br /> Loot:</div>
        <button type="button" class="btn btn-primary">Back to town</button>
    </div>
)

 export default Reward 