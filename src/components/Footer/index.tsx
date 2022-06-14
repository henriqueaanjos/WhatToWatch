import React from 'react';

import {
    Container,
    Wrapper,
    Content,
    Info,
    Logo,
    Title,
    Subtitle,
    Copyright
} from './styles';

const Footer = () => {
    return(
        <Container>
            <Wrapper>
                <Content>
                    <Info>
                        <Logo src='/logo.svg'/>
                        <Title>what to watch use the public api from themoviedb.org</Title>
                    </Info>
                    <Subtitle>what to watch is a project for only porfolio objetive, this is a not commercial software.</Subtitle>
                </Content>
                <Logo src='/logoTMDB.svg'/>
            </Wrapper>
            <Copyright>WW  - versão 2.0| Copyright ® 2022 |Whats to watch? </Copyright>
        </Container>
    );
}
export default Footer;