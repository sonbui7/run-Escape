import React from "react"

const Enemy = (props) => (
    <div class="container">
        <h2 class="enemyHeader">Enemy encountered!</h2>
        <div id="health">Health: </div>

        <div id="gameTextBox">
            <br />
            <br />
            <br />
            <p>Enemy encountered! Choose an action to defeat the enemy!</p>
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

export default Enemy