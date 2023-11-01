import React, { useEffect } from 'react';

// components (sections)
import ProductDesignHero from '../components/ProductDesignHero';
import ProductDetails from '../components/ProductDetails';

const CreateProductDesign = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    },[]);
    return (
        <>
            <ProductDesignHero />
            <ProductDetails />
        </>
    )
};

export default CreateProductDesign;