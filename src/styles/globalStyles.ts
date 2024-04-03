import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
@font-face {
    font-family: poppins;
    src: url('/Poppins-Regular.ttf');
}

html {
    font-size: 14px;
}

body {
    background: #252525;
    margin: unset;
    padding: unset;
    padding: 1rem 0;
    font-family: poppins;
}
`;

export default GlobalStyles;