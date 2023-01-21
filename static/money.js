export default class Money{
    constructor(colors, money){
        this.x = 315;
        this.y = 195; 
        this.bx = 25;
        this.color = colors['text'];
        this.cash = money['cash'];
        this.bank = money['bank'];
        this.debt = money['debt'];
    }

    draw(c){
        c.fillStyle = this.color;
        c.font = "12px Consolas";
        c.fillText(`Cash: ${this.cash}`, this.x, this.y);
        c.fillText(`Bank: ${this.bank}`, this.bx, this.y);
        c.fillText(`Debt: ${this.debt}`, this.bx, this.y + 15);
    }

    update(c, choice){
        this.draw(c);
    }
}