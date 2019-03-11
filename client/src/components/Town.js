import React from 'react';
import '../App.css'

const Town = (props) => (
    <div id="town">
        <h2 class="townHeader">Town</h2>
        <button type="button" id="townShopBtn" class="btn btn-primary" onClick={props.handleShopButton}>Shop</button>
        <button type="button" id="townForestBtn" class="btn btn-primary" onClick={props.handleForestButton}>Forest</button>
        <button type="button" id="townMountainBtn" class="btn btn-primary" onClick={props.handleMountainButton}>Mountain</button>


        <div id="inventory" >

        <button type="button" class="btn btn-primary" id="toggleInventory" data-toggle="modal" data-target="#bd-example-modal-lg">
                Inventory
        </button>


        <div class="modal fade" id="bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-lg" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Inventory</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <p>Insert items here</p>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div id="gameTextBox">
            <br />
            <br />
            <br />
            <p>Welcome to run-Escape! If you're new to the game, we recommend you starting out in the forest area</p>
            <br />
            <br />
            <br />
        </div>
    </div>
)

export default Town