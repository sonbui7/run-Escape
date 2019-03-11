import React from 'react';

//C&P placeholder

const FightOrFlee = props => (
  <div className="FightOrFlee">
  <p>You have encountered a {props.mon}</p>
  <p>What will you do?</p>
<button className="fight" onClick={props.FightOrFlee} value="fight">Fight</button><button className="flee" onClick={props.FightOrFlee} value="flee">Flee</button>
</div>
)

export default FightOrFlee;