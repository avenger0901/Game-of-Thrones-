import loadProfile from '../utils/loadProfile.js';
import quests from '../data/questData.js';
loadProfile();

function renderLink(quest){
    const nav = document.getElementById('nav');
    const link = document.createElement('a');
    console.log(link);
    link.classList.add('quest');
    nav.appendChild(link);
    link.textContent = quest.title;
    link.href = '../quest/?id=' + quest.id;

    return link;

}
for (let i = 0; i < quests.length; i++){
    const quest = quests[i];
    renderLink(quest);
}