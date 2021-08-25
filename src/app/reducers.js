import { combineReducers } from "redux";

import pokemonSlice from "./pokemonSlice";

const rootReducer = combineReducers({
    pokemon: pokemonSlice,
})

export default rootReducer;