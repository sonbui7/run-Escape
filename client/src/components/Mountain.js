import React from 'react';

const Mountain = (props) => (
    <div id="mountain">
    <h2 class="mountainHeader">Mountain</h2>
        <button type="button" id="backButton" class="btn btn-primary" onClick={props.handleBackButton}>Back</button>

        <div>
            <button type="button" class="btn btn-primary area4">Area 4</button>
            <div class="card-body card areaFourInfo">
                <h5 class="card-title">Area 4</h5>
                <p class="card-text">Battle: 100% <br /> Reward: 100%</p>
            </div>
        </div>


        <div>
            <button type="button" class="btn btn-primary area5">Area 5</button>
            <div class="card-body card areaFiveInfo">
                <h5 class="card-title">Area 5</h5>
                <p class="card-text">Battle: 100% <br /> Reward: 100%</p>
            </div>
        </div>


        <div>
            <button type="button" class="btn btn-primary area6">Area 6</button>
            <div class="card-body card areaSixInfo">
                <h5 class="card-title">Area 6</h5>
                <p class="card-text">Battle: 100% <br /> Reward: 100%</p>
            </div>
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

export default Mountain