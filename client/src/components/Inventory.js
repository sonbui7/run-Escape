import React from "react";
import axios from "axios";
import Weapons from "./InventoryUi/Weapons";
import Armor from "./InventoryUi/Armor";
import Trinkets from "./InventoryUi/Trinkets";
import Potions from "./InventoryUi/Potions";
import Misc from "./InventoryUi/Misc";




///////////////////////////////////////functionalities/////////////////////////////////////


class Inventory extends React.Component {
    state = {
        currentPage: "Weapons",
        userBase: {
            attack: 1,
            maxHp: 10,
            currentHp: 10,
            speed: 1
        },
        userInv: [{
            "itemName": "Stick",
            "itemType": "Weapon",
            "itemProperties": {
                "effect": 1,
                "description": "It's just a stick."
            }
        },
        {
            "itemName": "Stick",
            "itemType": "Weapon",
            "itemProperties": {
                "effect": 1,
                "description": "It's just a stick."
            }
        },
        {
            "itemName": "Stick",
            "itemType": "Weapon",
            "itemProperties": {
                "effect": 1,
                "description": "It's just a stick."
            }
        }],
        userStats: {
            attack: 0,
            maxHp: 0,
            currentHp: 0,
            speed: 0
        },
        userEquipped: {
            Weapon: {},
            Armor: {},
            Trinket: {}
        }
    }

    saveUserToDB = () => {
        axios.put("/api/users/" + sessionStorage.getItem("token"), {
            stats: this.state.userStats,
            inventory: this.state.userInv,
            equipped: this.state.userEquipped
        });
    }

    // grabbing user info and recalculating stats
    componentDidMount = () => {
        axios.get("/api/users/" + sessionStorage.getItem("token")).then(user => {
            this.setState({
                userInv: user.inventory,
                userStats: user.stats,
                userEquipped: user.equipped
            });
        }).then(() => {
            this.setStats();
        });
    }

    setStats = () => {
        this.userEquipped.forEach(item => {
            let copy = Object.assign({}, this.state.userStats);
            if (item.itemType === "Weapon") {
                copy.attack = this.state.userBase.attack + item.itemProperties.effect;
            } else if (item.itemType === "Armor") {
                copy.maxHp = this.state.userBase.maxHp + item.itemProperties.effect;
            } else if (item.itemType === "Trinket") {
                copy.speed = this.state.userBase.speed + item.itemProperties.effect;
            } else {
                console.log("error, corrupted user inventory, please contact admin");
            }
            this.setState({
                userStats: copy
            });
        })
    }


    obtainItem = (name, obtainItem, amount) => {
        let copy = this.state.userInv.slice();
        if (copy.findIndex(item => item.name === name) !== -1) {
            copy[copy.findIndex(item => item.name === name)].amount += amount;
        } else if (copy.findIndex(item => item.name === name) === -1) {
            copy.push({
                itemName: name,
                itemType: obtainItem.itemType,
                itemProperties: obtainItem.itemProperties,
                amount: amount
            });
        } else {
            console.log("error, corrupted user inventory, please contact admin");
        }

        this.setState({
            userInv: copy
        })
    }


    removeItem = (name, amount) => {
        let copy = this.state.userInv.slice();
        if (copy.findIndex(item => item.name === name) !== -1) {
            copy[copy.findIndex(item => item.name === name)].amount -= amount;
        } else {
            console.log("error, corrupted user inventory, please contact admin");
        }


        if (copy[copy.findIndex(item => item.name === name)].amount <= 0) {
            copy.splice(copy.findIndex(item => item.name === name), 1);
        }
        this.setState({
            userInv: copy
        })
    }

    usePotion = (potion) => {
        let copyStats = Object.assign({}, this.state.userStats);
        let copy = this.state.userInv.slice();
        if (copy.findIndex(item => item.name === potion.itemName) !== -1) {
            copyStats.currentHp += potion.itemProperties.effect;
            this.setState({
                userStats: copyStats
            });
        }

        this.removeItem(potion.itemName, 1);
        this.saveUserToDB();
    }

    equipItem = (itemToEquip) => {
        let copyEquip = Object.assign({}, this.state.userEquipped);
        let unequippedItem;

        for (let item in copyEquip) {
            if (item.itemType === itemToEquip.itemType) {
                unequippedItem = item;
                this.obtainItem(unequippedItem.itemName, 1);
                item = itemToEquip;
                this.removeItem(itemToEquip.name, 1);
            }
        }
        this.setState({
            userEquipped: copyEquip
        });
    }

    ////page handles
    weaponPage = (e) => {
        e.preventDefault();
        this.setState({
            currentPage: "Weapons"
        });
    }

    armorPage = (e) => {
        e.preventDefault();
        this.setState({
            currentPage: "Armor"
        });
    }

    trinketPage = (e) => {
        e.preventDefault();
        this.setState({
            currentPage: "Trinkets"
        });
    }

    potionPage = (e) => {
        e.preventDefault();
        this.setState({
            currentPage: "Potions"
        });
    }

    miscPage = (e) => {
        e.preventDefault();
        this.setState({
            currentPage: "Misc"
        });
    }


    //// usage handles
    handleWeapons = (e) => {
        e.preventDefault();
        this.equipItem(e.target.dataset.val);
        this.setState({
            currentPage: "Weapons"
        });
    }

    handleArmor = (e) => {
        e.preventDefault();
        this.equipItem(e.target.dataset.val);
        this.setState({
            currentPage: "Armor"
        });
    }

    handleTrinkets = (e) => {
        e.preventDefault();
        this.equipItem(e.target.dataset.val);
        this.setState({
            currentPage: "Trinkets"
        });
    }

    handlePotions = (e) => {
        e.preventDefault();
        this.usePotion(e.target.dataset.val);
        this.setState({
            currentPage: "Potions"
        });
    }

    handleMisc = (e) => {
        e.preventDefault();
        this.setState({
            currentPage: "Misc"
        })
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col col-12">
                    <button onClick={this.weaponPage}>Weapons</button>
                    <button onClick={this.armorPage}>Armor</button>
                    <button onClick={this.trinketPage}>Trinkets</button>
                    <button onClick={this.potionPage}>Potions</button>
                    <button onClick={this.miscPage}>Misc Items</button>
                    </div>
                </div>
                <div>
                    {this.state.currentPage === "Weapons" ? <Weapons userInv={this.state.userInv} handleWeapons={this.handleWeapons} />
                        : this.state.currentPage === "Armor" ? <Armor userInv={this.state.userInv} handleWeapons={this.handleArmor} />
                            : this.state.currentPage === "Trinkets" ? <Trinkets userInv={this.state.userInv} handleWeapons={this.handleTrinkets} />
                                : this.state.currentPage === "Potions" ? <Potions userInv={this.state.userInv} handleWeapons={this.handlePotions} />
                                    : <Misc userInv={this.state.userInv} />}
                </div>
            </div>


        )
    }
}

export default Inventory;