import React from "react";

const Misc = (props) => {
    console.log(props);
    const misc = props.userInv.filter(item => item.itemType === "Misc").slice();

    return <div className="container">
        {
            misc.map(misc => (
                <div>
                    <div className="row itemRow">
                        <div className="col col-3 itemName">{misc.itemName}</div>
                        <div className="col col-2 itemAmount">X {misc.amount}</div>
                        <div className="col col-7 itemDescription"><p>{misc.itemProperties.description}</p></div>
                    </div>
                    <hr></hr>
                </div>
            ))
        }
    </div>
}

export default Misc;

