import { createGlobalStyle } from "styled-components";
import Rems from './mixins/Rems';

const Typography = createGlobalStyle`
    * {
        font-family: "Poppins";
    }

    h1 {
        ${Rems({type: 'font-size', size: 90})};
        font-weight: 500;
    }

    h2 {
        ${Rems({type: 'font-size', size: 45})};
        font-weight: 700;
    }

    h3 {
        ${Rems({type: 'font-size', size: 24})};
        font-weight: 300;
    }

    h4 {
        ${Rems({type: 'font-size', size: 20})};
        font-weight: 300;
    }

    .bold {
        font-weight: 700;
    }

    .light {
        font-weight: 300;
    }

    .medium {
        font-weight: 500;
    }

`

export default Typography
