import React from 'react';

const Mountain = (props) => (
    <div id="mountain">
        <h2 class="mountainHeader">Mountain</h2>
        <button type="button" id="backButton" class="btn btn-dark" onClick={props.handleBackButton}>Back</button>

        <div>
            <button type="button" class="btn btn-danger area4"><i class="far fa-question-circle"></i> Area 4</button>
            <div class="card-body card areaFourInfo">
                <h5 class="card-title">Area 4</h5>
                <p class="card-text">Battle: 100% <br /> Reward: 100%</p>
            </div>
        </div>


        <div>
            <button type="button" class="btn btn-danger area5"><i class="far fa-question-circle"></i> Area 5</button>
            <div class="card-body card areaFiveInfo">
                <h5 class="card-title">Area 5</h5>
                <p class="card-text">Battle: 100% <br /> Reward: 100%</p>
            </div>
        </div>


        <div>
            <button type="button" class="btn btn-danger area6"><i class="far fa-question-circle"></i> Area 6</button>
            <div class="card-body card areaSixInfo">
                <h5 class="card-title">Area 6</h5>
                <p class="card-text">Battle: 100% <br /> Reward: 100%</p>
            </div>
        </div>

        <div id="health">Health: </div>

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