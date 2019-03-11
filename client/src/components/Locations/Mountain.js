// import React from 'react';

// //C&P placeholder

// const Mountain = props => (
//   <div className="Mountain">
//     Mountain</div>
// )

// export default Mountain;

import React from 'react';

 const Mountain = (props) => (
    <div class="container">
    <h2>Mountain</h2>
        <button type="button" class="btn btn-primary" onClick={props.handleBackButton}>Back</button>
        <button type="button" class="btn btn-primary">Area 4</button>
        <div class="card-body card">
            <h5 class="card-title">Area 4</h5>
            <p class="card-text">Battle: 100% <br /> Reward: 100%</p>
        </div>
        <button type="button" class="btn btn-primary">Area 5</button>
        <div class="card-body card">
            <h5 class="card-title">Area 5</h5>
            <p class="card-text">Battle: 100% <br /> Reward: 100%</p>
        </div>
        <button type="button" class="btn btn-primary">Area 6</button>
        <div class="card-body card">
            <h5 class="card-title">Area 6</h5>
            <p class="card-text">Battle: 100% <br /> Reward: 100%</p>
        </div>

         <div id="gameTextBox">
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        </div>
    </div>

 )

 export default Mountain 