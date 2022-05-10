import styled from 'styled-components';

interface ContainerProps{
    isOpen: boolean
}

interface ButtonSecondaryProps{
    isHover: boolean
}

export const Container = styled.div<ContainerProps>`
    height: 202vh;
    width:  ${({ isOpen }) => isOpen ? 14 : 4.5}rem;
    background-color:  ${({ theme }) => theme.colors.background} ;

    /* border-right: 1px solid  ${({ theme }) => theme.colors.shape} ; */

    padding: 2rem 1rem;

    display: flex;
    flex-direction: column;

    position:  absolute;
`;

export const ButtonIcon = styled.button`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
`;

export const IconsSecondary = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
    margin-top: 4.5rem;
    padding: 0 0.5rem;
`;

export const Label = styled.h4<ButtonSecondaryProps>`
    margin-left: 3.5rem;
    font-size: 1.5rem ;
    color: ${({ isHover, theme }) => isHover ? theme.colors.primary : theme.colors.title} ;
`;
