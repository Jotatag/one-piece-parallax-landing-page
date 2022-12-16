import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

import * as Styles from './styles';

import NetImg from '../../../assets/sea/net.png';

gsap.registerPlugin(ScrollTrigger);

const sceneNet = gsap.timeline();
ScrollTrigger.create({
    animation: sceneNet,
    trigger: document.body,
    start: 0,
    end: 1191,
    scrub: 1.5
});

export const LeftNet = () => {
    const leftNetRef = useRef(null);

    useEffect(() => {
        if(!leftNetRef) return;

        sceneNet.to(
            leftNetRef.current,
            {
                left: -930
            },
            0
        );
    }, []);

    return <Styles.Net ref={leftNetRef} src={NetImg} className='left' />
}

export const RightNet = () => {
    const rightNetRef = useRef(null);

    useEffect(() => {
        if(!rightNetRef) return;

        sceneNet.to(
            rightNetRef.current,
            {
                right: -930
            },
            0
        );
    }, []);

    return <Styles.Net ref={rightNetRef} src={NetImg} className='right' />
}
