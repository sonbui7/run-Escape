import React from "react"

const Trap = (props) => (
    <div class="container">
        <h2 class="trapHeader">You have activated my trap card!</h2>
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

        <div class="actionButtonContainer">
            <button type="button" class="btn btn-primary action1">Action 1</button>
            <button type="button" class="btn btn-primary action2">Action 2</button>
            <button type="button" class="btn btn-primary action3">Action 3</button>
            <button type="button" class="btn btn-danger actionEscape" onClick={props.handleBackButton}>Escape</button>
        </div>

        <div id="playerLootBox">Gold: <br /> Loot:</div>
    </div>
)

export default Trap