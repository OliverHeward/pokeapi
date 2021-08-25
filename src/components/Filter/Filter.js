import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addFilter, removeFilter } from "../../app/pokemonSlice";
import { updateObject } from "../../shared/utility";

const Filter = () => {
  const dispatch = useDispatch();
  const [filterState, setFilterState] = useState({
    normal: {
      type: "normal",
      checked: false,
    },
    fairy: {
      type: "fairy",
      checked: false,
    },
    fire: {
      type: "fire",
      checked: false,
    },
    fighting: {
      type: "fighting",
      checked: false,
    },
    water: {
      type: "water",
      checked: false,
    },
    poison: {
      type: "poison",
      checked: false,
    },
    grass: {
      type: "grass",
      checked: false,
    },
    ground: {
      type: "ground",
      checked: false,
    },
    electric: {
      type: "electric",
      checked: false,
    },
    flying: {
      type: "flying",
      checked: false,
    },
    ice: {
      type: "ice",
      checked: false,
    },
    psychic: {
      type: "psychic",
      checked: false,
    },
    ghost: {
      type: "ghost",
      checked: false,
    },
    bug: {
      type: "bug",
      checked: false,
    },
    dark: {
      type: "dark",
      checked: false,
    },
    rock: {
      type: "rock",
      checked: false,
    },
    dragon: {
      type: "dragon",
      checked: false,
    },
    steel: {
      type: "steel",
      checked: false,
    },
  });

  const inputChangedHandler = (type, key) => {
    const updatedControls = updateObject(filterState, {
      [key]: updateObject(filterState[key], {
        checked: !filterState[key].checked,
      }),
    });
    setFilterState(updatedControls);

    if (!filterState[key].checked) {
      dispatch(addFilter(type));
    } else {
      dispatch(removeFilter(type));
    }
  };

  const radioArray = [];
  for (let key in filterState) {
    radioArray.push({
      id: key,
      config: filterState[key],
    });
  }

  let radios = radioArray.map((radio) => {
    return (
      <label>
        <input
          key={radio.id}
          type="radio"
          checked={radio.config.checked}
          onClick={(event) => inputChangedHandler(radio.config.type, radio.id)}
        />
        {radio.config.type}
      </label>
    );
  });

  return <div>{radios}</div>;
};

export default Filter;
