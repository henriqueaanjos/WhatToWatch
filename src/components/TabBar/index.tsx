import { useState } from 'react';
import { IoBookmark, IoFileTrayStacked, IoGrid, IoMenu} from 'react-icons/io5'
import { useTheme } from 'styled-components';

import {
    Container,
    ButtonIcon,
    IconsSecondary,
    Label
} from './styles'

interface TabBarOption{
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
}

const TabBar = ({isOpen, setIsOpen}: TabBarOption) => {
    const theme = useTheme();

    function handleOpen(){
        setIsOpen(!isOpen);
    }

    return(
        <Container isOpen={isOpen}>
            <ButtonIcon onClick={handleOpen}>
                <IoMenu
                    color={theme.colors.title}
                    size="2.5rem"
                />
            </ButtonIcon>
            <IconsSecondary>
                <ButtonIcon onClick={() => {}}>
                    <IoFileTrayStacked
                        color={theme.colors.title}
                        size="1.5rem"
                    />
                    {isOpen && <Label>Streaming</Label>}
                </ButtonIcon>
                <ButtonIcon onClick={() => {}}>
                    <IoGrid
                        color={theme.colors.title}
                        size="1.5rem"
                    />
                    {isOpen && <Label>Categories</Label>}
                </ButtonIcon>
                <ButtonIcon onClick={() => {}}>
                    <IoBookmark
                        color={theme.colors.title}
                        size="1.5rem"
                    />
                    {isOpen && <Label>Saves</Label>}
                </ButtonIcon>
            </IconsSecondary>   
        </Container>
    );
}
export default TabBar;