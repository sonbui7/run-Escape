import React from 'react';

//get spd, dmg, name

const Fight = props => ( // roughly...
  <div className="Fight">
    {props.charSpd < props.monSpd ?
        <p> the {props.mon} hits {props.char} for {props.monDmg}</p> :
        <p> {props.char} hits {props.mon} for {props.charDmg}</p>
    }{props.charSpd < props.monSpd ?
        <p> {props.char} hits {props.mon} for {props.charDmg}</p>:
        <p> the {props.mon} hits {props.char} for {props.monDmg}</p>
    }</div>
)

export default Fight;
