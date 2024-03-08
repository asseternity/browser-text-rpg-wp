import { monsters } from './comp_objects_and_methods';
import { allItems, playerGold, addGold } from './comp_inventory_system';
import { icons } from './comp_assets';
// import { storyElement } from './comp_story_objects';
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
// --- script ---
// from them learn about the New Dawn Edict

// --- FIRST APPEARANCE OF THE DIVINE MESSENGER ---
let firstAppearance_book1 = new storyElement('description',
    [`[This is the end of the prototype!]`, `[Thank you for playing and let me know what you think!]`],
    undefined,
    undefined)
let firstAppearance_dreams1 = new storyElement('description',
    [`[This is the end of the prototype!]`, `[Thank you for playing and let me know what you think!]`],
    undefined,
    undefined)
let firstAppearance_tree1 = new storyElement('description',
    [`[This is the end of the prototype!]`, `[Thank you for playing and let me know what you think!]`],
    undefined,
    undefined)
let firstAppearance_shadow1 = new storyElement('description',
    [`[This is the end of the prototype!]`, `[Thank you for playing and let me know what you think!]`],
    undefined,
    undefined)
let firstAppearance_animal1 = new storyElement('description',
    [`[This is the end of the prototype!]`, `[Thank you for playing and let me know what you think!]`],
    undefined,
    undefined)
let firstAppearance_reflection1 = new storyElement('description',
    [`[This is the end of the prototype!]`, `[Thank you for playing and let me know what you think!]`],
    undefined,
    undefined)
// CHOOSE YOUR CHOSEN! CHOOSE A GHOSTLY WAY TO COMMUNICATE!
// if watch them for a while, the selection of methods of appearance is smaller
// methods: write messages in their book, appear in their dreams
let methodOfContact2 = new storyElement('choice', 
    [`You have a few ideas on how to make contact with ChosenName...`],
    [{choiceText: `You wait for ChosenName to start reading, and change the words in xis book.`, // wait until the adventurer's reading and change the words in the book
    choiceModifiers: 'firstAppearance_book',
    choiceNextStory: firstAppearance_book1},
    {choiceText: `You wait for ChosenName to fall asleep, and alter xis dreams.`, // appear or alter the adventurer's dream
    choiceModifiers: 'firstAppearance_dreams',
    choiceNextStory: firstAppearance_dreams1},
    {choiceText: `You wait till ChosenName's alone on watch, and draw the symbol of Justice on a nearby tree.`, // Symbols or Runes: Using natural materials around the camp, the spirit could arrange symbols or runes that convey a message
    choiceModifiers: 'firstAppearance_tree',
    choiceNextStory: firstAppearance_tree1},
    {choiceText: `You wait till the others are asleep, and change the shape of ChosenName's shadow caused by the campfire.`, // Animated Shadows: The spirit could animate shadows cast by objects in the environment, causing them to move in ways that convey messages or images relevant to the adventurers' journey. For example, a shadow might mimic the shape of a key to indicate that they are unlocking a great mystery or power
    choiceModifiers: 'firstAppearance_shadow',
    choiceNextStory: firstAppearance_shadow1},
    {choiceText: `You search for an animal, and give it a command to approach the camp when the others are asleep.`, // Guiding Animals: The spirit could influence the behavior of animals in the area, causing them to act in ways that lead the adventurers in the right direction or warn them of impending danger
    choiceModifiers: 'firstAppearance_animal',
    choiceNextStory: firstAppearance_animal1},
    {choiceText: `You wait for ChosenName to get a drink or polish xis armor, then alter the reflection.`, // Visions in Reflective Surfaces: The spirit could communicate through visions that appear in reflective surfaces such as still water, mirrors, or polished metal. These visions could offer glimpses of the adventurers' future or provide cryptic clues about their destiny as the Chosen one
    choiceModifiers: 'firstAppearance_reflection',
    choiceNextStory: firstAppearance_reflection1}],
    undefined)
let methodOfContact1b = new storyElement('description',
    [`After a little bit of thinking and testing, far from the camp, you determine that all you can do for now as a Spirit, is to manipulate inanimate objects.`, `Theoretically, you also feel that you might be able to give little commands to non-human animals, and, if you concentrate hard, fill dreams of slumbering folks with images.`],
    undefined,
    methodOfContact2)
let methodOfContact1 = new storyElement('description',
    [`Now, how to make contact?`, `Humans can't see, hear or touch Spirits directly.`, `Spirits are told to have magical abilities.`, `The only beings in the world to have them, actually.`, `Those would be handy right about now.`, `You try to feel what you can do.`],
    undefined,
    methodOfContact1b)
let chosePeculiar = new storyElement('description',
    [`Captain Peculiar is the obvious choice.`, `In reality, you know nothing about these people's pasts, yet you're supposed to pick which one's most suitable to be the Chosen of Justice.`, `Who's more likely to BELIEVE they're Chosen, rather.`, `Peculiar's in charge, which means she's probably accomplished the most. Right?`],
    undefined,
    methodOfContact1)
let choseSnapdragon = new storyElement('description',
    [`Captain Peculiar and Lysander are honorable, military types.`, `It will be much harder to trick them into believing that they are the chosen ones.`, `Snapdragon, who looks egotistical, handsome and popular, is the obvious choice.`, `He'll be easier to convince that he's the Chosen One.`, `Right?`],
    undefined,
    methodOfContact1)
let choseLysander = new storyElement('description',
    [`You stop yourself for a moment.`, `Not just your survival as a Spirit is at stake.`, `This choice will have consequence on the entire Fated Realm.`, `The person you appear to and try to convince that they are the Chosen of the Phoenix of Justice will become a big deal eventually.`, `Lysander, a true warrior, a dependable, no-nonsense soldier, will carry this status the best.`],
    undefined,
    methodOfContact1)
// what are the stories of people talking to Spirits? mostly spirits acting like messengers of the Suns, choosing humans as their champions
// I need to promote Justice, hence they need to see me as an authority
// I'll tell them that they are the chosen one, for them to see me as an authority
let spiritAppear3 = new storyElement('choice',
    [`Question is: who to appear to?`, `Who portrays the idea of Justice the most? Or, who would BELIEVE that they are the Chosen of Justice?`, `Who do you make the Chosen one?`],
    [{choiceText: `Captain Peculiar, the serious commander who seems to be in tune with others; needs.`,
    choiceModifiers: 'chosenPeculiar',
    choiceNextStory: chosePeculiar},
    {choiceText: `Snapdragon, his easy and mischievous smile tells you that he's too egotistical to not believe that he's the Chosen one.`,
    choiceModifiers: 'chosenSnapdragon',
    choiceNextStory: choseSnapdragon},
    {choiceText: `Lysander. A true, restless warrior with impeccable care for their gear and vigilance in their eyes.`,
    choiceModifiers: 'chosenLysander',
    choiceNextStory: choseLysander}],
    undefined) 
