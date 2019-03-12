import React from 'react';
import Explore from "../Explore"

const Forest = (props) => (
    <div id="forest">
        <h2 className="forestHeader">Forest</h2>
        <button type="button" id="backButton" className="btn btn-dark" onClick={props.handleBackButton}>Back</button>

        <div> {/*buttons goto area*/}
            <button type="button" className="btn btn-danger area1" onClick={props.handleEnemyButton}><i className="far fa-question-circle"></i> Area 1</button>
            <div className="card-body card areaOneInfo">
                <h5 className="card-title">Area 1</h5>
                <p className="card-text">Battle: 100% <br /> Monsters: Goblin Lvl 1 Wolf Lvl 2 <br /> Reward: 100%</p>
            </div>
        </div>


        <div>
            <button type="button" className="btn btn-danger area2" onClick={props.handleTrapButton}><i className="far fa-question-circle"></i> Area 2</button>
            <div className="card-body card areaTwoInfo">
                <h5 className="card-title">Area 2</h5>
                <p className="card-text">Battle: 100% <br /> Reward: 100%</p>
            </div>
        </div>

        <div>
            <button type="button" className="btn btn-danger area3" onClick={props.handleRewardButton}><i className="far fa-question-circle"></i> Area 3</button>
            <div className="card-body card areaThreeInfo">
                <h5 className="card-title">Area 3</h5>
                <p className="card-text">Battle: 100% <br /> Reward: 100%</p>
            </div>
        </div>
        
        <div id="health">Health: </div> {/*//calls health*/}

        <div id="gameTextBox">
        {/* //call explore */}
        {/* //explore calls different routes, maybe explore has a default */}
        <Explore />
        </div>
    </div>
)

export default Forest