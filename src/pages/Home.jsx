import React from 'react';
import Hero from '../components/HomePageHero';
import LeadingProducts from '../components/LeadingProducts';
import AboutOfficeFurniture from '../components/AboutOfficeFurniture';
import HomePageNewProducts from '../components/HomePageNewProducts';
import AboutFurnitureSize from '../components/AboutFurnitureSize';

const Home = () => {
    return (
        <div>
            <Hero />
            <LeadingProducts />
            <AboutOfficeFurniture />
            <HomePageNewProducts />
            <AboutFurnitureSize />
        </div>
    )
}

export default Home;