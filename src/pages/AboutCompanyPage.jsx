import React, { useEffect } from 'react';

// components 
import AboutCompanyHero from '../components/AboutCompanyHero';
import AboutFurnitureSize from '../components/AboutFurnitureSize';
import Partners from '../components/Partners';
import HomePageReviews from '../components/HomePageReviews';
import RedCta from '../components/RedCta';
import Articles from '../components/Articles';

const AboutCompanyPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    },[]);
    return (
        <>
            <AboutCompanyHero />
            <AboutFurnitureSize />
            <Partners />
            <HomePageReviews />
            <Articles />
            <div className="red-cta-wrapper">
                <RedCta />
            </div>
        </>
    )
};

export default AboutCompanyPage;