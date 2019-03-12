import React from 'react';

const HomePage = (props) => (
    <div id="homeBackground">
        <img id="backImg"src="https://img2.akspic.com/image/15524-atmosphere-terrain-digital_art-earth-landscape-1920x1080.jpg" alt="backImg"/>

    <h1 className="gameTitle">Run-Escape</h1>

    <div id="homePageStyle">

        <div id="signIn">
            <h2 className="homeHeader">Existing user?</h2>
            <p>Sign in below!</p>
            <div className="input-group-prepend homeInput">
                <span className="input-group-text" id="basic-addon1"> <i className="fas fa-user-circle"></i> </span>
                <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
            </div>

            <div className="input-group-prepend homeInput">
                <span className="input-group-text" id="basic-addon1"><i className="fas fa-key"></i></span>
                <input type="text" className="form-control" placeholder="Password" aria-label="Password" aria-describedby="basic-addon1" />
            </div>
            <button type="button" id="signInBtnStyle" className="btn btn-dark" onClick={props.handleLoginButton}>Sign in</button>
        </div>

        <div id="register">
            <h2 className="homeHeader">New to the game?</h2>
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
    </div>

);

export default HomePage