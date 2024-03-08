let text1 = new storyElement('description',
    [`1`, `2`],
    undefined,
    undefined)
let choice1 = new storyElement('choice',
    [`1`, `2`],
    [{choiceText: `1.`,
    choiceModifiers: null,
    choiceNextStory: undefined},
    {choiceText: `2.`,
    choiceModifiers: null,
    choiceNextStory: undefined}],
    undefined) 
let consequence1 = new storyElement('consequence',
    [{dependency: 'flag1', consequenceText: ['1', '2']},
    {dependency: 'flag2', consequenceText: ['1', '2']}],
    undefined,
    undefined)
let explore1 = new storyElement('exploration',
    ['1', '2']
    [{encounterStoryElement: undefined, tileNumber: '#tile30', icon: iconTree},
    {encounterStoryElement: undefined, tileNumber: '#tile100', icon: iconTree2}],
    undefined)
let encounter1 = new storyElement('randomEncounter',
    ['1', '2'],
    {hasPlayerSeenMe: false},
    undefined)
let separator1 = new storyElement('separator',
    [{dependency: 'choice1', nextStoryElement: element1},
    {dependency: 'choice2', nextStoryElement: element2},
    {dependency: 'choice3', nextStoryElement: element3}],
    undefined,
    undefined)
