export default function separator(storyElement, playerConsequencesArray, storyTellerFunction) {
    let correctNextStoryElement;
    for (let i = 0; i < storyElement.text.length; i++) {
        if (playerConsequencesArray.includes(storyElement.text[i].dependency)) {
            correctNextStoryElement = i;
        }
    }
    if (correctNextStoryElement !== null) {
        storyTellerFunction(storyElement.text[correctNextStoryElement].nextStoryElement);
    }
}