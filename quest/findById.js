export const findById = (someId, someArray) => {
    for (let i = 0 ; i < someArray.length; i++){
        const drink = someArray[i];
        if (drink.id === someId)
            return drink;
    }
};