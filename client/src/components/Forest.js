import React from 'react';

const Forest = (props) => (
    <div id="forest">
        <h2 class="forestHeader">Forest</h2>
        <button type="button" id="backButton" class="btn btn-dark" onClick={props.handleBackButton}>Back</button>

        <div>
            <button type="button" class="btn btn-danger area1" onClick={props.handleEnemyButton}><i class="far fa-question-circle"></i> Area 1</button>
            <div class="card-body card areaOneInfo">
                <h5 class="card-title">Area 1</h5>
                <p class="card-text">Battle: 100% <br /> Monsters: Goblin Lvl 1 Wolf Lvl 2 <br /> Reward: 100%</p>
            </div>
        </div>


        <div>
            <button type="button" class="btn btn-danger area2" onClick={props.handleTrapButton}><i class="far fa-question-circle"></i> Area 2</button>
            <div class="card-body card areaTwoInfo">
                <h5 class="card-title">Area 2</h5>
                <p class="card-text">Battle: 100% <br /> Reward: 100%</p>
            </div>
        </div>

        <div>
            <button type="button" class="btn btn-danger area3" onClick={props.handleRewardButton}><i class="far fa-question-circle"></i> Area 3</button>
            <div class="card-body card areaThreeInfo">
                <h5 class="card-title">Area 3</h5>
                <p class="card-text">Battle: 100% <br /> Reward: 100%</p>
            </div>
        </div>
        
        <div id="health">Health: </div>

        <div id="gameTextBox">
            <br />
            <br />
            <br />
            <p>You have entered the forest. Which area would you like to adventure?</p>
            <br />
            <br />
            <br />
        </div>
    </div>
)

export default Forest