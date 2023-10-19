import React from 'react';
import { Link } from 'react-router-dom';
import Reviews from './Reviews';

const HomePageReviews = () => {
    return (
        <section className='py-60px'>
            <div className="container">
                {/* top  */}
                <div className="flex-c-b mb-60px">
                    <h2>Отзывы</h2>
                    <Link to='/reviews' className='solid-gray-50-border-btn'>Все отзывы</Link>
                </div>

                {/* comments  */}
                <ul className="flex gap-8 w-full overflow-auto pb-60px gray-scroll">
                    {
                        <Reviews />
                    }
                </ul>
            </div>
        </section>
    )
};

export default HomePageReviews;