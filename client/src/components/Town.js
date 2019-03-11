import React from 'react';
import '../App.css'

const Town = (props) => (
    <div class="container">
        <h2>Town</h2>
        <button type="button" class="btn btn-primary" onClick={props.handleShopButton}>Shop</button>
        <button type="button" class="btn btn-primary" onClick={props.handleForestButton}>Forest</button>
        <button type="button" class="btn btn-primary" onClick={props.handleMountainButton}>Mountain</button>
        <div id="inventory"></div>
        
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