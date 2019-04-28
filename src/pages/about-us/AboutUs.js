import React from 'react';
import { Helmet } from 'react-helmet';
import { Container, Row } from './style';
import GoogleAds from '../../components/shared/google-ads';

const AboutUs = () => (
    <Container>
        <Helmet>
            <title>
                About us | Yokaidex - Where you can find all the information
                from Yo-kai Watch games!
            </title>
        </Helmet>
        <GoogleAds />
        <Row>
            Yokaidex is a website with information about the games from Level-5:
            Yo-kai watch. All the information gathered here is to be used as a
            resource to help our community have more info about the game. All of
            it is the intellectual property of Level-5 Inc., Nintendo Co., Ltd.,
            Bandai Co., Ltd., Koei Tecmo Holdings Co., Ltd. and is protected by
            various copyrights and trademarks. The author believes that the use
            of this intellectual property for a fan reference is covered by fair
            use — the use is inherently educational, and the software would be
            severely impaired without the copyrighted material.
        </Row>
    </Container>
);

export default AboutUs;