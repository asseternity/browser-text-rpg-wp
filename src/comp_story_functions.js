// import: storyElement, storyElements, hud, grabItem, char1, classes, listEnemies, moveOn, enemies array, enemy objects
import separator from './comp_separator';
import {
    playerHand, opponentHand, currentBid, accusation, exampleLines, die1, die2, die3, die4, die5, die6, startDiceGame, falseCubes, roll6d4Player, roll6d4Opponent, roll1d4, rollPhase, bidPhase, fiftyFifty, oneThird, opponentResponse, opponentBid, callOut, gameEnd
} from './comp_dice_game';
import './index.css';
import { 
    top_bar,
    log_window,
    main_window,
    image_window,
    menu_window,
    button_window,
    attack_button,
    special_button,
    inventory_button,
    stats_button,
    dialogAnimationEnd
} from './comp_hud';
import { enemies, listEnemies, switchAttack } from "./comp_battle_functions";
import { grabItem, playerGold, addGold } from './comp_inventory_system';
import {
    Character,
    Monster,
    Janitor,
    Accountant,
    Dancer,
    char1,
    menuUpdater,
    NPCMaker,
    NPCRole
} from './comp_objects_and_methods';
// import {  storyElements } from './comp_story_objects';
import { storyElement, scriptObjects } from './comp_script';
import { Race, races } from './comp_races';
const eventEmitter = require('./comp_event_emitter');
// game-long vars
let newPlayerConsequences = [];
let isPlayerExploring = false;
let Chosen = {};
// update chosen
function updateChosen() {
    let allStoryElements = storyElement.getAllInstances();
    for (let i = 0; i < allStoryElements.length; i++) {
        switch (allStoryElements[i].type) {
            case 'description':
            case 'item':
            case 'battle':
            case 'exploration':
            case 'randomEncounter':
            case 'form':
                for (let j = 0; j < allStoryElements[i].text.length; j++) {
                    allStoryElements[i].text[j] = allStoryElements[i].text[j].replaceAll('ChosenName', Chosen.name); 
                    allStoryElements[i].text[j] = allStoryElements[i].text[j].replaceAll('ChosenSurname', Chosen.surname); 
                    allStoryElements[i].text[j] = allStoryElements[i].text[j].replaceAll('xe', Chosen.he); 
                    allStoryElements[i].text[j] = allStoryElements[i].text[j].replaceAll('xis', Chosen.his); 
                    allStoryElements[i].text[j] = allStoryElements[i].text[j].replaceAll('xim', Chosen.him); 
                    allStoryElements[i].text[j] = allStoryElements[i].text[j].replaceAll('ximself', Chosen.himself); 
                }
                break;
            case 'choice':
                for (let j = 0; j < allStoryElements[i].text.length; j++) {
                    allStoryElements[i].text[j] = allStoryElements[i].text[j].replaceAll('ChosenName', Chosen.name); 
                    allStoryElements[i].text[j] = allStoryElements[i].text[j].replaceAll('ChosenSurname', Chosen.surname); 
                    allStoryElements[i].text[j] = allStoryElements[i].text[j].replaceAll('xe', Chosen.he); 
                    allStoryElements[i].text[j] = allStoryElements[i].text[j].replaceAll('xis', Chosen.his); 
                    allStoryElements[i].text[j] = allStoryElements[i].text[j].replaceAll('xim', Chosen.him); 
                    allStoryElements[i].text[j] = allStoryElements[i].text[j].replaceAll('ximself', Chosen.himself); 
                }
                for (let k = 0; k < allStoryElements[i].modifiers.length; k++) {
                    allStoryElements[i].modifiers[k].choiceText = allStoryElements[i].modifiers[k].choiceText.replaceAll('ChosenName', Chosen.name);
                    allStoryElements[i].modifiers[k].choiceText = allStoryElements[i].modifiers[k].choiceText.replaceAll('ChosenSurname', Chosen.surname);
                    allStoryElements[i].modifiers[k].choiceText = allStoryElements[i].modifiers[k].choiceText.replaceAll('xe', Chosen.he);
                    allStoryElements[i].modifiers[k].choiceText = allStoryElements[i].modifiers[k].choiceText.replaceAll('xis', Chosen.his);
                    allStoryElements[i].modifiers[k].choiceText = allStoryElements[i].modifiers[k].choiceText.replaceAll('xim', Chosen.him);
                    allStoryElements[i].modifiers[k].choiceText = allStoryElements[i].modifiers[k].choiceText.replaceAll('ximself', Chosen.himself);
                }
                break;
            case 'dialogue':
                for (let j = 0; j < allStoryElements[i].text.length; j++) {
                    allStoryElements[i].text[j].npcLine = allStoryElements[i].text[j].npcLine.replaceAll('ChosenName', Chosen.name);
                    allStoryElements[i].text[j].npcLine = allStoryElements[i].text[j].npcLine.replaceAll('ChosenSurname', Chosen.surname); 
                    allStoryElements[i].text[j].npcLine = allStoryElements[i].text[j].npcLine.replaceAll('xe', Chosen.he); 
                    allStoryElements[i].text[j].npcLine = allStoryElements[i].text[j].npcLine.replaceAll('xis', Chosen.his);
                    allStoryElements[i].text[j].npcLine = allStoryElements[i].text[j].npcLine.replaceAll('xim', Chosen.him);
                    allStoryElements[i].text[j].npcLine = allStoryElements[i].text[j].npcLine.replaceAll('ximself', Chosen.himself);
                    for (let k = 0; k < allStoryElements[i].text[j].responses.length; k++) {
                        allStoryElements[i].text[j].responses[k].dialogueChoice = allStoryElements[i].text[j].responses[k].dialogueChoice.replaceAll('ChosenName', Chosen.name);
                        allStoryElements[i].text[j].responses[k].dialogueChoice = allStoryElements[i].text[j].responses[k].dialogueChoice.replaceAll('ChosenSurname', Chosen.surname); 
                        allStoryElements[i].text[j].responses[k].dialogueChoice = allStoryElements[i].text[j].responses[k].dialogueChoice.replaceAll('xe', Chosen.he); 
                        allStoryElements[i].text[j].responses[k].dialogueChoice = allStoryElements[i].text[j].responses[k].dialogueChoice.replaceAll('xis', Chosen.his);
                        allStoryElements[i].text[j].responses[k].dialogueChoice = allStoryElements[i].text[j].responses[k].dialogueChoice.replaceAll('xim', Chosen.him);
                        allStoryElements[i].text[j].responses[k].dialogueChoice = allStoryElements[i].text[j].responses[k].dialogueChoice.replaceAll('ximself', Chosen.himself);
                    }
                }
                break;
            case 'consequence':
                for (let j = 0; j < allStoryElements[i].text.length; j++) {
                    for (let k = 0; k < allStoryElements[i].text[j].consequenceText.length; k++) {
                        allStoryElements[i].text[j].consequenceText[k] = allStoryElements[i].text[j].consequenceText[k].replaceAll('ChosenName', Chosen.name); 
                        allStoryElements[i].text[j].consequenceText[k] = allStoryElements[i].text[j].consequenceText[k].replaceAll('ChosenSurname', Chosen.surname);
                        allStoryElements[i].text[j].consequenceText[k] = allStoryElements[i].text[j].consequenceText[k].replaceAll('xe', Chosen.he);
                        allStoryElements[i].text[j].consequenceText[k] = allStoryElements[i].text[j].consequenceText[k].replaceAll('xis', Chosen.his);
                        allStoryElements[i].text[j].consequenceText[k] = allStoryElements[i].text[j].consequenceText[k].replaceAll('xim', Chosen.him);
                        allStoryElements[i].text[j].consequenceText[k] = allStoryElements[i].text[j].consequenceText[k].replaceAll('ximself', Chosen.himself);
                    }
                }
                break;
        }
    }
}
// update concept
function updateConcept() {
    let allStoryElements = storyElement.getAllInstances();
    for (let i = 0; i < allStoryElements.length; i++) {
        switch (allStoryElements[i].type) {
            case 'description':
            case 'item':
            case 'battle':
            case 'choice':
            case 'exploration':
            case 'randomEncounter':
            case 'form':
                for (let j = 0; j < allStoryElements[i].text.length; j++) {
                    allStoryElements[i].text[j] = allStoryElements[i].text[j].replaceAll('Justice', char1.spiritConcept.concept); 
                }
                break;
            case 'dialogue':
                for (let j = 0; j < allStoryElements[i].text.length; j++) {
                    allStoryElements[i].text[j].npcLine = allStoryElements[i].text[j].npcLine.replaceAll('Justice', char1.spiritConcept.concept);
                    for (let k = 0; k < allStoryElements[i].text[j].responses.length; k++) {
                        allStoryElements[i].text[j].responses[k].dialogueChoice = allStoryElements[i].text[j].responses[k].dialogueChoice.replaceAll('Justice', char1.spiritConcept.concept);
                    }
                }
                break;
            case 'consequence':
                for (let j = 0; j < allStoryElements[i].text.length; j++) {
                    for (let k = 0; k < allStoryElements[i].text[j].consequenceText.length; k++) {
                        allStoryElements[i].text[j].consequenceText[k] = allStoryElements[i].text[j].consequenceText[k].replaceAll('Justice', char1.spiritConcept.concept); 
                    }
                }
                break;
        }
    }
}
// update storyElements
function newUpdateNames(answer) {
    let allStoryElements = storyElement.getAllInstances();
    for (let i = 0; i < allStoryElements.length; i++) {
        switch (allStoryElements[i].type) {
            case 'description':
            case 'item':
            case 'battle':
            case 'choice':
            case 'exploration':
            case 'randomEncounter':
            case 'form':
                for (let j = 0; j < allStoryElements[i].text.length; j++) {
                    allStoryElements[i].text[j] = allStoryElements[i].text[j].replaceAll('Somebody', answer); 
                }
                break;
            case 'dialogue':
                for (let j = 0; j < allStoryElements[i].text.length; j++) {
                    allStoryElements[i].text[j].npcLine = allStoryElements[i].text[j].npcLine.replaceAll('Somebody', answer);
                    for (let k = 0; k < allStoryElements[i].text[j].responses.length; k++) {
                        allStoryElements[i].text[j].responses[k].dialogueChoice = allStoryElements[i].text[j].responses[k].dialogueChoice.replaceAll('Somebody', answer);
                    }
                }
                break;
            case 'consequence':
                for (let j = 0; j < allStoryElements[i].text.length; j++) {
                    for (let k = 0; k < allStoryElements[i].text[j].consequenceText.length; k++) {
                        allStoryElements[i].text[j].consequenceText[k] = allStoryElements[i].text[j].consequenceText[k].replaceAll('Somebody', answer); 
                    }
                }
                break;
        }
    }
    menu_window.textContent = menu_window.textContent.replace('Somebody', answer);
}
// the function is ALWAYS static
// function story(type, text, modifiers)
function storyTeller(storyElement) {
    while (main_window.firstChild) {main_window.removeChild(main_window.firstChild)};
    if (storyElement !== undefined) {
        if (storyElement.type == 'separator') {
            separator(storyElement, newPlayerConsequences, storyTeller);
        } else {
            if (storyElement[0] == 'stats' || storyElement[0] == 'gold') {
                if (storyElement[0] == 'stats') {
                    giveStats(storyElement[1], storyElement[2]);
                } else {
                    addGold(storyElement[1]);
                }
            } else {
                if (storyElement !== undefined) {
                    if (storyElement.type !== 'dialogue' && storyElement.type !== 'consequence') {
                        textFlipper(storyElement, 0);
                    } else if (storyElement.type == 'dialogue') {
                        newDialogueMaker(storyElement, 0);
                    } else {
                        consequenceShower(storyElement, 0);
                    }
                }
            }    
        }
    } else {
        tileTriggers(whichTileIsPlayerOn, currentExplorationStoryElement);
    }
}
//--- supplementary functions ---
// new continue button operator
let announcement;
function textFlipper(storyElement, loop, style) {
    if (storyElement.type == 'randomEncounter' || storyElement.modifiers == 'explorationEvent' || storyElement.nextStoryElement == 'explorationEvent') { moveOn = false; }
    let storyParagraph = document.createElement('p');
    storyParagraph.textContent = storyElement.text[loop];
    if (style == 'yellow') { storyParagraph.setAttribute('style','color:yellow;'); }
    main_window.appendChild(storyParagraph);
    if (loop < storyElement.text.length) {
        let continueButton = document.createElement('button');
        continueButton.textContent = 'Click here to continue.';
        main_window.appendChild(continueButton);
        continueButton.focus();
        continueButton.addEventListener('click', () => {
            loop++;
            main_window.removeChild(continueButton);
            textFlipper(storyElement, loop);
            if (loop == storyElement.text.length) {
                switch (storyElement.type) {
                    case 'falsecubes':
                        storyFalsecubes(storyElement);
                        break;
                    case 'description':
                        if (storyElement.modifiers !== undefined) {
                            newPlayerConsequences.push(storyElement.modifiers);
                        }
                        storyTeller(storyElement.nextStoryElement);
                        break;
                    case 'battle':
                        newBattleStarter(storyElement);
                        break;
                    case 'item':
                        grabItem(storyElement.modifiers);
                        announcement = { text: [`Acquired ${storyElement.modifiers.name}!`], type: 'itemAcquired', nextStoryElement: storyElement.nextStoryElement };
                        textFlipper(announcement, 0, 'yellow');
                        break;
                    case 'itemAcquired':
                        storyTeller(announcement.nextStoryElement);
                        break;
                    case 'choice':
                        newChoice(storyElement);
                        break;
                    case 'exploration':
                        newExploration(storyElement);
                        isPlayerExploring = true;
                        break;
                    case 'randomEncounter':
                        while (main_window.firstChild) { main_window.removeChild(main_window.firstChild) };
                        storyElement.modifiers.hasPlayerSeenMe = true;
                        sideEventsSeen++;
                        moveOn = true;
                        let circle = document.querySelector('#circle');
                        let currentTile = whichTileIsPlayerOn(circle);
                        for (let i = 0; i < 126; i++) {
                            let loopedTile = document.querySelector(`#tile${i}`);
                            if (loopedTile.id == currentTile) {
                                if (loopedTile.hasChildNodes) {
                                    loopedTile.removeChild(loopedTile.firstChild);
                                }
                            }
                        }
                        storyTeller(storyElement.nextStoryElement);
                        break;
                    case 'endExploration':
                        let board = document.querySelector('#explorationBoard');
                        image_window.removeChild(board);
                        while (image_window.firstChild) { image_window.removeChild(image_window.firstChild) };
                        storyTeller(storyElement.nextStoryElement);                        
                        break;
                    case 'form':
                        newFormMaker(storyElement);
                        break;
                }
                if (storyElement.modifiers == 'explorationEvent') {
                    moveOn = true;
                } else if (storyElement.modifiers !== undefined) {
                    if (storyElement.modifiers[0] == 'stats' || storyElement.modifiers[0] == 'gold') {
                        if (storyElement.modifiers[0] == 'stats') {
                            giveStats(storyElement.modifiers[1], storyElement.modifiers[2]);
                        } else {
                            addGold(storyElement.modifiers[1]);
                        }
                    }
                }
            }
        })
    }
}
// consequence function
function consequenceShower(storyElement, line) {
    let entry = document.createElement('p');
    let correctConsequence = null;
    for (let i = 0; i < storyElement.text.length; i++) {
        if (newPlayerConsequences.includes(storyElement.text[i].dependency)) {
            correctConsequence = i;
        }
    }
    if (correctConsequence !== null) {
        entry.textContent = storyElement.text[correctConsequence].consequenceText[line];
        main_window.appendChild(entry);
        if (line < storyElement.text[correctConsequence].consequenceText.length) {
            let continueButton = document.createElement('button');
            continueButton.textContent = 'Click here to continue.';
            main_window.appendChild(continueButton);
            continueButton.focus();
            continueButton.addEventListener('click', () => {
                line++;
                main_window.removeChild(continueButton);
                consequenceShower(storyElement, line);
            })
        }
        if (line == storyElement.text[correctConsequence].consequenceText.length) {
            storyTeller(storyElement.nextStoryElement);
        }
    } else {
        storyTeller(storyElement.nextStoryElement);
    }
}
// new dialogue function
// each conversation is not like a dialogue tree in a videogame, but a sliding waterfall.
let relationshipMeter = 0;
function newDialogueMaker(storyElement, line) {
    let npcDialogueLine = document.createElement('p');
    npcDialogueLine.textContent = storyElement.text[line].npcLine;
    main_window.appendChild(npcDialogueLine);
    if (line !== storyElement.text.length - 1) {
        storyElement.text[line].responses.forEach((response) => {
            let responseButton = document.createElement('button');
            responseButton.textContent = response.dialogueChoice;
            main_window.appendChild(responseButton);
            responseButton.setAttribute('class', 'choiceButton');
            responseButton.addEventListener('click', () => {
                let dialogueButtons = main_window.querySelectorAll('button');
                dialogueButtons.forEach(button => {
                    button.remove();
                });
                let yourLine = document.createElement('p');
                yourLine.textContent = `"${response.dialogueChoice}"`;
                main_window.appendChild(yourLine);
                relationshipMeter = relationshipMeter + response.points;
                newDialogueMaker(storyElement, response.dialogueNextLine);
            })
        })
    } else {
        if (relationshipMeter <= -2) {
            newPlayerConsequences.push(storyElement.modifiers[2]);
        } else if (relationshipMeter < 2) {
            newPlayerConsequences.push(storyElement.modifiers[1]);
        } else if (relationshipMeter >= 2) {
            newPlayerConsequences.push(storyElement.modifiers[0]);
        }
        relationshipMeter = 0;
        let continueButton = document.createElement('button');
        continueButton.textContent = 'Click here to continue.';
        main_window.appendChild(continueButton);
        continueButton.focus();
        continueButton.addEventListener('click', () => {
            storyTeller(storyElement.nextStoryElement);
        });
    }
}
// new choice function
function newChoice(storyElement) {
    storyElement.modifiers.forEach((thisChoice) => {
        let choiceButton = document.createElement('button');
        choiceButton.textContent = thisChoice.choiceText;
        choiceButton.setAttribute('class','choiceButton');
        main_window.appendChild(choiceButton);
        choiceButton.addEventListener('click', () => {
            newPlayerConsequences.push(thisChoice.choiceModifiers);
            if (thisChoice.choiceModifiers == 'classWraith') {
                Object.setPrototypeOf(char1, Janitor.prototype);
                Janitor.call(char1, char1.name, 0, 10, 20, 100, 'Normal Attack', '', '', '', []);
                menu_window.textContent = menu_window.textContent.replace('Your class is unknown.', 'You are a Wraith.');
                special_button.addEventListener('click', () => { switchAttack(char1) });
                eventEmitter.emit('Wraith');    
            } else if (thisChoice.choiceModifiers == 'classPoltergeist') {
                Object.setPrototypeOf(char1, Accountant.prototype);
                Accountant.call(char1, char1.name, 0, 10, 20, 100, 'Normal Attack', '', '', '', []);
                menu_window.textContent = menu_window.textContent.replace('Your class is unknown.', 'You are a Poltegeist.');
                special_button.addEventListener('click', () => { switchAttack(char1) });    
                eventEmitter.emit('Poltergeist');
            } else if (thisChoice.choiceModifiers == 'classGuardianSpirit') {
                Object.setPrototypeOf(char1, Dancer.prototype);
                Dancer.call(char1, char1.name, 0, 10, 20, 100, 'Normal Attack', '', '', '', []);
                menu_window.textContent = menu_window.textContent.replace('Your class is unknown.', 'You are a Guardian Spirit.');
                special_button.addEventListener('click', () => { switchAttack(char1) });   
                eventEmitter.emit('GuardianSpirit');  
            }
            if (thisChoice.choiceModifiers == 'raceRealmer') {
                char1.race = races.Realmer;
                menu_window.textContent = menu_window.textContent.replace(' Your armor class', ' In life, you were a Realmer. Your armor class');
                char1.currentHP += char1.race.raceHPBonus;
                char1.maxHP += char1.race.raceHPBonus;
                char1.armorClass += char1.race.raceArmorBonus;
                menuUpdater();
                let stats_race = document.querySelector('#stats_race');
                stats_race.textContent = 'In life, you were a Realmer.'
            } else if (thisChoice.choiceModifiers == 'raceMortar') {
                char1.race = races.Mortar;
                menu_window.textContent = menu_window.textContent.replace(' Your armor class', ' In life, you were a Mortar. Your armor class');
                char1.currentHP += char1.race.raceHPBonus;
                char1.maxHP += char1.race.raceHPBonus;
                char1.armorClass += char1.race.raceArmorBonus;
                menuUpdater();
                stats_race.textContent = 'In life, you were a Mortar.'
            } else if (thisChoice.choiceModifiers == 'raceDeadlander') {
                char1.race = races.Deadlander;
                menu_window.textContent = menu_window.textContent.replace(' Your armor class', ' In life, you were a Deadlander. Your armor class');
                char1.currentHP += char1.race.raceHPBonus;
                char1.maxHP += char1.race.raceHPBonus;
                char1.armorClass += char1.race.raceArmorBonus;
                menuUpdater();
                stats_race.textContent = 'In life, you were a Deadlander.'
            }
            if (thisChoice.choiceModifiers == 'compassionSpirit') {
                char1.spiritConcept.concept = 'Compassion';
                char1.spiritConcept.description = ' of Compassion';
                menuUpdater();
                updateConcept();
            }
            if (thisChoice.choiceModifiers == 'justiceSpirit') {
                char1.spiritConcept.concept = 'Justice';
                char1.spiritConcept.description = ' of Justice';
                menuUpdater();
                updateConcept();
            }
            if (thisChoice.choiceModifiers == 'freedomSpirit') {
                char1.spiritConcept.concept = 'Freedom';
                char1.spiritConcept.description = ' of Freedom';
                menuUpdater();
                updateConcept();
            }
            if (thisChoice.choiceModifiers == 'masterySpirit') {
                char1.spiritConcept.concept = 'Mastery';
                char1.spiritConcept.description = ' of Mastery';
                menuUpdater();
                updateConcept();
            }
            if (thisChoice.choiceModifiers == 'wisdomSpirit') {
                char1.spiritConcept.concept = 'Wisdom';
                char1.spiritConcept.description = ' of Wisdom';
                menuUpdater();
                updateConcept();
            }
            if (thisChoice.choiceModifiers == 'chosenPeculiar') {
                Chosen = NPCMaker('Peculiar', 'Quirke', 'she', 'her', 'her', 'herself');
                updateChosen();
            }
            if (thisChoice.choiceModifiers == 'chosenSnapdragon') {
                Chosen = NPCMaker('Snapdragon', 'Quirke', 'he', 'his', 'him', 'himself');
                updateChosen();
            }
            if (thisChoice.choiceModifiers == 'chosenLysander') {
                Chosen = NPCMaker('Lysander', 'MacAppleby', 'they', 'their', 'them', 'themselves');
                updateChosen();
            }
            storyTeller(thisChoice.choiceNextStory);
        });
    })
}
// new battle functions
let storyAfterBattle = null;
function newBattleStarter(storyElement) {
    storyElement.modifiers.forEach((currentEnemy) => { currentEnemy.currentHP = currentEnemy.maxHP });
    enemies.splice(0, enemies.length, ...storyElement.modifiers);
    storyAfterBattle = storyElement;
    let board = document.querySelector('#explorationBoard');
    if (board !== null) { board.style.display = 'none'; }
    listEnemies();
}
eventEmitter.on('battle:win', () => {
// function isBattleOver(battleResult) {
    // if (battleResult == 'win') {
        if (isPlayerExploring == true) {
            let board = document.querySelector('#explorationBoard');
            board.style.display = 'grid';        
        }    
        let entry = document.createElement('p');
        entry.textContent = 'You win the battle!';
        log_window.appendChild(entry);
        while (log_window.children.length > 2) { log_window.removeChild(log_window.firstChild) };
        Array.from(log_window.children).forEach((entry) => {
            entry.setAttribute('style', 'color:white;');
        });
        top_bar.removeChild(top_bar.firstChild);
        while (main_window.firstChild) { main_window.removeChild(main_window.firstChild) };
        storyTeller(storyAfterBattle.nextStoryElement);
        storyAfterBattle = null;   
}); 
    // } else {
