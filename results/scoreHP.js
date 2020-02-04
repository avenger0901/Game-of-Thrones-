function scoreHp(userHp){
    if (userHp === 0){
        return 'dead';
    } else if (userHp < 50){
        return 'frail';
    } else 'healthy';
}
export default scoreHp;