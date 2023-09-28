import React from 'react';
import '../../App.css';
import HeroSection from '../Homepages/HeroSection';
import Footer from '../Footer';
import Homecards from '../Homepages/Homecards';

function Home() {
    return(
        <>
            <HeroSection/>
            <Homecards/>
            <Footer/>
        </>

    );
}

export default Home;