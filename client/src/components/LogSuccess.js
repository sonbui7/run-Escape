import React from 'react';

const LogSuccess = (props) => (
    <div>
    <p>Log in Success!</p>
    <button type="button" class="btn btn-primary" onClick={props.handleStartGameButton}>Start Game</button>
    </div>
)

export default LogSuccess