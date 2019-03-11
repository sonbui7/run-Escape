import React from 'react';

const Shop = (props) => (
    <div class="container">
    <h2>Shop</h2>
        <button type="button" class="btn btn-primary" onClick={props.handleBackButton}>Back</button>
        <div class="row">
            <li class="list-group-item">Item 1</li>
            <li class="list-group-item">Gold</li>
            <li class="list-group-item"><button type="button" class="btn btn-primary">Buy</button></li>
        </div>
        <div class="row">
            <li class="list-group-item">Item 2</li>
            <li class="list-group-item">Gold</li>
            <li class="list-group-item"><button type="button" class="btn btn-primary">Buy</button></li>
        </div>
        <div class="row">
            <li class="list-group-item">Item 3</li>
            <li class="list-group-item">Gold</li>
            <li class="list-group-item"><button type="button" class="btn btn-primary">Buy</button></li>
        </div>
        <div class="row">
            <li class="list-group-item">Item 4</li>
            <li class="list-group-item">Gold</li>
            <li class="list-group-item"><button type="button" class="btn btn-primary">Buy</button></li>
        </div>
        <div class="row">
            <li class="list-group-item">Item 5</li>
            <li class="list-group-item">Gold</li>
            <li class="list-group-item"><button type="button" class="btn btn-primary">Buy</button></li>
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