import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";
import Rems from "../../styles/mixins/Rems";
import Stats from "./Stats";

const PokeCardStyled = styled.div`
  a {
    color: #000;
    text-decoration: none;
  }
  max-width: 350px;
  margin: 150px auto 0;
  width: 100%;
  .pokemon-header {
    background: var(--light-green);
    height: 150px;
    position: relative;
    border-radius: var(--spacing) var(--spacing) 0 0;

    display: flex;
    align-items: center;
    justify-content: center;
    img {
      position: absolute;
      bottom: 0;
      max-height: 270px;
    }
  }

  .pokemon-body {
    padding: var(--spacing);
    background: #fff;
    border-radius: 0 0 var(--spacing) var(--spacing);

    h2 {
      margin: 0;
    }
  }

  .capitilize {
    text-transform: capitalize;
  }

  span {
    ${Rems({ type: "font-size", size: 12 })};
  }

  .stats {
    ul {
    }

    li {
      display: grid;
      grid-template-columns: 32% 60% auto;
      align-items: center;
      grid-gap: 8px;
    }
  }
`;

const PokeCard = (props) => {
  return (
    <PokeCardStyled>
      <Link to={`pokemon/${props.name}`}>
        {/* <div className="pokemon-header">
          <img src={props.image} />
  </div> */}
        <div className="pokemon-body">
          <h2>{props.name}</h2>
          <div className="info">
            <h3>
              Type{" "}
              {props.types.map((type) => (
                <span className="capitilize">{type} | </span>
              ))}
            </h3>
            <h3>
              Abilities{" "}
              {props.abilities.map((ability) => (
                <span className="capitilize">{ability} | </span>
              ))}
            </h3>
          </div>

          <div className="stats">
            <ul>
              {props.stats.map((stat) => (
                <Stats {...stat} />
              ))}
            </ul>
          </div>
        </div>
      </Link>
    </PokeCardStyled>
  );
};

export default PokeCard;
