import styled from 'styled-components';

interface BadgeProps{
    active: boolean,
    sm?: boolean
}

export const Container = styled.div<BadgeProps>`
    width: fit-content;

    padding: 0.25rem 1rem;

    background-color: transparent;
    border: 2px solid ${({ active, theme }) => active ? theme.colors.primary : theme.colors.background};

    border-radius: 30px;

    display: flex;
    align-items: center;
    justify-content: center ;
`;

export const Title = styled.h3<BadgeProps>`
    color:  ${({ active, theme }) => active ? theme.colors.primary : theme.colors.background};
    font-size:  ${({ sm }) => sm ? 0.75 : 1}rem;

    margin-right: 0.25rem;
`;
