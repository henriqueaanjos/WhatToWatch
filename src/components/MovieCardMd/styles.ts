import styled from 'styled-components';

interface PosterProps{
    img: string,
}

interface CardProps{
    maxWidth: number
}


export const Container = styled.div<CardProps>`
    width:  ${({ maxWidth }) => maxWidth - 16}px;
    cursor: pointer;
`;

export const Poster = styled.div<PosterProps>`
    width: 100%;
    height: 200px;
    background-image:  url( ${({ img }) => img});
    background-size: cover;
    background-position: 50% 15%;
    border-radius: 10px ;
    padding: 0.5rem;

    box-shadow: inset 0 -50px 100px #222222;

    display:  flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content:space-between ;
    
`;

export const BadgeRate = styled.div`
    width: fit-content;
    display:flex ;
    align-items: center;
    

    gap: 0.25rem;
    padding: 0.25rem;

    background-color:  ${({ theme }) => theme.colors.background_secondary} ;
    border-radius: 7px;
`;

export const Rating = styled.h2`
    font-size: 0.85rem;
    margin-top: 2.15px;
`;

export const MovieInfo = styled.div`
    width: 100%;
    height: 70px;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color:  ${({ theme }) => theme.colors.background} ;

    border-radius: 0 0 10px 10px ;
`;

export const TitleContainer = styled.div`
    height: 1.5rem;
    display: inline-block;
    overflow: hidden;
    direction: ltr;
    text-overflow: ellipsis;
`;

export const Title = styled.h2`
    font-size: 1.5rem;
`;


