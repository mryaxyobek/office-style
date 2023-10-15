import React from 'react';
import Hero from '../components/HomePageHero';
import LeadingProducts from '../components/LeadingProducts';
import AboutOfficeFurniture from '../components/AboutOfficeFurniture';

const Home = () => {
    return (
        <div>
            <Hero />
            <LeadingProducts />
            <AboutOfficeFurniture />
        </div>
    )
}

export default Home;