let spiritAppear2b = new storyElement('description',
    [`You now know what you have to do.`, `You have to make your first contact seem as legitimate as possible.`, `Make contact with one of them, and make them believe they are the Chosen one. Chosen of the Phoenix of Justice.`, `Even though you really have no idea what you're doing.`],
    undefined,
    spiritAppear3)
let spiritAppear2 = new storyElement('description',
    [`A 'Chosen warrior'.`, `That's what you need to do if you want to seem legitimate to them.`, `That's right!`, `The trio would have heard tales of Spirits too.`, `So if you pick one of them, whoever seems to most fit the idea of Justice, and slowly become their guide, their divine messenger...`, `...This person will believe that they're the Chosen of Justice.`],
    undefined,
    spiritAppear2b)
let spiritAppear1 = new storyElement('description',
    [`This is a question, actually.`, `Should you make contact with one of them, or with all of them at once?`, `Literally every tale about Spirits portrayed them as guides, divine messengers of the Phoenixes. The Gods.`, `The Spirits of myths appear to Chosen warriors, those who showed dedication to the Spirit's concept.`, `The Spirit will first show signs to the Chosen warrior, signs that the warrior is on the right path.`],
    undefined,
    spiritAppear2)
// watching them
let spiritWatch8 = new storyElement('description',
    [`All this information will surely be useful if you want your first ghostly contact with the three to be successful.`, `You're likely to have one shot at this.`, `You need to make contact with them, or one of them.`],
    undefined,
    spiritAppear1)
let spiritWatch7 = new storyElement('description',
    [`You feel yourself growing weaker. You're about to diseappear from not serving the Phoenix of Justice.`, `You did learn a bunch about the three, however.`, `Their names: Captain Peculiar, Snapdragon and Lysander.`, `Their allegiance: the Adventurer's Guild, and what they're doing here: answering the New Dawn Edict.`, `The location fits - the Forest of Mirrors, where you currently are, is to the east of the Fated Realm's main cities. Between the Fated Realm and the Dead Lands.`],
    undefined,
    spiritWatch8)
let spiritWatch6 = new storyElement('description',
    [ `Adventurer's Guild members usually travel alone. They're taught to be self-sufficient, and to pick contracts suitable for their skill levels.`, `Yet there are three of them here, and that fits of this 'New Dawn Edict' from Captain Peculiar's document.`, 'The New Dawn Edict.', `According to the document you saw in Peculiar's satchel, an open mission from the Highfate herself, for Adventurers to venture into the Dead Lands.`],
    undefined,
    spiritWatch7)
let spiritWatch5 = new storyElement('description',
    [`You know of the Adventurer's Guild.`, `You don't remember your previous life, when you've been, you assume, a human.`, `However, you notice that you do retain memories of the Fated Realm, its culture, like nicknames and organizations.`],
    undefined,
    spiritWatch6)
let spiritWatch4 = new storyElement('description',
    [`Yes, it looks like the three belong to the Adventurer's Guild.`, `The Fated Realm's Adventurer's Guild is a loose union of skilled fighters.`, `They travel the Fated Realm, usually alone, taking on contracts from people to assist with wild creatures, bandits, or stray undead that might have wandered into the Realm's eastern regions from the Dead Lands.`],
    undefined,
    spiritWatch5)
let spiritWatch3 = new storyElement('description',
    [`The last person, androgynous-looking, with shoulder length red hair, is Lysander.`, `They wear the heaviest armor and seem to be the weapons specialist of the three.`, `Lysander's armor is perfectly maintained, even in this weather. So well, in fact, that they are even wearing their official Adventurer's League badge - giving you a chance to read their full name - Lysander MacAppleby, of the Adventurer's Guild.`],
    undefined,
    spiritWatch4)
let spiritWatch2 = new storyElement('description',
    [`"Peculiar" is probably a nickname. Nicknames are common in the Fated Realm.`, `The long-haired man is Peculiar's younger brother, Snapdragon, or Snap.`, `He seems to be the most uncomfortable here in the frozen wilderness.`, `Perhaps that's judgmental, but you assume that he's happier and more resourceful in a bustling city.`],
    undefined,
    spiritWatch3)
let spiritWatch1 = new storyElement('description',
    [`You decide to be methodical in how you approach them.`, `After all, if you botch your one chance to make contact, there might not be any other people around to preach Justice to, and you will disappear.`, `You can't take that chance, so you watch the trio for another hour or so.`, `You learn that the one you assumed to be in charge is Captain Peculiar. A serious woman with olive skin and dark hair who's always paying attention to her two companions.`],
    undefined,
    spiritWatch2)
// choice: watch them for a while to make a better selection but become weaker, or choose now
let campVibes6 = new storyElement('choice',
    [`You feel your vision getting even blurrier. Floating is harder and harder with each passing minute.`, `You need to make contact, to promote the idea of Justice to them, or to one of them, or you'll disappear.`, `You're not sure what happens to Spirits if they disappear without performing their function.`, `You have to make a decision. Do you try to use your abilities to make contact with one of them? Or do you wait, and keep watching?`],
    [{choiceText: `I will wait, and keep watching. I need to gather more information about the three before I can effectively communicate.`,
    choiceModifiers: null,
    choiceNextStory: spiritWatch1},
    {choiceText: `I need to make contact. I can feel that I am disappearing and I'll only get weaker with each wasted minute.`,
    choiceModifiers: null,
    choiceNextStory: spiritAppear1}],
    undefined) 
// VIBES OF THE CAMP
let campVibes5 = new storyElement('description',
    [`"Reading the edict again, sister?" a voice says as the second man, the one with the long hair and the easy smile, scoots over closer to the commander.`, `"Do you need anything, Snap?" the woman responds, ignoring his comment. There's a hint of concern in her voice.`, `"Nah, I'm fine. As fine as I can be," Snap chuckles and the short exchange is over."`],
    undefined,
    campVibes6)
let campVibes4 = new storyElement('description',
    [`The commander puts back the document, but you did manage to read a little.`, `The document described something called the New Dawn Edict.`, `An open call, a mission, from the Highfate for any adventurer to answer.`, `Before the commander put away the document, you managed to see that the mission of the New Dawn Edict involves traveling to the Dead Lands - land of undead and nomadic necromancers beyond the eastern border of the Fated Realm.`],
    undefined,
    campVibes5)
