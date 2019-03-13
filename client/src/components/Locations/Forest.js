import React from 'react';
import Explore from "../Explore"
import Inventory from "../Inventory";

const Forest = (props) => (
    <div id="forest">
        <img id="forestBackground" src="https://external-preview.redd.it/vlSGrKKWy5_cjFBXuK0VaV_n_VTLEFWBSTbIyWv-owY.png?auto=webp&s=36ccd9b41badca9d37ba6eff64099e5c656900c6" alt="forestBackground"/>
        <h2 className="forestHeader"><i className="fas fa-tree"></i> Forest</h2>
        <button type="button" id="backButton" className="btn btn-dark" onClick={props.handleBackButton}>Back</button>

        <div> {/*buttons goto area*/}
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

        <div id="inventory" >

            <button type="button" className="btn btn-primary" id="toggleInventory" data-toggle="modal" data-target="#bd-example-modal-lg"><i className="fas fa-briefcase"></i> Inventory</button>


            <div className="modal fade" id="bd-example-modal-lg" tabIndex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Inventory</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <Inventory />
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
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