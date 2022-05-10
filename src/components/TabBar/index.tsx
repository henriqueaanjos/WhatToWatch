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
    const [hover, setHover] = useState(0);
    const theme = useTheme();

    function handleOpen(){
        setIsOpen(!isOpen);
    }

    function handleChangeColorHover(id: number = 0){
        setHover(id);
    }

    return(
        <Container isOpen={isOpen}>
            <ButtonIcon 
                onClick={handleOpen}
                onMouseEnter={() => handleChangeColorHover(4)} 
                onMouseLeave={() => handleChangeColorHover()}
            >
                <IoMenu
                    color={hover === 4 ? '#c4c4c4' : theme.colors.title}
                    size="2.5rem"
                />
            </ButtonIcon>
            <IconsSecondary>
                <ButtonIcon 
                    onClick={() => {}} 
                    onMouseEnter={() => handleChangeColorHover(1)} 
                    onMouseLeave={() => handleChangeColorHover()}
                >
                    <IoFileTrayStacked
                        color={hover === 1 ? theme.colors.primary : theme.colors.title}
                        size="1.5rem"
                    />
                    {isOpen && <Label isHover={hover ===1} >Streaming</Label>}
                </ButtonIcon>
                <ButtonIcon 
                    onClick={() => {}} 
                    onMouseEnter={() => handleChangeColorHover(2)} 
                    onMouseLeave={() => handleChangeColorHover()}
                >
                    <IoGrid
                        color={hover === 2 ? theme.colors.primary : theme.colors.title}
                        size="1.5rem"
                    />
                    {isOpen && <Label isHover={hover ===2}>Categories</Label>}
                </ButtonIcon>
                <ButtonIcon 
                    onClick={() => {}} 
                    onMouseEnter={() => handleChangeColorHover(3)} 
                    onMouseLeave={() => handleChangeColorHover()}
                >
                    <IoBookmark
                        color={hover === 3 ? theme.colors.primary : theme.colors.title}
                        size="1.5rem"
                    />
                    {isOpen && <Label isHover={hover ===3}>Saves</Label>}
                </ButtonIcon>
            </IconsSecondary>   
        </Container>
    );
}
export default TabBar;