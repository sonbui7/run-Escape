import React from "react";
import axios from "axios";





///////////////////////////////////////functionalities/////////////////////////////////////


class Inventory extends React.Component {
    state = {
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
            currentHp:0,
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

    obtainItem = (name, item, amount) => {
        let copy = this.state.userInv.slice();
        if (copy.findIndex(item => item.name === name) != -1) {
            copy[copy.findIndex(item => item.name === name)].amount += amount;
        } else if (copy.findIndex(item => item.name === name) = -1) {
            copy.push({
                itemName: name,
                itemType: item.itemType,
                itemProperties: item.itemProperties,
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
        if (copy.findIndex(item => item.name === name) != -1) {
            copy[copy.findIndex(item => item.name === name)].amount -= amount;
        } else {
            console.log("error, corrupted user inventory, please contact admin");
        }


        if(copy[copy.findIndex(item => item.name === name)].amount <= 0) {
            copy.splice(copy.findIndex(item => item.name === name),1);
        }
    }

    equipItem = (type, itemToEquip) => {
        let copy = this.state.userInv.slice();
        let copyEquip = Object.assign({}, this.state.userEquipped);
        let unequippedItem;

        for (let item in copyEquip) {
            if (item.itemType === type) {
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





}

export default Inventory;