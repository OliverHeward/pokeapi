import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    :root {
        --blue: #0045ff;
        --red: #ff2e2e;
        --black: #000;
        --grey: #e8e8e8;
        --light-green: #deede4;
        --dark-green: #60866f;


        // TODO: Google Fonts - Poppins
        --base-font: 16px;

        // Buttons
        --radius: 40%;

        // Spacing
        --spacing: 16px;
    }

    @media screen and (max-width: 475px) {
        --base-font: 12px;
    }

    button {
        border-radius: var(--radius);
    }


    html {
        font-size: var(--base-font);
        text-rendering: optimizelegibility;
        -webkit-font-smoothing: antialiased;
        scroll-behavior: smooth;
        line-height: 1;

    }

    html, body {
        overflow-x: hidden;
        margin: 0;
        padding: 0;
        * {
            box-sizing: border-box;
        }
    }

    img {
        max-width: 100%;
    }

    ul {
        margin: 0;
        padding: 0;
    }
`

export default GlobalStyles;