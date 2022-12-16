import React, { useEffect } from 'react';
import Sea from '../../components/sea';

const Home = () => {

    useEffect(() => {
        window.onbeforeunload = function() {
            window.scrollTo(0, 0);
        }
    }, []);

    return <Sea />
}

export default Home;
