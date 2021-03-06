import React from "react";

const Armor = (props) => {
    console.log(props);
    const armor = props.userInv.filter(item => item.itemType === "Armor").slice();

    return <div className="container">
        {
            armor.map(armor => (
                <div>
                    <div className="row itemRow">
                        <div className="col col-3 itemName">{armor.itemName}</div>
                        <div className="col col-2 itemAmount">X {armor.amount}</div>
                        <div className="col col-6 itemDescription"><p>{armor.itemProperties.description}</p><p>+ {armor.itemProperties.effect} Max Hp</p></div>
                        <button val={JSON.stringify(armor)} onClick={props.handleArmor}>Equip</button>
                    </div>
                    <hr></hr>
                </div>
            ))
        }
    </div>
}

export default Armor;