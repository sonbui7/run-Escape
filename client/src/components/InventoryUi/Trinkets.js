import React from "react";

const Trinkets = (props) => {
    console.log(props);
    const trinkets = props.userInv.filter(item => item.itemType === "Trinket").slice();

    return <div className="container">
        {
            trinkets.map(trinket => (
                <div>
                    <div className="row itemRow">
                        <div className="col col-3 itemName">{trinket.itemName}</div>
                        <div className="col col-2 itemAmount">X {trinket.amount}</div>
                        <div className="col col-6 itemDescription"><p>{trinket.itemProperties.description}</p><p>+ {trinket.itemProperties.effect} Speed</p></div>
                        <button val={JSON.stringify(trinket)} onClick={props.handleTrinkets}>Equip</button>
                    </div>
                    <hr></hr>
                </div>

            ))
        }
    </div>
}

export default Trinkets;