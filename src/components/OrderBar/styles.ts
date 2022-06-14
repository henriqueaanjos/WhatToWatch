import styled, { css } from 'styled-components';

interface FilterBarProps{
    visibility: boolean
}


export const Container = styled.div<FilterBarProps>`
    width: 12.5rem;
    height: 10rem;
    position: absolute;
    right: 0.5rem;
    margin-top: -4rem ;

    background-color:  ${({ theme }) => theme.colors.background_slider} ;

    border-radius: 10px ;
    padding: 0.5rem 0 0 1rem;
    z-index: 9999;

    ${({ visibility }) => !visibility && css`
        display: none;
    `}
`;

export const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 0.5rem;
    cursor: pointer;
`;

export const Title = styled.h1`
    font-size: 1.5rem;
`;

export const SelectedOption = styled.h2`
    font-size: 1.5rem;
    color:  ${({ theme }) => theme.colors.primary};
`;

export const Content = styled.div`
    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 0.5rem;
`;

export const Option  = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 0.5rem;

`;

export const OptionTitle = styled.h1`
    font-size: 1rem;
`;

export const Overlay = styled.div<FilterBarProps>`
    /* background-color: rgba(0,0,0,0.2); */
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 999;

    ${({ visibility }) => !visibility && css`
        display: none;
    `}
`;

