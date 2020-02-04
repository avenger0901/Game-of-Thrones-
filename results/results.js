import loadProfile from '../utils/loadProfile.js';
import scoreHp from '../results/scoreHP.js';
import scoreGold from '../results/scoreGold.js';
import { getUser } from '../data/api.js';
loadProfile();

const user = getUser();
const finalResultsDisplay = document.getElementById('final-results');
const hpResult = scoreHp(user.hp);
const goldResult = scoreGold(user.hp);
console.log(hpResult);
console.log(goldResult);
