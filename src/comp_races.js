// factory function / constructor / class
class Race {
    static instances = [];
    static getAllInstances() {
        return Race.instances;
    }
    constructor(name, description, raceAttackBonus, raceHPBonus, raceArmorBonus) {
        this.name = name;
        this.description = description;
        this.raceAttackBonus = raceAttackBonus;
        this.raceHPBonus = raceHPBonus;
        this.raceArmorBonus = raceArmorBonus;
    }
}
// creation of race objects
let Human = new Race('person from an unknown land', '[initial race]', 0, 0, 0);
let Realmer = new Race('Realmer', '[stocky and stout, blah blah]', 1, 0, 0);
let Mortar = new Race('Mortar', '[stocky and stout, blah blah]', 0, 0, 1); // already conquered by the Realm nation? Second-class citizens in the Realm
let Deadlander = new Race('Deadlander', '[stocky and stout, blah blah]', 0, 15, 0);
// object of objects for exporting
let races = { Human, Realmer, Mortar, Deadlander }
// exporting the class and the object of objects
export { Race, races }