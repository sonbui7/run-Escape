import React from 'react';

const Forest = (props) => (
    <div class="container">
    <h2>Forest</h2>
        <button type="button" class="btn btn-primary" onClick={props.handleBackButton}>Back</button>
        <button type="button" class="btn btn-primary">Area 1</button>
        <div class="card-body card">
            <h5 class="card-title">Area 1</h5>
            <p class="card-text">Battle: 100% <br /> Reward: 100%</p>
        </div>
        <button type="button" class="btn btn-primary">Area 2</button>
        <div class="card-body card">
            <h5 class="card-title">Area 2</h5>
            <p class="card-text">Battle: 100% <br /> Reward: 100%</p>
        </div>
        <button type="button" class="btn btn-primary">Area 3</button>
        <div class="card-body card">
            <h5 class="card-title">Area 3</h5>
            <p class="card-text">Battle: 100% <br /> Reward: 100%</p>
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

export default Forest