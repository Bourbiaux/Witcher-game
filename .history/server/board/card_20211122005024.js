var uuidv1 = require("uuid/v1");
let CardJson = require("../../data/cards.json");

class Card {
    constructor(cardName) {
      this.id = uuidv1();
      // this.name = card.name;
      // this.type = card.type;
      // this.power = card.power;
      // this.ability = card.ability;
      // this.faction = card.faction;
      this.setData(cardName)
    }
    
    setData(cardName){
      console.log(CardJson);
    }
    getPower() {
      return this.power;
    }
  
    getName() {
      return this.name;
    }
  
    getImage() {
      return this.pic;
    }
  
    getFaction() {
      return this.faction;
    }
  
    getType() {
      return this.type;
    }
  
    reset() {}
  }
  
  module.exports = Card;
  