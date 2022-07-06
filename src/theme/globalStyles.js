import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.google.com/specimen/Taviraj?query=tavir');

    * {
        margin: 0;
        padding: 0;
        list-style: none;
        text-decoration: none;
        box-sizing: border-box;
    }

    body {
        background-color: #FEF9EF;
        font-family: 'Taviraj', serif;
    }
`;

export default GlobalStyle;