let campVibes3 = new storyElement('description',
    [`Luckily for you, the commander decides to retrieve the piece of paper, and starts to read it.`, `You quickly float over behind her shoulder, reading the paper to try to find out more about the three.`, `Floating closer to the commander, you get a better look at her face.`, `She's in her early 40's. Olive skin, dark hair, solemn, exhausted, in-charge expression. Cigarette butts in a small garbage sack near her.`],
    undefined,
    campVibes4)
let campVibes2 = new storyElement('description',
    [`The trio keep sitting near the fire.`, `You notice that the first woman, the commander, has a piece of paper sticking out of her rucksack.`, `The piece of paper bears the seal of the Highfate, the leader and protector of the Fated Realms.`, `Whoever, these three are, they're not only armed, but on official business, it seems.`],
    undefined,
    campVibes3)
let campVibes1 = new storyElement('description',
    [`You linger near their camp, watching the trio from different angles.`, `The reality of your new condition is slowly setting in. Like before, the trio don't hear you, don't see you, and can't touch you.`, `You push these thoughts away. You're alive. In a new form. With a new mission of Justice.`, `But alive. And to stay alive, you need these people. You need them to embrace Justice.`, `The mood in the camp is solemn, but determined. Perhaps this is to be expected, considering the surroundings and the weather.`, `The Forest of Mirrors is an unforgiving place indeed.`],
    undefined,
    campVibes2)
// DESCRIPTIONS OF THE THREE
let lysanderDescription = new storyElement('description',
    [`The last person around the campfire is a figure with shoulder-length red hair.`, `They look like the youngest of the trio, perhaps in their late 20's.`, `Despite that, they carry themselves with the poise of a seasoned warrior. They appear incredibly vigilant, as if awaiting a command.`],
    undefined,
    campVibes1)
let snapDescription = new storyElement('description',
    [`To her right is a man with long hair framing his face. He seems to be in his early 30's.`, `His demeanor is charming, his smile easy, inviting with a hint of mischief.`, `There's a sense of restlessness about him, as if he's constantly seeking something just out of reach.`],
    undefined,
    lysanderDescription)
let peculiarDescription = new storyElement('description',
    [`Despite the biting cold of the blizzard, she sits with a sense of control, her posture rigid.`, `She seems to be in her early 40's. Her face bears the marks of hardship, with lines etched deeply around her eyes and mouth.`, `Two scimitars and a musket are resting next to her. Judging by her outfit, she seems to be the one in charge.`, `Despite her outward appearance of stoicism, you sense a deep-seated fatigue, as if she's tired of always being the one in charge.`],
    undefined,
    snapDescription)
let approachCampKnow4 = new storyElement('description',
    [`The three people are armed - you see muskets and swords next to them. They look like soldiers, mercenaries, or guards of some sort.`, `It's kind of calming - to finally see some humans.`, `Despite the fact that it's too late for you.`, `No, stop it. It's not too late. You've died, but you're not dead. You're a Spirit. And you can survive.`, `The first woman huddles by the campfire, the olive skin of her face glowing softly in the firelight.`],
    undefined,
    peculiarDescription)
// FIND THE CAMP (DON'T KNOW)
let dontKnowRealize7 = new storyElement('description',
    [`Then you remember that Spirits are the only beings in the world who have magical abilities. No human or animal possesses them.`, `To promote their concepts, Spirits have the abilities to affect the material world in ghostly ways. The more powerful the Spirit, the more substantial the effects.`, `You can't touch or talk to these people, but you have to start somewhere. Start promoting Justice, or you'll disappear.`, `First of all, who are these people?`],
    undefined,
    approachCampKnow4)
let dontKnowRealize6 = new storyElement('description',
    [`Well, there are people right here.`, `To keep going, you tell yourself - "I'm not dead".`, `"I died, but I'm not dead."`, `Whoever you were in life, you did enough for the Phoenix of Justice to make you a Spirit of Justice.`, `You're not dead. You're able to think and to see.`, `You exist. In a different form now. And you can still save yourself, save your new form.`, `You just have to do your job and promote Justice.`, `You're not sure how you're supposed to do it, considering that these people can't hear you.`],
    undefined,
    dontKnowRealize7)
let dontKnowRealize5 = new storyElement('description',
    [`Right. So you must be a Spirit of a Phoenix of Justice. Of a Sun. Of the God of Justice.`, `It's pretty much common knowledge that Spirits exist to further promote the concept, or portfolio, of their Phoenix.`, `If they fail to promote their concept, the Spirit disappears. Dies, forever`, `Oh, Gods, is that why you've been feeling weaker and weaker!?`, `You rise to your 'feet', in panic again. Without promoting the idea of Justice to somebody, you'll disappear. And soon, your body feels it.`],
    undefined,
    dontKnowRealize6)
let dontKnowRealize4 = new storyElement('choice',
    [`"My Phoenix". That's right.`,`You're a Spirit, an Envoy of a Phoenix.`, `It means that in life, you must have worshipped one of the 20 Suns, or Phoenixes, how they're also called. Done enough, in fact, to have been made a Spirit of that Sun.`, `Why is it so hard to recall the details of your life?`, `You concentrate again, sitting there in the snow.`, `Snowflakes fall right through you. How did you not notice that? Perhaps from the panic, and from your rabid search for help.`, `'Which Sun did I worship in life?' You think.`],
    [{choiceText: `The Phoenix of Compassion.`,
    choiceModifiers: 'compassionSpirit',
    choiceNextStory: dontKnowRealize5},
    {choiceText: `The Phoenix of Justice.`,
    choiceModifiers: 'justiceSpirit',
    choiceNextStory: dontKnowRealize5},
    {choiceText: `The Phoenix of Freedom.`,
    choiceModifiers: 'freedomSpirit',
    choiceNextStory: dontKnowRealize5},
    {choiceText: `The Phoenix of Mastery.`,
    choiceModifiers: 'masterySpirit',
    choiceNextStory: dontKnowRealize5},
    {choiceText: `The Phoenix of Wisdom.`,
    choiceModifiers: 'wisdomSpirit',
    choiceNextStory: dontKnowRealize5}],
    undefined) 
