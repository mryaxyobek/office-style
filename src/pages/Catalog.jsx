import React from 'react';

// components (sections)
import CatalogLinks from '../components/CatalogLinks';
import AboutCompany from '../components/AboutCompany';
import FurnitureCatalog from '../components/FurnitureCatalog';

const Catalog = () => {
    return (
        <>
            <CatalogLinks />
            <FurnitureCatalog />
            <AboutCompany />
        </>
    )
};

export default Catalog;