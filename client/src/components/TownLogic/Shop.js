// import React from 'react';

// //C&P placeholder

// const Shop = props => (
//   <div className="Shop">
//   <p>You found the mall</p>
//   <p>What will you do?</p>
// <button className="buy" onClick={props.buy} value="buy">buy</button>
// <button className="sell" onClick={props.sell} value="sell">sell</button>
// <button className="leave" onClick={props.leave} value="leave">leave</button>
// </div>
// )

// export default Shop;

import React from 'react';

 const Shop = (props) => (
    <div className="container">
    <h2>Shop</h2>
        <button type="button" className="btn btn-primary" onClick={props.handleBackButton}>Back</button>
        <div className="row">
            <li className="list-group-item">Item 1</li>
            <li className="list-group-item">Gold</li>
            <li className="list-group-item"><button type="button" className="btn btn-primary">Buy</button></li>
        </div>
        <div className="row">
            <li className="list-group-item">Item 2</li>
            <li className="list-group-item">Gold</li>
            <li className="list-group-item"><button type="button" className="btn btn-primary">Buy</button></li>
        </div>
        <div className="row">
            <li className="list-group-item">Item 3</li>
            <li className="list-group-item">Gold</li>
            <li className="list-group-item"><button type="button" className="btn btn-primary">Buy</button></li>
        </div>
        <div className="row">
            <li className="list-group-item">Item 4</li>
            <li className="list-group-item">Gold</li>
            <li className="list-group-item"><button type="button" className="btn btn-primary">Buy</button></li>
        </div>
        <div className="row">
            <li className="list-group-item">Item 5</li>
            <li className="list-group-item">Gold</li>
            <li className="list-group-item"><button type="button" className="btn btn-primary">Buy</button></li>
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

 export default Shop 