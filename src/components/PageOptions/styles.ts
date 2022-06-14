import styled, { css } from 'styled-components';

interface ButtonProps{
    active?: boolean
}


export const Container = styled.div`
    width: 100%;
    padding: 4rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const Button = styled.button<ButtonProps>`
    width: 170px;
    padding: 0.5rem;
    background-color:  ${({ active, theme }) => active ? theme.colors.primary : 'transparent'};
    ${ ({active}) => !active && css`
        border: 2px solid  ${({ theme }) => theme.colors.primary};
        &:hover{
            cursor: not-allowed;
        }
    `}
    border-radius: 9999px;
    display: flex;
    align-items: center;
    justify-content: center ;
    gap: 10px;

`;

export const PageIndicator = styled.h4`
    font-size:1.5rem ;
`;

export const Title = styled.h4<ButtonProps>`
    font-size: 1.5rem ;
    color:  ${({ theme,active }) => active ? theme.colors.title : theme.colors.primary}
`;
