import quests from '../data/questData.js';
import { findById } from './findById.js';
// import loadProfile from '../utils/loadProfile.js';
// // import { getUser } from '../utils/loadProfile.js';
// loadProfile();
const searchParam = new URLSearchParams(window.location.search);
const questId = searchParam.get('id');
const quest = findById(questId, quests);

if (!quest) {
    window.location = '../map';
}

    //grab question-choices from DOM
const form = document.getElementById('question-choices-container');
const img = document.getElementById('img');
const title = document.getElementById('title');
const question = document.getElementById('questions');
const userChoices = document.getElementById('the-choices');
img.src = '../assets/quest/' + quest.image;
question.textContent = quest.description;
for (let i = 0; i < quest.choices.length; i++){
    const choice = quest.choices[i];
    const choiceDom = createChoice(choice);
    userChoices.appendChild(choiceDom);
}
function createChoice(choice) {
    const label = document.createElement('labal');
    label.classList.add('choice');
    const radio = document.createElement('input');
    label.appendChild(radio);
    radio.type = 'radio';
    radio.name = 'choice';
    radio.required = 'true';
    radio.id = choice.id;
    const description = document.createElement('span');
    description.textContent = choice.description;
    label.appendChild(description);
    return label;
}
