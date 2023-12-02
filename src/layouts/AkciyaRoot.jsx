import React from 'react';
import { Outlet } from 'react-router-dom';
import SubscribeCompanyNews from '../components/SubscribeCompanyNews';

const AkciyaRoot = () => {
    return (
        <>
            <Outlet />
            <SubscribeCompanyNews />
        </>
    )
};

export default AkciyaRoot;