import React from 'react';

//C&P placeholder

const Sell = props => (
  <div className="Sell">
  <p>You sold stuff</p>
<button className="buy" onClick={props.buy} value="buy">buy</button>
<button className="sell" onClick={props.sell} value="sell">sell</button>
<button className="leave" onClick={props.leave} value="leave">leave</button>
</div>
)

export default Sell;