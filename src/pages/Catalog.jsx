import React, { useEffect } from 'react';

// components (sections)
import CatalogLinks from '../components/CatalogLinks';
import AboutCompany from '../components/AboutCompany';
import FurnitureCatalog from '../components/FurnitureCatalog';

const Catalog = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    },[]);
    return (
        <>
            <CatalogLinks />
            <FurnitureCatalog />
            <AboutCompany />
        </>
    )
};

export default Catalog;