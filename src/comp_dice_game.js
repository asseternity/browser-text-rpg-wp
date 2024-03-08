// initialize hud
let main_window = document.querySelector('.main_window');
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
    openLine: `Come on, let's play`,
    bidLine: `Luck is on my side today`,
    bluffLine: `I have good dice today, kid`,
    accuseLine: `Yeah, I don't think so`,
    winLine: `Gotcha, kid`,
    loseLine: `Darn. You got lucky, pal`
}
function startDiceGame(opponentName, lines, callbackEnd, prize) {
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
        falseCubes(opponentName, lines, callbackEnd, prize);
        main_window.removeChild(startDiceGameButton);
    });
}
// function that starts the game
function falseCubes(opponentName, lines, callbackEnd, prize) {
    // openLine from the opponent
    let openLineEntry = document.createElement('p');
    openLineEntry.textContent = `${opponentName}: ${lines.openLine}`;
    main_window.appendChild(openLineEntry);
    // roll dice button
    let rollDiceButton = document.createElement('button');
    rollDiceButton.textContent = `Roll the dice.`
    main_window.appendChild(rollDiceButton);
    rollDiceButton.addEventListener('click', () => {
        main_window.removeChild(rollDiceButton);
        rollPhase(opponentName, lines, callbackEnd, prize)
    });
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
function rollPhase(opponentName, lines, callbackEnd, prize) {
    // playerHand and opponentHand arrays get assigned six integers
    roll6d4Player();
    opponentHand = roll6d4Opponent();
    // a message pops out: 'You rolled: x, y, a, b, c, d'
    let message = document.createElement('p');
    message.textContent = `You rolled: ${die1.result}, ${die2.result}, ${die3.result}, ${die4.result}, ${die5.result}, ${die6.result}.`;
    main_window.appendChild(message);
    // below each number a checkmark form
    let playerRerollForm = document.createElement('form');
    main_window.appendChild(playerRerollForm);
    for (let i = 0; i < 6; i++) {
        let checkmark = document.createElement('input');
        checkmark.setAttribute('type', 'checkbox');
        checkmark.setAttribute('value', `${i+1}`);
        checkmark.setAttribute('name', `${i+1}`);
        checkmark.classList.add('checkmark');
        let label = document.createElement('label');
        label.setAttribute('for', `${i+1}`);
        label.textContent = `Dice ${i+1}`;
        playerRerollForm.appendChild(checkmark);
        playerRerollForm.appendChild(label);
        let br = document.createElement('br');
        playerRerollForm.appendChild(br);
    }
    let submit = document.createElement('input');
    submit.setAttribute('type', 'submit');
    submit.setAttribute('style', 'margin-top: 10px;');
    playerRerollForm.appendChild(submit);
    // opponent re-rolls logic
    let allOpponent1s = opponentHand.filter(i => i == 1);
    let allOpponent2s = opponentHand.filter(i => i == 2);
    let allOpponent3s = opponentHand.filter(i => i == 3);
    let allOpponent4s = opponentHand.filter(i => i == 4);
    let opponent1sObject = { number: allOpponent1s.length, dots: 1 };
    let opponent2sObject = { number: allOpponent2s.length, dots: 2 };
    let opponent3sObject = { number: allOpponent3s.length, dots: 3 };
    let opponent4sObject = { number: allOpponent4s.length, dots: 4 };
    let opponentObjects = [opponent1sObject, opponent2sObject, opponent3sObject, opponent4sObject];
    console.log(`Orig opponentHand: ${opponentHand}`);
    let opponentObjectsSorted = opponentObjects.sort((a, b) => (a.number > b.number) ? -1 : 1);
    let opponentLastDots;
    let opponentSecondToLastDots;
    if (opponentObjectsSorted[3].number !== 0) {
        opponentLastDots = opponentObjectsSorted[3].dots;
        console.log(`Bad dots: ${opponentLastDots}`);
        opponentSecondToLastDots = opponentObjectsSorted[2].dots;
        console.log(`Second bad dots: ${opponentSecondToLastDots}`);    
    } else {
        opponentLastDots = opponentObjectsSorted[2].dots;
        console.log(`Bad dots: ${opponentLastDots}`);
        opponentSecondToLastDots = opponentObjectsSorted[1].dots;
        console.log(`Second bad dots: ${opponentSecondToLastDots}`);
    }
    let opponentHandToKeep = opponentHand.filter(i => (i !== opponentLastDots && i !== opponentSecondToLastDots));
    // if we remove 3 dice
    // howManyDiceToReRoll = 6 - 3 = 3
    // i = 0, i = 1, i = 2, runs three times
    while (opponentHandToKeep.length < 6) {
        let newOpponentRoll = roll1d4();
        opponentHandToKeep.push(newOpponentRoll);
    }
    opponentHand = opponentHandToKeep;
    console.log(`New Opponent Hand: ${opponentHand}`);
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
        bidPhase(opponentName, lines, callbackEnd, prize);
    });
}
// bidding phase
function bidPhase(opponentName, lines, callbackEnd, prize) {
// writes a message. you rerolled dice. after re-rolls, your new hand is:
    let reRollMessage = document.createElement('p');
    if (currentBid.numberOfDice == 0) {
        while (main_window.firstChild) { main_window.removeChild(main_window.firstChild) };
        reRollMessage.textContent = `You re-roll some dice.`
        let reRollMessage2 = document.createElement('p');
        reRollMessage2.textContent = `Your new hand is: ${playerHand[0].result}, ${playerHand[1].result}, ${playerHand[2].result}, ${playerHand[3].result}, ${playerHand[4].result}, ${playerHand[5].result}. Time for the first bluffing phase.`;
        main_window.appendChild(reRollMessage);
        main_window.appendChild(reRollMessage2);
        playerBluffs(opponentName, lines, callbackEnd, prize);
    } else {
        reRollMessage.textContent = `Your hand is: ${playerHand[0].result}, ${playerHand[1].result}, ${playerHand[2].result}, ${playerHand[3].result}, ${playerHand[4].result}, ${playerHand[5].result}. Do you want to bluff, or accuse the opponent?`;
        main_window.appendChild(reRollMessage);
        // decide what to do here!
        let whatToDoButtons = document.createElement('div');
        main_window.appendChild(whatToDoButtons);
        let bluffButton = document.createElement('button');
        bluffButton.textContent = 'Bluff';
        bluffButton.style.marginRight = '5px';
        whatToDoButtons.appendChild(bluffButton);
        let accuseButton = document.createElement('button');
        accuseButton.textContent = 'Accuse';
        whatToDoButtons.appendChild(accuseButton);
        bluffButton.addEventListener('click', () => {
            main_window.removeChild(whatToDoButtons);
            playerBluffs(opponentName, lines, callbackEnd, prize);
        });
        accuseButton.addEventListener('click', () => {
            main_window.removeChild(whatToDoButtons);
            accusation.accuser = 'Player';
            accusation.numberOfDice = currentBid.numberOfDice;
            accusation.dots = currentBid.dots;
            let gameResult = callOut();
            gameEnd(gameResult, opponentName, lines, callbackEnd, prize);    
        });
    }
}
function playerBluffs(opponentName, lines, callbackEnd, prize) {
    // creates a dropdown form to bluff: "I have [1/2/3/4] of [1/2/3/4]"
    let bluffForm = document.createElement('form');
    main_window.appendChild(bluffForm);
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
    // dynamically calculate how many options are available
    // currentBid.numberOfDice = 2
    // currentBid.dots = 2
    // options should be: 2, 3, 4, 5, 6
    // numberOfOptions = 7 - currentBid.number
    // starter(i) = currentBid.numberOfDice
    if (currentBid.numberOfDice !== 0) {
        for (let i = currentBid.numberOfDice; i <= 6; i++) {
            let option = document.createElement('option');
            option.textContent = i;
            option.setAttribute('value', i);
            numberSelect.appendChild(option);
        }
    } else {
        for (let i = 1; i <= 6; i++) {
            let option = document.createElement('option');
            option.textContent = i;
            option.setAttribute('value', i);
            numberSelect.appendChild(option);
        }
    }
    // --- which dots ---
    let dotsLabel = document.createElement('label');
    dotsLabel.textContent = `of this dice...`;
    dotsLabel.setAttribute('for', 'dots');
    bluffForm.appendChild(dotsLabel);
    let dotsSelect = document.createElement('select');
    dotsSelect.setAttribute('name', 'dots');
    dotsSelect.setAttribute('id', 'dots');
    bluffForm.appendChild(dotsSelect);
    // options for dots
    // dynamically calculate number of dots
    // this is only a problem if you're betting the same number of dice as the current bid
    // so the check should not go here, but at submit
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
        // check for dots goes here
        if (numberSelect.value == currentBid.numberOfDice) {
            if (dotsSelect.value <= currentBid.dots) {
                event.preventDefault();
                let errorMessage = document.createElement('p');
                errorMessage.setAttribute('style', 'color:yellow');
                errorMessage.textContent = `[You can only bid higher than your opponent!]`;
                main_window.appendChild(errorMessage);
            } else {
                event.preventDefault();
                currentBid = { player: 'player', numberOfDice: numberSelect.value, dots: dotsSelect.value };
                while(main_window.firstChild) {main_window.removeChild(main_window.firstChild)};
                let bidMessage = document.createElement('p');
                bidMessage.textContent = `You bid: "I have ${currentBid.numberOfDice} of ${currentBid.dots} dots".`;
                main_window.appendChild(bidMessage);
                opponentResponse(opponentName, lines, callbackEnd, prize);    
            }
        } else {
            event.preventDefault();
            currentBid = { player: 'player', numberOfDice: numberSelect.value, dots: dotsSelect.value };
            while(main_window.firstChild) {main_window.removeChild(main_window.firstChild)};
            let bidMessage = document.createElement('p');
            bidMessage.textContent = `You bid: "I have ${currentBid.numberOfDice} of ${currentBid.dots} dots".`;
            main_window.appendChild(bidMessage);
            opponentResponse(opponentName, lines, callbackEnd, prize);
        }
    });
}
// 50-50 function
function fiftyFifty() {
    return Math.floor((Math.random() * 2) + 1);
}
function oneThird() {
    return Math.floor((Math.random() * 3) + 1);
}
// opponent response
function opponentResponse(opponentName, lines, callbackEnd, prize) {
    // set currentBid
    // if currentBid.numberOfdice > 2, opponent calls bluff
    // fill the accusation object with 'opponent', and 'currentBid'
    if (currentBid.numberOfDice > 2) {
        accusation = { accuser: 'opponent', numberOfDice: currentBid.numberOfDice, dots: currentBid.dots };
        let accuseLineEntry = document.createElement('p');
        accuseLineEntry.textContent = `${opponentName}: "${lines.accuseLine}".`;
        main_window.appendChild(accuseLineEntry);
        let accuseContinueButton = document.createElement('button');
        accuseContinueButton.textContent = 'Continue';
        main_window.appendChild(accuseContinueButton);
        accuseContinueButton.addEventListener('click', () => {
            main_window.removeChild(accuseContinueButton);
            let gameResult = callOut();
            gameEnd(gameResult, opponentName, lines, callbackEnd, prize);    
        });
    // if currentBid.numberOfdice =2
    } else if (currentBid.numberOfDice == 2) {
    // then 50% to call out a bluff anyway
        if (fiftyFifty() == 2) {
            accusation = { accuser: 'opponent', numberOfDice: currentBid.numberOfDice, dots: currentBid.dots };
            let accuseLineEntry = document.createElement('p');
            accuseLineEntry.textContent = `${opponentName}: "${lines.accuseLine}".`;
            main_window.appendChild(accuseLineEntry);
            let accuseContinueButton = document.createElement('button');
            accuseContinueButton.textContent = 'Continue';
            main_window.appendChild(accuseContinueButton);
            accuseContinueButton.addEventListener('click', () => {
                main_window.removeChild(accuseContinueButton);
                let gameResult = callOut();
                gameEnd(gameResult, opponentName, lines, callbackEnd, prize);    
            });
        // if that doesn't trigger, the opponent bids    
        } else {
            opponentBid(opponentName, lines, callbackEnd, prize);
        }
    } else {
        opponentBid(opponentName, lines, callbackEnd, prize);
    }
}
function opponentBid(opponentName, lines, callbackEnd, prize) {
    // opponent looks at opponentHand, identifying if there are any repeats
    let allOpponent1s = opponentHand.filter(i => i == 1);
    let allOpponent2s = opponentHand.filter(i => i == 2);
    let allOpponent3s = opponentHand.filter(i => i == 3);
    let allOpponent4s = opponentHand.filter(i => i == 4);
    let opponent1sObject = { number: allOpponent1s.length, dots: 1 };
    let opponent2sObject = { number: allOpponent2s.length, dots: 2 };
    let opponent3sObject = { number: allOpponent3s.length, dots: 3 };
    let opponent4sObject = { number: allOpponent4s.length, dots: 4 };
    let opponentObjects = [opponent1sObject, opponent2sObject, opponent3sObject, opponent4sObject];
    let opponentObjectsSorted = opponentObjects.sort((a, b) => (a.number > b.number) ? -1 : 1);
    console.log(opponentObjectsSorted);
    // needs to check currentBid, opponent's bid cannot be lower number of dice. can be equal, but then the dots should be higher
    // initialize temporary opponentBid var for calculation purposes
    let temporaryOpponentBid = {player: 'opponent', numberOfDice: 0, dots: 0};
    // first, we calculate what the opponent would have bet in a vacuum 
    // it's always the same dots
    temporaryOpponentBid.dots = opponentObjectsSorted[0].dots;
    // 50% it's numberOfDice they have and 50% numberofDice+1 [changed to 33% to go -1, +1 or equal]
    let chance = oneThird();
    if (chance == 1) {
        temporaryOpponentBid.numberOfDice = opponentObjectsSorted[0].number;
    } else if (chance == 2) {
        temporaryOpponentBid.numberOfDice = opponentObjectsSorted[0].number + 1;
    } else {
        temporaryOpponentBid.numberOfDice = opponentObjectsSorted[0].number -1;
    }
    // now we check the opponent's wanted bid versus illegal scenarios
    if (currentBid.numberOfDice > temporaryOpponentBid.numberOfDice) {
        // check if dots are higher
        if (temporaryOpponentBid.dots > currentBid.dots) {
            // if i bid 3 dice of 1 dots and opponent wants to bid 2 dice of 2 dots
            // this triggers, number of dice IS higher
            // opponent should bid 3 dice of 2 dots
            temporaryOpponentBid.numberOfDice = currentBid.numberOfDice;
        } else {
            // if i bid 3 dice of 4 dots and opponent wants to bid 2 dice of 2 dots
            // if opponent's next highest dots > currentBid.dots
            if (opponentObjectsSorted[1].dots > currentBid.dots) {
                // then 50-50: same numberOfDice but with second highest dots
                // and 4 dice of 2 dots
                if (fiftyFifty() == 2) {
                    temporaryOpponentBid.dots = opponentObjectsSorted[1].dots;
                    temporaryOpponentBid.numberOfDice = currentBid.numberOfDice;
                } else {
                    temporaryOpponentBid.numberOfDice = currentBid.numberOfDice + 1;
                }
            } else {
                // if not, then just 4 dice of 2 dots
                temporaryOpponentBid.numberOfDice = currentBid.numberOfDice + 1;
            }
        }
    } else if (currentBid.numberOfDice == temporaryOpponentBid.numberOfDice) {
        // so if my bet is 2 dice 2 dots and opponent wants to bet 2 dice 3 dots
        // then its fine
        if (temporaryOpponentBid.dots <= currentBid.dots) {
            // but if opponent wants to bid 2 dice 2 dots or 2 dice 1 dot
            temporaryOpponentBid.numberOfDice = currentBid.numberOfDice + 1;
        }
    }
    // now make the opponentBid the currentBid
    currentBid = temporaryOpponentBid;
    // then they say one of their 'bettinglines' (add that) 
    let bluffLine1Entry = document.createElement('p');
    bluffLine1Entry.textContent = `${opponentName}: "${lines.bluffLine}".`;
    main_window.appendChild(bluffLine1Entry);
    let bluffLine2Entry = document.createElement('p');
    bluffLine2Entry.textContent = `"I rolled ${currentBid.numberOfDice} dice with ${currentBid.dots} dots."`;    
    main_window.appendChild(bluffLine2Entry);
    // re-bid, but can only do higher now!
    bidPhase(opponentName, lines, callbackEnd, prize);
    // thoughts on re-bidding: reuse the same function flow
    // introduce a limit on what the player can bid
    // but the limits don't work if currentBid is empty
}
// calling out a bluff
function callOut() {
    // if accusation.accuser = player, checks opponentHand, if accusation.accuser = opponent, checks playerHand
    // these are set up differently, so different calculations
    if (accusation.accuser == 'opponent') {
        // playerHand = [die1, ...]
        // die1 = {result: 0, ...}
        let allCorrectDots = playerHand.filter(i => (i.result == accusation.dots));
        console.log(`ALL CORRECT DOTS: ${allCorrectDots}`);
        console.log(`ACCUSATION DOTS: ${accusation.dots}`);
        console.log(`ACCUSATION NUMBER OF DICE: ${accusation.numberOfDice}`);
        if (allCorrectDots.length >= accusation.numberOfDice) {
            return 'playerWins';
        } else {
            return 'opponentWins';
        }
    } else {
        // opponentHand = [1, 3, 4, 1, 3, 2]
        let allCorrectDots = opponentHand.filter(i => (i == accusation.dots));
        console.log(`ALL CORRECT DOTS: ${allCorrectDots}`);
        console.log(`ACCUSATION DOTS: ${accusation.dots}`);
        console.log(`ACCUSATION NUMBER OF DICE: ${accusation.numberOfDice}`);
        if (allCorrectDots.length >= accusation.numberOfDice) {
            return 'opponentWins'; 
        } else {
            return 'playerWins';
        }
    }
    // checks that player/opponentHand.includes the integer equaling to the 'dots'
    // loops through the check a number of times = numberOfDice
    // if all true, accusation.accuser is the loser
    // returns a winner
}
// ending the game
function gameEnd(result, opponentName, lines, callbackEnd, prize) {
    // a message, who is being accused and what are they being accused of
    let gameEndEntry = document.createElement('p');
    if (accusation.accuser == 'Player') {
        gameEndEntry.textContent = `Accusation! You and ${opponentName} check the bluff. Your opponent is the bluffer. They said they have ${accusation.numberOfDice} of ${accusation.dots} dots. Time to see if they're bluffing.`
    } else {
        gameEndEntry.textContent = `Accusation! You and ${opponentName} check the bluff. You are the bluffer. You said that you've got ${accusation.numberOfDice} of ${accusation.dots} dots. ${opponentName} checks if you're bluffing.`
    }
    main_window.appendChild(gameEndEntry);
    let continueButton = document.createElement('button');
    continueButton.textContent = 'Let us find out'
    main_window.appendChild(continueButton);
    continueButton.addEventListener('click', () => {
        main_window.removeChild(continueButton);
        gameEnd2(result, opponentName, lines, callbackEnd, prize);
    })
}
function gameEnd2(result, opponentName, lines, callbackEnd, prize) {
    let opponentEndLineEntry = document.createElement('p');
    if (result == 'playerWins') {
        let gameResultEntry = document.createElement('p');
        gameResultEntry.textContent = 'And.... You win!';
        main_window.appendChild(gameResultEntry);
        opponentEndLineEntry.textContent = `${opponentName}: "${lines.loseLine}."`
        main_window.appendChild(opponentEndLineEntry);
        callbackEnd('win', prize);
    } else {
        let gameResultEntry = document.createElement('p');
        gameResultEntry.textContent = `And.... ${opponentName} wins!`;
        main_window.appendChild(gameResultEntry);
        opponentEndLineEntry.textContent = `${opponentName}: "${lines.winLine}."`
        main_window.appendChild(opponentEndLineEntry);
        callbackEnd('lose', prize);
    }
    // saying the 'winLine' or 'loseLine'  
    // keep track of gold!
    // show gold in the inventory
    // win or lose a set [FOR NOW] number of gold
    // gold could be spent on buying equipment
}
export {
    playerHand, opponentHand, currentBid, accusation, exampleLines, die1, die2, die3, die4, die5, die6, startDiceGame, falseCubes, roll6d4Player, roll6d4Opponent, roll1d4, rollPhase, bidPhase, fiftyFifty, oneThird, opponentResponse, opponentBid, callOut, gameEnd
}