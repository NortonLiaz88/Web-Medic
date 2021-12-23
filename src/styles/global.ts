
import { createGlobalStyle } from "styled-components";
import ArchivoRegular from "../assets/fonts/Archivo/static/Archivo/Archivo-Regular.ttf";
import ArchivoLight from "../assets/fonts/Archivo/static/Archivo/Archivo-Light.ttf";
import ArchivoMedium from "../assets/fonts/Archivo/static/Archivo/Archivo-Medium.ttf";
import ArchivoBold from "../assets/fonts/Archivo/static/Archivo/Archivo-Bold.ttf";

import RobotoRegular from '../assets/fonts/Roboto/Roboto-Regular.ttf';
import RobotoMedium from '../assets/fonts/Roboto/Roboto-Medium.ttf';

import theme from "./theme";

export default createGlobalStyle`
*{
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    body {
        height: 100vh;
        background: #F0F6FE;
        -webkit-font-smoothing: antialised;
    }

    body, input, button {
        font: 16px Roboto, sans-serif;
    }

    /* #root {
        max-width: 960px;
        margin: 0 auto;
        padding: 40px 20px;
    } */

    button{
        cursor: pointer;
    }

    @font-face {
        font-family: 'Archivo'; 
        font-weight: 400;
        font-style: normal;
        src: url(${ArchivoRegular})  format('truetype');
    }

    @font-face {
        font-family: 'Archivo-Medium'; 
        font-weight: 500;
        font-style: normal;
        src: url(${ArchivoMedium})  format('truetype');
    }

    @font-face {
        font-family: 'Archivo-Light'; 
        font-weight: 300;
        font-style: normal;
        src: url(${ArchivoLight})  format('truetype');
    }

    @font-face {
        font-family: 'Archivo-Bold'; 
        font-weight: 700;
        font-style: bold;
        src: url(${ArchivoBold})  format('truetype');
    }


    @font-face {
        font-family: 'Roboto-Regular'; 
        font-weight: 700;
        font-style: bold;
        src: url(${RobotoRegular})  format('truetype');
    }

    @font-face {
        font-family: 'Roboto-Medium'; 
        font-weight: 700;
        font-style: bold;
        src: url(${RobotoMedium})  format('truetype');
    }
`;