let dontKnowRealize3 = new storyElement('choice',
    [`You don't know enough about them. You wonder what kind of Spirit you are.`, `You close your non-existent eyes. The answer is within you, you just have to feel it.`],
    [{choiceText: 'I am a Wraith, a spirit that brings punishment to those who wrong my Phoenix.',
    choiceModifiers: 'classWraith',
    choiceNextStory: dontKnowRealize4},
    {choiceText: 'I am a Poltergeist. Watcher, seer, subtle mastermind in the service of my Phoenix.',
    choiceModifiers: 'classPoltergeist',
    choiceNextStory: dontKnowRealize4},
    {choiceText: 'I am a Guardian Spirit, I exist to guide and protect those who follow my Phoenix.',
    choiceModifiers: 'classGuardianSpirit',
    choiceNextStory: dontKnowRealize4}],
    undefined)
let dontKnowRealize2 = new storyElement('description',
    [`You must be a Spirit.`, `People who did a lot in the service of a Phoenix reincarnate into Spirits when they die.`, `There are different kinds of Spirits, you're pretty sure.`],
    undefined,
    dontKnowRealize3)
let dontKnowRealize1 = new storyElement('description',
    [`You sit there for a moment. You stare at the three, then you stare at their fire, mind completely blank.`, `You're dead.`, `You're conscious, however. You have to be a Spirit, right?`, `You concentrate - what do you know of Spirits?`, `When people die, they reincarnate into animals. When animals die, they reincarnate into people.`, `However, if the dying person had done enough in the worship of one of the 20 Suns, they reincarnate into a Spirit.`],
    undefined,
    dontKnowRealize2)
let dontKnowWatch5 = new storyElement('description',
    [`A little while later, you are sitting not far from the three people's camp, just behind their backs.`, `Close enough to see the fire, yet you still don't feel it's warmth.`, `The embrace of death is too cold.`, `You tried calling out to them, or touching them. They can't see or hear you.`, `By now, your reality is irrefutable.`, `You didn't wake up in the Forest of Mirrors.`, `You died here.`],
    undefined,
    dontKnowRealize1)
let dontKnowWatch4 = new storyElement('description',
    [`Your mind races, panicking. There are people right here! People who might help! You made it, you saved yourself! So what the hell is wrong?`, `Your mind slowly accepts what it has been trying to ignore for all this time.`, `You pass through solid objects.`, `You don't feel the cold.`, `You don't remember anything about your life.`],
    undefined,
    dontKnowWatch5)
let dontKnowWatch3 = new storyElement('description',
    [`You lean on the tree and squint, trying to make anything out, when something unexpected happens.`, `As you go to lean on the tree, your hand passes right through it, disappearing into the bark.`, `You instinctively leap back. You approach the tree again, trying to touch it once more.`, `The result is the same. Your hand passes right through the tree.`, `What the hell is going on?`],
    undefined,
    dontKnowWatch4)
let dontKnowWatch2 = new storyElement('description',
    [`You can see muskets and scimitars lying next to the three huddled figures.`, `They are armed. Mercenaries? Soldiers? Robbers indeed?`, `Your vision is really blurry now. You're not sure why.`, `The blizzard doesn't help either. And although you're hiding behind a tree only a few dozen meters away from the three figures, you still can't make out much more than that.`],
    undefined,
    dontKnowWatch3)
let dontKnowWatch1 = new storyElement('description',
    [`You slow down. They could be robbers on the run from one of the Fated Realm's cities, or cultists of one of evil Suns.`, `You stop approaching them and dash behind a nearby tree.`, `You feel weaker with every passing minute. Nevertheless, you decide to watch them for a little while.`, `To make sure they won't harm you in your desperate state.`],
    undefined,
    dontKnowWatch2)
let dontKnowRun6 = new storyElement('description',
    [`A little while later, you are sitting not far from the three people's camp, just behind their backs.`, `Close enough to see the fire, yet you still don't feel it's warmth.`, `The embrace of death is too cold.`, `You tried touching the trees, or even the fire. Nothing. You pass right through.`, `By now, your reality is irrefutable.`, `You didn't wake up in the Forest of Mirrors.`, `You died here.`],
    undefined,
    dontKnowRealize1)
let dontKnowRun5 = new storyElement('description',
    [`You slowly walk up to one of the people, and try to tap on their shoulder.`, `You reach out towards their coat with your hand.`, `When you try to tap their shoulder, your hand passes right through their body.`, `You retract your hand and step back, horrified.`, `You try again, and the result is the same. Your hand passes right through them.`],
    undefined,
    dontKnowRun6)
let dontKnowRun4 = new storyElement('description',
    [`Your mind races, panicking. There are people right here! People who can help! You made it, you saved yourself! So what the hell is wrong?`, `Your mind slowly accepts what it has been trying to ignore for all this time.`, `No vibration when you talk.`, `You don't feel the cold.`, `You don't remember anything about your life.`],
    undefined,
    dontKnowRun5)
let dontKnowRun3 = new storyElement('description',
    [`You can't even hear yourself when you yell for them. So perhaps the blizzard is drowning out your voice?`, `Or maybe they're also injured and in need of help?`, `"Hello?" you scream again. This time, you notice it.`, `You don't even hear an internal vibration when you scream.`],
    undefined,
    dontKnowRun4)
let dontKnowRun2 = new storyElement('description',
    [`You run right up to the three figures huddled around the campfire.`, `You stop within 20 meters of them.`, `"I need help!", you yell out.`, `They don't react.`, `You walk closer to them. "Good people! Please help me! I'm lost and I'm freezing!" you continue.`, `No reaction.`],
    undefined,
    dontKnowRun3)
let dontKnowRun1 = new storyElement('description',
    [`You need the help. You're desperate and you're willing to take a chance on them.`, `Also, would it make sense for bandits to be camping in the middle of the impassable Forest of Mirrors?`, `You'd expect highway robbers to be camped around the main roads of the Fated Realm.`],
    undefined,
    dontKnowRun2)
let approachCampDontKnow3 = new storyElement('description',
    [`You don't even feel fatigue as you run. Probably the adrenaline. Survival instinct.`, `As you get closer to their camp, you see three figures, huddled around the fire.`, `You stop when you get within earshot of them.`, `How do you want to approach this?`],
    {choiceText: `Watch them from a distance. You might be freezing to death and desperate for help, but they might be bandits.`,
    choiceModifiers: null,
    choiceNextStory: dontKnowWatch1},
    {choiceText: `Run towards them, screaming for help. You're dying and you need warmth, food, anything they can spare.`,
    choiceModifiers: null,
    choiceNextStory: dontKnowRun1},
    undefined)
