import getWarehouseInv from "./warehouseInventory";
import getBriefcaseInv from "./briefcaseInventory";

export default class Inventory{
    constructor(wInventory, bInventory, colors){
        this.warehouse = new getWarehouseInv(wInventory);
        this.wInventory = this.warehouse.inventory;
        this.briefcase = new getBriefcaseInv(bInventory);
        this.bInventory = this.briefcase.inventory;
        this.color = colors[1];
    }

    draw(c){
        //Warehouse
        c.fillStyle = this.color;
        c.font = "12px Consolas";
        let i = 0;
        for (const [key, value] of Object.entries(this.wInventory)) {
            if (value == true) {
                c.fillText(`${key}`, this.warehouse.x, this.warehouse.y + 20 * i);
            } else {
            c.fillText(`${key}: ${value}`, this.warehouse.x, this.warehouse.y + 20 * i);
            i++;
            }
        };
        //Briefcase
        i = 0;
        for (const [key, value] of Object.entries(this.bInventory)) {
            if (value === true) {
                c.fillText(`${key}`, this.briefcase.x, this.briefcase.y + 20 * i);
            } else {
            c.fillText(`${key}: ${value}`, this.briefcase.x, this.briefcase.y + 20 * i);
            i++;
            }
        };
    }

    update(c, choice){
        this.draw(c);
    }

    increase(item, number){
        this.bInventory[item] += number;
        
    }

    decrease(item, number, price, money){
        this.bInventory[item] -= number;
        return money += price * number;
    }
    
}