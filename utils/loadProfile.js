import { getUser } from '../data/api.js';
function loadProfile() {
    const avatar = document.getElementById('avatar');
    const name = document.getElementById('name');
    const hp = document.getElementById('hp');
    const gold = document.getElementById('gold');
    
    const user = getUser();
    name.textContent = user.name;
    hp.textContent = user.hp;
    gold.textContent = user.gold;
    avatar.src = '../assets/game-pic/' + user.race + '.png';
}
export default loadProfile;
