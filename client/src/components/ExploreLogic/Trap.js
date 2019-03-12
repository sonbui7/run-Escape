// import React from 'react';

// //C&P placeholder

// const Trap = props => (
//   <div className="Trap">
//     You stubmled into a trap!
//     </div>
// )

// export default Trap;

import React from "react"

 const Trap = () => (
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

 export default Trap 