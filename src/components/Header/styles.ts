import styled, { css } from 'styled-components';


export const Container = styled.div`
    ${css`
        width: calc(100% - 4.5rem);
    `};
    height: 6.25rem ;
    background-color:  ${({ theme }) => theme.colors.background} ;
    z-index: 999;
    position: absolute;
    padding: 2rem 5rem 2rem 2rem;
    margin-left: 4.5rem;

    display: flex;
    flex-direction:  row;
    align-items: center;
`;

export const Logo = styled.img`
    height: 2.5rem;
    width: auto ;
`;

export const SearchBar = styled.input`
    height: 2.5rem;
    width: 100%;
    margin-left: 6rem;

    border:2px solid  ${({ theme }) => theme.colors.primary} ;
    background-color:  transparent;
    border-radius: 30px;
    padding: 0 1rem;

    color:  ${({ theme }) => theme.colors.primary};
    font-size: 1.5rem;
`;

export const ButtonSearch = styled.button`
    position: relative;
    margin-left: -3rem ;
`;


