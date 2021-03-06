import React from 'react';
import '../../App.css'
import Inventory from "../Inventory"

const Town = (props) => (
    <div>
        <img id="townBackground" src="https://i.redd.it/jasnbiyat3vy.png" alt="townBackground" />
    <div id="town">
        <h2 className="townHeader"><i className="fas fa-home"></i> Town</h2>
        <button type="button" id="townShopBtn" className="btn btn-warning" onClick={props.handleShopButton}><i className="fas fa-coins"></i> Shop</button>

        <div className="card-body card forestDifficulty">
        <button type="button" id="townForestBtn" className="btn btn-success" onClick={props.handleForestButton}><i className="fas fa-tree"></i> Forest</button>
            <p className="card-text">Difficulty level: <i className="fas fa-skull" /> <i className="fas fa-skull" /> <i className="fas fa-skull" /></p>
        </div>

        <div className="card-body card mountainDifficulty">
        <button type="button" id="townMountainBtn" className="btn btn-secondary" onClick={props.handleMountainButton}><i className="fas fa-mountain"></i> Mountain</button>
            <p className="card-text">Difficulty level: <br /><i className="fas fa-skull" /> <i className="fas fa-skull" /> <i className="fas fa-skull" /></p>
        </div>


        {/* <div id="health">Health: </div> */}

        <div id="gameTextBox">

            <p>Welcome to run-Escape! Good luck getting through, its going to be a rough ride</p>
            
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


    </div>
    </div>
)

export default Town