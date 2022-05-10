import Link from 'next/link';
import { useRouter } from 'next/router';
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
    const [inputFocus, setInputFocus] = useState(false);
    const router = useRouter();

    function handleChangeFocus(){
        setInputFocus(old => !old);
    }

    return(
        <Container 
        onSubmit={() => router.push(`/search/${search}`)}>
            <Link href='/'>
                <Logo src='/logo.svg'/>
            </Link>
            <SearchBar
                placeholder='search Movie'
                onChange={e => setSearch(e.target.value)}
                value={search}
                onFocus={handleChangeFocus}
                isFocused={inputFocus || !!search}
                onBlur={handleChangeFocus}
            />
            <Link href={`/search/${search}`}>
                <ButtonSearch >
                    <IoSearch
                        color={inputFocus || !!search ? theme.colors.primary : theme.colors.boxBackground}
                        size="1.5rem"
                    />
                </ButtonSearch>
            </Link>
        </Container>
    );
}
export default Header;