import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

import * as Styles from './styles';

import TextOneImg from '../../../assets/sea/textOne.png';
import TextTwoImg from '../../../assets/sea/textPiece.png';

gsap.registerEffect(ScrollTrigger);
const sceneText = gsap.timeline();
ScrollTrigger.create({
    animation: sceneText,
    trigger: document.body,
    start: 1000,
    end: 1191,
    scrub: 3
});

export const TextOne = () => {
    const textOneRef = useRef(null);

    useEffect(() => {
        if(!textOneRef) return;

        sceneText.to(
            textOneRef.current,
            {
                left: 220,
            },
            0
        );
    }, []);

    return <Styles.Text ref={textOneRef} src={TextOneImg} className='left' />
}

export const TextTwo = () => {
    const textTwoRef = useRef(null);

    useEffect(() => {
        if(!textTwoRef) return;

        sceneText.to(
            textTwoRef.current,
            {
                right: 60,
            },
            0
        );
    }, []);

    return <Styles.Text ref={textTwoRef} src={TextTwoImg} className='right' />
}