let approachCampDontKnow2 = new storyElement('description',
    [`No longer being on top of a hill, and with the blizzard roaring, you lose sight of the smoke.`, `You don't stop running, you can only hope that you've kept the right direction.`, `Eventually, between the trees, you see a flickering red light.`, `Someone's campfire is a few hundred meters away from you.`, `You're saved!`],
    undefined,
    approachCampDontKnow3)
let approachCampDontKnow1 = new storyElement('description',
    [`You run down the hill.`, `You run through the Forest of Mirrors in the direction of where you've seen the smoke.`, `You run for what feels like an hour.`],
    undefined,
    approachCampDontKnow2)
// FIND THE CAMP (KNOW THAT YOU'RE A SPIRIT)
let approachCampKnow3 = new storyElement('description',
    [`Knowing that they cannot see you, you float closer to them and take a closer look.`, `The first person is a woman dressed in a long, thick, dark red coat. You no longer care about the cold, but it's an understandable choice for her. Could the weather have killed you? You shake away these thoughts. It's pointless to speculate for now.`],
    undefined,
    approachCampKnow4)
let approachCampKnow2 = new storyElement('description',
    [`You float closer. It's common knowledge in the Fated Realm that humans cannot see Spirits physically.`, `To promote their concepts, Spirits have the abilities to affect the material world in ghostly ways. The more powerful the Spirit, the more substantial the effects.`, `For now, you float closer to the campfire, seeing three people huddled around the bright flame.`],
    undefined,
    approachCampKnow3)
let approachCampKnow1 = new storyElement('description',
    [`You float for what feels like hours.`, `Yes. Float. Now that you understand your situation, you realize that you don't have to move your feet to move. Perks of being a Spirit.`, `Occasionally you open your eyes, occasionally you close them.`, `It doesn't look like you can see through solid matter, so all you see is the snowy Forest of Mirrors.`, `Eventually, you see a light. This one's definitely a campfire.`],
    undefined,
    approachCampKnow2)
// THE FOREST OF MIRRORS
let endForestConcentrate4b = new storyElement('description',
    [`To keep going, you tell yourself - "I'm not dead".`, `"I died, but I'm not dead."`, `Whoever you were in life, you did enough for the Phoenix of Justice to make you a Spirit of Justice.`, `You're not dead. You're able to think and to see.`, `You exist. In a different form now. And you can still save yourself, save your new form.`, `You just have to do your job and promote Justice.`, `You remember stories that Spirits can sense life. You close your eyes and try to let your feelings guide you to the nearest people.`],
    undefined,
    approachCampKnow1)
let endForestConcentrate4 = new storyElement('description',
    [`Right. So you must be a Spirit of a Phoenix of Justice. Of a Sun. Of the God of Justice.`, `It's pretty much common knowledge that Spirits exist to further promote the concept, or portfolio, of their Phoenix.`, `If they fail to promote their concept, the Spirit disappears. Dies, forever`, `Oh, Gods, is that why you've been feeling weaker and weaker!?`, `You rise to your 'feet', in panic again. You have to find someone to promote your concept, the idea of Justice, to. Without people to promote Justice to, you'll disappear. And soon, your body feels it.`],
    undefined,
    endForestConcentrate4b)
let endForestConcentrate3c = new storyElement('choice',
    [`"My Phoenix". That's right.`,`You're a Spirit, an Envoy of a Phoenix.`, `It means that in life, you must have worshipped one of the 20 Suns, or Phoenixes, how they're also called. Done enough, in fact, to have been made a Spirit of that Sun.`, `Why is it so hard to recall the details of your life?`, `You concentrate again, sitting there in the snow.`, `Snowflakes fall right through you. How did you not notice that? Perhaps from the panic, and from your rabid search for help.`, `'Which Sun did I worship in life? You think.'`],
    [{choiceText: `The Phoenix of Compassion.`,
    choiceModifiers: 'compassionSpirit',
    choiceNextStory: endForestConcentrate4},
    {choiceText: `The Phoenix of Justice.`,
    choiceModifiers: 'justiceSpirit',
    choiceNextStory: endForestConcentrate4},
    {choiceText: `The Phoenix of Freedom.`,
    choiceModifiers: 'freedomSpirit',
    choiceNextStory: endForestConcentrate4},
    {choiceText: `The Phoenix of Mastery.`,
    choiceModifiers: 'masterySpirit',
    choiceNextStory: endForestConcentrate4},
    {choiceText: `The Phoenix of Wisdom.`,
    choiceModifiers: 'wisdomSpirit',
    choiceNextStory: endForestConcentrate4}],
    undefined) 
let endForestConcentrate3b = new storyElement('choice',
    [`You don't know enough about them. You wonder what kind of Spirit you are.`, `You close your non-existent eyes. The answer is within you, you just have to feel it.`],
    [{choiceText: 'I am a Wraith, a spirit that brings punishment to those who wrong my Phoenix.',
    choiceModifiers: 'classWraith',
    choiceNextStory: endForestConcentrate3c},
    {choiceText: 'I am a Poltergeist. Watcher, seer, subtle mastermind in the service of my Phoenix.',
    choiceModifiers: 'classPoltergeist',
    choiceNextStory: endForestConcentrate3c},
    {choiceText: 'I am a Guardian Spirit, I exist to guide and protect those who follow my Phoenix.',
    choiceModifiers: 'classGuardianSpirit',
    choiceNextStory: endForestConcentrate3c}],
    undefined)
let endForestConcentrate3a = new storyElement('description',
    [`You must be a Spirit.`, `People who did a lot in the service of a Phoenix reincarnate into Spirits when they die.`, `There are different kinds of Spirits, you're pretty sure.`],
    undefined,
    endForestConcentrate3b)
let endForestConcentrate2 = new storyElement('description',
    [`You sit there for a moment, mind completely blank.`, `You're dead.`, `You're conscious, however. You have to be a Spirit, right?`, `You concentrate - what do you know of Spirits?`, `When people die, they reincarnate into animals. When animals die, they reincarnate into people.`, `However, if the dying person had done enough in the worship of one of the 20 Suns, they reincarnate into a Spirit.`],
    undefined,
    endForestConcentrate3a)
let endForestConcentrate1 = new storyElement('description',
    [`You fall to the snowy ground of the forest, sitting with your legs outstretched in front of you.`, `Your mind races. Your body still can't feel the cold.`, `You're really dead.`],
    'FoMspiritKnow',
    endForestConcentrate2)
