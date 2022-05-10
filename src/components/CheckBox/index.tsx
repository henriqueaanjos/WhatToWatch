import React from 'react';
import { IoCheckmark } from 'react-icons/io5';
import { useTheme } from 'styled-components';

import {
    Container,
} from './styles';

interface CheckBoxProps{
    active?: boolean
}

const CheckBox = ({active=false}: CheckBoxProps) => {
    const theme = useTheme();
    return(
        <Container active={active} >
            {
                active && 
                <IoCheckmark
                    color={theme.colors.primary}
                    size="1.5rem"
                />
            }
        </Container>
    );
}
export default CheckBox;