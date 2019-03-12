import React from "react";

const ItemBox = (props) => (
    <div className="row itemRow">
        <div className="col col-3 itemName">{props.itemName}</div>
        <div className="col col-2 itemAmount">{props.amount}</div>
        <div className="col col-6 itemDescription"><p>{props.description}</p></div>
        {props.type !== "Misc" ? <button value={props.type === "Potion" ? "Use" : "Equip"} val={props.item} className="button" onClick={props.InvButtonHandler}></button> : console.log("misc item")}
    </div>
);

export default ItemBox;