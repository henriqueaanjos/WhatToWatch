import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { IoBookmark,  IoGrid} from 'react-icons/io5'
import { useTheme } from 'styled-components';

import {
    Container,
    ButtonIcon,
    Icons,
    Label
} from './styles'

interface TabBarProps{
    execute?: () => void,
}

const TabBar = ({execute}: TabBarProps) => {
    const [buttonHovered, setButtonHovered] = useState(0);
    const theme = useTheme();
    const route = useRouter();

    function handleExecute(){
        if(route.asPath === '/')
            execute();
        else{
            route.push('/');
        }
    }
    return(
        <Container >
            <Icons>
                <ButtonIcon onMouseEnter={() => setButtonHovered(1)} onMouseLeave={() => setButtonHovered(0)} onClick={handleExecute}>
                    <IoGrid
                        color={buttonHovered === 1 ? theme.colors.primary : theme.colors.title}
                        size="1.5rem"
                    />
                    <Label isHover={buttonHovered === 1}>Filters</Label>
                </ButtonIcon>
                <Link href='/saves'>
                    <ButtonIcon onMouseEnter={() => setButtonHovered(2)} onMouseLeave={() => setButtonHovered(0)}>
                        <IoBookmark
                            color={buttonHovered === 2 ? theme.colors.primary : theme.colors.title}
                            size="1.5rem"
                        />
                        <Label isHover={buttonHovered === 2}>Saves</Label>
                    </ButtonIcon>
                </Link>
            </Icons>   
        </Container>
    );
}
export default TabBar;