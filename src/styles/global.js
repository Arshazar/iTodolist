import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
    html {
        margin: 0;
        padding: 0;
        
        *, *::before, *::after {
            box-sizing: content-box;
        }
    }

    body {
        margin: 0 20%;
        width: 60%;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji";
        height: 100% !important;
        text-rendering: optimizeLegibility;
        
        @media(max-width: ${({ theme }) => theme.mobile}) {
            margin: 0;
            width: 100%;
        }
        @media(max-width: ${({ theme }) => theme.tablet}) {
            margin: 0 10%;
            width: 80%;
        } 
        
        
    }

`
