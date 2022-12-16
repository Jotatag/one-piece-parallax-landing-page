import React from 'react';

import * as Styles from './styles';

import { LeftNet, RightNet } from './nets';
import Logo from './logo';
import SceneClouds from './clouds';
import { TextOne, TextTwo } from './text';
import  SceneIslands from './islands';

const SeaSection = () => {
    return (
        <Styles.Container>
            <LeftNet />
            <RightNet />
            <Logo />
            <SceneClouds />
            <TextOne />
            <TextTwo />
            <SceneIslands />
        </Styles.Container>
    );
}

export default SeaSection;
