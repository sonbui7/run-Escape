import React from "react"

const Trap = (props) => (
    <div id="trapPage">
        <img id="forestBackground" src="https://external-preview.redd.it/vlSGrKKWy5_cjFBXuK0VaV_n_VTLEFWBSTbIyWv-owY.png?auto=webp&s=36ccd9b41badca9d37ba6eff64099e5c656900c6" alt="forestBackground" />
        <h2 className="trapHeader"><i class="fab fa-mailchimp"></i> You fell into a trap!</h2>
        <div id="health">Health: </div>

        <div id="gameTextBox">
            <br />
            <br />
            <br />
            <p>I activate my trap card!</p>
            <br />
            <br />
            <br />
        </div>

        <div className="actionButtonContainer">
            <button type="button" className="btn btn-primary action1">Action 1</button>
            <button type="button" className="btn btn-primary action2">Action 2</button>
            <br />
            <button type="button" className="btn btn-primary action3">Action 3</button>
            <button type="button" className="btn btn-danger actionEscape" onClick={props.handleBackButton}>Escape</button>
        </div>

        <div id="playerLootBox">Gold: 
            <br /> 
            <br />
            <br />
            <br />
            Loot:
            <br />
            <br />
            <br />
            <br />
        </div>
    </div>
)

export default Trap