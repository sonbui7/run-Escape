import React from 'react';

const Mountain = (props) => (
    <div id="mountain">
    <img id="mountainBackground" src="http://s1.1zoom.net/big0/457/360461-admin.jpg" alt="mountainBackground" />
        <h2 class="mountainHeader"><i className="fas fa-mountain"></i> Mountains</h2>
        <button type="button" id="backButton" class="btn btn-dark" onClick={props.handleBackButton}>Back</button>

        <div>
            <div class="card-body card areaFourInfo">
            <button type="button" class="btn btn-danger area4"><i class="far fa-question-circle"></i> Area 4</button>
                <p class="card-text">Battle: 100% <br /> Reward: 100%</p>
            </div>
        </div>


        <div>
            <div class="card-body card areaFiveInfo">
            <button type="button" class="btn btn-danger area5"><i class="far fa-question-circle"></i> Area 5</button>
                <p class="card-text">Battle: 100% <br /> Reward: 100%</p>
            </div>
        </div>


        <div>
            <div class="card-body card areaSixInfo">
            <button type="button" class="btn btn-danger area6"><i class="far fa-question-circle"></i> Area 6</button>
                <p class="card-text">Battle: 100% <br /> Reward: 100%</p>
            </div>
        </div>

        <div id="health">Health: </div>

        <div id="gameTextBox">
            <br />
            <br />
            <br />
            <p>Good luck scrub</p>
            <br />
            <br />
            <br />
        </div>
    </div>

)

export default Mountain