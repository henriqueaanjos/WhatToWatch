import styled from 'styled-components';

interface PosterProps{
    img: string
}


export const Container = styled.div`
    width: 170px;
    cursor: pointer;
`;

export const Poster = styled.div<PosterProps>`
    width: 100%;
    height: 260px;
    background-image:  url( ${({ img }) => img});
    background-size: cover;
    border-radius: 10px 10px 0 0;
    padding: 0.5rem;
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
    padding: 0.5rem;

    background-color:  ${({ theme }) => theme.colors.background} ;

    border-radius: 0 0 10px 10px ;
`;

export const Title = styled.h2`
    font-size: 1rem;
`;


