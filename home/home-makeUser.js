function makeUser(formData){
    const user = {
        name: formData.get('name'),
        race: formData.get('race'),
        hp:35,
        gold: 0,
        complted: {}
    };
    return user;
}
export default makeUser;