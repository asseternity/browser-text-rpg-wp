// import: char1, classes
import './index.css';
import titleImg from './title.png';
import {
    // Character,
    Janitor,
    Accountant,
    Dancer,
    char1
} from './comp_objects_and_methods';

// initialize spaces and buttons
let top_bar = document.querySelector('.top_bar');
let log_window = document.querySelector('.log');
let main_window = document.querySelector('.main_window');
let image_window = document.querySelector('.image_window');
let menu_window = document.querySelector('.menu');
let button_window = document.querySelector('.button_window');
let attack_button = document.querySelector('#attackButton');
let special_button = document.querySelector('#specialButton');
let inventory_button = document.querySelector('#inventoryButton');
let stats_button = document.querySelector('#statsButton');
//draw player stats
menu_window.textContent = `You are a person. Your class is unknown. Your armor class is ${char1.armorClass}. Your HP is ${char1.currentHP}/${char1.maxHP}.`;
// dialog remover
function dialogAnimationEnd(event) {
    let dialog = event && event.target ? event.target : event;
    if (dialog.tagName == 'DIALOG') {
        dialog.close();
    } else {
        dialog.remove();
    }
    dialog.classList.remove('hide');
    dialog.removeEventListener('animationend', dialogAnimationEnd);
}
//---main menu---
let mainMenuDialog = document.createElement('dialog');
mainMenuDialog.setAttribute('style','height:68%;width:100%;z-index:1000;overflow:hidden;');
document.body.appendChild(mainMenuDialog);

mainMenuDialog.innerHTML = 
`
<img src="${titleImg}" style='width:100%;margin-top:15px;'>   
<div style='display:flex;flex-direction:column;justify-content:center;align-items:center;margin-top:50px;'>
    <button id='startGameButton' style='font-size:150%;display:block;margin:0 auto; border: 1px solid silver; border-radius: 5px; margin-bottom:20px;width:250px;'>Start game</button>
    <button id='settingsButton' style='font-size:150%;display:block;margin:0 auto; border: 1px solid silver; border-radius: 5px; margin-bottom:20px;width:250px;'>Settings</button>
    <button id='aboutButton' style='font-size:150%;display:block;margin:0 auto; border: 1px solid silver; border-radius: 5px; margin-bottom:20px;width:250px;'>About the creator</button>
    <button id='contactButton' style='font-size:150%;display:block;margin:0 auto; border: 1px solid silver; border-radius: 5px; margin-bottom:20px;width:250px;'>Contact me</button>
</div>
<br>
<p style='color:white;'><i>Note: If you play on mobile, scroll to the bottom of the screen to see the action buttons.</i></p>
`

mainMenuDialog.showModal();

let blackMenu = document.createElement('div');
blackMenu.setAttribute('style', 'background-color:black;position:absolute;height:1000px;width:100%;z-index:500;');
let container = document.querySelector('.container');
container.appendChild(blackMenu);
document.body.style.overflow = 'hidden';

let startButton = document.querySelector('#startGameButton');
let mainMenuClosed = false;;
startButton.addEventListener('click', () => {
    mainMenuDialog.classList.add('hide');
    mainMenuDialog.addEventListener('animationend', () => {
        dialogAnimationEnd(mainMenuDialog);
        mainMenuClosed = true;
        checkAnimationComplete();
    });
});
function checkAnimationComplete() {
    if (mainMenuClosed) {
        blackMenu.classList.add('hide');
        blackMenu.addEventListener('animationend', dialogAnimationEnd);
        document.body.style.overflow = 'visible';    
    }
}
// export spaces and buttons
export {
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
}