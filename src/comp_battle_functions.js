// import: IsBattleOver, hud, monster objects, char1, classes
import './index.css';
import { 
    top_bar,
    log_window,
    image_window,
} from './comp_hud';
import { 
    Janitor,
    Accountant,
    Dancer,
    char1,
} from './comp_objects_and_methods';
const eventEmitter = require('./comp_event_emitter.js');
// important vars
let enemies = [];
let enemyToAttack;
let playerConsequences = [];
//button effects
let attack_button = document.querySelector('#attackButton');
attack_button.addEventListener('click', () => char1.attack(enemyToAttack));
// change enemies function
function isHeDead(damagedEnemy) {
    if (damagedEnemy.currentHP <= 0) {
        let entry = document.createElement('p');
        entry.textContent = `${damagedEnemy.name} dies!`;
        entry.setAttribute('style','color:yellow');
        log_window.appendChild(entry);
        let deadMonsterID = enemies.findIndex(i => i.name == damagedEnemy.name);
        enemies.splice(deadMonsterID, 1);
        if (enemies.length == 0) {
            eventEmitter.emit('battle:win');
            // isBattleOver('win');
        }
    };
    if (char1.currentHP <= 0) {
        eventEmitter.emit('battle:lose');
        // isBattleOver('lose');
    }
}
// update enemies list
function listEnemies() {
    let board = document.querySelector('#explorationBoard');
    Array.from(image_window.children).forEach(entry => {
        if (entry !== board) {
            image_window.removeChild(entry);
        } 
    })
    enemies.forEach((thisEnemy) => {
        let enemy_entry = document.createElement('p');
        let enemy_button = document.createElement('button');
        enemy_entry.textContent = `${thisEnemy.name} stands there. It has AC of ${thisEnemy.armorClass}, attack bonus of ${thisEnemy.monsterAttackBonus} and HP of ${thisEnemy.currentHP}/${thisEnemy.maxHP}.`
        enemy_button.textContent = `Select`;
        enemy_button.setAttribute('id', thisEnemy.name);
        enemy_button.addEventListener('click', () => selectEnemy(thisEnemy));
        image_window.appendChild(enemy_entry);
        image_window.appendChild(enemy_button);
    });
}
// attacking
function selectEnemy(enemy) {
    enemyToAttack = enemy;
    top_bar.textContent = `Selected enemy: ${enemy.name}.`;
}
// special button that switches attack modes
let JanitorSpecials = ['Normal Attack', 'Bucket Splash', 'Broom Smash'];
let AccountantSpecials = ['Normal Attack', 'Book Toss', 'Torch Throw (to burn tax evasion evidence)'];
let DancerSpecials = ['Normal Attack', 'Healing Twirl', 'Capoiera Kick'];
let attackIndex = 0;
function switchAttack(char) {
    if (playerConsequences.includes('classJanitor') || playerConsequences.includes('classAccountant') || playerConsequences.includes('classDancer')) {
        if (char instanceof Janitor) {
            attackIndex = (attackIndex + 1) % JanitorSpecials.length;
            char.specialAttack = JanitorSpecials[attackIndex];
            let entry = document.createElement('p');
            entry.textContent = `${char.name} is ready to use ${char.specialAttack}.`;
            log_window.appendChild(entry);
        } else if (char instanceof Accountant) {
            attackIndex = (attackIndex + 1) % AccountantSpecials.length;
            char.specialAttack = AccountantSpecials[attackIndex];
            let entry = document.createElement('p');
            entry.textContent = `${char.name} is ready to use ${char.specialAttack}.`;
            log_window.appendChild(entry);
        } else if (char instanceof Dancer) {
            attackIndex = (attackIndex + 1) % DancerSpecials.length;
            char.specialAttack = DancerSpecials[attackIndex];
            let entry = document.createElement('p');
            entry.textContent = `${char.name} is ready to use ${char.specialAttack}.`;
            log_window.appendChild(entry);
        };
    };
};
//start battle
function startBattle(...encounterEnemies) {
    encounterEnemies.forEach((thisEnemy) => {
        thisEnemy.currentHP = thisEnemy.maxHP;
    });
    enemies = encounterEnemies;
    listEnemies();
}
// export
export {
    isHeDead,
    listEnemies,
    switchAttack,
    startBattle,
    enemies,
    enemyToAttack,
    playerConsequences
}