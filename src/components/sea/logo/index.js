import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

import * as Styles from './styles';

import LogoImg from '../../../assets/sea/logo.png';

gsap.registerPlugin(ScrollTrigger);
const sceneLogo = gsap.timeline();

const Logo = () => {
    const logoRef = useRef(null);

    useEffect(() => {
        if(!logoRef) return;

        ScrollTrigger.create({
            animation: sceneLogo,
            trigger: logoRef.current,
            start: 'top top+=50',
            end: 1191,
            scrub: 2
        });

        sceneLogo.to(
            logoRef.current,
            {
                top: 1300
            },
            0
        );
    }, []);

    return <Styles.Logo ref={logoRef} src={LogoImg} className='logo' />
}

export default Logo;
