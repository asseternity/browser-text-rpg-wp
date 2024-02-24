// import: enemies array, isHeDead, listEnemies
import './index.css';
import { enemies, isHeDead, listEnemies } from "./comp_battle_functions";
// log_window
let log_window = document.querySelector('.log');
// object constructor functions
function Character(name, attackBonus, armorClass, currentHP, maxHP, specialAttack, equippedWeapon, equippedArmor, equippedMisc, inventory) {
    this.name = name;
    this.attackBonus = attackBonus;
    this.armorClass = armorClass;
    this.currentHP = currentHP;
    this.maxHP = maxHP;
    this.specialAttack = specialAttack;
    this.equippedWeapon = '';
    this.equippedArmor = '';
    this.equippedMisc = '';
    this.inventory = [];
}

function Monster(name, monsterAttackBonus, armorClass, currentHP, maxHP, status) {
    this.name = name;
    this.monsterAttackBonus = monsterAttackBonus;
    this.armorClass = armorClass;
    this.currentHP = currentHP;
    this.maxHP = maxHP;
    this.status = status;
}
// hero.prototype attack method
Character.prototype.attack = function(selectedEnemy) {
    if (enemies.length !== 0) {
        if (selectedEnemy !== undefined) {
            enemies.forEach(enemy => {
                if (enemy.status == 'burning') {
                    enemy.currentHP = enemy.currentHP - 5;
                    isHeDead(enemy); 
                    let entry = document.createElement('p');
                    entry.textContent = `${enemy.name} is burning for 5 damage!`;
                    entry.setAttribute('style','color:yellow');
                    log_window.appendChild(entry);
                }
            });
            enemies.forEach(enemy => {
                enemy.status = '';
            });
            Array.from(log_window.children).forEach((entry) => {
                entry.setAttribute('style', 'color:white;');
            });
            if (selectedEnemy.currentHP > 0) {
                let attackRoll = Math.floor((Math.random() * 20) + 1 + this.attackBonus);
                if (char1.equippedWeapon !== '') {
                    attackRoll = attackRoll + this.equippedWeapon.itemAttack;
                }
                if (char1.equippedArmor !== '') {
                    attackRoll =+ attackRoll + this.equippedArmor.itemAttack;
                }
                if (char1.equippedMisc !== '') {
                    attackRoll =+ attackRoll + this.equippedMisc.itemAttack;
                }
                let extraComment = '';
                let extraAttack = 0;
                let extraDamage = 0;
                switch (this.specialAttack) {
                    case 'Normal Attack':
                        break;
                    case 'Spectral Blade':
                        extraComment = ' with the Spectral Blade (-2 accuracy, +2 damage if hits)';
                        extraAttack = -2;
                        extraDamage = +4;
                        break;
                    case 'Spirit Blessing':
                        extraAttack = -1000;
                        break;
                    case 'Withering Bolt':
                        extraComment = ' with the Withering Bolt (-4 accuracy, but +6 damage if hits)';
                        extraAttack = -4;
                        extraDamage = +6;
                        break;
                    case 'Wrathful Visage':
                        extraComment = ' with the Wrathful Visage (-4 accuracy, but stuns the target)';
                        extraAttack = -4;
                        if (attackRoll + extraAttack > selectedEnemy.armorClass) { selectedEnemy.status = 'stunned'; }
                        break;
                    case 'Bind of the Guardian':
                        extraComment = ' with the Bind of the Guardian (-4 accuracy, but stuns the target)';
                        extraAttack = -4;
                        if (attackRoll + extraAttack > selectedEnemy.armorClass) { selectedEnemy.status = 'stunned'; }
                        break;
                    case 'Essence Drain':
                        extraComment = ' with the Essence Drain (-4 accuracy, but sets target on fire for one turn)';
                        extraAttack = -4;
                        if (attackRoll + extraAttack > selectedEnemy.armorClass) { selectedEnemy.status = 'burning'; }
                        break;                        
                }
                if (attackRoll + extraAttack > selectedEnemy.armorClass) {
                    selectedEnemy.currentHP -= attackRoll + extraAttack + extraDamage - selectedEnemy.armorClass;
                    let entry = document.createElement('p');
                    entry.textContent = `${this.name} attacks ${selectedEnemy.name}${extraComment}! The attack hits and deals ${attackRoll + extraAttack + extraDamage - selectedEnemy.armorClass} damage!`;
                    entry.setAttribute('style','color:yellow');
                    log_window.appendChild(entry);
                    isHeDead(selectedEnemy);
                    listEnemies();
                } else if (this.specialAttack == 'Spirit Blessing') {
                    let healed;
                    let playerHPmissing = this.maxHP - this.currentHP;
                    if (playerHPmissing > 5) {
                        this.currentHP = this.currentHP + 5;
                        healed = 5;
                    } else if (playerHPmissing > 0) {
                        healed = playerHPmissing;
                        this.currentHP = this.maxHP;
                    } else {
                        healed = 0;
                    }
                    let entry = document.createElement('p');
                    entry.textContent = `${this.name} casts Spirit Blessing, healing themself for ${healed} HP!`;
                    entry.setAttribute('style','color:yellow');
                    log_window.appendChild(entry);
                    menuUpdater();
                } else {
                    let entry = document.createElement('p');
                    entry.textContent = `${this.name} attacks ${selectedEnemy.name}! The attack misses!`;
                    entry.setAttribute('style','color:yellow');
                    log_window.appendChild(entry);
                }
                if (enemies.length !== 0) { 
                    enemies.forEach(enemy => {
                        if (enemy.status !== 'stunned') {
                            enemy.counterattack(); 
                        } else if (enemy.status == 'stunned') {
                            let entry = document.createElement('p');
                            entry.textContent = `${enemy.name} is stunned!`;
                            entry.setAttribute('style','color:yellow');
                            log_window.appendChild(entry);
                        }
                    }); 
                }
            }
        } else {
            let entry = document.createElement('p');
            entry.textContent = `Which monster do I attack?`;
            log_window.appendChild(entry);    
        }
    } else {
        let entry = document.createElement('p');
        entry.textContent = `No monsters around.`;
        log_window.appendChild(entry);
    }
}
// character classes
function Janitor(name, attackBonus, armorClass, currentHP, maxHP, specialAttack, equippedWeapon, equippedArmor, equippedMisc, inventory) {
    Character.call(this, name, attackBonus, armorClass, currentHP, maxHP, specialAttack, equippedWeapon, equippedArmor, equippedMisc, inventory);
}
function Accountant(name, attackBonus, armorClass, currentHP, maxHP, specialAttack, equippedWeapon, equippedArmor, equippedMisc, inventory) {
    Character.call(this, name, attackBonus, armorClass, currentHP, maxHP, specialAttack, equippedWeapon, equippedArmor, equippedMisc, inventory);
}
function Dancer(name, attackBonus, armorClass, currentHP, maxHP, specialAttack, equippedWeapon, equippedArmor, equippedMisc, inventory) {
    Character.call(this, name, attackBonus, armorClass, currentHP, maxHP, specialAttack, equippedWeapon, equippedArmor, equippedMisc, inventory);
}
// setting prototypes
Object.setPrototypeOf(Janitor.prototype, Character.prototype);
Object.setPrototypeOf(Accountant.prototype, Character.prototype); 
Object.setPrototypeOf(Dancer.prototype, Character.prototype); 
// character object
let char1 = new Character('Dude', 0, 10, 20, 100, 'Normal Attack', '', '', '', []); 
// enemies objects
let goblin_grunt = new Monster('Goblin', 0, 10, 40, 40, '');
let goblin_fighter = new Monster('Goblin Fighter', 2, 13, 25, 25, '');
let goblin_shaman = new Monster('Goblin Shaman', 3, 16, 30, 30, '');
let goblin_chieftain = new Monster('Goblin Chieftain', 5, 17, 40, 40, '');
let wizard = new Monster('Half Dead Old Guy', -1, 10, 5, 5, '');
let imp1 = new Monster('Red Imp', 0, 5, 5, 5, '');
let imp2 = new Monster('Blue Imp', 0, 5, 5, 5, '');
let wisp1 = new Monster('Wisp', 1, 10, 10, 10);
// monsters object
let monsters = { goblin_grunt, goblin_fighter, goblin_shaman, goblin_chieftain, wizard, imp1, imp2, wisp1 }
// monster counterattack
//enemy turn logic
Monster.prototype.counterattack = function() {
    let attackRoll =  Math.floor((Math.random() * 20) + 1) + this.monsterAttackBonus;
    if (attackRoll > char1.armorClass) {
        char1.currentHP -= attackRoll - char1.armorClass;
        menuUpdater();
        let entry = document.createElement('p');
        entry.textContent = `${this.name} attacks ${char1.name}! The attack hits and deals ${attackRoll - char1.armorClass} damage!`;
        entry.setAttribute('style','color:yellow');
        log_window.appendChild(entry);
    } else {
        let entry = document.createElement('p');
        entry.textContent = `${this.name} attacks ${char1.name}! The attack misses!`;
        entry.setAttribute('style','color:yellow');
        log_window.appendChild(entry);
    }
}
// ---menu text updater function---
function menuUpdater() {
    let menu_window = document.querySelector('.menu');
    if (char1 instanceof Janitor) { // Wraith
        menu_window.textContent = `You are ${char1.name}. Your are a Wraith. Your armor class is ${char1.armorClass}. Your HP is ${char1.currentHP}/${char1.maxHP}.`;
    } else if (char1 instanceof Accountant) { // Poltergeist
        menu_window.textContent = `You are ${char1.name}. Your are a Poltergeist. Your armor class is ${char1.armorClass}. Your HP is ${char1.currentHP}/${char1.maxHP}.`;
    } else if (char1 instanceof Dancer) { // Guardian Spirit
        menu_window.textContent = `You are ${char1.name}. Your are a Guardian Spirit. Your armor class is ${char1.armorClass}. Your HP is ${char1.currentHP}/${char1.maxHP}.`;
    } else {
        menu_window.textContent = `You are ${char1.name}. Your class is unknown. Your armor class is ${char1.armorClass}. Your HP is ${char1.currentHP}/${char1.maxHP}.`;
    }
}
// export
export {
    Character,
    Monster,
    Janitor,
    Accountant,
    Dancer,
    char1,
    goblin_grunt,
    goblin_fighter,
    goblin_shaman,
    goblin_chieftain,
    wizard,
    imp1,
    imp2,
    menuUpdater,
    monsters
}