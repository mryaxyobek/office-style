import React, { useEffect } from 'react';

// components (sections)
import ArticlesMainContent from '../components/ArticlesMainContent';

const ArticlesPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    },[]);
    return (
        <>
            <ArticlesMainContent />
        </>
    )
};

export default ArticlesPage;