import {createGlobalStyle} from 'styled-components';
import {primaryFont} from "./typography";
import {darkOrange} from "./colors";

export const GlobalStyle = createGlobalStyle`
    html {
        font-size: 16px;
        box-sizing: border-box;
        overflow-x: hidden;
        scroll-behavior: smooth;
    }
    
    *, *:before, *:after {
        box-sizing: inherit;
    }
    
    h1, h2, h3, h4, h5, h6 {
      margin: 0;
    }
    
    body {
        margin: 0;
        font-family: ${primaryFont};
    }
    
    *{
      font-weight: lighter;
    }
    
    a {
        text-decoration: none;
    }
    
    .nav-link-active {
        color: ${darkOrange};
    }
    
    .hide-overflow {
      overflow-y: hidden;
    }
    
    @keyframes fade-in {
        from{
            opacity: 0;
        }
        to{
            opacity: 1;
        }
    }
    
    @keyframes fade-out {
      from {
        opacity: 1;
      }
      
      to {
        opacity: 0;
      }
    }
`;