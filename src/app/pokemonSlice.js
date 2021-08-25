import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  pokemon: [],
  filters: [],
  loading: false,
  hasErrors: false,
};

export const pokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {
    getPokemon: (state) => {
      state.loading = true;
    },
    getPokemonSuccess: (state, { payload }) => {
      state.pokemon = payload;
      state.loading = false;
      state.hasErrors = false;
    },
    getPokemonFailure: (state) => {
      state.loading = false;
      state.hasErrors = true;
    },
    getFilters: (state) => {
      return state.filters;
    },
    addFilter: (state, { payload }) => {
      state.filters.push(payload);
    },
    removeFilter: (state, { payload }) => {
      state.filters.filter(filter => filter !== payload);
    },
  },
});

export const pokemonSelector = (state) => state.pokemon;
export const { getPokemon, getPokemonSuccess, getPokemonFailure, getFilters, addFilter, removeFilter } =
  pokemonSlice.actions;

export default pokemonSlice.reducer;

export function fetchPokemon() {
  return async (dispatch) => {
    dispatch(getPokemon());

    try {
      const response = await fetch("https://pokeapi.co/api/v2/pokemon");
      const json = await response.json();

      const { results = [] } = json;

      const pokemon = await Promise.all(
        results.map(async (result) => {
          const { url } = result;
          const pokeResponse = await fetch(url);
          return await pokeResponse.json();
        })
      );

      dispatch(getPokemonSuccess(pokemon));
    } catch (error) {
      console.log("error");
      dispatch(getPokemonFailure());
    }
  };
}
