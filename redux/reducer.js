const reducer = (state = [], action) => {
    switch(action.type){
        case "POKEMON_LIKED": {
            return [
                ...state,
                action.payload.pokemonName
            ];
        }
        case "POKEMON_DISLIKED": {
            return state.filter(pokemon => pokemon !== action.payload.pokemonName);
        }
    }
    return state;
}

export default reducer;