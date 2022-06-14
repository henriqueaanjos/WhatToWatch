import { IoSearch } from 'react-icons/io5';
import styled, { css } from 'styled-components';

interface SearchBarProps{
    isOpen: boolean,
}

export const Container = styled.div<SearchBarProps>`
     ${({ isOpen }) => isOpen && css`
        width: 90%;
     `}
    margin: 0 1rem;
`;

export const Content = styled.form`
    width:100%;
    flex-grow:1 ;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border: 2px solid  ${({ theme }) => theme.colors.primary};
    background-color: transparent ;
    padding: 0.5rem 1rem;

    border-radius: 9999px;

`;

export const SearchInput = styled.input`
    width:100%;
    height: 100%;
    background-color: transparent ;
    border: none;
    font-size: 1.125rem;
`;

export const ButtonSearch = styled.button`
    
`;


export const ButtonOpen = styled.button`
    display: flex ;
    flex-direction: row;
    align-items: center ;
    justify-content: center;
    padding: 0.75rem 0.75rem;

    border: 1px solid  ${({ theme }) => theme.colors.boxBackground};
    border-radius: 50% ;

    &:hover{
        border: 1px solid  ${({ theme }) => theme.colors.primary};
    }
`;


