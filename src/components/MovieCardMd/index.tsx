import Link from 'next/link';
import React, { useEffect } from 'react';
import { IoStar } from 'react-icons/io5';
import { useTheme } from 'styled-components';

import {
    Container,
    Poster,
    BadgeRate,
    Rating,
    MovieInfo,
    TitleContainer,
    Title
} from './styles';

interface movieCard{
    id: number,
    backdrop_path: string,
    title: string,
    vote_average: number,
    maxWidth?: number
}

const MovieCardMd = ({id, maxWidth=1000, backdrop_path, title, vote_average}: movieCard) => {
    const theme = useTheme();
    useEffect(() => {
        console.log("MaxWidth:"+maxWidth);
    }, [])
    return(
        <Link href={`/movie/${id}`}>
            <Container maxWidth={maxWidth}>
                <Poster img={`https://image.tmdb.org/t/p/original${backdrop_path}`}>
                    <BadgeRate>
                        <IoStar
                            color={theme.colors.primary}
                            size="0.85rem"
                        />
                        <Rating>{vote_average}/10</Rating>
                    </BadgeRate>
                    <TitleContainer>
                        <Title>{title}</Title>
                    </TitleContainer>
                </Poster>
            </Container>
        </Link>
    );
}
export default MovieCardMd;