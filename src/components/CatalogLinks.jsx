import React from 'react';
import { Link } from 'react-router-dom';

const CatalogLinks = () => {
    return (
        <div className="pt-36 pb-60px container">
            <h1 className="mb-60px">Каталог</h1>

            {/* links list  */}
            <ul className="grid grid-cols-5 gap-8">
                <li className="">
                    <Link to="bdsh" rel='noopener' className='flex relative items-end rounded-2.5xl max-w-326px h-214px pt-5 pb-7 px-8 backdrop:brightness-50 bg-cover bg-center bg-primary-gray-20 bg-catalog-img1 bg-no-repeat'>
                        <h3 className="relative z-1 text-medium-24 text-white">Кабинеты для руководителей</h3>
                        <div className="absolute z-0 top-0 right-0 rounded-2.5xl w-full h-full bg-black bg-opacity-50"></div>
                    </Link>
                </li>
                <li className="">
                    <Link to="furniture-for-staff" rel='noopener' className='flex relative items-end rounded-2.5xl max-w-326px h-214px pt-5 pb-7 px-8 backdrop:brightness-50 bg-cover bg-center bg-primary-gray-20 bg-catalog-img2 bg-no-repeat'>
                        <h3 className="relative z-1 text-medium-24 text-white">Мебель для персонала</h3>
                        <div className="absolute z-0 top-0 right-0 rounded-2.5xl w-full h-full bg-black bg-opacity-50"></div>
                    </Link>
                </li>
                <li className="">
                    <Link to="bdsh" rel='noopener' className='flex relative items-end rounded-2.5xl max-w-326px h-214px pt-5 pb-7 px-8 backdrop:brightness-50 bg-cover bg-center bg-primary-gray-20 bg-catalog-img3 bg-no-repeat'>
                        <h3 className="relative z-1 text-medium-24 text-white">Офисные кресла</h3>
                        <div className="absolute z-0 top-0 right-0 rounded-2.5xl w-full h-full bg-black bg-opacity-50"></div>
                    </Link>
                </li>
                <li className="">
                    <Link to="bdsh" rel='noopener' className='flex relative items-end rounded-2.5xl max-w-326px h-214px pt-5 pb-7 px-8 backdrop:brightness-50 bg-cover bg-center bg-primary-gray-20 bg-catalog-img4 bg-no-repeat'>
                        <h3 className="relative z-1 text-medium-24 text-white">Офисные диваны</h3>
                        <div className="absolute z-0 top-0 right-0 rounded-2.5xl w-full h-full bg-black bg-opacity-50"></div>
                    </Link>
                </li>
                <li className="">
                    <Link to="bdsh" rel='noopener' className='flex relative items-end rounded-2.5xl max-w-326px h-214px pt-5 pb-7 px-8 backdrop:brightness-50 bg-cover bg-center bg-primary-gray-20 bg-catalog-img5 bg-no-repeat'>
                        <h3 className="relative z-1 text-medium-24 text-white">Стойки рецепшн</h3>
                        <div className="absolute z-0 top-0 right-0 rounded-2.5xl w-full h-full bg-black bg-opacity-50"></div>
                    </Link>
                </li>
                <li className="">
                    <Link to="bdsh" rel='noopener' className='flex relative items-end rounded-2.5xl max-w-326px h-214px pt-5 pb-7 px-8 backdrop:brightness-50 bg-cover bg-center bg-primary-gray-20 bg-catalog-img6 bg-no-repeat'>
                        <h3 className="relative z-1 text-medium-24 text-white">Столы для переговоров</h3>
                        <div className="absolute z-0 top-0 right-0 rounded-2.5xl w-full h-full bg-black bg-opacity-50"></div>
                    </Link>
                </li>
                <li className="">
                    <Link to="bdsh" rel='noopener' className='flex relative items-end rounded-2.5xl max-w-326px h-214px pt-5 pb-7 px-8 backdrop:brightness-50 bg-cover bg-center bg-primary-gray-20 bg-catalog-img7 bg-no-repeat'>
                        <h3 className="relative z-1 text-medium-24 text-white">Офисные перегородки</h3>
                        <div className="absolute z-0 top-0 right-0 rounded-2.5xl w-full h-full bg-black bg-opacity-50"></div>
                    </Link>
                </li>
                <li className="">
                    <Link to="bdsh" rel='noopener' className='flex relative items-end rounded-2.5xl max-w-326px h-214px pt-5 pb-7 px-8 backdrop:brightness-50 bg-cover bg-center bg-primary-gray-20 bg-catalog-img8 bg-no-repeat'>
                        <h3 className="relative z-1 text-medium-24 text-white">Многоместные секции</h3>
                        <div className="absolute z-0 top-0 right-0 rounded-2.5xl w-full h-full bg-black bg-opacity-50"></div>
                    </Link>
                </li>
                <li className="">
                    <Link to="bdsh" rel='noopener' className='flex relative items-end rounded-2.5xl max-w-326px h-214px pt-5 pb-7 px-8 backdrop:brightness-50 bg-cover bg-center bg-primary-gray-20 bg-catalog-img9 bg-no-repeat'>
                        <h3 className="relative z-1 text-medium-24 text-white">Офисные столы</h3>
                        <div className="absolute z-0 top-0 right-0 rounded-2.5xl w-full h-full bg-black bg-opacity-50"></div>
                    </Link>
                </li>
                <li className="">
                    <Link to="bdsh" rel='noopener' className='flex relative items-end rounded-2.5xl max-w-326px h-214px pt-5 pb-7 px-8 backdrop:brightness-50 bg-cover bg-center bg-primary-gray-20 bg-catalog-img10 bg-no-repeat'>
                        <h3 className="relative z-1 text-medium-24 text-white">Офисные шкафы</h3>
                        <div className="absolute z-0 top-0 right-0 rounded-2.5xl w-full h-full bg-black bg-opacity-50"></div>
                    </Link>
                </li>
            </ul>
        </div>
    )
};

export default CatalogLinks;
