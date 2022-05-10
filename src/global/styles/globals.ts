import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }
    @media(max-width:1080px){
        html{
            font-size: 93.75%;
        }
    }

    @media(max-width:720px){
        html{
            font-size: 87.5%;
        }
    }

    body {
        -webkit-font-smoothing: antialiased !important;
        background-color:  ${({ theme }) => theme.colors.background};
    }

    body html #root {
        height: 100%;
    }

    body, h1, h2, h3, h4, h5, h6, p, a, input, button, select, option {
        color:  ${({ theme }) => theme.colors.title} ;
        font-family: 'Bebas Neue', cursive;
    }

    button{
        :hover{
            cursor: pointer;
        }
        background-color:  transparent;
        border: none
    }
    
    a{
        color:inherit;
        text-decoration: none;
    }
`;