import React from 'react';

// 
import CategoryHero from '../components/CategoryHero';
import Offer from '../components/Offer';
import AboutCompany from '../components/AboutCompany';
import QuestionAnswer from '../components/QuestionAnswer';
import FurnitureCatalog from '../components/FurnitureCatalog';

const FurnitureForStaff = () => {
    return (
        <>
            <CategoryHero />
            <Offer />
            <FurnitureCatalog />
            <QuestionAnswer />
            <AboutCompany />
        </>
    )
};

export default FurnitureForStaff;