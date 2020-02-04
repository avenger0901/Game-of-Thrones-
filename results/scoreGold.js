export function scoreGold(userGold){
    if (userGold === 10){
        return 'poor';
    } else if (userGold < 50){
        return 'modest';
    } else return 'rich';
}