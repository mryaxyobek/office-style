import React, { useEffect } from 'react';

// components (sections)
import ProductDesignHero from '../components/ProductDesignHero';
import QuestionAnswer from '../components/QuestionAnswer';
import AboutCompany from '../components/AboutCompany';
import RecommendProducts from '../components/RecommendProducts';

const ProductPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <>
            <ProductDesignHero />
            <RecommendProducts />
            <QuestionAnswer />
            <AboutCompany />
        </>
    )
};

export default ProductPage;