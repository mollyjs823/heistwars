export default class Values{
    constructor(location, colors){
        this.locations = {
            "New York City, New York": { 
                    'Diamonds': 3225,
                    'Emeralds': 700,
                    'Rubies': 1620,
                    'Rockefeller Emerald': 6000000,
                }, 
            "Hong Kong, China": {
                    'Diamonds': 10320,
                    'Emeralds': 910,
                    'Rubies': 1620,
                    'Sunrise Ruby': 34200000,
                }, 
            "Dubai, United Arab Emirates": {
                    'Diamonds': 7110,
                    'Emeralds': 900,
                    'Rubies': 1620,
                }, 
            "San Francisco, California": {
                    'Diamonds': 2500,
                    'Emeralds': 725,
                    'Rubies': 1620,
                }, 
            "Berlin, Germany": {
                    'Diamonds': 7550,
                    'Emeralds': 767,
                    'Rubies': 1620,
                    'Strawn-Wagner Diamond': 34700,
                }, 
            "Paris, France": {
                    'Diamonds': 6945,
                    'Emeralds': 740,
                    'Rubies': 1620,
                }, 
            "Florence, Italy": {
                    'Diamonds': 4125,
                    'Emeralds': 990,
                    'Rubies': 1620,
                },
            "Melbourne, Australia": {
                    'Diamonds': 2750,
                    'Emeralds': 1010,
                    'Rubies': 1620,
                }
        }
        this.currLocation = location;
        this.x = 15;
        this.y = 310;
        this.color = colors['text']
    }

    draw(c){
        c.fillStyle = this.color;
        c.font = "12px Consolas";
        c.fillText("The prices of gems here are:", this.x, this.y - 20)
        c.font = "11px Consolas";
        let i = 0;
        for (const [key, value] of Object.entries(this.locations[this.currLocation])) {
            c.fillText(`${key}: ${value}`, this.x, this.y + 20 * i);
            i++;
        };
    }

    update(c, choice) {
        if (choice != 't'){
            this.draw(c);
        }
    }
}