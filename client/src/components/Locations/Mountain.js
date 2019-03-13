import React from 'react';
import Explore from "../Explore"
import Inventory from "../Inventory"

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
        

        {/* <div id="health">Health: </div> */}

        <div id="gameTextBox">

            <Explore />
            
        </div>
    </div>

 )

 export default Mountain 