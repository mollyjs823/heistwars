import Inventory from "./inventory.js";

export default class OptionsMap{
    constructor(c) {
      this.options = ['Buy', 'Travel', 'Sell'];
      this.items = new Inventory().options;
      this.map = {
        'Travel': {
          'question': 'Where would you like to travel?',
          'options': [
            "New York City, New York", 
            "Hong Kong, China", 
            "Dubai, United Arab Emirates", 
            "San Francisco, California", 
            "Berlin, Germany", 
            "Paris, France", 
            "Florence, Italy",
            "Melbourne, Australia"
          ],
          'level': 'primary'
        },
        "Buy": {
          'question': 'What would you like to buy?',
          'options': this.items,
          'level': 'transaction'
        }, 
        "Sell": {
          'question': 'What would you like to sell?',
          'options': this.items,
          'level': 'transaction'
        }
      }
    }

    getOptions(choice) {
      return this.map[choice];
    }
  
    update() {
    }
  }