import React from 'react';

import FightOrFlee from './BattleLogic/FightOrFlee';   //choices

import Fight from './BattleLogic/Fight';                   //choose fight
import Flee from './BattleLogic/Flee';                 //choose flee

import Win from './BattleLogic/Win';                   //kill mon
import Escape from './BattleLogic/Escape';             //run from mon
import EscapeFail from './BattleLogic/EscapeFail';     //filed to run from mon
import Lose from './BattleLogic/Lose';                 //char dies

import info from "./BattleLogic/TestInfo.json";        //replace with axios

import axios from "axios"
// import Inventory from "./Inventory"

class Battle extends React.Component {

  state = {
    char: info.CharName,
    charDmg: info.CharDmg,
    charSpd: info.CharSpd,
    charHp: info.CharHp,
    charChp: 0,
    charMods: info.CharMods,     //mods needed? //depends on where items come in
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
    monster: {}
  }

  ///Initializing and Mechanics///
  getMon() {
    axios.get(`api/monsters/`)
      .then(res => {
        const monster = res.data;
        this.setState({
          mon: monster[1].monster_name,
          monDmg: monster[1].stats.attack,
          monSpd: monster[1].stats.speed,
          monHp: monster[1].stats.hp
        });
      })

  }    //db get mon stats

  getChar() {
    axios.get(`api/Player/`)
      .then(res => {
        const player = res.data;
        this.setState({
          char: player[1].username,
          charDmg: player[1].stats.attack,
          charSpd: player[1].stats.speed,
          charHp: player[1].stats.hp
        });
      })

  }    //db get player stats

  componentDidMount() {  //initialization {set Chp, dmg modded by equip, etc.}
    //getChar & getMon
    console.log('mounted')
    // Inventory.componentDidMount()
    this.getMon()
    this.setState({
      charChp: this.state.charHp,
      monChp: this.state.monHp,
      initialize: true
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

  close = () => (
    //push results
    this.componentWillUnmount()
  )
  // onUnMount(){db.PushResults/Rewards}

  render() {
    return (
      <div className="battle">
        <header className="battle-header">
          <div>
            {this.state.fight === true ?
              <Fight
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
                close={this.props.unmountBattle}
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
                    close={this.props.unmountBattle}
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


/*
import React from "react"

 const Enemy = () => (
    <div class="container">
        <div id="health"></div>
        <div id="gameTextBox">
            <button type="button" class="btn btn-primary">Action 1</button>
            <button type="button" class="btn btn-primary">Action 2</button>
            <button type="button" class="btn btn-primary">Action 3</button>
            <button type="button" class="btn btn-primary">Action 4</button>
        </div>

         <button type="button" class="btn btn-primary">Escape</button>
        <div id="playerLootBox">Gold: <br /> Loot:</div>
        <button type="button" class="btn btn-primary">Back to town</button>
    </div>
)

 export default Enemy
 */