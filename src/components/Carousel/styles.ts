import styled from 'styled-components';
import { Swiper } from 'swiper/react';

interface ItemCarousel{
    img: string
    active?: boolean
}

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items:center;
    justify-content: center;

    overflow-x:  scroll;
    overflow-y: hidden;
    scroll-behavior: smooth;
`;

export const CustomSwiper = styled(Swiper)`
    padding: 0 2rem;
    background-color:  ${({ theme }) => theme.colors.background_slider} ;
    .swiper-slide{
        display: flex;
        justify-content: center;
    }
    .swiper-pagination{
        display:flex ;
        align-items: center;
        justify-content: flex-end ;
        padding: 0 10rem;
    }
    .swiper-pagination-bullet{
        background-color:  ${({ theme }) => theme.colors.title} ;
    }
    .swiper-pagination-bullet-active{
        background-color:  ${({ theme }) => theme.colors.primary} ;
    }
    .swiper-button-prev{
        font-size: 1rem;
        color:  ${({ theme }) => theme.colors.primary}
    }
    .swiper-button-next{
        color:  ${({ theme }) => theme.colors.primary}
    }
`;


export const Item = styled.div<ItemCarousel>`
    width: 99%;
    height: 18.75rem;

    background-image:  url( ${({ img }) => img});
    background-size: cover;
    background-position: 0 30%;

    border-radius: 20px ;
    box-shadow: inset 0 -60px 100px black;

    display: flex;
    align-items: flex-end ;

    opacity:  ${({ active }) => active ? 1: .5};

    padding: 0 2rem;

    cursor: pointer;
`;

export const Title = styled.h3`
    font-size: 3rem;
`;


