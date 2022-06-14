import React from 'react';
import { IoArrowBack, IoArrowForward } from 'react-icons/io5';
import { useTheme } from 'styled-components';

import {
    Container,
    Button,
    PageIndicator,
    Title
} from './styles';

interface PageProps{
    setNewPage: (type: 'prev' | 'next') => void,
    currentPage: number,
    totalPages: number
}

export const PageOptions = ({setNewPage, currentPage, totalPages}: PageProps) => {
    const theme = useTheme();
    return(
        <Container>
            <Button onClick={() => setNewPage('prev')} active={currentPage > 1} disabled={currentPage === 1}>
                <IoArrowBack
                    size="1.5rem"
                    color={currentPage > 1 ? theme.colors.title : theme.colors.primary}
                />
                <Title active={currentPage > 1}>Prev</Title>
            </Button>
            <PageIndicator>{currentPage}</PageIndicator>
            <Button onClick={() => setNewPage('next')} active={currentPage < totalPages} disabled={currentPage === totalPages}>
                <Title active={currentPage < totalPages}>Next</Title>
                <IoArrowForward
                    size="1.5rem"
                    color={currentPage < totalPages ? theme.colors.title : theme.colors.primary}
                />
            </Button>
        </Container>
    );
}
