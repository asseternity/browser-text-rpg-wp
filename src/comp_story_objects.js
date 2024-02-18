// import
import './index.css';
import {
    iconTree,
    iconTree2
} from './comp_assets';
import { 
    // Character,
    // Monster,
    // Janitor,
    // Accountant,
    // Dancer,
    // char1,
    goblin_grunt,
    goblin_fighter,
    goblin_shaman,
    goblin_chieftain,
    wizard,
    imp1,
    imp2
} from './comp_objects_and_methods';
import {
    // inventoryDialog,
    // grabItem,
    // equipItem,
    // unequipItem,
    // newItem,
    magicArmor,
    magicSword,
    magicRing,
    ultraArmor,
    ultraRing,
    ultraSword,
    rustyArmor,
    rustySword,
    goldRing,
    healthPotion
} from './comp_inventory_system';
// class storyElement { type(dialogue, choice, battle, description, item); text = []; 
// modifiers(for battle: array of enemies, for choice/dialogue: choices, for item: item name);
// nextStory }
class storyElement {
    constructor(type, text, modifiers, nextStoryElement) {
        this.type = type;
        this.text = text;
        this.modifiers = modifiers;
        this.nextStoryElement = nextStoryElement;
        storyElement.instances.push(this);
    }
    static instances = [];
    static getAllInstances() {
        return storyElement.instances;
    }
}
// objects of this class will be ALL that I have to edit
let randomEvent2b = new storyElement(
    'description',
    ['Holy ballsacks, what a fight.', 'Welp, back to exploring.'],
    'explorationEvent',
    undefined
)
let randomEvent2a = new storyElement(
    'battle',
    ['Encounter 2 is pissed though.', 'Oh, it is super pissed.', 'Time to fight!'],
    [goblin_grunt],
    randomEvent2b
)
let randomEvent2 = new storyElement(
    'randomEncounter',
    ['You just found random encounter 2!'],
    {hasPlayerSeenMe: false},
    randomEvent2a
)
let randomEvent1a = new storyElement(
    'item',
    ['This event is nice! It gives you an item!'],
    magicArmor,
    undefined
)
let randomEvent1 = new storyElement(
    'randomEncounter',
    ['You just found random encounter 1!'],
    {hasPlayerSeenMe: false},
    randomEvent1a
)
let testExploration = new storyElement(
    'exploration',
    ['You set out on the road again.', 'The forest is lush and hard to walk through.', 'The stranger was right - it will be hard to find your way here.', '[Use WASD or click / tap on the map to move.]'],
    [{encounterStoryElement: randomEvent1, tileNumber: '#tile30', icon: iconTree},
    {encounterStoryElement: randomEvent2, tileNumber: '#tile100', icon: iconTree2}],
    undefined
)
let testAfterDialogue = new storyElement(
    'consequence',
    [{dependency: 'StrangerFriendly', consequenceText: [
        'You hope that person winds what they are looking for.',
        'Oh, well. You have your own needs to take care of, Dude.']},
    {dependency: 'StrangerAnnoyed', consequenceText: [
        'Well that person was a jerk. Not like Dude.',
        'What a shit-faced poopster.']}],
    undefined,
    testExploration
)
let testDialogue = new storyElement(
    'dialogue',
    [{ lineNumber: 0, npcLine: 'You see a person. They approach, and say: "Hello!".', responses: 
        [{ dialogueChoice: 'And hello to you kind person! My name is Dude.', dialogueNextLine: 1, points: 1 },
        { dialogueChoice: 'Hello, more like hyulo! Dude here.', dialogueNextLine: 2, points: -1 }]},
    { lineNumber: 1, npcLine: '"Well, hi, Dude. Nice to see a polite individual around these parts! How are you today?"', responses: 
        [{ dialogueChoice: 'I am doing well.', dialogueNextLine: 3, points: 1 },
        { dialogueChoice: 'I need help...', dialogueNextLine: 4, points: -1 }]},
    { lineNumber: 2, npcLine: '"Dude, I do not speak this foul-sounding language of yours," they say, sounding concerned. "Are you okay?".', responses: 
        [{ dialogueChoice: 'I am doing well.', dialogueNextLine: 3, points: 1 },
        { dialogueChoice: 'I need help...', dialogueNextLine: 4, points: 0 }]},
    { lineNumber: 3, npcLine: '"Glad to hear it. Well, stay safe out there."', responses: 
        [{ dialogueChoice: 'Goodbye, and good luck.', dialogueNextLine: 5, points: 1 },
        { dialogueChoice: 'Oh, piss off already.', dialogueNextLine: 5, points: -1 }]},
    { lineNumber: 4, npcLine: '"Wish I could help you, friend. God bless."', responses: 
        [{ dialogueChoice: 'It is alright. Take care of yourself, stranger.', dialogueNextLine: 5, points: 1 },
        { dialogueChoice: 'Thanks for nothing...', dialogueNextLine: 5, points: -1 }]},
    { lineNumber: 5, npcLine: 'The stranger says goodbye and leaves.', responses: []}],
    ['StrangerFriendly', 'StrangerNeutral', 'StrangerAnnoyed'],
    testAfterDialogue
) 
let testChoiceOutcome2 = new storyElement(
    'description',
    ['You chose 2.'],
    undefined,
    testDialogue
) 
let testChoiceOutcome1 = new storyElement(
    'description',
    ['You chose 1.'],
    undefined,
    testDialogue
) 
let testChoice = new storyElement(
    'choice',
    ['Hello!', 'This is the new introduction 2.', 'Fun again, is it not?', 'Certainly is.', 'Again. But now it is time to choose: 1 or 2?'],
    [{choiceText: 'I will choose 1.',
    choiceModifiers: 'testChoice1',
    choiceNextStory: testChoiceOutcome1},
    {choiceText: 'I will choose 2.',
    choiceModifiers: 'testChoice2',
    choiceNextStory: testChoiceOutcome2}],
    undefined
) 
let testItem = new storyElement(
    'item',
    ['Enemies are dead!', 'This description has more strings.', 'Like one more.', 'Thank you for your patience.', 'As a reward, here is an item.'],
    magicSword,
    testChoice
) 
let testBattle = new storyElement(
    'battle',
    ['Well now it is time to play!', 'This array has fewer strings too! Muahahaha.', 'It is a fight!'],
    [imp1, imp2, goblin_chieftain, goblin_fighter],
    testItem
)
let testDescription = new storyElement(
    'description',
    ['Hello, Dude!', 'This is a new introduction.', 'Fun, is it not?', 'Certainly is.'],
    undefined,
    testBattle
)
let testClass = new storyElement(
    'choice',
    ['Now it is time to choose your class.', 'Choose wisely.', 'Or just clickity-clack.'],
    [{choiceText: 'Janitor.',
    choiceModifiers: 'classJanitor',
    choiceNextStory: testDescription},
    {choiceText: 'Accountant.',
    choiceModifiers: 'classAccountant',
    choiceNextStory: testDescription},
    {choiceText: 'Dancer.',
    choiceModifiers: 'classDancer',
    choiceNextStory: testDescription}],
    undefined    
)
let testNaming = new storyElement(
    'form',
    ['Hello!', 'Please enter your name.'],
    undefined,
    testClass
)
// export
export {
    storyElement,
    testNaming,
    testClass,
    testDescription,
    testBattle,
    testItem,
    testChoice,
    testChoiceOutcome1,
    testChoiceOutcome2,
    testDialogue,
    testAfterDialogue,
    testExploration,
    randomEvent1,
    randomEvent1a,
    randomEvent2,
    randomEvent2a,
    randomEvent2b
}