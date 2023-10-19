import React from 'react';
import Hero from '../components/HomePageHero';
import LeadingProducts from '../components/LeadingProducts';
import AboutOfficeFurniture from '../components/AboutOfficeFurniture';
import HomePageNewProducts from '../components/HomePageNewProducts';
import Akciya from '../components/Akciya';
import AboutFurnitureSize from '../components/AboutFurnitureSize';
import RedCta from '../components/RedCta';
import HomePageReviews from '../components/HomePageReviews';
import Partners from '../components/Partners';

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
            <HomePageReviews />
            <Partners />
        </div>
    )
};

export default Home;