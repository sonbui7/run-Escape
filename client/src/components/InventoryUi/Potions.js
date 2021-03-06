import React from "react";

const Potions = (props) => {
    console.log(props);
    const potions = props.userInv.filter(item => item.itemType === "Potion").slice();

    return <div className="container">
        {
            potions.map(potion => (
                <div>
                    <div className="row itemRow">
                        <div className="col col-3 itemName">{potion.itemName}</div>
                        <div className="col col-2 itemAmount">X {potion.amount}</div>
                        <div className="col col-6 itemDescription"><p>{potion.itemProperties.description}</p><p>Recover {potion.itemProperties.effect} Hp</p></div>
                        <button val={JSON.stringify(potion)} onClick={props.handlePotions}>Use</button>
                    </div>
                    <hr></hr>
                </div>

            ))
        }
    </div>
}

export default Potions;