import quests from '../data/questData.js';
import { findById } from './findById.js';
import { createChoice } from './createChoice.js';
// import loadProfile from '../utils/loadProfile.js';
// // import { getUser } from '../utils/loadProfile.js';
// loadProfile();
const searchParam = new URLSearchParams(window.location.search);
const questId = searchParam.get('id');
const quest = findById(questId, quests);

if (!quest) {
    window.location = '../map';
}

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

