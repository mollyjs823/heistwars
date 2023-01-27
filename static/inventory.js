import Values from "./values.js";

export default class Inventory{
    constructor(c){
        this.warehouse = new Values();
        this.inventory = this.warehouse.getInventory();
        this.color = '#70d9ff';
        this.x = 30;
        this.y = c.context.hUnit ;
    }

    draw(c){
        c.fillStyle = this.color;
        c.font = "12px Consolas";
        for (let i = 0; i < Object.keys(this.inventory).length; i++) {
            c.fillText(`${Object.keys(this.inventory)[i]}: ${Object.values(this.inventory)[i]}`, this.x, this.y + 20 * i);
        };
    }

    // update(c, choice){
    //     this.draw(c);
    // }

    // increase(item, number, price, money){
    //     this.bInventory[item] += number;
    //     return money -= price * number;
    // }

    // decrease(item, number, price, money){
    //     this.bInventory[item] -= number;
    //     return money += price * number;
    // }
    
}