eventEmitter.on('battle:lose', () => {
        let entry = document.createElement('p');
        entry.textContent = 'You died!';
        entry.setAttribute('style', 'color:red;');
        log_window.appendChild(entry);
        button_window.removeChild(attack_button);
        button_window.removeChild(special_button);
        button_window.removeChild(inventory_button);
        button_window.removeChild(stats_button);
    // }
});
// new character creation function
function newFormMaker(storyElement) {
    let form_card = document.createElement('div');
    let form = document.createElement('form');
    let input = document.createElement('input');
    let submit = document.createElement('input');
    submit.setAttribute('type', 'submit');
    input.setAttribute('type', 'text');
    form.appendChild(input);
    form.appendChild(submit);
    form_card.appendChild(form);
    main_window.appendChild(form_card);
    submit.addEventListener('click', (event) => {
        event.preventDefault();
        let answer = input.value;
        char1.name = answer;
        newUpdateNames(answer);
        while (main_window.firstChild) { main_window.removeChild(main_window.firstChild); }
        storyTeller(storyElement.nextStoryElement);
    })
}
// --- exploration system ---
// tracking vars
let moveOn = true;
let sideEventsSeen = 0;
let currentExplorationStoryElement = '';
// new exploration functions
function newExploration(storyElement) {
    // clear main window
    currentExplorationStoryElement = storyElement;
    while (main_window.firstChild) {main_window.removeChild(main_window.firstChild)};
    // make board and boardUnder
    let board = document.createElement('div');
    board.setAttribute('id', 'explorationBoard');
    let boardUnder = document.createElement('div');
    boardUnder.setAttribute('style', 'border-collapse:collapse; margin:3px; display:inline-grid; grid-template-columns: repeat(6, 25px);')
    boardUnder.setAttribute('id', 'boardUnder');
    image_window.appendChild(board);
    board.appendChild(boardUnder);
    // draw tiles
    for (let i = 0; i < 126; i++) {
        let tile = document.createElement('div');
        tile.setAttribute('style','padding:5px;border:1px solid white;height:15px;width:15px;');
        tile.setAttribute('id', `tile${i}`);
        boardUnder.appendChild(tile);
    }
    // call drawIcons function
    drawIcons(storyElement);
    // draw the circle inside the squares
    let circle = document.createElement('div');
    circle.setAttribute('id','circle');
    circle.setAttribute('style','background-color:white;border:1px solid white;border-radius:50%; z-index:10; height: 17px; width: 17px;');
    circle.setAttribute('tabindex', '0');
    let startTile = document.querySelector('#tile120');
    startTile.appendChild(circle);
    // coordinates of bounding rectangle (**IT DOESN'T MOVE WHEN CIRCLE MOVES!**)
    let initialCircleX = circle.getBoundingClientRect().x;
    let initialCircleY = circle.getBoundingClientRect().y;

    let currentCircleX = initialCircleX;
    let currentCircleY = initialCircleY;
    // WASD to move the circle
    document.addEventListener('keydown', (event) => {
        let step = 5;
        let boardUnderCollision = boardUnder.getBoundingClientRect();
        switch (event.key) {
            case 'w':
                //Transform (translate): CALCULATES FROM THE INITIAL POSITION! SO, initialCircle WILL BE 0, 0 for transform translate
                if (currentCircleY - step > boardUnderCollision.top && moveOn == true) {
                    console.log('w')
                    currentCircleY -= step;
                    tileTriggers(whichTileIsPlayerOn(circle), storyElement);
                }
                break;
            case 'a':
                if (currentCircleX - step > boardUnderCollision.left && moveOn == true) {
                    currentCircleX -= step;
                    tileTriggers(whichTileIsPlayerOn(circle), storyElement);
                }
                break;
            case 's':
                if (currentCircleY + step + 20 < boardUnderCollision.bottom && moveOn == true) {
                    currentCircleY += step;
                    tileTriggers(whichTileIsPlayerOn(circle), storyElement);
                }
                break;
            case 'd':
                if (currentCircleX + step + 18 < boardUnderCollision.right && moveOn == true) {
                    currentCircleX += step;
                    tileTriggers(whichTileIsPlayerOn(circle), storyElement);
                }
                break;
        }
        let keyboardMoveY = currentCircleY - initialCircleY;
        let keyboardMoveX = currentCircleX - initialCircleX;
        circle.style.transform = `translate(${keyboardMoveX}px, ${keyboardMoveY}px)`;
    });
    // clicking to move
    // This works because it doesn't NEED a current position. it ALWAYS calculates from the starting one
    boardUnder.addEventListener('click', (event) => {
        if (moveOn == true) {
            let clickedTile = document.querySelector(`#${whichTileDidYouClick(event.clientX, event.clientY)}`);
            let clickedTileBoundaries = clickedTile.getBoundingClientRect();
            let moveX = clickedTileBoundaries.left + 4 - initialCircleX;
            let moveY = clickedTileBoundaries.top + 4 - initialCircleY + window.scrollY;
            circle.style.transform = `translate(${moveX}px, ${moveY}px)`;
            tileTriggers(whichTileIsPlayerOn(circle), storyElement);
            currentCircleX = clickedTileBoundaries.left + 4;
            currentCircleY = clickedTileBoundaries.top + 4 + window.scrollY;
        }
    });
}
// which tile did you click?
function whichTileDidYouClick(clickX, clickY) {
    let tiles = document.querySelectorAll('[id^="tile"]');
    for (let i = 0; i < tiles.length; i++) {
        let tileCollision = tiles[i].getBoundingClientRect();
        if (
            clickX < tileCollision.right &&
            clickX > tileCollision.left &&
            clickY < tileCollision.bottom &&
            clickY > tileCollision.top 
        ) {
            return tiles[i].id;
        }
    }
    return null;
}
// when a player moves, it is triggered. returns "#tile30" type number
function whichTileIsPlayerOn(circle) {
    let circleCollision = circle.getBoundingClientRect();
    let tiles = document.querySelectorAll('[id^="tile"]');
    for (let i = 0; i < tiles.length; i++) {
        let tileCollision = tiles[i].getBoundingClientRect();
        if (
            circleCollision.left < tileCollision.right &&
            circleCollision.right > tileCollision.left &&
            circleCollision.top < tileCollision.bottom &&
            circleCollision.bottom > tileCollision.top 
        ) {
            return tiles[i].id;
        }
    }
    return null;
}
// compares the tile id from above and activates a storyElement
function tileTriggers(playersTile, storyElement) {
        for (let i = 0; i < storyElement.modifiers.length - 1; i++) {
            // console.log(playersTile);
            // console.log(storyElement.modifiers[i].tileNumber);
            if (`#${playersTile}` == storyElement.modifiers[i].tileNumber && !storyElement.modifiers[i].encounterStoryElement.modifiers.hasPlayerSeenMe) {
                storyTeller(storyElement.modifiers[i].encounterStoryElement);
            }
        }
        if (sideEventsSeen == storyElement.modifiers.length - 1) {
            storyElement.modifiers[storyElement.modifiers.length-1].unlocked = true;
            drawLastIcon(storyElement);
        }
        if (`#${playersTile}` == storyElement.modifiers[storyElement.modifiers.length-1].tileNumber && storyElement.modifiers[storyElement.modifiers.length-1].unlocked) {
            storyTeller(storyElement.modifiers[storyElement.modifiers.length-1].encounterStoryElement);
            sideEventsSeen = 0;
        }
    }    
