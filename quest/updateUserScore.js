export function updateUserScore(choice, questId, user) {
    user.hp += choice.hp;
    console.log(user.hp, 'userHP');
    user.gold += choice.gold;
    console.log(user.gold);
    user.completed[questId] = true;
}
