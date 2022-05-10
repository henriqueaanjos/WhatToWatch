import styled from 'styled-components';

interface CheckBoxProps{
    active?:boolean
}

export const Container = styled.div<CheckBoxProps>`
    width: 1.25rem;
    height: 1.25rem;
    border: 2px solid  ${({ active, theme }) => active ? theme.colors.primary : theme.colors.background} ;
    border-radius: 3px ;

    display: flex;
    align-items: center;
    justify-content: center ;
`;