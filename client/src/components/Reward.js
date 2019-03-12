import React from "react"

const Reward = (props) => (
    <div class="container">

        <h2 class="rewardHeader">You have found a treasure chest!</h2>
        <div id="health">Health: </div>

        <div id="gameTextBox">
            <br />
            <br />
            <br />
            <p>Congratulations, you found a chest! Be glad it's not a butter knife!</p>
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

export default Reward