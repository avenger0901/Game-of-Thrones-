import { getUser } from '../data/api.js';
function loadProfile() {
    const avatar = document.getElementById('avatar');
    const name = document.getElementById('name');
    const hp = document.getElementById('hp');
    const gold = document.getElementById('gold');
    
    const user = getUser();
    console.log(user);
    name.textContent = user.name;
    hp.textContent = user.hp;
    gold.textContent = user.gold;
    avatar.src = '../assets/game-pic/' + user.race + '.png';
    console.log(name);
    console.log(name.textContent);
}
export default loadProfile;
