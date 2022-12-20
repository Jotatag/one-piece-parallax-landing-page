import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

import * as Styles from './styles';

import NetImg from '../../../assets/sea/net.png';

gsap.registerPlugin(ScrollTrigger);

export const LeftNet = ({ timeline }) => {
    const leftNetRef = useRef(null);

    useEffect(() => {
        if(!leftNetRef || !timeline) return;

        timeline.to(
            leftNetRef.current,
            {
                left: -930
            },
            0
        );
    }, [timeline]);

    return <Styles.Net ref={leftNetRef} src={NetImg} className='left' />
}

export const RightNet = ({ timeline }) => {
    const rightNetRef = useRef(null);

    useEffect(() => {
        if(!rightNetRef || !timeline) return;

        timeline.to(
            rightNetRef.current,
            {
                right: -930
            },
            0
        );
    }, [timeline]);

    return <Styles.Net ref={rightNetRef} src={NetImg} className='right' />
}

const SceneNets = () => {
    const [timeline, setTimeline] = useState(null);
    const sceneNetsRef = useRef(null);
    
    useEffect(() => {
        if(!sceneNetsRef) return;

        setTimeline(
            gsap.timeline({
                scrollTrigger: {
                    trigger: sceneNetsRef.current,
                    start: 'top top',
                    end: 'top+=2160px bottom',
                    scrub: 1.5
                }
            })
        );
    }, []);

    return (
        <Styles.NetsContainer ref={sceneNetsRef}>
            <LeftNet timeline={timeline} />
            <RightNet timeline={timeline} />
        </Styles.NetsContainer>
    )
}

export default SceneNets;
