// import React from 'react';

// //C&P placeholder

// const LogSuccess = props => (
//   <div className="LogSuccess">
//     LogSuccess</div>
// )

// export default LogSuccess;

import React from 'react';

 const LogSuccess = (props) => (
    <div>
    <p>Log in Success!</p>
    <button type="button" className="btn btn-primary" onClick={props.handleStartGameButton}>Start Game</button>
    </div>
)

 export default LogSuccess 