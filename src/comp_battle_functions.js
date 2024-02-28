// import: IsBattleOver, hud, monster objects, char1, classes
import './index.css';
import { 
    top_bar,
    log_window,
    image_window,
    main_window,
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
    isPlayerDead();
}
function isPlayerDead() {
    if (char1.currentHP <= 0) {
        eventEmitter.emit('battle:lose');
        for (let i = 0; i < main_window.children.length; i++) {
            if (main_window.children[i].tagName.toLowerCase() == 'button') {
                main_window.removeChild(main_window.children[i]);
            }
        }
        for (let j = 0; j < image_window.children.length; j++) {
            if (image_window.children[j].tagName.toLowerCase() == 'button') {
                image_window.removeChild(image_window.children[j]);
            }
        }
        while(top_bar.firstChild) {top_bar.removeChild(top_bar.firstChild)};
        let death = document.createElement('div');
        death.setAttribute('style', `position:absolute;height:100%;width:100%;z-index:500;overflow:hidden;`);
        death.classList.add('death');
        let container = document.querySelector('.container');
        container.appendChild(death);
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
        enemy_entry.textContent = `${thisEnemy.name} is there. It has AC of ${thisEnemy.armorClass}, attack bonus of ${thisEnemy.monsterAttackBonus} and HP of ${thisEnemy.currentHP}/${thisEnemy.maxHP}.`
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
let JanitorSpecials = ['Spirit Slam', 'Spectral Blade', 'Wrathful Visage'];
let AccountantSpecials = ['Spirit Slam', 'Withering Bolt', 'Essence Drain'];
let DancerSpecials = ['Spirit Slam', 'Spirit Blessing', 'Bind of the Guardian'];
let attackIndex = 0;
let playerClass = '';
eventEmitter.on('Wraith', () => {
    playerClass = 'Wraith';
});
eventEmitter.on('Poltergeist', () => {
    playerClass = 'Poltergeist';
});
eventEmitter.on('GuardianSpirit', () => {
    playerClass = 'GuardianSpirit';
});
function switchAttack(char) {
    if (playerClass !== '') {
        if (char instanceof Janitor) {
            attackIndex = (attackIndex + 1) % JanitorSpecials.length;
            char.specialAttack = JanitorSpecials[attackIndex];
        } else if (char instanceof Accountant) {
            attackIndex = (attackIndex + 1) % AccountantSpecials.length;
            char.specialAttack = AccountantSpecials[attackIndex];
        } else if (char instanceof Dancer) {
            attackIndex = (attackIndex + 1) % DancerSpecials.length;
            char.specialAttack = DancerSpecials[attackIndex];
        }
        let entry = document.createElement('p');
        entry.textContent = `You get ready to use ${char.specialAttack}.`;
        log_window.appendChild(entry);
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
    isPlayerDead,
    listEnemies,
    switchAttack,
    startBattle,
    enemies,
    enemyToAttack
}