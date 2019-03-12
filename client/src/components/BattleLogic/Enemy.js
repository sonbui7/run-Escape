import React from "react"

const Enemy = (props) => (
    <div id="enemyPage">
        <img id="forestBackground" src="https://external-preview.redd.it/vlSGrKKWy5_cjFBXuK0VaV_n_VTLEFWBSTbIyWv-owY.png?auto=webp&s=36ccd9b41badca9d37ba6eff64099e5c656900c6" alt="forestBackground" />
        <h2 className="enemyHeader"><i className="far fa-angry"></i> Enemy encountered!</h2>
        <div id="health">Health: </div>

        <div id="gameTextBox">

            <p>Enemy encountered! Choose an action to defeat the enemy!</p>
            <button type="button" className="btn btn-primary actionNext">Next</button>

        </div>

        <div id="enemyInfo">
            <p>Goblin</p>
            <p>HP: 5 DMG: 2 </p>
        </div>

        <div className="actionButtonContainer">
            <button type="button" className="btn btn-primary action1">Action 1</button>
            <button type="button" className="btn btn-primary action2">Action 2</button>
            <br />
            <button type="button" className="btn btn-primary action3">Action 3</button>
            <button type="button" className="btn btn-danger actionEscape" onClick={props.handleBackButton}>Escape</button>
        </div>

        <div id="playerLootBox">
            <p>Gold: </p>
            <p>Loot: </p>
        </div>
    </div>
)

export default Enemy