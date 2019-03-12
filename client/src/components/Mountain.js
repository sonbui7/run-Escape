import React from 'react';

const Mountain = (props) => (
    <div id="mountain">
    <img id="mountainBackground" src="http://s1.1zoom.net/big0/457/360461-admin.jpg" alt="mountainBackground" />
        <h2 className="mountainHeader"><i className="fas fa-mountain"></i> Mountains</h2>
        <button type="button" id="backButton" className="btn btn-dark" onClick={props.handleBackButton}>Back</button>

        <div>
            <div className="card-body card areaFourInfo">
            <button type="button" className="btn btn-danger area4"><i className="far fa-question-circle"></i> Area 4</button>
                <p className="card-text">Battle: 100% <br /> Reward: 100%</p>
            </div>
        </div>


        <div>
            <div className="card-body card areaFiveInfo">
            <button type="button" className="btn btn-danger area5"><i className="far fa-question-circle"></i> Area 5</button>
                <p className="card-text">Battle: 100% <br /> Reward: 100%</p>
            </div>
        </div>


        <div>
            <div className="card-body card areaSixInfo">
            <button type="button" className="btn btn-danger area6"><i className="far fa-question-circle"></i> Area 6</button>
                <p className="card-text">Battle: 100% <br /> Reward: 100%</p>
            </div>
        </div>

        <div id="health">Health: </div>

        <div id="gameTextBox">

            <p>Good luck scrub</p>
            
        </div>
    </div>

)

export default Mountain