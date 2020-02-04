import { saveUser } from '../data/api.js';
import makerUser from './home-makeUser.js';

const userSignUp = document.getElementById('user-sign-up');

userSignUp.addEventListener('submit', function(event){
    event.preventDefault();
    const formData = new FormData(userSignUp);
    const user = makerUser(formData);
    saveUser(user);
    window.location = '../map';
});