import Link from 'next/link';
import React from 'react';
import { IoStar } from 'react-icons/io5';
import { useTheme } from 'styled-components';

import {
    Container,
    Poster,
    BadgeRate,
    Rating,
    MovieInfo,
    Title
} from './styles';

interface movieCard{
    id: number
    poster_path: string,
    title: string,
    vote_average: number
}

const MovieCardSm = ({id, poster_path, title, vote_average}: movieCard) => {
    const theme = useTheme();
    return(
        <Link href={`/movie/${id}`}>
            <Container>
                <Poster img={`https://image.tmdb.org/t/p/w500${poster_path}`}>
                    <BadgeRate>
                        <IoStar
                            color={theme.colors.primary}
                            size="0.85rem"
                        />
                        <Rating>{vote_average}/10</Rating>
                    </BadgeRate>
                </Poster>
                <MovieInfo>
                    <Title>{title}</Title>
                </MovieInfo>
            </Container>
        </Link>
    );
}
export default MovieCardSm;