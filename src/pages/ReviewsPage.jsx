import React, { useEffect } from 'react';

// components(section)
import Reviews from '../components/Reviews';
import Contracts from '../components/Contracts';
import AddComment from '../components/AddComment';

const ReviewsPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    },[]);
    return (
        <>
            <section className="pt-36r pb-60r">
                <div className="container">
                    <h1 className="mb-60r">Sharxlar</h1>
                    <ul className="grid grid-cols-2 gap-8 max-1500:grid-cols-1 reviews-page-reviews-list max-670:gap-7 max-440:gap-6">
                        <Reviews />
                    </ul>
                </div>
            </section>
            <Contracts />
            <AddComment />
        </>
    )
};

export default ReviewsPage;