let endForestConcentrate1preB = new storyElement('description',
    [`You bend over and slowly reach with your hand towards the snow.`, `Your hand passes right through the snow.`, `You gulp, panic and realization starting to settle in.`, `Your hand passes right through the snow. You cannot move it.`, `You didn't wake up here in the Forest of Mirrors.`, `You died here.`],
    undefined,
    endForestConcentrate1)
let endForestConcentrate1pre = new storyElement('description',
    [`You try to remember your life, but nothing comes to you.`, `You focus on your condition. You can't feel the cold.`, `You look around through the blizzard. You notice something unusual.`, `You don't seem to leave footprints in the snow.`, `The blizzard can't fill in the indentations in the snow this fast, can it?`],
    undefined,
    endForestConcentrate1preB)
let endForestExploreScream3 = new storyElement('description',
    [`You try to scream, again and again. No sound comes out.`, `You stomp in the snow, but it doesn't move.`, `Finally, you approach a tree and reach out to touch its bark.`, `You gulp, panic and realization starting to settle in, as you slowly reach with your hand to the tree.`, `Your hand passes right through the tree, disappearing into the bark.`, `You didn't wake up here in the Forest of Mirrors. You died here, and now you're a Spirit.`],
    undefined,
    endForestConcentrate1)
let endForestExploreScream2 = new storyElement('description',
    [`You stop. What the hell is going on?`, `You've been feeling off ever since you woke up.`, `Now, you're starting to suspect that it's not just the cold and frostbite.`],
    undefined,
    endForestExploreScream3)
let endForestExploreScream1 = new storyElement('description',
    [`'A-a-anybody!'`, `You yell, but the only sound that you hear is the blizzard.`, `'Somebody help me!'`, `You scream again. This time you notice that you don't even feel the vibration in your throat.`],
    'FoMspiritKnow',
    endForestExploreScream2)
let endForestExploreNoScream3 = new storyElement('description',
    [`You look around from the top of the hill.`, `In the distance, you spot a faint glimpse of smoke.`, `Now this is definitely fire of some kind.`, `And hope for you.`, `You rush down the hill towards the fire.`],
    undefined,
    approachCampDontKnow1)
let endForestExploreNoScream2 = new storyElement('description',
    [`You keep running through the forest, and manage to reach the top of the hill.`, `You're not dead yet, despite being in the frozen Forest of Mirrors for at least an hour or two by now.`, `You're not even out of breath from springing up the hill.`, `No time to think about it now.`],
    undefined,
    endForestExploreNoScream3)
let endForestExploreNoScream1 = new storyElement('description',
    [`No screaming.`, `You keep running forward.`, `You sprint through the trees for what feels like an hour.`, `Finally, you manage to spot a big hill in the forest. It'll give you a vantage point, so you spring in its direction.`],
    'FoMnoSpiritKnow',
    endForestExploreNoScream2)
let endForestExplore1 = new storyElement('choice',
    [`You breathe, trying to keep your warmth.`, `Blurry vision, can't feel your legs - you might be close to death. You need help.`, `The Forest of Mirrors is enormous, it takes up a big part of the eastern side of the Fated Realm.`, `There must be somebody traversing the Forest that could help you.`, `Should you scream out for help?`],
    [{choiceText: `Yes. It'll be hard for anyone to hear you through the blizzard, but you're desperate.`,
    choiceModifiers: 'FoMscream',
    choiceNextStory: endForestExploreScream1},
    {choiceText: `No screaming. The only attention it'll attract are tuskwolves.`,
    choiceModifiers: 'FoMnoScream',
    choiceNextStory: endForestExploreNoScream1}],
    undefined)
let endForest5 = new storyElement('choice',
    [` Your vision is getting blurrier.`, `You need to keep moving. What to do now?`],
    [{choiceText: 'Keep moving, keep exploring the forest.',
    choiceModifiers: 'FoMendExplore',
    choiceNextStory: endForestExplore1},
    {choiceText: 'Stop and try to concentrate on your condition.',
    choiceModifiers: 'FoMendConcentrate',
    choiceNextStory: endForestConcentrate1pre}],
    undefined)
let endForest4 = new storyElement('consequence',
    [{dependency: 'FoMsawWisp', consequenceText: [`You remember: "Spirits cannot touch physical objects."`, `That creature in the woods - it must have been a Spirit.`, `It could touch you.`, `Could you be... dead?`, `Your thoughts are interrupted as your body is feeling weaker.`]},
    {dependency: 'FoMnotSeenWisp', consequenceText: [`Maybe you should have asked the campfire people for help. For food. Warmth. Anything.`, `You feel yourself getting weaker.`]},],
    undefined,
    endForest5)
let endForest3 = new storyElement('consequence',
    [{dependency: 'FoMsearchedBody', consequenceText: [`You concentrate, wincing. Trying to think back to your education. What do you know of Spirits?`, `Let's see... Spirits are the only creatures with magical abilities.`, `Spirits also... cannot touch physical objects.`]},
    {dependency: 'FoMleftBody', consequenceText: [`You should be dead by now, but you don't seem to feel the cold.`, `You can feel panic and frustration growing.`]},],
    undefined,
    endForest4)
let endForest2 = new storyElement('consequence',
    [{dependency: 'FoMsearchedBody', consequenceText: [`Stop. Recite the facts.`, `You woke up in the Forest of Mirrors.`, `You don't seem to feel the cold.`, `Your hand went right through that corpse.`, `Something is off here.`, `You have a theory.`]},
    {dependency: 'FoMleftBody', consequenceText: [`Stop. Recite the facts.`, `You woke up in the Forest of Mirrors.`]}],
    undefined,
    endForest3)
let endForest1 = new storyElement('endExploration',
    [`You continue trudging through the snowy woods, looking for any sort of help.`, `You can't feel weaker with each step, but you still don't feel the cold.`, `You stop and think.`],
    {unlocked: false},
    endForest2)
let wispLeave = new storyElement('description',
    [`You turn around step away from the light.`, `If it's a campfire, you can't be sure that these people won't be hostile.`, `And, with the blizzard and your blurred vision - from your injuries? - you can't even be sure that it's a campfire.`],
    'explorationEvent',
    undefined)
let wispApproach5 = new storyElement('description',
    [`That must have been... a Spirit, right? You do know of Spirits.`, `When ordinary people die, they reincarnate into animals.`, `If a person has done enough in the worship of one of the 20 Suns, they reincarnate into a Spirit.`, `Snowfall is getting worse. Time to move.`],
    'explorationEvent',
    undefined)
