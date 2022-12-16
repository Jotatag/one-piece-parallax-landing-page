import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

import * as Styles from './styles';

import CloudImg from '../../../assets/sea/cloudOne.png';

gsap.registerPlugin(ScrollTrigger);

const CloudOne = ({ timeline }) => {
    const cloudOneRef = useRef(null);

    useEffect(() => {
        if(!cloudOneRef || !timeline) return;

        timeline.to(
            cloudOneRef.current,
            {
                left: -70
            },
            0
        );
    }, [timeline]);

    return <Styles.Cloud ref={cloudOneRef} src={CloudImg} className='left' />
}

const CloudTwo = ({ timeline }) => {
    const cloudTwoRef = useRef(null);

    useEffect(() => {
        if(!cloudTwoRef || !timeline) return;

        timeline.to(
            cloudTwoRef.current,
            {
                right: -20
            },
            0
        );
    }, [timeline]);

    return <Styles.Cloud ref={cloudTwoRef} src={CloudImg} className='right' />
}

const SceneClouds = () => {
    const [timeline, setTimeline] = useState(null);
    const sceneCloudsRef = useRef(null);

    useEffect(() => {
        if(!sceneCloudsRef) return;

        setTimeline(
            gsap.timeline({
                scrollTrigger: {
                    trigger: sceneCloudsRef.current,
                    start: 'top+=550px bottom',
                    end: 'bottom+=100px bottom',
                    scrub: 3
                }
            })
        );
    }, []);

    return (
        <Styles.CloudsContainer ref={sceneCloudsRef}>
            <CloudOne timeline={timeline} />
            <CloudTwo timeline={timeline} />
        </Styles.CloudsContainer>
    )
}

export default SceneClouds;
