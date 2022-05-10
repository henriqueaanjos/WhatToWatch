import styled from 'styled-components';

interface ContentProps{
    isTabBarOpen: boolean;
}

export const Container = styled.div`

`;

export const Content = styled.div<ContentProps>`
    width: 100vw;
    /* height: 100vh; */
    background-color:  ${({ theme }) => theme.colors.background_secondary} ;
    
    padding: 8rem 4rem 4rem ${({isTabBarOpen}) => isTabBarOpen ? 16 : 6.5}rem;
    display: flex;
    flex-direction: row ;
`;

export const Poster = styled.img`
    width: 25rem;
    height: auto ;
`;

export const MovieInfo = styled.div`
    margin-left: 1rem;
`;

export const MovieTitle = styled.h1`
    font-size: 3rem;
    color:  ${({ theme }) => theme.colors.primary} ;
`;

export const MovieYear = styled.div`
    font-size: 2rem;
    color:  ${({ theme }) => theme.colors.boxBackground};
    margin-top: -0.75rem;
`;

export const MovieOverview = styled.p`
    margin-top: 2rem;
    text-indent: 2rem;
    font-size: 1rem;
`;

export const MovieGenres = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;
    justify-content: flex-start ;

    margin-top: 1rem ;
    
`;

export const MovieStreamings = styled.div`

`;

export const MovieAvaliation = styled.div`
    display: flex;
    flex-direction: row;
    align-items:center ;
    justify-content:flex-end ;
    margin: 2rem 2rem  0 0;
`;

export const Rating = styled.div`
    display: flex;
    flex-direction: row;
    align-items:center;
    margin-right: 0.5rem ;
`;

export const MovieRate = styled.h3`
    font-size: 3rem ;
    color:  ${({ theme }) => theme.colors.star} ;
`;

export const MovieMaxRate = styled.h3`
    font-size:1.5rem ;
`;

export const Footer = styled.div`
    width: 100% ;
    display:  flex;
    flex-direction: row;
    align-items: center;
    margin-top: 3rem;
`;

export const SaveButton = styled.button`
    display: flex;
    align-items: center ;
    justify-content: center;
    padding: 0.75rem 4rem;
    border: 2px solid  ${({ theme }) => theme.colors.title};
    border-radius: 999px;
    margin-left: 1rem ;
`;

export const ImdbButton = styled.a`
    width:100%;
    display: flex;
    align-items: center ;
    justify-content: center;
    padding: 0.75rem 3rem;

    background-color:  ${({ theme }) => theme.colors.primary} ;
    border-radius: 999px ;
`;

export const ImdbButtonTitle = styled.h3`
    font-size: 2rem;
    margin-right: 1rem;
`;



