import React from 'react';

import FightOrFlee from './BattleLogic/FightOrFlee';   //choices

import Hit from './BattleLogic/Hit';                   //choose fight
import Flee from './BattleLogic/Flee';                 //choose flee

import Win from './BattleLogic/Win';                   //kill mon
import Escape from './BattleLogic/Escape';             //run from mon
import EscapeFail from './BattleLogic/EscapeFail';     //filed to run from mon
import Lose from './BattleLogic/Lose';                 //char dies

import info from "./BattleLogic/TestInfo.json";        //replace with axios


class Battle extends React.Component {

  state = {
    userBase: {
      charDmg : 1,
      charHp: 10,
      charSpd: 1
    },
    char: info.CharName,
    charDmg: info.CharDmg,
    charSpd: info.CharSpd,
    charHp: info.CharHp,
    charChp: 0,
    mon: info.MonName,
    monDmg: info.MonDmg,
    monSpd: info.MonSpd,
    monMods: info.MonMods,
    monHp: info.MonHp,
    monChp: 0,
    monIni: 0,
    charIni: 0,
    win: false,
    lose: false,
    fight: false,
    flee: false,
    initialized: false,          //may be outmodded
    escape: false,
    escapefail: false,
    userInv: [],       //for inventory
    userEquipped: {}       //for inventory
  }
  ///Initializing and Mechanics///
  getMon() { }    //db get mon stats
  getChar() { }   //db get player stats

  componentDidMount() {  //initialization {set Chp, dmg modded by equip, etc.}

    //for inventory
    axios.get("/api/users/" + sessionStorage.getItem("token")).then(user => {
      this.setState({
          userInv: user.inventory,
          userEquipped: user.equipped,
          charDmg: user.userStats.attack,
          charHp: user.userStats.maxHp,
          charChp: user.userStats.currentHp,
          charSpd: user.userStats.speed,
          monChp: this.state.monHp
      });
    })
  }

  getIni(toonSpd) {    //randomize initiative 
    let toonIni = (Math.random(toonSpd) * 100)
    console.log(toonIni)
    return toonIni
  }

  pathClear = () => {    //clears paths for conditional rendering
    this.setState({
      fight: false,
      flee: false,
      escapefail: false,
    })
  }

  ///Initializing and Mechanics///

  ///Main Choices///
  FightOrFlee = (e) => {                    //an item use can be added here
    e.preventDefault()
    this.pathClear()
    if (e.target.value === "fight") {       //choose fight
      this.setState({
        fight: true,                        //conditional render path
      })
      this.fight()
    } else if (e.target.value === "flee") { //choose flee
      this.setState({
        flee: true,                         //conditional render path
      })
      this.flee()
    }
  }
  ///Main Choices///

  ///encounter paths///
  fight = () => {
    let monIni = this.getIni(this.state.monSpd)                //grab stats
    let charIni = this.getIni(this.state.charSpd)
    let monChp = this.state.monChp
    let charChp = this.state.charChp
    let monDmg = this.state.monDmg
    let charDmg = this.state.charDmg
    //
    console.log(`C: ${charChp}, M:${monChp} Pre Fight Loop`)
    if (charIni < monIni) {                                    //initiative flow
      charChp -= monDmg
      if (charChp <= 0) {                                      //deathcheck
        this.lose()
      } else {
        monChp -= charDmg
        if (monChp <= 0) {                                     //kill check
          this.win()
        }
      }
    } else {                                                   //alt initiative flow
      monChp -= charDmg
      if (monChp <= 0) {                                       //kill check
        this.win()
      } else {
        charChp -= monDmg
        if (charChp <= 0) {                                    //death check
          this.lose()
        }
      }
    }
    console.log(`C: ${charChp}, M:${monChp}, Post Fight Loop`)
    this.setState({                                            //cleanup and prep for next loop
      monChp: monChp,
      charChp: charChp,
      monIni: monIni,
      charIni: charIni,
    })
  }

  flee = () => {
    let monIni = this.getIni(this.state.monSpd)
    let charIni = this.getIni(this.state.charSpd)
    if (charIni > (monIni * 1.25)) {       //modify escape chance
      this.escape()
    } else {
      this.escapeFail()
    }
  }

