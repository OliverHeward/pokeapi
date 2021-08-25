import React from "react";
import styled from "styled-components";

const HeaderStyled = styled.header`
  display: flex;
  flex-direction: column;
  padding: calc(var(--spacing) * 2) var(--spacing);
  gap: var(--spacing);
  max-width: 1000px;
  margin: 0 auto;
  p.lighter {
    color: var(--grey);
  }

  h1 {
    margin: 0;
  }

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

const Header = () => {
  return (
    <HeaderStyled>
      <div className="title-intro">
        <h1>
          Welcome <br /> to the <br /> <span className="bold">Pokedex.</span>
        </h1>
      </div>
      <div className="copy-intro">
        <p className="lighter">
          The comprehensive database of Pokemon from the original Blue and Red
          version.
        </p>
        <p>Find your favourite and check out their stats.</p>
      </div>
    </HeaderStyled>
  );
};

export default Header;
