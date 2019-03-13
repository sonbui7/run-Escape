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
        userInv: [],
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
        axios.put("/api/users/1", {
            stats: this.state.userStats,
            inventory: this.state.userInv,
            equipped: this.state.userEquipped
        });
    }

    // grabbing user info and recalculating stats
    componentDidMount = () => {
        axios.get("/api/users/1" /*+ sessionStorage.getItem("token")*/)
            .then(user => {
                console.log(user);
                // axios.get(`api/Player/`)
                this.setState({
                    userInv: user.data.inventory,
                    userStats: {
                        attack: user.data.stats.attack,
                        speed: user.data.stats.speed,
                        maxHp: user.data.stats.hp,
                        currentHp: user.data.stats.currentHp
                    },
                    userEquipped: user.data.equipped
                });
            }).then(() => {
                this.setState({}, () => {
                    this.setStats();
                });
            });
    }

    setStats = () => {
        let copy = Object.assign({}, this.state.userStats);
        // console.log(this.state.userEquipped);
        for (let item in this.state.userEquipped) {
            console.log(this.state.userEquipped[item]);
            console.log(copy);
            if (this.state.userEquipped[item].itemType === "Weapon") {
                copy.attack = this.state.userBase.attack + this.state.userEquipped[item].itemProperties.effect;
            } else if (this.state.userEquipped[item].itemType === "Armor") {
                copy.maxHp = this.state.userBase.maxHp + this.state.userEquipped[item].itemProperties.effect;
            } else if (this.state.userEquipped[item].itemType === "Trinket") {
                copy.speed = this.state.userBase.speed + this.state.userEquipped[item].itemProperties.effect;
            } else {
                console.log("error, corrupted user inventory, please contact admin");
            }
            this.setState({
                userStats: copy
            }, () => {
                this.saveUserToDB();
            });
        }
    }



    obtainItem = (obtainItem, amount, cb) => {
        let copy = this.state.userInv.slice();
        if (copy.findIndex(item => item.itemName === obtainItem.itemName) !== -1) {
            copy[copy.findIndex(item => item.itemName === obtainItem.itemName)].amount += amount;
        } else if (copy.findIndex(item => item.itemName === obtainItem.itemName) === -1) {
            console.log(copy);
            console.log(obtainItem);
            copy.push({
                itemName: obtainItem.itemName,
                itemType: obtainItem.itemType,
                itemProperties: obtainItem.itemProperties,
                amount: obtainItem.amount
            });
            console.log(copy);
        } else {
            console.log("error, corrupted user inventory, please contact admin");
        }

        console.log(copy, obtainItem);
        this.setState({
            userInv: copy
        }, cb);
    }


    removeItem = (name, amount) => {
        let copy = this.state.userInv.slice();
        let index = copy.findIndex(item => item.itemName === name);
        if (index !== -1) {
            copy[index].amount -= amount;
            console.log(copy[index].amount)
            if (copy[index].amount <= 0) {
                copy.splice(index, 1);
                console.log(copy);
            }
        } else {
            console.log("error, corrupted user inventory, please contact admin");
        }

        console.log(copy);

        this.setState({
            userInv: copy
        }, () => {
            this.saveUserToDB();
        })
        console.log(this.state.userInv);
    }

    usePotion = (potion) => {
        let copyStats = Object.assign({}, this.state.userStats);
        let copy = this.state.userInv.slice();
        if (copy.findIndex(item => item.itemName === potion.itemName) !== -1) {
            copyStats.currentHp += potion.itemProperties.effect;
            if(copyStats.currentHp += potion.itemProperties.effect > copyStats.maxHp) {
                copyStats.currentHp = copyStats.maxHp
            }
            console.log(copyStats);
            console.log(copyStats.currentHp);
            console.log(potion.itemProperties.effect);
            this.setState({
                userStats: copyStats
            }, () => {
                this.removeItem(potion.itemName, 1);
            });
        }
    }

    equipItem = (itemToEquip) => {
        let copyEquip = Object.assign({}, this.state.userEquipped);
        let unequippedItem = {};

        for (let item in copyEquip) {
            if (copyEquip[item].itemType === itemToEquip.itemType) {
                console.log(copyEquip[item].itemType);
                console.log(itemToEquip.itemType)
                unequippedItem = copyEquip[item];
                console.log(unequippedItem);
                this.obtainItem(unequippedItem, 1, () => {
                    copyEquip[item] = itemToEquip;
                    this.removeItem(itemToEquip.itemName, 1);
                });
            }
        }
        this.setState({
            userEquipped: copyEquip
        }, () => {
            this.setStats();
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
        this.equipItem(JSON.parse(e.target.getAttribute('val')));
        this.setState({
            currentPage: "Weapons"
        });
    }

    handleArmor = (e) => {
        e.preventDefault();
        this.equipItem(JSON.parse(e.target.getAttribute('val')));
        this.setState({
            currentPage: "Armor"
        });
    }

    handleTrinkets = (e) => {
        e.preventDefault();
        console.log(e.target.getAttribute('val'));
        console.log(e.target);
        this.equipItem(JSON.parse(e.target.getAttribute('val')));
        this.setState({
            currentPage: "Trinkets"
        });
    }

    handlePotions = (e) => {
        e.preventDefault();
        this.usePotion(JSON.parse(e.target.getAttribute('val')));
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
                <hr></hr>
                <div>
                    {this.state.currentPage === "Weapons" ? <Weapons userInv={this.state.userInv} handleWeapons={this.handleWeapons} />
                        : this.state.currentPage === "Armor" ? <Armor userInv={this.state.userInv} handleArmor={this.handleArmor} />
                            : this.state.currentPage === "Trinkets" ? <Trinkets userInv={this.state.userInv} handleTrinkets={this.handleTrinkets} />
                                : this.state.currentPage === "Potions" ? <Potions userInv={this.state.userInv} handlePotions={this.handlePotions} />
                                    : <Misc userInv={this.state.userInv} />}
                </div>
            </div>


        )
    }

}


export default Inventory;
