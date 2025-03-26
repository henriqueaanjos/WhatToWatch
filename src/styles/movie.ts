import styled, { css } from 'styled-components';

interface ContentProps{
    isTabBarOpen: boolean;
}

interface SaveButton{
    isSaved: boolean
}

interface ImageProps{
    img: string
}

export const Container = styled.div`
    background-color:  ${({ theme }) => theme.colors.background_slider} ;
`;

export const Content = styled.div<ContentProps>`
    width: 100vw;
    /* background-color:  ${({ theme }) => theme.colors.background_secondary} ; */
    
    padding: 0rem 2rem;
    ${({ isTabBarOpen }) => isTabBarOpen && css`
        padding-top: 3.875rem; 
     `}; 
`;

export const BackButton = styled.button`

`;

export const MovieBanner = styled.div<ImageProps>`
    width: 100%;
    height: 680px;
    background-image:  url( ${({ img }) => img});
    background-size: cover;

    border-radius: 20px ;

    box-shadow: inset 500px 500px 200px rgba(47, 47, 51, 0.8), 0 4px 10px  ${({ theme }) => theme.colors.background_slider};

    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 3.5rem 2rem;
    margin: 2.5rem 0;
`;


export const Poster = styled.img`
    width: 25rem;
    height: 570px ;
    border-radius: 10px;
`;

export const MovieInfo = styled.div<ImageProps>`
    margin-left: 4rem;
    background-image: url(${({img}) => img});
`;

export const MovieTitle = styled.h1`
    font-size: 3rem;
    color:  ${({ theme }) => theme.colors.primary} ;
`;

export const MovieYear = styled.div`
    font-size: 2rem;
    color:  ${({ theme }) => theme.colors.title};
    margin: -0.75rem 0 ;
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

export const MovieInfoFooter = styled.div`
    display: flex ;
    align-items: center;
    justify-content: space-between;
    margin-top: 2rem;
`;


export const MovieStreamings = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start ;
`;

export const StreamingsBar = styled.div`
    display:flex ;
    flex-direction: row ;
    align-items:center ;
    justify-content: center;
`;

export const MovieStreamingsTitle = styled.h3`
    font-size: 1rem;
    margin-bottom: 0.5rem;
`;


export const StreamingLogo = styled.img`
    width: 2.5rem;
    height: auto;
    border-radius: 10px;
    margin-right: 0.25rem;
`;

export const MovieRating = styled.div`
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

export const MovieFooter = styled.div`
    width: 100% ;
    display:  flex;
    flex-direction: row;
    align-items: center;
    margin-top: 3rem;
`;

export const SaveButton = styled.button<SaveButton>`
    display: flex;
    align-items: center ;
    justify-content: center;
    padding: 0.75rem 4rem;
    border: 2px solid  ${({ isSaved, theme }) => isSaved ? theme.colors.primary : theme.colors.title};
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



