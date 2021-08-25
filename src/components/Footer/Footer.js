import React from "react";
import styled from "styled-components";
import Fluid from "../../assets/svgs/fluid-logo.svg";
import Pokemon from "../../assets/svgs/pokemon-logo.svg";

const FooterStyled = styled.footer`
  .footer-grid {
    display: grid;
    grid-template-columns: 45% 10% 45%;
    align-items: center;
    justify-content: center;
    max-width: 500px;
    margin: var(--spacing) auto;
  }

  svg {
    justify-self: center;
    max-width: 150px;
  }

  hr {
    background-color: var(--black);
    height: 35px;
    width: 1.5px;
    border: none;
  }
`;

const Footer = () => {
  return (
    <FooterStyled>
      <div className="footer-grid">
        {/* <Pokemon /> */}
        <hr />
        <Fluid />
      </div>
    </FooterStyled>
  );
};

export default Footer;
