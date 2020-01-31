import quests from '../data/questData.js';
import { findById } from './findById.js';
import { createChoice } from './createChoice.js';
// import loadProfile from '../utils/loadProfile.js';
// import { getUser } from '../data/api.js';
// loadProfile();
// getUser();
const searchParam = new URLSearchParams(window.location.search);
const questId = searchParam.get('id');
const quest = findById(questId, quests);

if (!quest) {
    window.location = '../map';
}
const form = document.getElementById('question-choices-container');
const resultDescription = document.getElementById('result-description');
const title = document.getElementById('title');
title.textContent = quest.title;
const img = document.getElementById('img');
const question = document.getElementById('questions');
question.textContent = quest.description;
const userChoices = document.getElementById('the-choices');
img.src = '../assets/quest/' + quest.image;
for (let i = 0; i < quest.choices.length; i++){
    const choice = quest.choices[i];
    const choiceDom = createChoice(choice);
    userChoices.appendChild(choiceDom);
}
form.addEventListener('submit', function(event){
    event.preventDefault();
    const formData = new FormData(form);
    const getFormId = formData.get('choice');
    console.log(getFormId, '========');
    const returnObject = findById(getFormId, quest.choices);
    console.log(returnObject);
    resultDescription.textContent = returnObject.result;

});
