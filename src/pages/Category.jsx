import React, { useEffect } from 'react';

// 
import CategoryHero from '../components/CategoryHero';
import Offer from '../components/Offer';
import AboutCompany from '../components/AboutCompany';
import QuestionAnswer from '../components/QuestionAnswer';
import FurnitureCatalog from '../components/FurnitureCatalog';
import Products from '../components/Products';

const Category = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <>
            <CategoryHero />
            <Products />
            <Offer />
            <FurnitureCatalog />
            <QuestionAnswer />
            <AboutCompany />
        </>
    )
};

export default Category;