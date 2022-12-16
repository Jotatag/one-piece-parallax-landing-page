import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

import * as Styles from './styles';

import IslandOneImg from '../../../assets/sea/islandOne.png';
import IslandTwoImg from '../../../assets/sea/islandTwo.png';
import IslandThreeImg from '../../../assets/sea/islandThree.png';

gsap.registerPlugin(ScrollTrigger);

const IslandOne = ({ timeline }) => {
    const islandOneRef = useRef(null);

    useEffect(() => {
        if(!islandOneRef || !timeline) return;

        timeline.to(
            islandOneRef.current,
            {
                right: 300
            },
            0
        );
    }, [timeline]);

    return <Styles.Island ref={islandOneRef} src={IslandOneImg} className='right' />
}

const IslandoTwo = ({ timeline }) => {
    const islandTwoRef = useRef(null);

    useEffect(() => {
        if(!islandTwoRef || !timeline) return;

        timeline.to(
            islandTwoRef.current,
            {
                right: 560
            },
            0
        );
    }, [timeline]);

    return <Styles.Island ref={islandTwoRef} src={IslandTwoImg} className='right two' />
}

const IslandThree = ({ timeline }) => {
    const islandThreeRef = useRef(null);

    useEffect(() => {
        if(!islandThreeRef || !timeline) return;

        timeline.to(
            islandThreeRef.current,
            {
                left: 230
            },
            0
        );
    }, [timeline]);

    return <Styles.Island ref={islandThreeRef} src={IslandThreeImg} className='left' />
}

const SceneIslands = () => {
    const [timeline, setTimeline] = useState(null);
    const islandSceneRef = useRef(null);

    useEffect(() => {
        if(!islandSceneRef) return;

        setTimeline(
            gsap.timeline({
                scrollTrigger: {
                    trigger: islandSceneRef.current,
                    start: 'top+=550px bottom',
                    end: 'bottom+=100px bottom',
                    scrub: 4
                }
            })
        );
    }, []);

    return (
        <Styles.IslandsContainer ref={islandSceneRef}>
            <IslandOne timeline={timeline} />
            <IslandoTwo timeline={timeline} />
            <IslandThree timeline={timeline} />
        </Styles.IslandsContainer>
    )
}

export default SceneIslands;
