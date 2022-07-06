import { createGlobalStyle } from 'styled-components';
import SouthAmsterdam from '../fonts/SouthAmsterdam/South-Amsterdam.ttf';
import Taviraj from '../fonts/Taviraj/Taviraj-Thin.ttf';

const FontStyles = createGlobalStyle`
    @font-face {
        font-family: 'South Amsterdam';
        src: url(${SouthAmsterdam}) format('truetype');
        font-weight: normal;
    }

    @font-face {
        font-family: 'Taviraj';
        src: url(${Taviraj}) format('truetype');
    }
`;

export default FontStyles;