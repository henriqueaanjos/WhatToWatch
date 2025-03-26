import React, { useState } from 'react';
import { IoHelpCircleOutline, IoOptions, IoStar, IoTrash } from 'react-icons/io5';
import { useTheme } from 'styled-components';
import { filtersGenres } from '../../util/filters';
import { streamings } from '../../util/streamings';

import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; 

import Badge from '../Badge';

import {
    Container,
    Header,
    PageType,
    Title,
    Options,
    FilterOptions,
    BadgeButton,
    OptionTitleActive,
    OptionTitle,
    SortOptions,
    SortBy,
    FilterTitleWrapper,
    FilterTitle,
    Content,
    Genres,
    Streaming,
    StreamingCover,
    Footer,
    DoneButton,
    ResetButton,
    ResetButtonTitle,
    DoneButtonTitle,
    Overlay
} from './styles';

interface FilterBarProps{
    visibility: boolean,
    setVisibility: () => void,
    filter: (genres?: typeof filtersGenres, streams?: typeof streamings, order?: 'popularity.desc' | 'release_date.desc' | 'vote_average.desc') => void,
    order: () => void,
    orderStatus: string,
    reset: () => void
}

const FilterBar = ({visibility, setVisibility, filter, order, orderStatus, reset}: FilterBarProps) => {

    const [selectGenres, setSelectGenres] = useState<typeof filtersGenres>([]);
    const [selectStreaming, setSelectStreaming] = useState<typeof streamings>([]);
    const theme = useTheme();

    function addGenres(genre : typeof filtersGenres[0]){
        if(!!selectGenres.find(item => item.id === genre.id)){
            setSelectGenres([...selectGenres.filter(item => item.id != genre.id)]);
        }else{
            setSelectGenres(old => [...old, genre]);
        }
    }

    function addStreamings(stream : typeof streamings[0]){
        if(!!selectStreaming.find(item => item.provider_id === stream.provider_id)){
            setSelectStreaming([...selectStreaming.filter(item => item.provider_id != stream.provider_id)]);
        }else{
            setSelectStreaming(old => [...old, stream]);
        }
    }

    function handleChangeVisibility(){
        setVisibility();
    }

    function handleFilter(){
        filter(selectGenres, selectStreaming);
    }

    function handleOpenOrder(){
        order();
    }

    function handleReset(){
        setSelectGenres([]);
        setSelectStreaming([]);
        reset();
    }

    return(
        <>
            <Container visibility={visibility}>
                <Header>
                    <PageType>
                        <IoStar
                            color={theme.colors.primary}
                            size="2rem"
                        />
                        <Title>Popularity</Title>
                    </PageType>
                    <Options>
                        <FilterOptions onClick={handleChangeVisibility}>
                            <IoOptions
                                color={theme.colors.primary}
                                size="1.5rem"
                            />
                            <OptionTitleActive>Filters</OptionTitleActive>
                        </FilterOptions>
                        
                        <SortOptions onClick={handleOpenOrder}>
                            <OptionTitle>Sort by:</OptionTitle>
                            <SortBy>{orderStatus}</SortBy>
                        </SortOptions>
                    </Options>
                </Header>
                <Content>
                    <FilterTitle>Genres:</FilterTitle>
                    <Genres>
                        {
                            filtersGenres.filter(filter => filter.category === "genre").map(item => 
                                <BadgeButton key={item.id} onClick={() => addGenres(item)}>
                                    <Badge 
                                        title={item.name} 
                                        active={!!selectGenres.find(genre => genre.id === item.id)}
                                    />
                                </BadgeButton>
                            )
                        }
                    </Genres>
                    <FilterTitleWrapper>
                        <Tippy 
                            content="If you select more than one streaming provider,
                            it will only show movies that are available on all selected streams."

                            animation="fade"
                            placement='right'
                        >
                            <FilterTitle >Streaming: 
                                <IoHelpCircleOutline
                                    size="1rem"
                                    color={theme.colors.background}
                                />
                            </FilterTitle>
                        </Tippy>
                    </FilterTitleWrapper>
                    <Streaming>
                        {
                            streamings.map(streaming => 
                                <StreamingCover 
                                    key={streaming.provider_id}
                                    src={`https://image.tmdb.org/t/p/w500${streaming.logo_path}`} 
                                    alt={streaming.provider_name} 
                                    active={!!selectStreaming.find(stream => stream.provider_id === streaming.provider_id)}
                                    onClick={() => addStreamings(streaming)}
                                />
                            )
                        }
                    </Streaming>
                </Content>
                <Footer>
                    <ResetButton onClick={handleReset}>
                        <IoTrash
                            size="1rem"
                            color={theme.colors.primary}
                        />
                        <ResetButtonTitle>Reset</ResetButtonTitle>
                    </ResetButton>
                    <DoneButton onClick={handleFilter}>
                        <DoneButtonTitle>Filter</DoneButtonTitle>
                    </DoneButton>
                </Footer>
            </Container>
            <Overlay visibility={visibility} onClick={handleChangeVisibility}/>
        </>
    );
}
export default FilterBar;