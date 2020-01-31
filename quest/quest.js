import quests from '../data/questData.js';
import { findById } from './findById.js';
// import loadProfile from '../utils/loadProfile.js';
// // import { getUser } from '../utils/loadProfile.js';
// loadProfile();
const searchParam = new URLSearchParams(window.location.search);
console.log(searchParam);
const questId = searchParam.get('id');
const quest = findById(questId, quests);
console.log(questId);
console.log(quest);
console.log('test');
if (!quest) {
    window.location = '../map';
}

    //grab question-choices from DOM
const form = document.getElementById('question-choices-container');
const img = document.getElementById('img');
const title = document.getElementById('title');
const question = document.getElementById('questions');
const ul = document.getElementById('the-choices');
img.src = '../assets/quest/' + quest.image;
console.log(img.src);
question.textContent = quest.description;
console.log(question.textContent);
    //append those elements to <from id='question=choices>
//render questions from questData
//render choice from questData
