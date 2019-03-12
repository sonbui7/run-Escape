import React from 'react';

const Shop = (props) => (
    <div>
    <h2 className="shopHeader">Shop</h2>

        <button type="button" className="btn btn-dark" onClick={props.handleBackButton}>Back</button>

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