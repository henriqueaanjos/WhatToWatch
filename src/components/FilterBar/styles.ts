import styled, { css } from 'styled-components';

interface StreamingProps{
    active: boolean
}
interface FilterBarProps{
    visibility: boolean
}


export const Container = styled.div<FilterBarProps>`
    background-color:  ${({ theme }) => theme.colors.background_slider} ;
    width: 100%;
    padding: 1rem 2rem;
    margin-top: -4.5rem;
    position: absolute;
    z-index: 9999;
    ${({ visibility }) => !visibility && css`
        display: none;
    `}
`;

export const Options = styled.div`
    display: flex;
    align-items: center;
`;

export const FilterOptions = styled.div`
    display: flex;
    align-items: center;

    padding: 0 1rem;
    gap: 0.5rem;

    cursor: pointer;
`;

export const OptionTitleActive = styled.h1`
    font-size: 1.5rem;
    color:  ${({ theme }) => theme.colors.primary};
`;


export const OptionTitle = styled.h1`
    font-size: 1.5rem;
`;

export const SortOptions = styled.div`
    display: flex;
    align-items: center;
    padding-left: 1rem;
    border-left: 2px solid  ${({ theme }) => theme.colors.primary} ;

    gap: 0.5rem;

    cursor: pointer;
`;

export const SortBy = styled.h2`
    font-size: 1.5rem;
    color:  ${({ theme }) => theme.colors.title};
`;

export const FilterTitleWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content:flex-start ;
`;


export const FilterTitle = styled.h2`
    display: flex;
    align-items: center;
    gap: 0.5rem;
`;

export const Genres = styled.div`
    width: 100%;
    display:flex;
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap ;
    gap: 0.5rem;
    margin: 1rem 0;
`;

export const Streaming = styled.div`
    width: 100%;
    height: 8rem;
    overflow-y: scroll;
    display:flex;
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap ;
    gap: 0.5rem;
    margin: 1rem 0 0 0;

    border-radius:5px;

`;

export const Header = styled.div`
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
`;

export const PageType = styled.div`
    display: flex;
    align-items: flex-start;
    gap: 1rem;
`;

export const Title = styled.h3`
    font-size: 2rem;
`;

export const Content = styled.div`
    padding: 1rem 2rem;
`;

export const StreamingCover = styled.img<StreamingProps>`
    width: 2rem;
    height: 2rem;
    border-radius: 5px;
    cursor: pointer;
    ${({ active }) => active && css`
        border: 2px solid  ${({ theme }) => theme.colors.primary};
    `}
`;

export const BadgeButton = styled.button`

`;

export const Footer = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 0.5rem 2rem 0 1rem;
    gap: 1rem;
`;

export const DoneButton = styled.button`
    width: 100px;
    padding: 0.25rem;
    background-color:  ${({ theme }) => theme.colors.primary};
    border-radius: 9999px;
    display: flex;
    align-items: center;
    justify-content: center ;
    gap: 10px;
`;

export const ResetButton = styled.button`
    width: 100px;
    padding: 0.25rem;
    background-color:  transparent;
    border-radius: 9999px;
    display: flex;
    align-items: center;
    justify-content: center ;
    gap: 10px;
    border:2px solid  ${({ theme }) => theme.colors.primary} ;
`;

export const ResetButtonTitle = styled.h3`
    font-size: 1rem;
    color:  ${({ theme }) => theme.colors.primary};
`;

export const DoneButtonTitle = styled.h3`
    font-size: 1rem;
`;

export const Overlay = styled.div<FilterBarProps>`
    /* background-color: rgba(0,0,0,0.5); */
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