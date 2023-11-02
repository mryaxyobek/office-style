import React, { useEffect } from 'react';

// components (sections)
import ProductDesignHero from '../components/ProductDesignHero';
import ProductDetails from '../components/ProductDetails';
import QuestionAnswer from '../components/QuestionAnswer';
import AboutCompany from '../components/AboutCompany';

const CreateProductDesign = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <>
            <ProductDesignHero />
            <ProductDetails />
            <QuestionAnswer />
            <AboutCompany />
        </>
    )
};

export default CreateProductDesign;