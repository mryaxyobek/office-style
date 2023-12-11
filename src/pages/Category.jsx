import React from 'react';
// 
import CategoryHero from '../components/CategoryHero';
import Offer from '../components/Offer';
import AboutCompany from '../components/AboutCompany';
import QuestionAnswer from '../components/QuestionAnswer';
import FurnitureCatalog from '../components/FurnitureCatalog';
import Products from '../components/Products';
import RecommendProducts from '../components/RecommendProducts';

const Category = () => {
    return (
        <>
            <CategoryHero />
            <Products />
            <Offer />
            <RecommendProducts />
            <FurnitureCatalog />
            <QuestionAnswer />
            <AboutCompany />
        </>
    )
};

export default Category;