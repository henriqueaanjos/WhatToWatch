import styled, { css } from 'styled-components';

interface InputProps{
    isFocused: boolean
}

export const Container = styled.form`
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
    cursor: pointer;
    transition: 0.2s height ;

    &:hover{
        height: 2.6rem;
    }
`;

export const SearchBar = styled.input<InputProps>`
    height: 2.5rem;
    width: 100%;
    margin-left: 6rem;

    border:2px solid  ${({ isFocused, theme }) => isFocused ? theme.colors.primary : theme.colors.boxBackground } ;
    background-color:  transparent;
    border-radius: 30px;
    padding: 0 1rem;

    color:  ${({ theme }) => theme.colors.primary};
    font-size: 1.5rem;

    &::placeholder{
        color:  ${({ theme }) => theme.colors.boxBackground}
    }
`;

export const ButtonSearch = styled.button`
    position: relative;
    margin-left: -3rem ;
`;


