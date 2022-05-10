import { darken } from 'polished';
import styled, { css } from 'styled-components';

interface ContentProps{
    isTabBarOpen: boolean;
    
}
interface OptionsBarProps{
    isFilterOptionsOpen: boolean;
}
interface ButtonProps{
    disabled?: boolean
}

export const Container = styled.div`

`;

export const Content = styled.div<ContentProps>`
    width: 100vw;
    /* height: 100vh; */
    background-color:  ${({ theme }) => theme.colors.background_secondary} ;
    
    padding: 8rem 4rem 0 ${({isTabBarOpen}) => isTabBarOpen ? 16 : 6.5}rem;
`;

export const OptionsBar = styled.div`
    display: flex ;
    flex-direction: row;
    align-items:  flex-start;
    justify-content: space-between ;
`;

export const Title = styled.h3`
    font-size: 1.5rem;
`;

export const OptionsModal = styled.div<ContentProps>`
    /* height: 16rem; */
    ${({isTabBarOpen}) => isTabBarOpen ? css`
        width: calc(100% - 14rem);
    `: css`
        width: calc(100% - 4.5rem);
    `}
    background-color:  ${({ theme }) => theme.colors.shape} ;
    position:absolute;
    z-index: 9999;

    padding: 1.7rem 4rem 0 2rem;
    margin-top: -3.5rem;
    margin-left: -2rem;

    box-shadow: 0 1px 4px ${({ theme }) => theme.colors.background} ;
`;


export const FilterButton = styled.button`
    display: flex;
    flex-direction: row ;
    align-items: center;
    justify-content: center ;
`;


export const FilterButtonTitle = styled.h3`
    font-size: 1.5rem;
`;

export const ModalContent= styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between ;
    align-items: flex-start ;
    margin-bottom: 1rem ;
`;

export const BadgeButton = styled.button`

`;


export const ModalSubTitle = styled.h3`
    font-size: 1rem ;
    margin-bottom: 0.5rem;
`;


export const SelectedFilters = styled.div`
    width: 100%;
    padding: 1rem 0;
    display: flex;
    align-items: center;
    justify-content: flex-start;

    flex-wrap: wrap;

    gap: 1rem ;
`;

export const CategoriesContent = styled.div`

`;


export const Categories = styled.div`
    width:100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;

    flex-wrap: wrap;

    gap: 0.5rem ;
`;

export const OrderByContent = styled.div`
    width: 15rem ;
    margin-left: 8rem ;
    margin-right: 8rem ;
`;


export const OrderBy= styled.div`

`;


export const CheckBoxButton = styled.button`
    display: flex;
    flex-direction: row ;
    align-items: center ;
    justify-content: center;
    margin: 0.5rem 0 ;
`;

export const CheckBoxLabel = styled.h3`
    font-size: 1rem;
    margin-left: 0.25rem;
`;

export const MoviesContainer = styled.div<OptionsBarProps>`
    width: 100%;
    /* ${css`
        height: calc(100vh - 10rem);
    `} */
    background-color:  ${({ theme }) => theme.colors.background_secondary} ;
    
    opacity:  ${({ isFilterOptionsOpen }) => isFilterOptionsOpen ? 0.2 : 1};

    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(13.175rem, auto));
    column-gap: 1rem ;
    margin-top: 1rem;
`;

export const MovieCard = styled.div`
    margin: 0 1rem;
    margin-bottom: 1rem ;
    
`;

export const Poster = styled.img`
    width: 13.175rem;
    height: 18.75rem;

`;

export const MovieTitle = styled.h3`
    font-size: 1rem;
`;


export const MovieInfo = styled.div`
    margin-top: -5px;
    width: 13.175rem;
    height: 4.35rem;
    background-color:   ${({ theme }) => theme.colors.boxBackground};
    padding: 6px 12px;
    display:  flex;
    flex-direction: column ;
    align-items: center;
    justify-content: space-around;
`;

export const MovieInfoFooter = styled.div`
    width:100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
`;

export const StarsAvg = styled.div`
    display:flex ;
    flex-direction: row ;
    align-items: center;
    justify-content: center;
    margin-right: 0.25rem ;
`;

export const StarsTotals = styled.h3`
    font-size: 0.825rem;
`;


export const Stars = styled.h3`
    font-size: 1rem;
    color:   ${({ theme }) => theme.colors.star};
`;

export const LogoImdb = styled.img`
    height: 16px;
`;

export const ContentFooter = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between ;

    padding: 2rem 0 5rem 0;
`;

export const ButtonPage = styled.button<ButtonProps>`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    padding: 0.75rem 3rem;
    background-color:  ${({ disabled, theme }) => disabled ? darken('0.2',theme.colors.primary):theme.colors.primary} ;
    opacity:  ${({ disabled }) => disabled ? 0.5 : 1};

    border-radius: 999px;
    cursor:  ${({ disabled }) => disabled ? 'not-allowed' : 'pointer'};
`;

export const ButtonPageTitle = styled.h3`
    margin: 0 0.25rem;
    font-size: 1rem ;
`;

export const PageCounter = styled.h3`
    font-size: 1.5rem;
`;