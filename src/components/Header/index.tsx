import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { IoMenu, IoSearch } from 'react-icons/io5';
import { useTheme } from 'styled-components'
import SearchBar from '../SearchBar';
// import TabBar from '../TabBar';

import {
    Container,
    Content,
    MenuButton,
    Logo,
} from './styles';

interface HeaderProps{
    changeMenuVisibility: () => void;
    isTabBarActive: boolean,
    onSearch?: (query: string) => void;
}

const Header = ({changeMenuVisibility, isTabBarActive, onSearch}:HeaderProps) => {
    const theme = useTheme();

    return(
        <Container isTabBarActive={isTabBarActive}>
            <Content 
            >
                <MenuButton onClick={changeMenuVisibility}>
                    <IoMenu
                        size="2.5rem"
                        color={theme.colors.title}
                    />
                </MenuButton>
                <Link href='/'>
                    <Logo src='/logo1.svg'/>
                </Link>
                <SearchBar onSearch={onSearch}/>
            </Content>
        </Container>
    );
}
export default Header;