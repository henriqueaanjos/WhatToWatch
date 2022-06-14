import styled from 'styled-components';

interface HoverProps{
    isHover: boolean,
}

export const Container = styled.div`
    height: 100vh;
    background-color:  ${({ theme }) => theme.colors.background} ;

    padding: 1rem 0.825rem;

    display: flex;
    flex-direction: column;

    position:  fixed;
    z-index: 9;
    margin-top: 3.85rem ;
`;

export const ButtonIcon = styled.button`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    gap: 0.25rem ;
`;

export const Icons = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
    padding: 0 0.5rem;
`;

export const Label = styled.h1<HoverProps>`
    font-size: 0.75rem ;
    color: ${({  isHover, theme }) => isHover ? theme.colors.primary : theme.colors.title} ;
`;
