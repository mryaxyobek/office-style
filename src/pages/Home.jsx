import React from 'react';
import Hero from '../components/HomePageHero';
import LeadingProducts from '../components/LeadingProducts';
import AboutOfficeFurniture from '../components/AboutOfficeFurniture';
import HomePageNewProducts from '../components/HomePageNewProducts';
import AboutFurnitureSize from '../components/AboutFurnitureSize';
import Akciya from '../components/Akciya';

const Home = () => {
    return (
        <div>
            <Hero />
            <LeadingProducts />
            <AboutOfficeFurniture />
            <HomePageNewProducts />
            <Akciya />
            <AboutFurnitureSize />
        </div>
    )
};

export default Home;