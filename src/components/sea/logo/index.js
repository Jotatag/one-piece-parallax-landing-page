import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

import * as Styles from './styles';

import LogoImg from '../../../assets/sea/logo.png';

gsap.registerPlugin(ScrollTrigger);

const SceneLogo = () => {
    const [timeline, setTimeline] = useState(null);
    const sceneLogoRef = useRef(null);
    const logoRef = useRef(null);

    useEffect(() => {
        if(!logoRef) return;

        if(!timeline)
            setTimeline(
                gsap.timeline({
                    scrollTrigger: {
                        trigger: sceneLogoRef.current,
                        start: 'top+=150px top',
                        end: 'top+=2160px bottom',
                        scrub: 2
                    }
                })
            );

        if(!timeline) return;

        timeline.to(
            logoRef.current,
            {
                top: 1300
            },
            0
        );
    }, [timeline]);

    return (
        <Styles.LogoContainer ref={sceneLogoRef}>
            <Styles.Logo ref={logoRef} src={LogoImg} className='logo' />
        </Styles.LogoContainer>
    );
}

export default SceneLogo;
