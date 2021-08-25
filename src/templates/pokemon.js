import React from "react";
import { graphql } from "gatsby";
import PokeCard from "../components/PokeCard/PokeCard";
import styled from "styled-components";

const PokemonStyled = styled.div`
    background: var(--red);
    padding: 80px 0 120px;
`

const Pokemon = ({ data }) => {
  const { pokemon } = data;
  
  pokemon.types = pokemon.types.map((type) => type.type.name);
  pokemon.abilities = pokemon.abilities.map((ability) => ability.ability.name);
  pokemon.image = pokemon.sprites.other.official_artwork.front_default;

  console.log(pokemon);
  return (
      <PokemonStyled>
        <PokeCard {...pokemon} />
      </PokemonStyled>
  );
};

export default Pokemon;

export const query = graphql`
  query PokemonQuery($name: String) {
    pokemon(name: { eq: $name }) {
      id
      name
      stats {
        base_stat
        stat {
          name
        }
      }
      abilities {
        ability {
          name
        }
      }
      types {
        type {
          name
        }
      }
      sprites {
        other {
          official_artwork {
            front_default
          }
        }
      }
    }
  }
`;
