import React from 'react';

const HomePage = (props) => (
    <div id="homePageStyle">

        <div id="signIn">
            <h2 class="homeHeader">Existing user?</h2>
            <p>Sign in below!</p>
            <div className="input-group-prepend homeInput">
                <span className="input-group-text" id="basic-addon1"> <i className="fas fa-user-circle"></i> </span>
                <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
            </div>
            
            <div className="input-group-prepend homeInput">
                <span className="input-group-text" id="basic-addon1"><i className="fas fa-key"></i></span>
                <input type="text" className="form-control" placeholder="Password" aria-label="Password" aria-describedby="basic-addon1" />
            </div>
            <button type="button" id="signInBtnStyle" className="btn btn-primary" onClick={props.handleLoginButton}>Sign in</button>
        </div>

        <div id="register">
            <h2 class="homeHeader">New to the game?</h2>
            <p>Register below!</p>
            <div className="input-group-prepend homeInput">
                <span className="input-group-text" id="basic-addon1"><i className="fas fa-user-plus"></i></span>
                <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
            </div>

            <div className="input-group-prepend homeInput">
                <span className="input-group-text" id="basic-addon1"><i className="fas fa-key"></i></span>
                <input type="text" className="form-control" placeholder="Password" aria-label="Password" aria-describedby="basic-addon1" />
            </div>
            <button type="button" id="registerBtnStyle" className="btn btn-primary">Register</button>
        </div>

    </div>
);

export default HomePage