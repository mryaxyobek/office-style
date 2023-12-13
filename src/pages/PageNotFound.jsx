import React from 'react';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
    return (
        <div className='flex-center flex-col justify-center container pt-36r pb-60r'>
            <h1 className="flex-center gap-2 text-9xl textblack text-primary-gray-90 max-640:text-8xl max-470:text-7xl">
                <span>4</span>
                <span className="infinity-rotate">0</span>
                <span>4</span>
            </h1>
            <p className="text-6xl mb-6 max-640:text-5xl max-470:!text-medium-36 max-470:mb-2">Sahifa topilmadi!</p>
            <p className="text-medium-20 mb-6 max-w-xl text-center max-470:text-regular-18">Sayt manzili noto'g'ri kiritldi. Bosh sahifaga qaytish uchun quyidagi tugmani bosing</p>
            <Link to='/' className='red-btn px-6 py-3.5'>Bosh sahifaga qaytish</Link>
        </div>
    )
};

export default PageNotFound;