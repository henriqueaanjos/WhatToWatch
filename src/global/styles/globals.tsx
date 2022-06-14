import { createGlobalStyle } from 'styled-components';

export const GlobalStyleConfig =  createGlobalStyle`
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
        background-color:  #333337;
    }

    body html #root {
        height: 100%;
    }

    body, h1, h2, h3, h4, h5, h6, p, a, input, button, select, option {
        color:  #FFFFFF;
        font-family: 'Bebas Neue', cursive;
        font-weight: 400;
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
        :hover{
            cursor: pointer
        }
    }

`;

export const GlobalStyle = ({ children }: { children: any }) => {
    return (
      <>
        <GlobalStyleConfig />
        {children}
      </>
    );
  };