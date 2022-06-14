import React, { useState } from 'react';
import { filtersGenres } from '../../util/filters';
import { streamings } from '../../util/streamings';
import CheckBox from '../CheckBox';

import {
    Container,
    Header,
    Title,
    SelectedOption,
    Content,
    Option, 
    OptionTitle,
    Overlay
} from './styles';

interface OrderBarProps{
    visibility: boolean,
    setVisibility: () => void,
    filter: (genres?: typeof filtersGenres, streams?: typeof streamings, order?: 'popularity.desc' | 'release_date.desc' | 'vote_average.desc') => void
}

const OrderBar = ({visibility, setVisibility, filter}: OrderBarProps) => {
    const [selectedOption, setSelectedOption] = useState('popularity.desc');

    function handleChangeSelect(id: 'popularity.desc' | 'release_date.desc' | 'vote_average.desc'){
        setSelectedOption(id);
        filter(null, null, id);
    }

    function optionNameLabel(){
        switch(selectedOption){
            case 'popularity.desc':
                return 'popularity';
            case 'vote_average.desc':
                return 'Vote Average';
            case 'release_date.desc':
                return 'Release Date';
        }
    }

    function handleChangeVisibility(){
        setVisibility();
    }

    return(
        <>
            <Container visibility={visibility}>
                <Header onClick={handleChangeVisibility}>
                    <Title>Sort By: </Title>
                    <SelectedOption>{optionNameLabel()}</SelectedOption>
                </Header>
                <Content>
                    <Option onClick={() => handleChangeSelect('popularity.desc')}>
                        <CheckBox active={selectedOption === 'popularity.desc'}/>
                        <OptionTitle>Popularity</OptionTitle>
                    </Option>
                    <Option onClick={() => handleChangeSelect('vote_average.desc')}>
                        <CheckBox active={selectedOption === 'vote_average.desc'}/>
                        <OptionTitle>Vote Average</OptionTitle>
                    </Option>
                    <Option onClick={() => handleChangeSelect('release_date.desc')}>
                        <CheckBox active={selectedOption === 'release_date.desc'}/>
                        <OptionTitle>Release Date</OptionTitle>
                    </Option>
                </Content>
            </Container>
            <Overlay visibility={visibility} onClick={handleChangeVisibility}/>
        </>
    );
}
export default OrderBar;