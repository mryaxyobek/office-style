import React, { useEffect } from 'react';
import CompletedProjects from '../components/CompletedProjects';

const Portfolio = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    },[]);
    return (
        <>
            <CompletedProjects />
        </>
    )
};

export default Portfolio;