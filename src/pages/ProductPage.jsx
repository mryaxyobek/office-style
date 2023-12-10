import React, { useEffect } from 'react';

// components (sections)
import ProductDesignHero from '../components/ProductDesignHero';
import QuestionAnswer from '../components/QuestionAnswer';
import AboutCompany from '../components/AboutCompany';

const ProductPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <>
            <ProductDesignHero />
            <QuestionAnswer />
            <AboutCompany />
        </>
    )
};

export default ProductPage;