// import
import './index.css';
import { icons } from './comp_assets';
import { monsters } from './comp_objects_and_methods';
import { allItems, playerGold, addGold } from './comp_inventory_system';
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
let wisp2 = new storyElement('description',
    [`1`, `2`],
    'explorationEvent',
    undefined)
let wisp1 = new storyElement('randomEncounter',
    ['1', '2'],
    {hasPlayerSeenMe: false},
    wisp2)
    let corpse2 = new storyElement('description',
    [`1`, `2`],
    'explorationEvent',
    undefined)
let corpse1 = new storyElement('randomEncounter',
    ['1', '2'],
    {hasPlayerSeenMe: false},
    corpse2)
let tuskwolf3 = new storyElement('description',
    [`Huh? Is it blind? Cursed? Perhaps it's a Spirit's illusion? Or maybe you're hallucinating.`, `Whatever it is, the tuskwolf at least seems very real. You're not in any condition to investigate.`, `You won't get another chance. You quickly back away from the tuskwolf while it's confused or distracted.`],
    'explorationEvent',
    undefined)
let tuskwolf2 = new storyElement('description',
    [`The growling seems to be close. Maybe 15 meters behind you.`, `The tuskwolf doesn't seem to be striking though. Odd.`, `You slowly turn around.`, `A big wolf of silver fur stands not far from where you are, two 30 cms long tusks at the ready.`, 'It spins around in place, sniffing and searching for something. It ignores you completely.'],
    'explorationEvent',
    tuskwolf3)
let tuskwolf1 = new storyElement('randomEncounter',
    ['As you run through the forest, your thoughts start gather.', 'You know the Fated Realm quite well.', 'Judging by the frosted peaks in the distance, this must be the Forest of Mirrors. Named after the clear white snow that lies here for 16 out of the 20 months.', 'Your thoughts pause as you hear growling behind you. A tuskwolf. Fuck.'],
    {hasPlayerSeenMe: false},
    tuskwolf2)
// WAKE UP SEQUENCE
let wakeUpMove = new storyElement('exploration',
    [`Your body moves quickly, but the feeling of numbness all over is overwhelming.`, `Must be the frostbite. If you're lucky, you won't lose any fingers or toes.`, `In any case, it's time to move, or you'll lose your life as well.`, `[USE WASD or click the map to move.]`],
    [{encounterStoryElement: wisp1, tileNumber: '#tile30', icon: icons.iconTree},
    {encounterStoryElement: corpse1, tileNumber: '#tile50', icon: icons.iconTree2},
    {encounterStoryElement: tuskwolf1, tileNumber: '#tile70', icon: icons.iconTree3}],
    undefined)
let randomEventExit2 = new storyElement(
    'endExploration',
    ['1', '2'],
    'explorationEvent',
    wakeUpMove
)
let randomEventExit = new storyElement(
    'randomEncounter',
    ['1', '2'],
    {hasPlayerSeenMe: false},
    randomEventExit2
)
let randomEvent2b = new storyElement(
    'description',
    ['Holy ballsacks, what a fight.', 'Welp, back to exploring.'],
    'explorationEvent',
    undefined
)
let randomEvent2a = new storyElement(
    'battle',
    ['Encounter 2 is pissed though.', 'Oh, it is super pissed.', 'Time to fight!'],
    [monsters.goblin_grunt],
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
    allItems.magicArmor,
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
    [{encounterStoryElement: randomEvent1, tileNumber: '#tile30', icon: icons.iconTree},
    {encounterStoryElement: randomEvent2, tileNumber: '#tile100', icon: icons.iconTree2},
    {encounterStoryElement: randomEventExit, tileNumber: '#tile45', icon: icons.iconPerson}],
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
    allItems.magicSword,
    testChoice
) 
let testBattle = new storyElement(
    'battle',
    ['Well now it is time to play!', 'This array has fewer strings too! Muahahaha.', 'It is a fight!'],
    [monsters.imp1, monsters.imp2, monsters.goblin_chieftain, monsters.goblin_fighter],
    testItem
)
let testDescription = new storyElement(
    'description',
    ['Hello, Dude!', 'This is a new introduction.', 'Fun, is it not?', 'Certainly is.'],
    undefined,
    testBattle
)
let testRace = new storyElement(
    'choice',
    ['Now it is time to choose your race.', 'Choose wisely.'],
    [{choiceText: 'Realmer.',
    choiceModifiers: 'raceRealmer',
    choiceNextStory: testExploration},
    {choiceText: 'Mortar.',
    choiceModifiers: 'raceMortar',
    choiceNextStory: testExploration},
    {choiceText: 'Deadlander.',
    choiceModifiers: 'raceDeadlander',
    choiceNextStory: testExploration}],
    undefined    
)
let testClass = new storyElement(
    'choice',
    ['Now it is time to choose your class.', 'Choose wisely.', 'Or just clickity-clack.'],
    [{choiceText: 'Wraith.',
    choiceModifiers: 'classWraith',
    choiceNextStory: testRace},
    {choiceText: 'Poltergeist.',
    choiceModifiers: 'classPoltergeist',
    choiceNextStory: testRace},
    {choiceText: 'Guardian Spirit.',
    choiceModifiers: 'classGuardianSpirit',
    choiceNextStory: testRace}],
    undefined    
)
let testNaming = new storyElement(
    'form',
    ['Greetings!', 'Thank you for testing the game.', 'Please enter your name.'],
    undefined,
    testClass
)
// object for exporting
let storyElements = { testNaming, testClass, testDescription, testBattle, testItem, testChoice, testChoiceOutcome1, testChoiceOutcome2, testDescription, testAfterDialogue, testExploration, randomEvent1, randomEvent1a, randomEvent2, randomEvent2a, randomEvent2b }
// export
export { storyElement, storyElements }