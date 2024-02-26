// factory function for looks
class PlayerLooks {
    constructor(height, build, hairColor, hairLength) {
        this.height = height;
        this.build = build;
        this.hairColor = hairColor;
        this.hairLength = hairLength;    
    }
    // setters and getters for description - hair color and whatnot
    get yourHair() {
        return `your ${this.hairLength} ${this.hairColor} hair`;
    }
    get yourBody() {
        return `your ${this.height} and ${this.build} form`;
    }
}
let charLooks = new PlayerLooks('average', 'athletic', 'dark', 'long');
export { charLooks, PlayerLooks };