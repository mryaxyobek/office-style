import React from 'react';
import Hero from '../components/HomePageHero';
import LeadingProducts from '../components/LeadingProducts';
import AboutOfficeFurniture from '../components/AboutOfficeFurniture';
import HomePageNewProducts from '../components/HomePageNewProducts';
import Akciya from '../components/Akciya';
import AboutFurnitureSize from '../components/AboutFurnitureSize';
import RedCta from '../components/RedCta';

const Home = () => {
    return (
        <div>
            <Hero />
            <LeadingProducts />
            <AboutOfficeFurniture />
            <HomePageNewProducts />
            <Akciya />
            <AboutFurnitureSize />
            <RedCta />
        </div>
    )
};

export default Home;