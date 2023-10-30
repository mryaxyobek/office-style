import React from 'react';
import { Link } from 'react-router-dom';
import Reviews from './Reviews';

const HomePageReviews = () => {
    return (
        <section className='py-60r'>
            <div className="container">
                {/* top  */}
                <div className="flex-c-b mb-60px max-800:mb-12 max-470:mb-8 max-900:pb-14 max-470:pb-8">
                    <h2>Отзывы</h2>
                    <Link to='/reviews' className='solid-gray-50-border-btn'>Все отзывы</Link>
                </div>

                {/* comments  */}
                <ul className="flex gap-8 w-full overflow-auto pb-60px gray-scroll max-900:gap-6 max-470:gap-4">
                    {
                        <Reviews />
                    }
                </ul>
            </div>
        </section>
    )
};

export default HomePageReviews;