// initialize hud
let top_bar = document.querySelector('.top_bar');
let log_window = document.querySelector('.log');
let main_window = document.querySelector('.main_window');
let image_window = document.querySelector('.image_window');
let menu_window = document.querySelector('.menu');
// initialize vars
let die1 = {result: 0, reRollFlag: false};
let die2 = {result: 0, reRollFlag: false};
let die3 = {result: 0, reRollFlag: false};
let die4 = {result: 0, reRollFlag: false};
let die5 = {result: 0, reRollFlag: false};
let die6 = {result: 0, reRollFlag: false};
let playerHand = [die1, die2, die3, die4, die5, die6];
let opponentHand = [];
let currentBid = { player: '', numberOfDice: 0, dots: 0 };
let accusation = { accuser: '', numberOfDice: 0, dots: 0 };
let exampleLines = {
    openLine: `Come on, let's play.`,
    bidLine: `Luck is on my side today.`,
    accuseLine: `Yeah, I don't think so.`,
    winLine: `Gotcha, kid.`,
    loseLine: `Darn. You got lucky, pal.`
}
function startDiceGame(opponentName, lines) {
    // clear main window
    while (main_window.firstChild) { main_window.removeChild(main_window.firstChild) };
    // instructions
    let instruction = document.createElement('p');
    instruction.setAttribute('style','color:yellow');
    instruction.textContent = '[You are about to play Falsecubes. Here are the instructions.]';
    main_window.appendChild(instruction);
    // start game button
    let startDiceGameButton = document.createElement('button');
    startDiceGameButton.textContent = `Let's play Falsecubes!`
    main_window.appendChild(startDiceGameButton);
    startDiceGameButton.addEventListener('click', () => {
        falseCubes(opponentName, lines);
    });
}
// function that starts the game
function falseCubes(opponentName, lines) {
    // openLine from the opponent
    let openLineEntry = document.createElement('p');
    openLineEntry.textContent = `${opponentName}: ${lines.openLine}`;
    main_window.appendChild(openLineEntry);
    // roll dice button
    let rollDiceButton = document.createElement('button');
    rollDiceButton.textContent = `Roll the dice.`
    main_window.appendChild(rollDiceButton);
    rollDiceButton.addEventListener('click', () => {rollPhase});
}
// rolling 6d4
function roll6d4Player() {
    die1.result = Math.floor((Math.random() * 4) + 1);
    die2.result = Math.floor((Math.random() * 4) + 1);
    die3.result = Math.floor((Math.random() * 4) + 1);
    die4.result = Math.floor((Math.random() * 4) + 1);
    die5.result = Math.floor((Math.random() * 4) + 1);
    die6.result = Math.floor((Math.random() * 4) + 1);    
    return [die1, die2, die3, die4, die5, die6]
}
function roll6d4Opponent() {
    let opponentDie1 = Math.floor((Math.random() * 4) + 1);
    let opponentDie2 = Math.floor((Math.random() * 4) + 1);
    let opponentDie3 = Math.floor((Math.random() * 4) + 1);
    let opponentDie4 = Math.floor((Math.random() * 4) + 1);
    let opponentDie5 = Math.floor((Math.random() * 4) + 1);
    let opponentDie6 = Math.floor((Math.random() * 4) + 1);    
    return [opponentDie1, opponentDie2, opponentDie3, opponentDie4, opponentDie5, opponentDie6]
}
function roll1d4() {
    return Math.floor((Math.random() * 4) + 1);
}
// rolling phase
function rollPhase() {
    // playerHand and opponentHand arrays get assigned six integers
    roll6d4Player();
    opponentHand = roll6d4Opponent();
    // a message pops out: 'You rolled: x, y, a, b, c, d'
    let message = document.createElement('p');
    message.textContent = `You rolled: ${die1.result}, ${die2.result}, ${die3.result}, ${die4.result}, ${die5.result}, ${die6.result}.`;
    main_window.appendChild(message);
    // below each number a checkmark form
    let playerRerollForm = document.createElement('form');
    for (let i = 0; i < 6; i++) {
        let checkmark = document.createElement('input');
        checkmark.setAttribute('type', 'checkbox');
        checkmark.setAttribute('value', `${i+1}`);
        checkmark.setAttribute('name', `${i+1}`);
        let label = document.createElement('label');
        label.setAttribute('for', `${i+1}`);
        label.textContent = `Dice ${i+1}`;
        playerRerollForm.appendChild(checkmark);
        playerRerollForm.appendChild(label);
    }
    let submit = document.createElement('input');
    submit.setAttribute('type', 'submit');
    playerRerollForm.appendChild('submit');
    // below that, a submit/reroll
    // playerHand is emptied
    // non-selected dice get added back to playerHand
    // for the indexes of the selected die, what is added to playerHand is the return of reRollDie
    playerRerollForm.addEventListener('submit', function(event) {
        event.preventDefault();
        for (let i = 0; i < 6; i++) {
            let checkbox = document.querySelector(`input[name="${i+1}"`);
            if (checkbox.checked) {
                // 1, 2, [3], [4], 1, 2
                playerHand[i].reRollFlag = true;
            }
        }
        let j = 0;
        while (j < 6)  {
            // 1, 2, [3], [4], 1, 2
            if (playerHand[j].reRollFlag == true) {
                playerHand.splice(j, 1);
                let newDie = {result: roll1d4(), reRollFlag: false};
                playerHand.push(newDie);
            } else {
                j++;
            }
        }
        bidPhase();
    });
}
// bidding phase
function bidPhase() {
// writes a message. you rerolled dice. after re-rolls, your new hand is:
    while (main_window.firstChild) { main_window.removeChild(main_window.firstChild) };
    let reRollMessage = document.createElement('p');
    reRollMessage.textContent = `After re-rolling, your new hand is: ${die1.result}, ${die2.result}, ${die3.result}, ${die4.result}, ${die5.result}, ${die6.result}. Time for the bluffing phase.`
    main_window.appendChild(reRollMessage);
    // creates a dropdown form to bluff: "I have [1/2/3/4] of [1/2/3/4]"
    let bluffForm = document.createElement('form');
    // --- number of dice ---
    let numberLabel = document.createElement('label');
    numberLabel.textContent = `I have this many...`;
    numberLabel.setAttribute('for', 'numberOfDice');
    bluffForm.appendChild(numberLabel);
    let numberSelect = document.createElement('select');
    numberSelect.setAttribute('name', 'numberOfDice');
    numberSelect.setAttribute('id', 'numberOfDice');
    bluffForm.appendChild(numberSelect);
    // options for number of dice
    for (let i = 0; i < 6; i++) {
        let option = document.createElement('option');
        option.textContent = `${i+1}`;
        option.setAttribute('value', i+1);
        numberSelect.appendChild(option);
    }
    // --- which dots ---
    let dotsLabel = document.createElement('label');
    dotsLabel.textContent = `I have this many...`;
    dotsLabel.setAttribute('for', 'dots');
    bluffForm.appendChild(dotsLabel);
    let dotsSelect = document.createElement('select');
    dotsSelect.setAttribute('name', 'dots');
    dotsSelect.setAttribute('id', 'dots');
    bluffForm.appendChild(dotsSelect);
    // options for dots
    for (let i = 0; i < 4; i++) {
        let option = document.createElement('option');
        option.textContent = `${i+1}`;
        option.setAttribute('value', i+1);
        dotsSelect.appendChild(option);
    }
    // final submit
    let bluffSubmit = document.createElement('input');
    bluffSubmit.setAttribute('type', 'submit');
    bluffSubmit.setAttribute('value', 'Bluff!');
    bluffForm.appendChild(bluffSubmit);
// on submit, calls the opponentResponse
    bluffForm.addEventListener('submit', function(event) {
        event.preventDefault();
        opponentResponse();
    });
}
// 50-50 function
function fiftyFifty() {
    return Math.floor((Math.random() * 2) + 1);
}
// opponent response
function opponentResponse() {
    // initialize form hud
    let numberSelect = document.querySelector('#numberOfDice');
    let dotsSelect = document.querySelector('#dots');
    // set currentBid
    currentBid = { player: 'player', numberOfDice: numberSelect.value, dots: dotsSelect.value };
    // if currentBid.numberOfdice > 2, opponent calls bluff
    // fill the accusation object with 'opponent', and 'currentBid'
    if (currentBid.numberOfDice > 2) {
        accusation = { accuser: 'opponent', numberOfDice: numberSelect.value, dots: dotsSelect.value };
        callOut()
    // if currentBid.numberOfdice =2
    } else if (currentBid.numberOfDice = 2) {
    // then 50% to call out a bluff anyway
        if (fiftyFifty() = 2) {
            accusation = { accuser: 'opponent', numberOfDice: numberSelect.value, dots: dotsSelect.value };
            callOut()
    // if that doesn't trigger, the opponent bids    
        } else {
            opponentBid();
        }
    }
}
function opponentBid() {
// opponent looks at opponentHand, identifying if there are any repeats
// if there are none, opponentHand is randomized completely
// then, opponent bids 
// it's always the same dots
// 50% it's numberOfDice they have and 50% numberofDice+1
// then they say one of their 'bettinglines' (add that) 
}
// calling out a bluff
function callOut() {
// if accusation.accuser = player, checks opponentHand, if accusation.accuser = opponent, checks playerHand
// checks that player/opponentHand.includes the integer = to the 'dots'
// loops through the check a number of times = numberOfDice
// if all true, accusation.accuser is the loser
// returns a winner
}
// ending the game
function gameEnd() {
// saying the 'winLine' or 'loseLine'  
// keep track of gold!
// win or lose a set [FOR NOW] number of gold
// gold could be spent on buying equipment
}