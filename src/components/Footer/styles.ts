import styled from 'styled-components';


export const Container = styled.div`
    width: 100%;
    background-color:  ${({ theme }) => theme.colors.background} ;
    height: 168px;

    padding: 2.5rem 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const Wrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: space-between ;
`;

export const Content = styled.div`

`;


export const Info = styled.div`
    display: flex ;
    align-items: center;
    gap: 2rem;
`;


export const Logo = styled.img`

`;

export const Title = styled.h1`
    font-size:1.5rem ;
`;

export const Subtitle = styled.div`
    font-size: 0.825rem;
    color:  ${({ theme }) => theme.colors.boxBackground};
    margin-top: 0.5rem;
    margin-left: 1.25rem;
`;

export const Copyright = styled.h1`
    margin-top: 0.75rem ;
    font-size: 0.75rem;

    color:  ${({ theme }) => theme.colors.boxBackground}
`;

