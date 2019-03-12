// import React from 'react';

// //C&P placeholder

// const HomePage = props => (
//   <div className="HomePage">
//     HomePage</div>
// )

// export default HomePage;

import React from 'react';

 const HomePage = (props) => (
    <div className="container" id="homePageStyle">

         <div id="signIn">
            <h2>Sign Up</h2>
            <div className="input-group-prepend homeInput">
                <span className="input-group-text" id="basic-addon1">@</span>
                <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
            </div>
            <div className="input-group-prepend homeInput">
                <span className="input-group-text" id="basic-addon1">@</span>
                <input type="text" className="form-control" placeholder="Password" aria-label="Password" aria-describedby="basic-addon1" />
            </div>
            <button type="button" id="signInBtnStyle" className="btn btn-primary" onClick={props.handleLoginButton}>Sign in</button>
        </div>

         <div id="register">
            <h2>Register</h2>
            <div className="input-group-prepend homeInput">
                <span className="input-group-text" id="basic-addon1">@</span>
                <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
            </div>
            <div className="input-group-prepend homeInput">
                <span className="input-group-text" id="basic-addon1">@</span>
                <input type="text" className="form-control" placeholder="Password" aria-label="Password" aria-describedby="basic-addon1" />
            </div>
            <button type="button" id="registerBtnStyle" className="btn btn-primary">Register</button>
        </div>
    </div>
);

 export default HomePage 