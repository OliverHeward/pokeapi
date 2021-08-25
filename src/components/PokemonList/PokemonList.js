import React, { useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchPokemon,
  getFilters,
  pokemonSelector,
} from "../../app/pokemonSlice";
import PokeCard from "../PokeCard/PokeCard";

const PokemonWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  grid-gap: 12px;
  padding: 0 0 120px 0;
  &:nth-of-type(odd) {
    background: var(--red);
  }
  &:nth-of-type(even) {
    background: var(--blue);
  }
`;

const PokemonList = () => {
  const dispatch = useDispatch();
  const { pokemon, loading, hasErrors } = useSelector(pokemonSelector);
  const { payload } = useSelector(getFilters);

  useEffect(() => {
    dispatch(fetchPokemon());
  }, [dispatch]);

  const chunkArray = (array, chunk_size) => {
    var index = 0;
    var arrayLength = array.length;
    var tempArray = [];

    for (index = 0; index < arrayLength; index += chunk_size) {
      var myChunk = array.slice(index, index + chunk_size);
      tempArray.push(myChunk);
    }

    return tempArray;
  };

  const renderPokemon = () => {
    if (loading) return <p>Loading pokemon...</p>;
    if (hasErrors) return <p>Cannot display pokemon...</p>;

    let filtered, arrayChunks;

    const resolvedNests = pokemon.map((node) => {
      const { id, name, types, abilities, stats, sprites } = node;

      return {
        id,
        name,
        types: types.map((type) => type.type.name),
        stats,
        abilities: abilities.map((ability) => ability.ability.name),
        image: sprites.other,
      };
    });

    /* So this bit here is a bit weird...
      Due to the nesting of the objects and the types now in an array,
      I needed to loop over the filters, then filter the results
      this caused [Array, Array, ...] for filters as they are passed in
      so a new Set of unique objects is formed from the array once flattened
      this prevents duplicates of pokemon that are both for example, flying + fire (like charizard)
      
      Probably massively over enginereed, but wanted to allow for the API to be stateful,
      including the filters being stateful too. But ultimately, without mutating the state
    */
    if (payload.pokemon.filters) {
      filtered = [
        ...new Set(
          payload.pokemon.filters
            .map((filter) => {
              return resolvedNests.filter((nest) =>
                nest.types.includes(filter)
              );
            })
            .flat()
        ),
      ];
    }

    arrayChunks = filtered.length
      ? chunkArray(filtered, 3)
      : chunkArray(resolvedNests, 3);

    return arrayChunks.map((chunk) => {
      return (
        <PokemonWrapper>
          {chunk.map((pokemon) => (
            <PokeCard {...pokemon} />
          ))}
        </PokemonWrapper>
      );
    });
  };

  return <div>{renderPokemon()}</div>;
};

export default PokemonList;
