import React from 'react';

// components(section)
import Reviews from '../components/Reviews';
import Contracts from '../components/Contracts';
import AddComment from '../components/AddComment';

const ReviewsPage = () => {
    return (
        <>
            <section className="pt-36 pb-60px">
                <div className="container">
                    <h1 className="mb-14">Отзывы</h1>
                    <ul className="grid grid-cols-2 gap-8">
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