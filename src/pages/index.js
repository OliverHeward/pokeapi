import React from "react";
import Filter from "../components/Filter/Filter";
import PokemonList from "../components/PokemonList/PokemonList";

const IndexPage = () => {
  return (
    <div>
      <Filter />
      <PokemonList />
    </div>
  );
};

export default IndexPage;
