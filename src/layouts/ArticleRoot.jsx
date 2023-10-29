import React from 'react';
import { Outlet } from 'react-router-dom';
import SubscribeCompanyNews from '../components/SubscribeCompanyNews';

const ArticleRoot = () => {
    return (
        <>
            <Outlet />
            <SubscribeCompanyNews />
        </>
    )
};

export default ArticleRoot;