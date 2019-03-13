import React from 'react';

 const LogSuccess = (props) => (
    <div>
        <img id="logSuccessBackground" src="https://external-preview.redd.it/NrD2CQ1PX2oF35bY7mwGiP2aIyDbYWpoV-6mFjUOlTo.jpg?auto=webp&s=bd6ebbce5453e2c9815453a761cd43cd916baeb4" alt="logSuccess" />
        <div id="logSuccessStyle">
            <p>Good luck young adventurer, thy lord and saviour Harambe blesses you and wishes you a safe journey</p>
            <button type="button" className="btn btn-primary" onClick={props.handleStartGameButton}>Start Game</button>
        </div>
    </div>
)

 export default LogSuccess 