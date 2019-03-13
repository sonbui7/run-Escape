import React from "react";

const Weapons = (props) => {
    const weapons = props.userInv.filter(item => item.itemType === "Weapon").slice();

    return <div className="container">
        {
            weapons.map(weapon => (
                <div>
                    <div className="row itemRow">
                        <div className="col col-3 itemName">{weapon.itemName}</div>
                        <div className="col col-2 itemAmount">X {weapon.amount}</div>
                        <div className="col col-6 itemDescription"><p>{weapon.itemProperties.description}</p><p>+ {weapon.itemProperties.effect} Attack</p></div>
                        <button val={JSON.stringify(weapon)} onClick={props.handleWeapons}>Equip</button>
                    </div>
                    <hr></hr>
                </div>
            ))
        }
    </div>
}

export default Weapons;