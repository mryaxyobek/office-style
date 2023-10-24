import React from 'react';
import { Outlet } from 'react-router-dom';

const CatalogRoot = () => {
    return (
        <>
            <Outlet />
        </>
    )
};

export default CatalogRoot;