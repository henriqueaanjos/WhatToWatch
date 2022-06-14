import { useRouter } from 'next/router';
import React, { FormEvent, useRef, useState } from 'react';
import { IoSearch } from 'react-icons/io5';
import { useTheme } from 'styled-components';

import {
    Container,
    Content,
    SearchInput,
    ButtonSearch,
    ButtonOpen,
} from './styles';

interface SearchBarProps{
    onSearch: (query: string) => void
}

const SearchBar = ({onSearch}: SearchBarProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const [search, setSearch] = useState('');

    const theme = useTheme();
    const router = useRouter();
    const inputRef = useRef<HTMLInputElement>(null);
    
    function handleChangeVisibility(){
        
        setIsOpen(old => !old);
        setInterval(() => inputRef.current?.focus(), 100);
    }

    function handleClose(){
        search === '' && setIsOpen(false);
        inputRef.current?.blur();
    }

    function searchMovie(e: FormEvent){
        e.preventDefault();
        if(search === ''){
            handleClose();
            
        }else{
            onSearch(search);
            setSearch('');
            inputRef.current?.blur();
        }
    }

    return(
        <Container 
            isOpen={isOpen}
        >
            {
                isOpen ?
                    <Content>
                        <SearchInput 
                            ref={inputRef}
                            onBlur={handleClose}
                            type='text'
                            onChange={e => setSearch(e.target.value)}
                            onSubmit={searchMovie}
                            value={search}
                        />
                        <ButtonSearch onClick={searchMovie}>
                            <IoSearch
                                color={theme.colors.primary}
                                size="1.5rem"
                            />
                        </ButtonSearch>
                    </Content>
                :
                    <ButtonOpen onClick={handleChangeVisibility}>
                        <IoSearch
                            color={theme.colors.boxBackground}
                            size="1.5rem"
                        />
                    </ButtonOpen>
            }
        </Container>
    );
}
export default SearchBar;


{/* <SearchBar
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
            </Link> */}