  escapeFail = () => {
    let charChp = this.state.charChp - this.state.monDmg      //take dmg 
    this.setState({
      charChp: charChp,
      escapefail: true                                        //conditional render path
    })
    console.log(`C: ${charChp}, Escape Fail`)
  }

  // item = () => {} //implement use item here
  ///encounter paths/// 


  ///End Conditions///
  win = () => {
    this.setState({
      win: true
    })
  }

  escape = () => {
    this.setState({
      escape: true
    })
  }

  lose = () => {
    this.setState({
      lose: true
    })
  }

  //all things inventory//
  
  saveStatsToDB = () => {
    axios.put("/api/users/" + sessionStorage.getItem("token"), {
      stats: {
        attack: this.state.charDmg,
        maxHp: this.state.charHp,
        currentHp: this.state.charChp,
        speed: this.state.charSpd
      }
    });
  }


  obtainItem = (name, obtainItem, amount) => {
    let copy = this.state.userInv.slice();
    if (copy.findIndex(item => item.name === name) != -1) {
        copy[copy.findIndex(item => item.name === name)].amount += amount;
    } else if (copy.findIndex(item => item.name === name) = -1) {
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
  if (copy.findIndex(item => item.name === name) != -1) {
      copy[copy.findIndex(item => item.name === name)].amount -= amount;
  } else {
      console.log("error, corrupted user inventory, please contact admin");
  }

  if(copy[copy.findIndex(item => item.name === name)].amount <= 0) {
      copy.splice(copy.findIndex(item => item.name === name),1);
  }

  this.saveInvToDB();
}

saveInvToDB = () => {
  axios.put("/api/users/" + sessionStorage.getItem("token"), {
      inventory: this.state.userInv,
      equipped: this.state.userEquipped
  });
}

usePotion = (name, item, amount) => {
  let copy = this.state.userInv.slice();
  if (copy.findIndex(item => item.name === name) != -1) {
    this.setState({
      charChp: charChp + item.itemProperties.effect
    });
  }

  this.removeItem(name, amount);
  this.saveInvToDB();
  this.saveStatsToDB();
}

setStats = () => {
  this.state.userEquipped.forEach(item => {
      if (item.itemType === "Weapon") {
          const newCharDmg = this.state.userBase.charDmg + item.itemProperties.effect;
          this.setState({
            charDmg: newCharDmg
        });
      } else if (item.itemType === "Armor") {
          const newCharHp = this.state.userBase.charHp + item.itemProperties.effect;
          this.setState({
            charHp : newCharHp
          })
      } else if (item.itemType === "Trinket") {
          const newCharSpd = this.state.userBase.charSpd + item.itemProperties.effect;
          this.setState({
            charSpd : newCharSpd
          })
      } else {
          console.log("error, corrupted user inventory, please contact admin");
      }
  })
}


  // onUnMount(){db.PushResults}

  render() {
    return (
      <div className="battle">
        <header className="battle-header">
          <div>
            {this.state.fight === true ?
              <Hit
                monSpd={this.state.monIni}
                monDmg={this.state.monDmg}
                mon={this.state.mon}
                char={this.state.char}
                charSpd={this.state.charIni}
                charDmg={this.state.charDmg}
              /> :
              this.state.flee === true ?
                <Flee
                  monSpd={this.state.monIni}
                  mon={this.state.mon}
                  char={this.state.char}
                  charSpd={this.state.charIni}
                /> :
                <></>}
          </div>
          <div>
            {this.state.win === true ?
              <Win
                mon={this.state.mon}
                char={this.state.char}
              /> :
              this.state.lose === true ?
                <Lose
                  mon={this.state.mon}
                  char={this.state.char}
                /> :
                this.state.escape === true ?
                  <Escape
                    mon={this.state.mon}
                    char={this.state.char}
                  /> :
                  this.state.escapefail === true ?
                    <div>
                      <EscapeFail
                        mon={this.state.mon}
                        monDmg={this.state.monDmg}
                      />
                      <FightOrFlee mon={this.state.mon} FightOrFlee={this.FightOrFlee} /> </div> :
                    <FightOrFlee mon={this.state.mon} FightOrFlee={this.FightOrFlee} />
            }
          </div>
        </header>
      </div>
    );
  }
}

export default Battle;
