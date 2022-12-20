import React from 'react';

import * as Styles from './styles';

import SceneNets from './nets';
import SceneLogo from './logo';
import SceneClouds from './clouds';
import SceneText from './text';
import SceneIslands from './islands';

const SeaSection = () => {
    return (
        <Styles.Container>
            <SceneNets />
            <SceneLogo />
            <SceneClouds />
            <SceneText />
            <SceneIslands />
        </Styles.Container>
    );
}

export default SeaSection;
