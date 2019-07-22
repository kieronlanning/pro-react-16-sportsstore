export const CommonReducer = (...reducers) => (storeData, action) => {
    for(let i = 0; i < reducers.length; i++) {
        const reducer = reducers[i];
        const newStore = reducer(storeData, action);
        if (newStore !== storeData)
            return newStore;
    }

    return storeData;
};
