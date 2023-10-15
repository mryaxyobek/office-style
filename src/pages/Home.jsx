import React from 'react';
import Hero from '../components/HomePageHero';
import LeadingProducts from '../components/LeadingProducts';
import AboutOfficeFurniture from '../components/AboutOfficeFurniture';
import HomePageNewProducts from '../components/HomePageNewProducts';

const Home = () => {
    return (
        <div>
            <Hero />
            <LeadingProducts />
            <AboutOfficeFurniture />
            <HomePageNewProducts />
        </div>
    )
}

export default Home;