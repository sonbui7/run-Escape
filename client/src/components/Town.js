// import React from 'react';

// //C&P placeholder

// const Town = props => (
//   <div className="Town">
//   <p>Welcome to town, {props.name}</p>
//   <p>What will you do?</p>
// <button className="explore" onClick={props.explore} value="explore">explore</button>
// <button className="shop" onClick={props.shop} value="shop">shop</button>
// </div>
// )

// export default Town;

import React from 'react';
import '../App.css'

 const Town = (props) => (
    <div class="container">
        <h2>Town</h2>
        <button type="button" id="townShopBtn" class="btn btn-primary" onClick={props.handleShopButton}>Shop</button>
        <button type="button" id="townForestBtn" class="btn btn-primary" onClick={props.handleForestButton}>Forest</button>
        <button type="button" id="townMountainBtn" class="btn btn-primary" onClick={props.handleMountainButton}>Mountain</button>
        <div id="inventory">
            <h2>Inventory</h2>
        </div>

         <div id="gameTextBox">
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
        </div>
    </div>
)

 export default Town 