let wispApproach4 = new storyElement('item',
    [`The wisp ball flies towards you again. This time you're ready and you land a strike in the middle of its glowing body.`, `With a fizzing sound, the wisp explodes into tiny specks of light.`, `You see one of the bigger specks, a fist-sized ball of light, has landed under your feet.`, `You reach into the snow and pick it up. It emits a warming aura.`, `[Click the Inventory button to equip items]`],
    allItems.wispBall,
    wispApproach5)
let wispApproach3 = new storyElement('battle',
    [`You turn around, trying to keep it in sight.`, `It seems to be a glowing wisp of light.`, `It seems to be getting ready to swoop in towards you again.`, `It's certainly no campfire, and it doesn't seem to be friendly. You need answers, but survival comes first. You're not sure you can take many more of this "wisp's" fly-bys. You have nothing but your fists to defend yourself with.`],
    [monsters.wisp1],
    wispApproach4)
let wispApproach2 = new storyElement('description',
    [`The blizzard, the trees and the snow don't help.`, `As you step closer, the light suddenly moves. It flies a little upwards, and then moves closer towards you.`, `The light speeds up, flying towards you, until it flies right through you, painfully burning your flesh.`],
    'explorationEvent',
    wispApproach3)
let wispApproach1 = new storyElement('description',
    [`You can't help but feel weaker. The cold must be getting to you.`, `You need help. You decide to walk closer to the light.`, `You step slowly, trying to see what the light is.`],
    'explorationEvent',
    wispApproach2)
let wisp2 = new storyElement('choice',
    [`Your vision is so blurry that you can't quite make out what the light is.`, `Perhaps, campfire? Perhaps someone is in this forest after all.`, `It could also be bandits. Poachers. Worshihppers of evil Suns, ready to take advantage of a dying traveler.`, `Approach the light source?`],
    [{choiceText: 'Slowly approach the light.',
    choiceModifiers: 'FoMsawWisp',
    choiceNextStory: wispApproach1},
    {choiceText: 'Turn around and walk away form the light.',
    choiceModifiers: 'FoMnotSeenWisp',
    choiceNextStory: wispLeave}],
    undefined)
let wisp1 = new storyElement('randomEncounter',
    [`You continue trudging through the snow.`, `You don't seem to feel your feet. You hope it's not due to frostbite.`, `As you lift your head to look forward, placing your hand against your forehead to block off the wind, you see a light between the trees.`],
    {hasPlayerSeenMe: false},
    wisp2)
let corpseLeave = new storyElement('description',
    [`You turn around, not wishing to disturb the corpse.`, `You'll make it out of here.`, `Not this way, but you will.`, `As you walk away from the body, you can't help but feel weaker. Probably frostbite. Right?`],
    'explorationEvent',
    ['stats', 'benevolence', 10])
let corpseSearch2 = new storyElement('description',
    [`Your hand moves right through the snow.`, `You try again. You can't move the snow. Your hand moves right through the corpse too.`, `You turn around.`, `At first, you thought that the blizzard filled in any tracks in the snow. Now that you're looking - it's not that.`, `You're not leaving any footprints in the snow at all.`, `What the hell is going on?`],
    'explorationEvent',
    ['stats', 'evil', 10])
let corpseSearch1 = new storyElement('description',
    [`Alone, with no belongings, in the middle of winter in the Forest of Mirrors?`, `Yeah, you'll take anything, or it'll be very easy to end up like this person.`, `You lower yourself towards the body, trying to remove some snow from the body.`],
    'explorationEvent',
    corpseSearch2)
let corpse2 = new storyElement('choice',
    [`Looting would be a new low.`, `Although...`, `You're in no condition to be picky.`, `Search the body?`],
    [{choiceText: 'Search the body.',
    choiceModifiers: 'FoMsearchedBody',
    choiceNextStory: corpseSearch1},
    {choiceText: 'Leave the body alone.',
    choiceModifiers: 'FoMleftBody',
    choiceNextStory: corpseLeave}],
    'explorationEvent')
let corpse1 = new storyElement('randomEncounter',
    ['You continue moving through the Forest of Mirrors, when you see a mound in the snow.', 'The snow seems to be covering something.', 'Your suspicions are true. It is a lonely body, in the frosted forest, covered in snow.'],
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
    {encounterStoryElement: tuskwolf1, tileNumber: '#tile70', icon: icons.iconTree3},
    {encounterStoryElement: endForest1, tileNumber: '#tile3', icon: icons.iconPerson}],
    undefined)
let wakeUpLie2 = new storyElement('description',
    [`Your eyes open again. You feel noticeably weaker. Your vision seems blurry.`, `The clear evening sky has changed into a navy blue dusk.`, 'You almost let your eyes close again, when you hear the howl of a tuskwolf. Driven by pure instinct, you get to your knees, then to your feet, and start moving.', `Everyone has to go one day, but tuskwolf food isn't your way.`],
    undefined,
    wakeUpMove)
let wakeUpLie1 = new storyElement('description',
    [`You lie on your belly in the snow, feeling powerless to move.`, `You almost don't feel the cold. You wonder if it means that you're almost dead already. How did you get here? Were you robbed?`, 'You close your eyes again. Maybe this problem will disappear like a bad dream.'],
    undefined,
    wakeUpLie2)
let wakeUpRise2 = new storyElement('description',
    ['You get to your feet. Again, with surprising ease.', 'You must not have been out for long. You feel lucky. Frost takes lives quickly.', 'You look back down. The wind has already done its job - there is almost no indentation in the snow from your body already.', `You don't feel particularly cold yet, but you rub your hands for warmth nevertheless.`],
    ['gold', 200],
    wakeUpMove)
let wakeUpRise1 = new storyElement('description',
    ['You seem to be lying on your belly.', 'You plant your hands in the snow, trying to rise to your knees.', 'You rise to your knees with surprising ease.', `You look around. Your satchel doesn't seem to be with you. How did you get here? Were you robbed?`],
    undefined,
    wakeUpRise2)
let wakeUp1 = new storyElement('choice',
    ['You open your eyes to see pure white around you.', 'You lift your head. Treetops covered in sparkling white snow. Clear evening sky. Sounds of the wind.'],
    [{choiceText: 'Try to get up.',
    choiceModifiers: 'wakeUpDay',
    choiceNextStory: wakeUpRise1},
    {choiceText: 'Continue lying in the snow.',
    choiceModifiers: 'wakeUpNight',
    choiceNextStory: wakeUpLie1}],
    undefined)
