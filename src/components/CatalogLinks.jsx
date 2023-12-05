import React from 'react';
import { Link } from 'react-router-dom';

const CatalogLinks = () => {
    return (
        <div className="pt-36r pb-60r container">
            <h1 className="mb-60r">Katalog</h1>

            {/* links list  */}
            <ul className="grid grid-cols-4 gap-8 max-1150:grid-cols-3 max-900:grid-cols-2 max-580:grid-cols-1 max-440:gap-6">
                <li>
                    <Link to="boshqaruvchilar-uchun" rel='noopener' className='flex relative items-end rounded-2.5xl h-64 pt-5 pb-7 px-8 bg-cover bg-center bg-primary-gray-20 bg-catalog-img1 bg-no-repeat max-1350:h-52 max-1150:h-60 max-940:h-52 max-900:h-60 max-440:h-56'>
                        <h3 className="relative z-1 text-medium-24 text-white">Boshqaruvchilar uchun kabinet</h3>
                        <div className="absolute z-0 top-0 right-0 rounded-2.5xl w-full h-full bg-black bg-opacity-50"></div>
                    </Link>
                </li>
                <li>
                    <Link to="xodimlar-uchun" rel='noopener' className='flex relative items-end rounded-2.5xl h-64 pt-5 pb-7 px-8 bg-cover bg-center bg-primary-gray-20 bg-catalog-img2 bg-no-repeat max-1350:h-52 max-1150:h-60 max-940:h-52 max-900:h-60 max-440:h-56'>
                        <h3 className="relative z-1 text-medium-24 text-white">Xodimlar uchun kabinet</h3>
                        <div className="absolute z-0 top-0 right-0 rounded-2.5xl w-full h-full bg-black bg-opacity-50"></div>
                    </Link>
                </li>
                <li>
                    <Link to="boshqaruvchi-stuli" rel='noopener' className='flex relative items-end rounded-2.5xl h-64 pt-5 pb-7 px-8 bg-cover bg-center bg-primary-gray-20 bg-catalog-img9 bg-no-repeat max-1350:h-52 max-1150:h-60 max-940:h-52 max-900:h-60 max-440:h-56'>
                        <h3 className="relative z-1 text-medium-24 text-white">Boshqaruvchilar uchun stul</h3>
                        <div className="absolute z-0 top-0 right-0 rounded-2.5xl w-full h-full bg-black bg-opacity-50"></div>
                    </Link>
                </li>
                <li>
                    <Link to="ofis-stuli" rel='noopener' className='flex relative items-end rounded-2.5xl h-64 pt-5 pb-7 px-8 bg-cover bg-center bg-primary-gray-20 bg-catalog-img3 bg-no-repeat max-1350:h-52 max-1150:h-60 max-940:h-52 max-900:h-60 max-440:h-56'>
                        <h3 className="relative z-1 text-medium-24 text-white">Ofis stullari</h3>
                        <div className="absolute z-0 top-0 right-0 rounded-2.5xl w-full h-full bg-black bg-opacity-50"></div>
                    </Link>
                </li>
                <li>
                    <Link to="ofis-divani" rel='noopener' className='flex relative items-end rounded-2.5xl h-64 pt-5 pb-7 px-8 bg-cover bg-center bg-primary-gray-20 bg-catalog-img4 bg-no-repeat max-1350:h-52 max-1150:h-60 max-940:h-52 max-900:h-60 max-440:h-56'>
                        <h3 className="relative z-1 text-medium-24 text-white">Ofis divanlari</h3>
                        <div className="absolute z-0 top-0 right-0 rounded-2.5xl w-full h-full bg-black bg-opacity-50"></div>
                    </Link>
                </li>
                <li>
                    <Link to="qabul-qilish-stoli" rel='noopener' className='flex relative items-end rounded-2.5xl h-64 pt-5 pb-7 px-8 bg-cover bg-center bg-primary-gray-20 bg-catalog-img5 bg-no-repeat max-1350:h-52 max-1150:h-60 max-940:h-52 max-900:h-60 max-440:h-56'>
                        <h3 className="relative z-1 text-medium-24 text-white">Qabul qilish stollari</h3>
                        <div className="absolute z-0 top-0 right-0 rounded-2.5xl w-full h-full bg-black bg-opacity-50"></div>
                    </Link>
                </li>
                <li>
                    <Link to="call-markazlari-uchun-mebel" rel='noopener' className='flex relative items-end rounded-2.5xl h-64 pt-5 pb-7 px-8 bg-cover bg-center bg-primary-gray-20 bg-catalog-img7 bg-no-repeat max-1350:h-52 max-1150:h-60 max-940:h-52 max-900:h-60 max-440:h-56'>
                        <h3 className="relative z-1 text-medium-24 text-white">Call markazlari uchun mebel</h3>
                        <div className="absolute z-0 top-0 right-0 rounded-2.5xl w-full h-full bg-black bg-opacity-50"></div>
                    </Link>
                </li>
                <li>
                    <Link to="sud-mebellari" rel='noopener' className='flex relative items-end rounded-2.5xl h-64 pt-5 pb-7 px-8 bg-cover bg-center bg-primary-gray-20 bg-catalog-img8 bg-no-repeat max-1350:h-52 max-1150:h-60 max-940:h-52 max-900:h-60 max-440:h-56'>
                        <h3 className="relative z-1 text-medium-24 text-white">Sud uchun mebellar</h3>
                        <div className="absolute z-0 top-0 right-0 rounded-2.5xl w-full h-full bg-black bg-opacity-50"></div>
                    </Link>
                </li>
            </ul>
        </div>
    )
};

export default CatalogLinks;
