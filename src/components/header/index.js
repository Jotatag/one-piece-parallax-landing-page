import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

import SeaBackground from '../../assets/temp/back01.png';
import NetLeft from '../../assets/temp/netLeft.png';
import Logo from '../../assets/temp/logo.png';

import Island1 from '../../assets/temp/island1.png';
import Island2 from '../../assets/temp/island2.png';
import Island3 from '../../assets/temp/island3.png';

gsap.registerPlugin(ScrollTrigger);

const Header = () => {
    const netLeft = useRef(null);
    const netRight = useRef(null);
    const logo = useRef(null);

    const island1 = useRef(null);
    const island2 = useRef(null);
    const island3 = useRef(null);

    useEffect(() => {
        if(!netLeft.current) return;
        const speed = 100;

        let clouds = gsap.timeline();
        ScrollTrigger.create({
            animation: clouds,
            trigger: document.body,
            start: 0,
            end: 1191,
            scrub: 2,
        });

        let teste = gsap.timeline();
        ScrollTrigger.create({
            animation: teste,
            trigger: logo.current,
            start: "top top+=10px",
            end: 1191,
            scrub: 2,
        });

          clouds.to(netLeft.current, { x: -940 }, 0);
          clouds.to(netRight.current, {
            x: 920
            }, 0
          );
          teste.fromTo(logo.current, {top:"200px"}, {top: '1350px'}, 0)


        let islands = gsap.timeline();
        ScrollTrigger.create({
            animation: teste,
            trigger: logo.current,
            start: "top top+=10px",
            end: 1191,
            scrub: 2,
        });

          clouds.to(netLeft.current, { x: -940 }, 0);
          clouds.to(netRight.current, {
            x: 920
            }, 0
          );
          teste.fromTo(logo.current, {top:"200px"}, {top: '1350px'}, 0)
    }, []);

    return(
        <div style={{display: 'flex', height: '2160px', background: `url(${SeaBackground})`, overflow: 'hidden', position: 'relative'}}>
            <img ref={netLeft} src={NetLeft} style={{zIndex: '2'}} />
            <img ref={netRight} src={NetLeft} style={{zIndex: '2'}} />
            <img ref={logo} src={Logo} style={{
                position: 'absolute', zIndex: '1', top: '0',
                left: 0,
                right: 0,
                marginLeft: 'auto', 
                marginRight: 'auto',
                width: '480px' 
            }} />
            <img ref={island1} src={Island1} />
            <img ref={island2} src={Island2} />
            <img ref={island3} src={Island3} />
        </div>
    );
}

export default Header;