// draw icons on tiles
function drawIcons(storyElement) {
    let tiles = document.querySelectorAll('[id^="tile"]');
    for (let i = 0; i < tiles.length; i++) {
        for (let j = 0; j < storyElement.modifiers.length - 1; j++) {
            if (`#${tiles[i].id}` == storyElement.modifiers[j].tileNumber) {
                tiles[i].style.position = 'relative';
                storyElement.modifiers[j].icon.style.position = 'absolute';
                tiles[i].appendChild(storyElement.modifiers[j].icon);
            }
        }
    }
}
// draw last icon
function drawLastIcon(storyElement) {
    let tiles = document.querySelectorAll('[id^="tile"]');
    for (let i = 0; i < tiles.length; i++) {
        if (`#${tiles[i].id}` == storyElement.modifiers[storyElement.modifiers.length-1].tileNumber) {
            tiles[i].style.position = 'relative';
            storyElement.modifiers[storyElement.modifiers.length-1].icon.style.position = 'absolute';
            tiles[i].appendChild(storyElement.modifiers[storyElement.modifiers.length-1].icon);
        }
    }
}
// --- stats system ---
// track stats
let playerBenevolentBalance = 0;
let playerSillyBalance = 0;
// stats screen
let statsDialog = document.createElement('dialog');
statsDialog.innerHTML = `
    <button id='closeButton2'>Close</button>
    <div id='statsBox'>
    <h2>Stats</h2>
    <ul id ='statsList'>
        <li id='stats_gender'>You do not remember your gender.</li>
        <li id='stats_race'>You do not remember your race.</li>
        <li id='stats_romantic_partner'>You do not remember who your romantic partner was.</li>
        <li id='stats_cause_of_death'>You do not remember your cause of death.</li>
        <li id='stats_evil_benevolent'>
            <div class='stats_meter' id='stats_meter_evil'>
                <div class='stats_line' id='stats_line_evil'>Evil</div>
                <div class='stats_line' id='stats_line_benevolent'>Benevolent</div>
            </div>
        </li>
        <li id='stats_somber_silly'>
            <div class='stats_meter' id='stats_meter_somber'>
                <div class='stats_line' id='stats_line_somber'>Somber</div>
                <div class='stats_line' id='stats_line_silly'>Silly</div>
            </div>
        </li>
    </ul>
    </div>
`;
document.body.appendChild(statsDialog);
document.addEventListener('DOMContentLoaded', () => {
    stats_button.addEventListener('click', () => {
        if (newPlayerConsequences.includes('classWraith') || newPlayerConsequences.includes('classPoltergeist') || newPlayerConsequences.includes('classGuardianSpirit')) {
            statsDialog.showModal();
            let closeButton2 = document.querySelector('#closeButton2');
            closeButton2.addEventListener('click', () => {
                statsDialog.classList.add('hide');
                statsDialog.addEventListener('animationend', dialogAnimationEnd);
            });
        }
    });
});
// tracking and updating stats
function statsLinesUpdater() {
    let evilLine = document.querySelector('#stats_meter_evil');
    let somberLine = document.querySelector('#stats_meter_somber');
    evilLine.style.gridTemplateColumns = `${50-playerBenevolentBalance}fr ${50+playerBenevolentBalance}fr`;
    somberLine.style.gridTemplateColumns = `${50-playerSillyBalance}fr ${50+playerSillyBalance}fr`;
}
function giveStats(stat, amount) {
    switch (stat) {
        case 'evil':
            playerBenevolentBalance -= amount;
            break;
        case 'benevolent':
            playerBenevolentBalance += amount;
            break;
        case 'somber':
            playerSillyBalance -= amount;            
            break;
        case 'silly':
            playerSillyBalance += amount;
            break;
    }
    statsLinesUpdater();
    statsFlagsUpdater();
}
function statsFlagsUpdater() {
    if (playerBenevolentBalance > 14) {
        newPlayerConsequences.push('playerBenevolent15');
        if (playerBenevolentBalance > 29) {
            newPlayerConsequences.push('playerBenevolent30');
        }
    };
    if (playerBenevolentBalance < -14) {
        newPlayerConsequences.push('playerEvil15');
        if (playerBenevolentBalance < -29) {
            newPlayerConsequences.push('playerEvil30');
        }
    };
    if (playerSillyBalance > 14) {
        newPlayerConsequences.push('playerSilly15');
        if (playerSillyBalance > 29) {
            newPlayerConsequences.push('playerSilly30');
        }
    };
    if (playerSillyBalance < -14) {
        newPlayerConsequences.push('playerSomber15');
        if (playerSillyBalance < -29) {
            newPlayerConsequences.push('playerSomber15');
        }
    };
}
// Falsecubes
function storyFalsecubes(storyElement) {
    startDiceGame(storyElement.modifiers.opponentName, storyElement.modifiers.opponentLines, storyFalsecubesEnd, storyElement);
}
function storyFalsecubesEnd(result, prize) {
    if (result == 'win') {
        newPlayerConsequences.push(prize.modifiers.consequences.win);
        storyTeller(prize.nextStoryElement.win);
    } else {
        newPlayerConsequences.push(prize.modifiers.consequences.lose);
        storyTeller(prize.nextStoryElement.lose);
    }
}
// Start game
storyTeller(scriptObjects.prologue1);