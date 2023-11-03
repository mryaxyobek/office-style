import React from 'react';
import { Link } from 'react-router-dom';

const CatalogLinks = () => {
    return (
        <div className="pt-36r pb-60r container">
            <h1 className="mb-60r">Katalog</h1>

            {/* links list  */}
            <ul className="grid grid-cols-5 gap-8 max-1450:grid-cols-4 max-1150:grid-cols-3 max-900:grid-cols-2 max-580:grid-cols-1 max-440:gap-6">
                <li>
                    <Link to="bdsh" rel='noopener' className='flex relative items-end rounded-2.5xl h-214px pt-5 pb-7 px-8 bg-cover bg-center bg-primary-gray-20 bg-catalog-img1 bg-no-repeat'>
                        <h3 className="relative z-1 text-medium-24 text-white">Ijroiya idoralari</h3>
                        <div className="absolute z-0 top-0 right-0 rounded-2.5xl w-full h-full bg-black bg-opacity-50"></div>
                    </Link>
                </li>
                <li>
                    <Link to="furniture-for-staff" rel='noopener' className='flex relative items-end rounded-2.5xl h-214px pt-5 pb-7 px-8 bg-cover bg-center bg-primary-gray-20 bg-catalog-img2 bg-no-repeat'>
                        <h3 className="relative z-1 text-medium-24 text-white">Xodimlar uchun mebel</h3>
                        <div className="absolute z-0 top-0 right-0 rounded-2.5xl w-full h-full bg-black bg-opacity-50"></div>
                    </Link>
                </li>
                <li>
                    <Link to="bdsh" rel='noopener' className='flex relative items-end rounded-2.5xl h-214px pt-5 pb-7 px-8 bg-cover bg-center bg-primary-gray-20 bg-catalog-img3 bg-no-repeat'>
                        <h3 className="relative z-1 text-medium-24 text-white">Ofis kreslolari</h3>
                        <div className="absolute z-0 top-0 right-0 rounded-2.5xl w-full h-full bg-black bg-opacity-50"></div>
                    </Link>
                </li>
                <li>
                    <Link to="bdsh" rel='noopener' className='flex relative items-end rounded-2.5xl h-214px pt-5 pb-7 px-8 bg-cover bg-center bg-primary-gray-20 bg-catalog-img4 bg-no-repeat'>
                        <h3 className="relative z-1 text-medium-24 text-white">Ofis divanlari</h3>
                        <div className="absolute z-0 top-0 right-0 rounded-2.5xl w-full h-full bg-black bg-opacity-50"></div>
                    </Link>
                </li>
                <li>
                    <Link to="bdsh" rel='noopener' className='flex relative items-end rounded-2.5xl h-214px pt-5 pb-7 px-8 bg-cover bg-center bg-primary-gray-20 bg-catalog-img5 bg-no-repeat'>
                        <h3 className="relative z-1 text-medium-24 text-white">Qabul qilish stollari</h3>
                        <div className="absolute z-0 top-0 right-0 rounded-2.5xl w-full h-full bg-black bg-opacity-50"></div>
                    </Link>
                </li>
                <li>
                    <Link to="bdsh" rel='noopener' className='flex relative items-end rounded-2.5xl h-214px pt-5 pb-7 px-8 bg-cover bg-center bg-primary-gray-20 bg-catalog-img6 bg-no-repeat'>
                        <h3 className="relative z-1 text-medium-24 text-white">Uchrashuv stollari</h3>
                        <div className="absolute z-0 top-0 right-0 rounded-2.5xl w-full h-full bg-black bg-opacity-50"></div>
                    </Link>
                </li>
                <li>
                    <Link to="bdsh" rel='noopener' className='flex relative items-end rounded-2.5xl h-214px pt-5 pb-7 px-8 bg-cover bg-center bg-primary-gray-20 bg-catalog-img7 bg-no-repeat'>
                        <h3 className="relative z-1 text-medium-24 text-white">Ko'p kishilik bo'limlar</h3>
                        <div className="absolute z-0 top-0 right-0 rounded-2.5xl w-full h-full bg-black bg-opacity-50"></div>
                    </Link>
                </li>
                <li>
                    <Link to="bdsh" rel='noopener' className='flex relative items-end rounded-2.5xl h-214px pt-5 pb-7 px-8 bg-cover bg-center bg-primary-gray-20 bg-catalog-img8 bg-no-repeat'>
                        <h3 className="relative z-1 text-medium-24 text-white">Ofis stollari</h3>
                        <div className="absolute z-0 top-0 right-0 rounded-2.5xl w-full h-full bg-black bg-opacity-50"></div>
                    </Link>
                </li>
                <li>
                    <Link to="bdsh" rel='noopener' className='flex relative items-end rounded-2.5xl h-214px pt-5 pb-7 px-8 bg-cover bg-center bg-primary-gray-20 bg-catalog-img9 bg-no-repeat'>
                        <h3 className="relative z-1 text-medium-24 text-white">Ofis kabinetlari</h3>
                        <div className="absolute z-0 top-0 right-0 rounded-2.5xl w-full h-full bg-black bg-opacity-50"></div>
                    </Link>
                </li>
                <li>
                    <Link to="bdsh" rel='noopener' className='flex relative items-end rounded-2.5xl h-214px pt-5 pb-7 px-8 bg-cover bg-center bg-primary-gray-20 bg-catalog-img10 bg-no-repeat'>
                        <h3 className="relative z-1 text-medium-24 text-white">Ofis shkaflari</h3>
                        <div className="absolute z-0 top-0 right-0 rounded-2.5xl w-full h-full bg-black bg-opacity-50"></div>
                    </Link>
                </li>
            </ul>
        </div>
    )
};

export default CatalogLinks;