// prologue
let prologue4 = new storyElement('description',
    [`The Highfate bows as the game ends.`, `She won, but she shows respect and doesn't smile too much.`, `Before you politely excuse yourself to leave the table, she smiles at you. "Good game, Serah Somebody."`, `...`, `...`],
    undefined,
    wakeUp1)
let prologue3 = new storyElement('item',
    [`The Highfate bows as the game ends.`, `You won, but you try to show respect and don't smile too much.`, `Before you politely excuse yourself to leave the table, she hands you a long, beautiful dagger.`, `"For your win," she smiles, and moves on.`, `...`, `...`],
    allItems.goldenDagger,
    wakeUp1)
let prologue2x = new storyElement('falsecubes',
    [`The Highfate picks up the stone dice on her side of the marble table.`, `She rolls them, and covers the results with her hand, smiling.`],
    {opponentName: 'The Highfate',
    opponentLines: {
        openLine: `Oh, my. The dice are favoring me tonight.`,
        bidLine: `My strategy tonight is quite bold.`,
        bluffLine: `You may not believe me, but the dice speak for themselves.`,
        accuseLine: `I conclude that this is a bluff, Serah.`,
        winLine: `And this one's mine. Thank you for the game.`,
        loseLine: `And this one's yours. You are indeed skilled.`},
    consequences: {
        win: 'prologueFalsecubesWin',
        lose: 'prologueFalsecubesLose'},
    },
    {win: prologue3, lose: prologue4})
let prologue2c = new storyElement(
    'dialogue',
    [{ lineNumber: 0, npcLine: '"Serah Somebody," the Highfate says, her speech slow and deliberate. "Care to join me for a game of Falsecubes? We can catch up after we play."', responses: 
        [{ dialogueChoice: `Certainly, your grace. It's my honor to be your first opponent tonight.`, dialogueNextLine: 1, points: 1 },
        { dialogueChoice: `I suppose I will. I've always wanted to win at Falsecubes against the Highfate.`, dialogueNextLine: 2, points: -1 }]},
    { lineNumber: 1, npcLine: '"Please, Serah Somebody," the Highfate gestures for you to relax. "You are off duty today. Enjoy the evening and do not fret about formalities."', responses: 
        [{ dialogueChoice: 'Yes, you are quite right. May the dice favor you in the game, Serah.', dialogueNextLine: 3, points: 1 },
        { dialogueChoice: 'This is how I speak with everybody, Serah Highfate. See? I am relaxing already.', dialogueNextLine: 4, points: -1 }]},
    { lineNumber: 2, npcLine: '"Is that so?" the Highfate smirks. "Well, then I should be on my best game then."', responses: 
        [{ dialogueChoice: 'You are always a formidable Falsecubes opponent, your grace. Let us play.', dialogueNextLine: 3, points: 1 },
        { dialogueChoice: 'I can give you a few pointers after the game, Serah Highfate.', dialogueNextLine: 4, points: 0 }]},
    { lineNumber: 3, npcLine: '"Thank you kindly," she says and smiles politely. "May the dice favor you, Serah Somebody."', responses: 
        [{ dialogueChoice: 'May the better bluffer win.', dialogueNextLine: 5, points: 1 },
        { dialogueChoice: `With all due respect, I've a feeling that luck is on my side tonight.`, dialogueNextLine: 5, points: -1 }]},
    { lineNumber: 4, npcLine: `"I am glad you are in a joyful mood, Serah Somebody," she says, voice suddenly warm. "It's important for me that you're comfortable."`, responses: 
        [{ dialogueChoice: `Likewise, your grace. Let me know if there's any way I can assist you throughout the reception.`, dialogueNextLine: 5, points: 1 },
        { dialogueChoice: `Growing fond of me, your grace? You haven't seen my Falsecubes skill yet.`, dialogueNextLine: 5, points: -1 }]},
    { lineNumber: 5, npcLine: `"Let us play, then. Shall we?" she says, gesturing to the table and the dice.`, responses: []}],
    ['HighfatePolite', 'HighfateNeutral', 'HighfateBanter'],
    prologue2x
)
let prologue2b = new storyElement(
    'form',
    ['The Highfate subtly nods in return, and smiles in recognition.', '[Please enter your name.]'],
    undefined,
    prologue2c
)
let prologue2 = new storyElement('description',
    [`You take a deep breath, and approach the tall woman in the leather cuirass over a long, intricate, silver robe.`, `You do your best bow in greetings, and approach the Falsecubes table.`, `Six marble, four-sides stones painted black, sit at either side of the table.`],
    undefined,
    prologue2b)
let prologue2y = new storyElement('description',
    [`You turn away, to go and mingle with the other guests, when the Highfate's eyes meet yours.`, `Well, no getting out of it now.`],
    undefined,
    prologue2)
let prologue1e = new storyElement('choice',
    [`The Highfate beckons a guest to approach her for a game of Falsecubes.`, `Do you dare approach her - and be the first guest of today's reception to play the Highfate herself?`],
    [{choiceText: `I approach the Highfate to play Falsecubes.`,
    choiceModifiers: null,
    choiceNextStory: prologue2},
    {choiceText: `I stay in the reception hall and mingle with the guests.`,
    choiceModifiers: null,
    choiceNextStory: prologue2y}],
    undefined) 
let prologue1d = new storyElement('description',
    [`The Highfate is a world-famous philosopher, and the leader of the Fated Realm.`, `The guests, however, couldn't be less concerned with philosophy.`, `Neither the monocles of rich traders, nor the decorative muskets of the adventurers, hint at any other agenda beyond impressing the Highfate.`],
    undefined,
    prologue1e)
let prologue1c = new storyElement('description',
    [`The host, the Highfate herself, presents the dice, each a work of art.`, `As the Highfate moves, the long silver robe that she wears over a leather cuirass flutters in the wind of the massive reception hall.`],
    undefined,
    prologue1d)
let prologue1b = new storyElement('description',
    [`Guests wear noble finery and adventurous attire, mingling by gas lamps.`, `They carry golden muskets, their mustaches twirled.`, `The room is alive with glass clinks and murmurs as they prepare to play Falsecubes, a dice game popular among the Fated Realm's adventuring rich.`],
    undefined,
    prologue1c)
let prologue1 = new storyElement('description',
    [`[Summer Estate of the Highfate, leader of the Fated Realm.]`, `Perched on a hill, the manor overlooks the city. Its stone facade is adorned with carvings.`, `Inside, the parlor is rich and textured, with velvet curtains framing tall windows.`],
    undefined,
    prologue1b)
// export
let scriptObjects = { prologue1 };
export { storyElement, scriptObjects };