import React, { useState } from 'react';
import { IoClose } from 'react-icons/io5';
import { useTheme } from 'styled-components';

import {
    Container,
    Title
} from './styles';

interface BadgeProps{
    title: string,
    active?: boolean,
    sm?: boolean 
}

const Badge = ({title, active = false, sm = false}: BadgeProps) => {
    const theme = useTheme();
    
    return(
        <Container active={active} >
            <Title active={active} sm={sm}>{title}</Title>
            {active && <IoClose
                color={theme.colors.primary}
                size={sm ? "1rem" :"1.5rem"}
            />}
        </Container>
    );
}
export default Badge;