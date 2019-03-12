import React from 'react';

const Forest = (props) => (
    <div id="forest">
        <img id="forestBackground" src="https://external-preview.redd.it/vlSGrKKWy5_cjFBXuK0VaV_n_VTLEFWBSTbIyWv-owY.png?auto=webp&s=36ccd9b41badca9d37ba6eff64099e5c656900c6" alt="forestBackground"/>
        <h2 className="forestHeader"><i className="fas fa-tree"></i> Forest</h2>
        <button type="button" id="backButton" className="btn btn-dark" onClick={props.handleBackButton}>Back</button>

        <div>
            <div className="card-body card areaOneInfo">
            <button type="button" className="btn btn-danger area1" onClick={props.handleEnemyButton}><i className="far fa-question-circle"></i> Area 1</button>
                <p className="card-text">Battle: 100%  <br /> Reward: 100%</p>
            </div>
        </div>


        <div>
            <div className="card-body card areaTwoInfo">
            <button type="button" className="btn btn-danger area2" onClick={props.handleTrapButton}><i className="far fa-question-circle"></i> Area 2</button>
                <p className="card-text">Battle: 100% <br /> Reward: 100%</p>
            </div>
        </div>

        <div>
            <div className="card-body card areaThreeInfo">
            <button type="button" className="btn btn-danger area3" onClick={props.handleRewardButton}><i className="far fa-question-circle"></i> Area 3</button>
                <p className="card-text">Battle: 100% <br /> Reward: 100%</p>
            </div>
        </div>

        <div id="health">Health: </div>

        <div id="gameTextBox">

            <p>You have entered the forest. Which area would you like to adventure?</p>
            
        </div>
    </div>
)

export default Forest