import Link from 'next/link';
import { useState } from 'react';
import { IoSearch } from 'react-icons/io5';
import { useTheme } from 'styled-components'

import {
    Container,
    Logo,
    SearchBar,
    ButtonSearch
} from './styles';

const Header = () => {
    const theme = useTheme();
    const [search, setSearch] = useState(''); 
    return(
        <Container>
            <Link href='/'>
                <Logo src='/logo.svg'/>
            </Link>
            <SearchBar
                placeholder='search Movie'
                onChange={e => setSearch(e.target.value)}
                value={search}
            />
            <Link href={`/search/${search}`}>
                <ButtonSearch >
                    <IoSearch
                        color={theme.colors.primary}
                        size="1.5rem"
                    />
                </ButtonSearch>
            </Link>
        </Container>
    );
}
export default Header;