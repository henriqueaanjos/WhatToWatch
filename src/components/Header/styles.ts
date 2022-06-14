import styled, { css } from 'styled-components';

interface InputProps{
    isFocused: boolean
}
interface ContainerProps{
    isTabBarActive: boolean,
}

export const Container = styled.div<ContainerProps>`
    width: 100vw;
    height: 3.875rem;
    background-image:  linear-gradient(to right, ${({ theme }) => theme.colors.primary},  ${({ theme }) => theme.colors.secondary});
    ${({ isTabBarActive }) => isTabBarActive && css`
        z-index:9;
        position: fixed;
    `}
`;

export const Content = styled.div`
    width: 100%;
    height: 3.75rem ;
    background-color:  ${({ theme }) => theme.colors.background} ;
    padding: 0.5rem 1rem ;

    display: flex;
    flex-direction:  row;
    align-items: center;
    justify-content: space-between ;
`;

export const MenuButton = styled.button`

`;


export const Logo = styled.img`
    height: 2.5rem;
    width: auto ;
    cursor: pointer;
    margin:0 1rem ;
    transition: 0.2s height ;

    &:hover{
        height: 2.6rem;
    }
`;

// export const SearchBar = styled.input<InputProps>`
//     height: 2.5rem;
//     width: 100%;
//     margin-left: 6rem;

//     border:2px solid  ${({ isFocused, theme }) => isFocused ? theme.colors.primary : theme.colors.boxBackground } ;
//     background-color:  transparent;
//     border-radius: 30px;
//     padding: 0 1rem;

//     color:  ${({ theme }) => theme.colors.primary};
//     font-size: 1.5rem;

//     &::placeholder{
//         color:  ${({ theme }) => theme.colors.boxBackground}
//     }
// `;

// export const ButtonSearch = styled.button`
//     position: relative;
//     margin-left: -3rem ;
// `;


