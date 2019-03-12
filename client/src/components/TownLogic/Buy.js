import React from 'react';

//C&P placeholder

const Buy = props => (
  <div className="Buy">
  <p>You bought stuff</p>
<button className="buy" onClick={props.buy} value="buy">buy</button>
<button className="sell" onClick={props.sell} value="sell">sell</button>
<button className="leave" onClick={props.leave} value="leave">leave</button>
</div>
)

export default Buy;