import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

import * as Styles from './styles';

import TextOneImg from '../../../assets/sea/textOne.png';
import TextTwoImg from '../../../assets/sea/textPiece.png';

gsap.registerEffect(ScrollTrigger);

const TextOne = ({ timeline }) => {
    const textOneRef = useRef(null);

    useEffect(() => {
        if(!textOneRef || !timeline) return;

        timeline.to(
            textOneRef.current,
            {
                left: 220,
            },
            0
        );
    }, [timeline]);

    return <Styles.Text ref={textOneRef} src={TextOneImg} className='left' />
}

const TextTwo = ({ timeline }) => {
    const textTwoRef = useRef(null);

    useEffect(() => {
        if(!textTwoRef || !timeline) return;

        timeline.to(
            textTwoRef.current,
            {
                right: 60,
            },
            0
        );
    }, [timeline]);

    return <Styles.Text ref={textTwoRef} src={TextTwoImg} className='right' />
}

const SceneText = () => {
    const [timeline, setTimeline] = useState(null);
    const sceneTextRef = useRef(null);

    useEffect(() => {
        if(!sceneTextRef) return;

        setTimeline(
            gsap.timeline({
                scrollTrigger: {
                    trigger: sceneTextRef.current,
                    start: 'top+=550px bottom',
                    end: 'bottom+=100px bottom',
                    scrub: 3
                }
            })
        );
    }, []);

    return (
        <Styles.TextContainer ref={sceneTextRef}>
            <TextOne timeline={timeline} />
            <TextTwo timeline={timeline} />
        </Styles.TextContainer>
    )
}

export default SceneText;
