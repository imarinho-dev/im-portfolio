import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html, body {
        font-family: 'Lato', sans-serif;
        font-size: 1rem;
        
    }

`;

export default GlobalStyle;
