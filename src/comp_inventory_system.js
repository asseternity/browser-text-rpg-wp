// import: hud, char1, menuUpdater,
import './index.css';
import { 
    menu_window,
    inventory_button,
    dialogAnimationEnd
} from './comp_hud';
import { 
    menuUpdater, 
    char1 
} from './comp_objects_and_methods';

// ---inventory system---
// create a dialog window when we click on inventory
let inventoryDialog = document.createElement('dialog');
inventoryDialog.setAttribute('style','max-width:500px;')
inventoryDialog.innerHTML = `
    <button id='closeButton'>Close</button>
    <div id='inventoryBox'>
        <h2>Inventory</h2>
        <div id='equippedBox'>
            Equipped weapon: <span id='equippedWeaponBox'></span>
            <br>
            Equipped armor: <span id='equippedArmorBox'></span>
            <br>
            Equipped misc: <span id='equippedMiscBox'></span>
        </div>
        <br>
        <br>
        <div id='allBox'>
            Bag:
            <ul id='allList'>
            </ul>
        </div>
    </div>
`;
document.body.appendChild(inventoryDialog);
inventory_button.addEventListener('click', () => {
    inventoryDialog.showModal();
    let closeButton = document.querySelector('#closeButton');
    closeButton.addEventListener('click', () => {
        inventoryDialog.classList.add('hide');
        inventoryDialog.addEventListener('animationend', dialogAnimationEnd);
    })
})
// grab elements from dialog
let equippedWeaponBox = document.querySelector('#equippedWeaponBox');
let equippedArmorBox = document.querySelector('#equippedArmorBox');
let equippedMiscBox = document.querySelector('#equippedMiscBox');
let allList = document.querySelector('#allList')
// when an object is grabbed
function grabItem(item) {
    char1.inventory.push(item);
    let itemBullet = document.createElement('li')
    itemBullet.textContent = `${item.name}, ${item.type}. Attack bonus: ${item.itemAttack}. Armor bonus: ${item.itemArmor}.`
    allList.appendChild(itemBullet);
    if (item.type !== 'quest item') {
        let equipButton = document.createElement('button');
        equipButton.addEventListener('click', () => equipItem(item));
        equipButton.textContent = 'Equip';
        equipButton.setAttribute('style', 'font-size: 70%;');
        equipButton.setAttribute('id', `${item.id}`);
        allList.appendChild(equipButton);
    }
}
// when an object is equipped
function equipItem(item) {
    if (char1.inventory.includes(item)) {
        switch (item.type) {
            case 'weapon':
                if (char1.equippedWeapon == '') {
                    char1.equippedWeapon = item;
                    char1.armorClass = char1.armorClass + char1.equippedWeapon.itemArmor;
                    equippedWeaponBox.textContent = `${item.name}`;
                    let equipButton = document.querySelector(`#${item.id}`);
                    equipButton.textContent = 'Unequip';
                    equipButton.removeEventListener('click', () => equipItem(item));
                    equipButton.addEventListener('click', () => unequipItem(item));   
                    menuUpdater();         
                } else {
                    // console.log('ERROR: please unequip your current item first')
                }
                break;
            case 'armor':
                if (char1.equippedArmor == '') {
                    char1.equippedArmor = item;
                    char1.armorClass = char1.armorClass + char1.equippedArmor.itemArmor;
                    equippedArmorBox.textContent = `${item.name}`;
                    let equipButton = document.querySelector(`#${item.id}`);
                    equipButton.textContent = 'Unequip';
                    equipButton.removeEventListener('click', () => equipItem(item));
                    equipButton.addEventListener('click', () => unequipItem(item));   
                    menuUpdater();         
                } else {
                    // console.log('ERROR: please unequip your current item first')
                }
                break;
            case 'misc':
                if (char1.equippedMisc == '') {
                    char1.equippedMisc = item;
                    char1.armorClass = char1.armorClass + char1.equippedMisc.itemArmor;
                    equippedMiscBox.textContent = `${item.name}`;
                    let equipButton = document.querySelector(`#${item.id}`);
                    equipButton.textContent = 'Unequip';
                    equipButton.removeEventListener('click', () => equipItem(item));
                    equipButton.addEventListener('click', () => unequipItem(item));   
                    menuUpdater();         
                } else {
                    // console.log('ERROR: please unequip your current item first')
                }
                break;
        }
    } else {
        // console.log('ERROR: you do not have this item in your inventory')
    }
}
// when an item is unequipped
function unequipItem(item) {
    if (char1.equippedWeapon == item || char1.equippedArmor == item || char1.equippedMisc == item) {
        if (char1.equippedWeapon == item) {
            char1.armorClass = char1.armorClass - char1.equippedWeapon.itemArmor;
            char1.equippedWeapon = '';
            equippedWeaponBox.textContent = ``;
        } else if (char1.equippedArmor == item) {
            char1.armorClass = char1.armorClass - char1.equippedArmor.itemArmor;
            char1.equippedArmor = '';
            equippedArmorBox.textContent = ``;
        } else if (char1.equippedMisc == item) {
            char1.armorClass = char1.armorClass - char1.equippedMisc.itemArmor;
            char1.equippedMisc = '';
            equippedMiscBox.textContent = ``;
        }
        menuUpdater();
        let equipButton = document.querySelector(`#${item.id}`);
        equipButton.textContent = 'Equip';
        equipButton.removeEventListener('click', () => unequipItem(item));
        equipButton.addEventListener('click', () => equipItem(item));
    } else {
        // console.log('ERROR: this item is not equipped;')
    }
}
// to character, add the following keys: equippedWeapon, equippedArmor, equippedMisc, inventory = []
// the item object will have keys: type (weapon, armor or misc); itemAttack; itemArmor
function newItem(name, type, itemAttack, itemArmor, id) {
    return {
        name: name,
        type: type,
        itemAttack: itemAttack,
        itemArmor: itemArmor,
        id: id
    }
}
let magicSword = newItem('Magic Sword', 'weapon', 20, 0, 'n1');
let magicArmor = newItem('Magic Armor', 'armor', 0, 2, 'n2');
let magicRing = newItem('Magic Ring', 'misc', 1, 1, 'n3');
let ultraSword = newItem('Ultra Sword', 'weapon', 40, 0, 'n4');
let ultraArmor = newItem('Ultra Armor', 'armor', 0, 4, 'n5');
let ultraRing = newItem('Ultra Ring', 'misc', 2, 2, 'n6');
let rustySword = newItem('Rusty Sword', 'weapon', 1, 0, 'n7');
let rustyArmor = newItem('Rusty Armor', 'armor', 0, 1, 'n8');
let goldRing = newItem('Gold Ring', 'misc', 0, 1, 'n9');
let healthPotion = newItem('Health Potion', 'quest item', 0, 0, 'n10');
// exporting object
let allItems = { magicArmor, magicRing, magicSword, ultraArmor, ultraRing, ultraSword, rustyArmor, rustySword, goldRing, healthPotion };
// export
export {
    inventoryDialog,
    grabItem,
    equipItem,
    unequipItem,
    newItem,
    allItems
}