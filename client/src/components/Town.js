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