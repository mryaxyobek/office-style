import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// img 
import arrowIcon from '../assets/images/svg/right-solid-arrow-icon.svg';
import leftArrowIcon from '../assets/images/svg/left-arrow-icon.svg';

const Menu = () => {
    const [filterLinks, setFilterLinks] = useState(1);
    const [openCatalogLinks, setOpenCatalogLinks] = useState(false);
    const [openCategoryLinks, setOpenCategoryLinks] = useState(0);
    return (
        <div className='w-full min-h-full bg-white pt-16 pb-5 shadow-md max-640:pt-8 max-640:pb-7 max-640:h-screen relative'>
            <div className="container">

                {/* tablet laptop ... */}
                <div className="flex-start justify-between gap-5 max-640:hidden">
                    {/* buttons */}
                    <div className="grid grid-cols-1 gap-6 catalog-filter-buttons min-w-max">
                        <button onClick={() => setFilterLinks(1)} className={`${filterLinks == 1 ? 'active-button' : ''} text-medium-20 text-primary-gray-50 text-start`}>Кабинеты руководителя</button>
                        <button onClick={() => setFilterLinks(2)} className={`${filterLinks == 2 ? 'active-button' : ''} text-medium-20 text-primary-gray-50 text-start`}>Мебель для персонала</button>
                        <button onClick={() => setFilterLinks(3)} className={`${filterLinks == 3 ? 'active-button' : ''} text-medium-20 text-primary-gray-50 text-start`}>Офисные кресла</button>
                        <button onClick={() => setFilterLinks(4)} className={`${filterLinks == 4 ? 'active-button' : ''} text-medium-20 text-primary-gray-50 text-start`}>Офисные диваны</button>
                        <button onClick={() => setFilterLinks(5)} className={`${filterLinks == 5 ? 'active-button' : ''} text-medium-20 text-primary-gray-50 text-start`}>Стойки рецепшн</button>
                        <button onClick={() => setFilterLinks(6)} className={`${filterLinks == 6 ? 'active-button' : ''} text-medium-20 text-primary-gray-50 text-start`}>Столы для переговоров</button>
                        <button onClick={() => setFilterLinks(7)} className={`${filterLinks == 7 ? 'active-button' : ''} text-medium-20 text-primary-gray-50 text-start`}>Многоместные секции</button>
                        <button onClick={() => setFilterLinks(8)} className={`${filterLinks == 8 ? 'active-button' : ''} text-medium-20 text-primary-gray-50 text-start`}>Офисные столы</button>
                        <button onClick={() => setFilterLinks(9)} className={`${filterLinks == 9 ? 'active-button' : ''} text-medium-20 text-primary-gray-50 text-start`}>Офисные шкафы</button>
                        <button onClick={() => setFilterLinks(10)} className={`${filterLinks == 10 ? 'active-button' : ''} text-medium-20 text-primary-gray-50 text-start`}>Офисные перегородки</button>
                    </div>

                    {/* links list  */}
                    <ul className="relative overflow-hidden max-w-1312px w-full h-780px catalog-links-wrapper-parent">
                        <li className={`${filterLinks == 1 ? 'show-links-wrapper' : ''} grid absolute overflow-y-auto grid-cols-3 gap-8 w-full h-full top-0 right-0 -translate-x-full transition-transform-2 max-1200:grid-cols-2 max-940:gap-5 max-900:grid-cols-1`}>

                            {/* column  */}
                            <ul className="space-y-8">

                                {/* part */}
                                <li className="space-y-4">
                                    {/* title  */}
                                    <h3 className="text-medium-18">
                                        <Link to='/'>
                                            <span>Кабинеты руководителя </span>
                                            <span className="text-secondary-gray-40">(365)</span>
                                        </Link>
                                    </h3>
                                    <ul className="space-y-2 pl-3 text-regular-16 text-primary-gray-70">
                                        <li>
                                            <Link to='/'>В наличии</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>Со скидкой</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>Кабинеты в стиле loft</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>Классика</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>Белорусские</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>С матовым покрытием</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>На металлокаркасе</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>Домашние</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>Эконом-класс</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>С регулируемой высотой стола</Link>
                                        </li>
                                    </ul>
                                </li>

                                {/* part */}
                                <li className="space-y-4">
                                    {/* title  */}
                                    <h3 className="text-medium-18">
                                        <Link to='/'>
                                            <span>Столы для руководителя </span>
                                            <span className="text-secondary-gray-40">(1561)</span>
                                        </Link>
                                    </h3>
                                    <ul className="space-y-2 pl-3 text-regular-16 text-primary-gray-70">
                                        <li>
                                            <Link to='/'>В наличии</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>Со скидкой</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>Кабинеты в стиле loft</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>Классика</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>Белорусские</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>С матовым покрытием</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>На металлокаркасе</Link>
                                        </li>
                                    </ul>
                                </li>

                                {/* part */}
                                <li className="space-y-4">
                                    {/* title  */}
                                    <h3 className="text-medium-18">
                                        <Link to='/'>
                                            <span>Брифинг </span>
                                            <span className="text-secondary-gray-40">(365)</span>
                                        </Link>
                                    </h3>
                                    <ul className="space-y-2 pl-3 text-regular-16 text-primary-gray-70">
                                        <li>
                                            <Link to='/'>В наличии</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>Со скидкой</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>Кабинеты в стиле loft</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>Классика</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>Белорусские</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>С матовым покрытием</Link>
                                        </li>
                                    </ul>
                                </li>
                            </ul>

                            {/* column  */}
                            <ul className="space-y-8">

                                {/* part */}
                                <li className="space-y-4">
                                    {/* title  */}
                                    <h3 className="text-medium-18">
                                        <Link to='/'>
                                            <span>Офисные тумбы </span>
                                            <span className="text-secondary-gray-40">(365)</span>
                                        </Link>
                                    </h3>
                                    <ul className="space-y-2 pl-3 text-regular-16 text-primary-gray-70">
                                        <li>
                                            <Link to='/'>В наличии</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>Со скидкой</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>Кабинеты в стиле loft</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>Классика</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>Белорусские</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>С матовым покрытием</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>На металлокаркасе</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>Домашние</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>Эконом-класс</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>С регулируемой высотой стола</Link>
                                        </li>
                                    </ul>
                                </li>

                                {/* part */}
                                <li className="space-y-4">
                                    {/* title  */}
                                    <h3 className="text-medium-18">
                                        <Link to='/'>
                                            <span>Офисные шкафы </span>
                                            <span className="text-secondary-gray-40">(1561)</span>
                                        </Link>
                                    </h3>
                                    <ul className="space-y-2 pl-3 text-regular-16 text-primary-gray-70">
                                        <li>
                                            <Link to='/'>В наличии</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>Со скидкой</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>Кабинеты в стиле loft</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>Классика</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>Белорусские</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>С матовым покрытием</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>На металлокаркасе</Link>
                                        </li>
                                    </ul>
                                </li>
                            </ul>

                            {/* column  */}
                            <ul className="space-y-8">

                                {/* part */}
                                <li className="space-y-4">
                                    {/* title  */}
                                    <h3 className="text-medium-18">
                                        <Link to='/'>
                                            <span>Кабинеты руководителя </span>
                                            <span className="text-secondary-gray-40">(365)</span>
                                        </Link>
                                    </h3>
                                    <ul className="space-y-2 pl-3 text-regular-16 text-primary-gray-70">
                                        <li>
                                            <Link to='/'>В наличии</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>Со скидкой</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>Кабинеты в стиле loft</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>Классика</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>Белорусские</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>С матовым покрытием</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>На металлокаркасе</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>Домашние</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>Эконом-класс</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>С регулируемой высотой стола</Link>
                                        </li>
                                    </ul>
                                </li>

                                {/* part */}
                                <li className="space-y-4">
                                    {/* title  */}
                                    <h3 className="text-medium-18">
                                        <Link to='/'>
                                            <span>Столы для руководителя </span>
                                            <span className="text-secondary-gray-40">(1561)</span>
                                        </Link>
                                    </h3>
                                    <ul className="space-y-2 pl-3 text-regular-16 text-primary-gray-70">
                                        <li>
                                            <Link to='/'>В наличии</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>Со скидкой</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>Кабинеты в стиле loft</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>Классика</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>Белорусские</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>С матовым покрытием</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>На металлокаркасе</Link>
                                        </li>
                                    </ul>
                                </li>

                                {/* part */}
                                <li className="space-y-4">
                                    {/* title  */}
                                    <h3 className="text-medium-18">
                                        <Link to='/'>
                                            <span>Брифинг </span>
                                            <span className="text-secondary-gray-40">(365)</span>
                                        </Link>
                                    </h3>
                                    <ul className="space-y-2 pl-3 text-regular-16 text-primary-gray-70">
                                        <li>
                                            <Link to='/'>В наличии</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>Со скидкой</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>Кабинеты в стиле loft</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>Классика</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>Белорусские</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>С матовым покрытием</Link>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>

                        <li className={`${filterLinks == 2 ? 'show-links-wrapper' : ''} grid absolute overflow-y-auto grid-cols-3 gap-8 w-full h-full top-0 right-0 -translate-x-full transition-transform-2 max-1200:grid-cols-2 max-940:gap-5 max-900:grid-cols-1`}>

                            {/* column  */}
                            <ul className="space-y-8">

                                {/* part */}
                                <li className="space-y-4">
                                    {/* title  */}
                                    <h3 className="text-medium-18">
                                        <Link to='/'>
                                            <span>Кабинеты руководителя </span>
                                            <span className="text-secondary-gray-40">(365)</span>
                                        </Link>
                                    </h3>
                                    <ul className="space-y-2 pl-3 text-regular-16 text-primary-gray-70">
                                        <li>
                                            <Link to='/'>В наличии</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>Со скидкой</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>Кабинеты в стиле loft</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>Классика</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>Белорусские</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>С матовым покрытием</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>На металлокаркасе</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>Домашние</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>Эконом-класс</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>С регулируемой высотой стола</Link>
                                        </li>
                                    </ul>
                                </li>

                                {/* part */}
                                <li className="space-y-4">
                                    {/* title  */}
                                    <h3 className="text-medium-18">
                                        <Link to='/'>
                                            <span>Столы для руководителя </span>
                                            <span className="text-secondary-gray-40">(1561)</span>
                                        </Link>
                                    </h3>
                                    <ul className="space-y-2 pl-3 text-regular-16 text-primary-gray-70">
                                        <li>
                                            <Link to='/'>В наличии</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>Со скидкой</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>Кабинеты в стиле loft</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>Классика</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>Белорусские</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>С матовым покрытием</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>На металлокаркасе</Link>
                                        </li>
                                    </ul>
                                </li>
                            </ul>

                            {/* column  */}
                            <ul className="space-y-8">

                                {/* part */}
                                <li className="space-y-4">
                                    {/* title  */}
                                    <h3 className="text-medium-18">
                                        <Link to='/'>
                                            <span>Офисные тумбы </span>
                                            <span className="text-secondary-gray-40">(365)</span>
                                        </Link>
                                    </h3>
                                    <ul className="space-y-2 pl-3 text-regular-16 text-primary-gray-70">
                                        <li>
                                            <Link to='/'>В наличии</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>Со скидкой</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>Кабинеты в стиле loft</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>Классика</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>Белорусские</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>С матовым покрытием</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>На металлокаркасе</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>Домашние</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>Эконом-класс</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>С регулируемой высотой стола</Link>
                                        </li>
                                    </ul>
                                </li>

                                {/* part */}
                                <li className="space-y-4">
                                    {/* title  */}
                                    <h3 className="text-medium-18">
                                        <Link to='/'>
                                            <span>Офисные шкафы </span>
                                            <span className="text-secondary-gray-40">(1561)</span>
                                        </Link>
                                    </h3>
                                    <ul className="space-y-2 pl-3 text-regular-16 text-primary-gray-70">
                                        <li>
                                            <Link to='/'>В наличии</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>Со скидкой</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>Кабинеты в стиле loft</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>Классика</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>Белорусские</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>С матовым покрытием</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>На металлокаркасе</Link>
                                        </li>
                                    </ul>
                                </li>
                            </ul>

                            {/* column  */}
                            <ul className="space-y-8">

                                {/* part */}
                                <li className="space-y-4">
                                    {/* title  */}
                                    <h3 className="text-medium-18">
                                        <Link to='/'>
                                            <span>Кабинеты руководителя </span>
                                            <span className="text-secondary-gray-40">(365)</span>
                                        </Link>
                                    </h3>
                                    <ul className="space-y-2 pl-3 text-regular-16 text-primary-gray-70">
                                        <li>
                                            <Link to='/'>В наличии</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>Со скидкой</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>Кабинеты в стиле loft</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>Классика</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>Белорусские</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>С матовым покрытием</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>На металлокаркасе</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>Домашние</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>Эконом-класс</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>С регулируемой высотой стола</Link>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li className={`${filterLinks == 3 ? 'show-links-wrapper' : ''} grid absolute overflow-y-auto grid-cols-3 gap-8 w-full h-full top-0 right-0 -translate-x-full transition-transform-2 max-1200:grid-cols-2 max-940:gap-5 max-900:grid-cols-1`}>

                            {/* column  */}
                            <ul className="space-y-8">

                                {/* part */}
                                <li className="space-y-4">
                                    {/* title  */}
                                    <h3 className="text-medium-18">
                                        <Link to='/'>
                                            <span>Кабинеты руководителя </span>
                                            <span className="text-secondary-gray-40">(365)</span>
                                        </Link>
                                    </h3>
                                    <ul className="space-y-2 pl-3 text-regular-16 text-primary-gray-70">
                                        <li>
                                            <Link to='/'>В наличии</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>Со скидкой</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>Кабинеты в стиле loft</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>Классика</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>Белорусские</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>С матовым покрытием</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>На металлокаркасе</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>Домашние</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>Эконом-класс</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>С регулируемой высотой стола</Link>
                                        </li>
                                    </ul>
                                </li>

                                {/* part */}
                                <li className="space-y-4">
                                    {/* title  */}
                                    <h3 className="text-medium-18">
                                        <Link to='/'>
                                            <span>Столы для руководителя </span>
                                            <span className="text-secondary-gray-40">(1561)</span>
                                        </Link>
                                    </h3>
                                    <ul className="space-y-2 pl-3 text-regular-16 text-primary-gray-70">
                                        <li>
                                            <Link to='/'>В наличии</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>Со скидкой</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>Кабинеты в стиле loft</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>Классика</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>Белорусские</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>С матовым покрытием</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>На металлокаркасе</Link>
                                        </li>
                                    </ul>
                                </li>

                                {/* part */}
                                <li className="space-y-4">
                                    {/* title  */}
                                    <h3 className="text-medium-18">
                                        <Link to='/'>
                                            <span>Брифинг </span>
                                            <span className="text-secondary-gray-40">(365)</span>
                                        </Link>
                                    </h3>
                                    <ul className="space-y-2 pl-3 text-regular-16 text-primary-gray-70">
                                        <li>
                                            <Link to='/'>В наличии</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>Со скидкой</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>Кабинеты в стиле loft</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>Классика</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>Белорусские</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>С матовым покрытием</Link>
                                        </li>
                                    </ul>
                                </li>
                            </ul>

                            {/* column  */}
                            <ul className="space-y-8">

                                {/* part */}
                                <li className="space-y-4">
                                    {/* title  */}
                                    <h3 className="text-medium-18">
                                        <Link to='/'>
                                            <span>Офисные тумбы </span>
                                            <span className="text-secondary-gray-40">(365)</span>
                                        </Link>
                                    </h3>
                                    <ul className="space-y-2 pl-3 text-regular-16 text-primary-gray-70">
                                        <li>
                                            <Link to='/'>В наличии</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>Со скидкой</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>Кабинеты в стиле loft</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>Классика</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>Белорусские</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>С матовым покрытием</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>На металлокаркасе</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>Домашние</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>Эконом-класс</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>С регулируемой высотой стола</Link>
                                        </li>
                                    </ul>
                                </li>

                                {/* part */}
                                <li className="space-y-4">
                                    {/* title  */}
                                    <h3 className="text-medium-18">
                                        <Link to='/'>
                                            <span>Офисные шкафы </span>
                                            <span className="text-secondary-gray-40">(1561)</span>
                                        </Link>
                                    </h3>
                                    <ul className="space-y-2 pl-3 text-regular-16 text-primary-gray-70">
                                        <li>
                                            <Link to='/'>В наличии</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>Со скидкой</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>Кабинеты в стиле loft</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>Классика</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>Белорусские</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>С матовым покрытием</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>На металлокаркасе</Link>
                                        </li>
                                    </ul>
                                </li>
                            </ul>

                            {/* column  */}
                            <ul className="space-y-8">

                                {/* part */}
                                <li className="space-y-4">
                                    {/* title  */}
                                    <h3 className="text-medium-18">
                                        <Link to='/'>
                                            <span>Кабинеты руководителя </span>
                                            <span className="text-secondary-gray-40">(365)</span>
                                        </Link>
                                    </h3>
                                    <ul className="space-y-2 pl-3 text-regular-16 text-primary-gray-70">
                                        <li>
                                            <Link to='/'>В наличии</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>Со скидкой</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>Кабинеты в стиле loft</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>Классика</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>Белорусские</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>С матовым покрытием</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>На металлокаркасе</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>Домашние</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>Эконом-класс</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>С регулируемой высотой стола</Link>
                                        </li>
                                    </ul>
                                </li>

                                {/* part */}
                                <li className="space-y-4">
                                    {/* title  */}
                                    <h3 className="text-medium-18">
                                        <Link to='/'>
                                            <span>Столы для руководителя </span>
                                            <span className="text-secondary-gray-40">(1561)</span>
                                        </Link>
                                    </h3>
                                    <ul className="space-y-2 pl-3 text-regular-16 text-primary-gray-70">
                                        <li>
                                            <Link to='/'>В наличии</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>Со скидкой</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>Кабинеты в стиле loft</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>Классика</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>Белорусские</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>С матовым покрытием</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>На металлокаркасе</Link>
                                        </li>
                                    </ul>
                                </li>

                                {/* part */}
                                <li className="space-y-4">
                                    {/* title  */}
                                    <h3 className="text-medium-18">
                                        <Link to='/'>
                                            <span>Брифинг </span>
                                            <span className="text-secondary-gray-40">(365)</span>
                                        </Link>
                                    </h3>
                                    <ul className="space-y-2 pl-3 text-regular-16 text-primary-gray-70">
                                        <li>
                                            <Link to='/'>В наличии</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>Со скидкой</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>Кабинеты в стиле loft</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>Классика</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>Белорусские</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>С матовым покрытием</Link>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>

                        <li className={`${filterLinks == 4 ? 'show-links-wrapper' : ''} grid absolute overflow-y-auto grid-cols-3 gap-8 w-full h-full top-0 right-0 -translate-x-full transition-transform-2 max-1200:grid-cols-2 max-940:gap-5 max-900:grid-cols-1`}>

                            {/* column  */}
                            <ul className="space-y-8">

                                {/* part */}
                                <li className="space-y-4">
                                    {/* title  */}
                                    <h3 className="text-medium-18">
                                        <Link to='/'>
                                            <span>Кабинеты руководителя </span>
                                            <span className="text-secondary-gray-40">(365)</span>
                                        </Link>
                                    </h3>
                                    <ul className="space-y-2 pl-3 text-regular-16 text-primary-gray-70">
                                        <li>
                                            <Link to='/'>В наличии</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>Со скидкой</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>Кабинеты в стиле loft</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>Классика</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>Белорусские</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>С матовым покрытием</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>На металлокаркасе</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>Домашние</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>Эконом-класс</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>С регулируемой высотой стола</Link>
                                        </li>
                                    </ul>
                                </li>

                                {/* part */}
                                <li className="space-y-4">
                                    {/* title  */}
                                    <h3 className="text-medium-18">
                                        <Link to='/'>
                                            <span>Столы для руководителя </span>
                                            <span className="text-secondary-gray-40">(1561)</span>
                                        </Link>
                                    </h3>
                                    <ul className="space-y-2 pl-3 text-regular-16 text-primary-gray-70">
                                        <li>
                                            <Link to='/'>В наличии</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>Со скидкой</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>Кабинеты в стиле loft</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>Классика</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>Белорусские</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>С матовым покрытием</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>На металлокаркасе</Link>
                                        </li>
                                    </ul>
                                </li>
                            </ul>

                            {/* column  */}
                            <ul className="space-y-8">

                                {/* part */}
                                <li className="space-y-4">
                                    {/* title  */}
                                    <h3 className="text-medium-18">
                                        <Link to='/'>
                                            <span>Офисные тумбы </span>
                                            <span className="text-secondary-gray-40">(365)</span>
                                        </Link>
                                    </h3>
                                    <ul className="space-y-2 pl-3 text-regular-16 text-primary-gray-70">
                                        <li>
                                            <Link to='/'>В наличии</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>Со скидкой</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>Кабинеты в стиле loft</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>Классика</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>Белорусские</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>С матовым покрытием</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>На металлокаркасе</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>Домашние</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>Эконом-класс</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>С регулируемой высотой стола</Link>
                                        </li>
                                    </ul>
                                </li>

                                {/* part */}
                                <li className="space-y-4">
                                    {/* title  */}
                                    <h3 className="text-medium-18">
                                        <Link to='/'>
                                            <span>Офисные шкафы </span>
                                            <span className="text-secondary-gray-40">(1561)</span>
                                        </Link>
                                    </h3>
                                    <ul className="space-y-2 pl-3 text-regular-16 text-primary-gray-70">
                                        <li>
                                            <Link to='/'>В наличии</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>Со скидкой</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>Кабинеты в стиле loft</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>Классика</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>Белорусские</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>С матовым покрытием</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>На металлокаркасе</Link>
                                        </li>
                                    </ul>
                                </li>
                            </ul>

                            {/* column  */}
                            <ul className="space-y-8">

                                {/* part */}
                                <li className="space-y-4">
                                    {/* title  */}
                                    <h3 className="text-medium-18">
                                        <Link to='/'>
                                            <span>Кабинеты руководителя </span>
                                            <span className="text-secondary-gray-40">(365)</span>
                                        </Link>
                                    </h3>
                                    <ul className="space-y-2 pl-3 text-regular-16 text-primary-gray-70">
                                        <li>
                                            <Link to='/'>В наличии</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>Со скидкой</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>Кабинеты в стиле loft</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>Классика</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>Белорусские</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>С матовым покрытием</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>На металлокаркасе</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>Домашние</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>Эконом-класс</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>С регулируемой высотой стола</Link>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>

                        <li className={`${filterLinks == 5 ? 'show-links-wrapper' : ''} grid absolute overflow-y-auto grid-cols-3 gap-8 w-full h-full top-0 right-0 -translate-x-full transition-transform-2 max-1200:grid-cols-2 max-940:gap-5 max-900:grid-cols-1`}>

                            {/* column  */}
                            <ul className="space-y-8">

                                {/* part */}
                                <li className="space-y-4">
                                    {/* title  */}
                                    <h3 className="text-medium-18">
                                        <Link to='/'>
                                            <span>Кабинеты руководителя </span>
                                            <span className="text-secondary-gray-40">(365)</span>
                                        </Link>
                                    </h3>
                                    <ul className="space-y-2 pl-3 text-regular-16 text-primary-gray-70">
                                        <li>
                                            <Link to='/'>В наличии</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>Со скидкой</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>Кабинеты в стиле loft</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>Классика</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>Белорусские</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>С матовым покрытием</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>На металлокаркасе</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>Домашние</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>Эконом-класс</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>С регулируемой высотой стола</Link>
                                        </li>
                                    </ul>
                                </li>

                                {/* part */}
                                <li className="space-y-4">
                                    {/* title  */}
                                    <h3 className="text-medium-18">
                                        <Link to='/'>
                                            <span>Столы для руководителя </span>
                                            <span className="text-secondary-gray-40">(1561)</span>
                                        </Link>
                                    </h3>
                                    <ul className="space-y-2 pl-3 text-regular-16 text-primary-gray-70">
                                        <li>
                                            <Link to='/'>В наличии</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>Со скидкой</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>Кабинеты в стиле loft</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>Классика</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>Белорусские</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>С матовым покрытием</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>На металлокаркасе</Link>
                                        </li>
                                    </ul>
                                </li>

                                {/* part */}
                                <li className="space-y-4">
                                    {/* title  */}
                                    <h3 className="text-medium-18">
                                        <Link to='/'>
                                            <span>Брифинг </span>
                                            <span className="text-secondary-gray-40">(365)</span>
                                        </Link>
                                    </h3>
                                    <ul className="space-y-2 pl-3 text-regular-16 text-primary-gray-70">
                                        <li>
                                            <Link to='/'>В наличии</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>Со скидкой</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>Кабинеты в стиле loft</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>Классика</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>Белорусские</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>С матовым покрытием</Link>
                                        </li>
                                    </ul>
                                </li>
                            </ul>

                            {/* column  */}
                            <ul className="space-y-8">

                                {/* part */}
                                <li className="space-y-4">
                                    {/* title  */}
                                    <h3 className="text-medium-18">
                                        <Link to='/'>
                                            <span>Офисные тумбы </span>
                                            <span className="text-secondary-gray-40">(365)</span>
                                        </Link>
                                    </h3>
                                    <ul className="space-y-2 pl-3 text-regular-16 text-primary-gray-70">
                                        <li>
                                            <Link to='/'>В наличии</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>Со скидкой</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>Кабинеты в стиле loft</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>Классика</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>Белорусские</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>С матовым покрытием</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>На металлокаркасе</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>Домашние</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>Эконом-класс</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>С регулируемой высотой стола</Link>
                                        </li>
                                    </ul>
                                </li>

                                {/* part */}
                                <li className="space-y-4">
                                    {/* title  */}
                                    <h3 className="text-medium-18">
                                        <Link to='/'>
                                            <span>Офисные шкафы </span>
                                            <span className="text-secondary-gray-40">(1561)</span>
                                        </Link>
                                    </h3>
                                    <ul className="space-y-2 pl-3 text-regular-16 text-primary-gray-70">
                                        <li>
                                            <Link to='/'>В наличии</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>Со скидкой</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>Кабинеты в стиле loft</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>Классика</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>Белорусские</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>С матовым покрытием</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>На металлокаркасе</Link>
                                        </li>
                                    </ul>
                                </li>
                            </ul>

                            {/* column  */}
                            <ul className="space-y-8">

                                {/* part */}
                                <li className="space-y-4">
                                    {/* title  */}
                                    <h3 className="text-medium-18">
                                        <Link to='/'>
                                            <span>Кабинеты руководителя </span>
                                            <span className="text-secondary-gray-40">(365)</span>
                                        </Link>
                                    </h3>
                                    <ul className="space-y-2 pl-3 text-regular-16 text-primary-gray-70">
                                        <li>
                                            <Link to='/'>В наличии</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>Со скидкой</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>Кабинеты в стиле loft</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>Классика</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>Белорусские</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>С матовым покрытием</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>На металлокаркасе</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>Домашние</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>Эконом-класс</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>С регулируемой высотой стола</Link>
                                        </li>
                                    </ul>
                                </li>

                                {/* part */}
                                <li className="space-y-4">
                                    {/* title  */}
                                    <h3 className="text-medium-18">
                                        <Link to='/'>
                                            <span>Столы для руководителя </span>
                                            <span className="text-secondary-gray-40">(1561)</span>
                                        </Link>
                                    </h3>
                                    <ul className="space-y-2 pl-3 text-regular-16 text-primary-gray-70">
                                        <li>
                                            <Link to='/'>В наличии</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>Со скидкой</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>Кабинеты в стиле loft</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>Классика</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>Белорусские</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>С матовым покрытием</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>На металлокаркасе</Link>
                                        </li>
                                    </ul>
                                </li>

                                {/* part */}
                                <li className="space-y-4">
                                    {/* title  */}
                                    <h3 className="text-medium-18">
                                        <Link to='/'>
                                            <span>Брифинг </span>
                                            <span className="text-secondary-gray-40">(365)</span>
                                        </Link>
                                    </h3>
                                    <ul className="space-y-2 pl-3 text-regular-16 text-primary-gray-70">
                                        <li>
                                            <Link to='/'>В наличии</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>Со скидкой</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>Кабинеты в стиле loft</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>Классика</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>Белорусские</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>С матовым покрытием</Link>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>

                        <li className={`${filterLinks == 6 ? 'show-links-wrapper' : ''} grid absolute overflow-y-auto grid-cols-3 gap-8 w-full h-full top-0 right-0 -translate-x-full transition-transform-2 max-1200:grid-cols-2 max-940:gap-5 max-900:grid-cols-1`}>

                            {/* column  */}
                            <ul className="space-y-8">

                                {/* part */}
                                <li className="space-y-4">
                                    {/* title  */}
                                    <h3 className="text-medium-18">
                                        <Link to='/'>
                                            <span>Кабинеты руководителя </span>
                                            <span className="text-secondary-gray-40">(365)</span>
                                        </Link>
                                    </h3>
                                    <ul className="space-y-2 pl-3 text-regular-16 text-primary-gray-70">
                                        <li>
                                            <Link to='/'>В наличии</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>Со скидкой</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>Кабинеты в стиле loft</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>Классика</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>Белорусские</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>С матовым покрытием</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>На металлокаркасе</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>Домашние</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>Эконом-класс</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>С регулируемой высотой стола</Link>
                                        </li>
                                    </ul>
                                </li>

                                {/* part */}
                                <li className="space-y-4">
                                    {/* title  */}
                                    <h3 className="text-medium-18">
                                        <Link to='/'>
                                            <span>Столы для руководителя </span>
                                            <span className="text-secondary-gray-40">(1561)</span>
                                        </Link>
                                    </h3>
                                    <ul className="space-y-2 pl-3 text-regular-16 text-primary-gray-70">
                                        <li>
                                            <Link to='/'>В наличии</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>Со скидкой</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>Кабинеты в стиле loft</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>Классика</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>Белорусские</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>С матовым покрытием</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>На металлокаркасе</Link>
                                        </li>
                                    </ul>
                                </li>
                            </ul>

                            {/* column  */}
                            <ul className="space-y-8">

                                {/* part */}
                                <li className="space-y-4">
                                    {/* title  */}
                                    <h3 className="text-medium-18">
                                        <Link to='/'>
                                            <span>Офисные тумбы </span>
                                            <span className="text-secondary-gray-40">(365)</span>
                                        </Link>
                                    </h3>
                                    <ul className="space-y-2 pl-3 text-regular-16 text-primary-gray-70">
                                        <li>
                                            <Link to='/'>В наличии</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>Со скидкой</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>Кабинеты в стиле loft</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>Классика</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>Белорусские</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>С матовым покрытием</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>На металлокаркасе</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>Домашние</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>Эконом-класс</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>С регулируемой высотой стола</Link>
                                        </li>
                                    </ul>
                                </li>

                                {/* part */}
                                <li className="space-y-4">
                                    {/* title  */}
                                    <h3 className="text-medium-18">
                                        <Link to='/'>
                                            <span>Офисные шкафы </span>
                                            <span className="text-secondary-gray-40">(1561)</span>
                                        </Link>
                                    </h3>
                                    <ul className="space-y-2 pl-3 text-regular-16 text-primary-gray-70">
                                        <li>
                                            <Link to='/'>В наличии</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>Со скидкой</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>Кабинеты в стиле loft</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>Классика</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>Белорусские</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>С матовым покрытием</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>На металлокаркасе</Link>
                                        </li>
                                    </ul>
                                </li>
                            </ul>

                            {/* column  */}
                            <ul className="space-y-8">

                                {/* part */}
                                <li className="space-y-4">
                                    {/* title  */}
                                    <h3 className="text-medium-18">
                                        <Link to='/'>
                                            <span>Кабинеты руководителя </span>
                                            <span className="text-secondary-gray-40">(365)</span>
                                        </Link>
                                    </h3>
                                    <ul className="space-y-2 pl-3 text-regular-16 text-primary-gray-70">
                                        <li>
                                            <Link to='/'>В наличии</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>Со скидкой</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>Кабинеты в стиле loft</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>Классика</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>Белорусские</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>С матовым покрытием</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>На металлокаркасе</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>Домашние</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>Эконом-класс</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>С регулируемой высотой стола</Link>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>

                        <li className={`${filterLinks == 7 ? 'show-links-wrapper' : ''} grid absolute overflow-y-auto grid-cols-3 gap-8 w-full h-full top-0 right-0 -translate-x-full transition-transform-2 max-1200:grid-cols-2 max-940:gap-5 max-900:grid-cols-1`}>

                            {/* column  */}
                            <ul className="space-y-8">

                                {/* part */}
                                <li className="space-y-4">
                                    {/* title  */}
                                    <h3 className="text-medium-18">
                                        <Link to='/'>
                                            <span>Кабинеты руководителя </span>
                                            <span className="text-secondary-gray-40">(365)</span>
                                        </Link>
                                    </h3>
                                    <ul className="space-y-2 pl-3 text-regular-16 text-primary-gray-70">
                                        <li>
                                            <Link to='/'>В наличии</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>Со скидкой</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>Кабинеты в стиле loft</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>Классика</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>Белорусские</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>С матовым покрытием</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>На металлокаркасе</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>Домашние</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>Эконом-класс</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>С регулируемой высотой стола</Link>
                                        </li>
                                    </ul>
                                </li>

                                {/* part */}
                                <li className="space-y-4">
                                    {/* title  */}
                                    <h3 className="text-medium-18">
                                        <Link to='/'>
                                            <span>Столы для руководителя </span>
                                            <span className="text-secondary-gray-40">(1561)</span>
                                        </Link>
                                    </h3>
                                    <ul className="space-y-2 pl-3 text-regular-16 text-primary-gray-70">
                                        <li>
                                            <Link to='/'>В наличии</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>Со скидкой</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>Кабинеты в стиле loft</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>Классика</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>Белорусские</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>С матовым покрытием</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>На металлокаркасе</Link>
                                        </li>
                                    </ul>
                                </li>

                                {/* part */}
                                <li className="space-y-4">
                                    {/* title  */}
                                    <h3 className="text-medium-18">
                                        <Link to='/'>
                                            <span>Брифинг </span>
                                            <span className="text-secondary-gray-40">(365)</span>
                                        </Link>
                                    </h3>
                                    <ul className="space-y-2 pl-3 text-regular-16 text-primary-gray-70">
                                        <li>
                                            <Link to='/'>В наличии</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>Со скидкой</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>Кабинеты в стиле loft</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>Классика</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>Белорусские</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>С матовым покрытием</Link>
                                        </li>
                                    </ul>
                                </li>
                            </ul>

                            {/* column  */}
                            <ul className="space-y-8">

                                {/* part */}
                                <li className="space-y-4">
                                    {/* title  */}
                                    <h3 className="text-medium-18">
                                        <Link to='/'>
                                            <span>Офисные тумбы </span>
                                            <span className="text-secondary-gray-40">(365)</span>
                                        </Link>
                                    </h3>
                                    <ul className="space-y-2 pl-3 text-regular-16 text-primary-gray-70">
                                        <li>
                                            <Link to='/'>В наличии</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>Со скидкой</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>Кабинеты в стиле loft</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>Классика</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>Белорусские</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>С матовым покрытием</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>На металлокаркасе</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>Домашние</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>Эконом-класс</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>С регулируемой высотой стола</Link>
                                        </li>
                                    </ul>
                                </li>

                                {/* part */}
                                <li className="space-y-4">
                                    {/* title  */}
                                    <h3 className="text-medium-18">
                                        <Link to='/'>
                                            <span>Офисные шкафы </span>
                                            <span className="text-secondary-gray-40">(1561)</span>
                                        </Link>
                                    </h3>
                                    <ul className="space-y-2 pl-3 text-regular-16 text-primary-gray-70">
                                        <li>
                                            <Link to='/'>В наличии</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>Со скидкой</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>Кабинеты в стиле loft</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>Классика</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>Белорусские</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>С матовым покрытием</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>На металлокаркасе</Link>
                                        </li>
                                    </ul>
                                </li>
                            </ul>

                            {/* column  */}
                            <ul className="space-y-8">

                                {/* part */}
                                <li className="space-y-4">
                                    {/* title  */}
                                    <h3 className="text-medium-18">
                                        <Link to='/'>
                                            <span>Кабинеты руководителя </span>
                                            <span className="text-secondary-gray-40">(365)</span>
                                        </Link>
                                    </h3>
                                    <ul className="space-y-2 pl-3 text-regular-16 text-primary-gray-70">
                                        <li>
                                            <Link to='/'>В наличии</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>Со скидкой</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>Кабинеты в стиле loft</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>Классика</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>Белорусские</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>С матовым покрытием</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>На металлокаркасе</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>Домашние</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>Эконом-класс</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>С регулируемой высотой стола</Link>
                                        </li>
                                    </ul>
                                </li>

                                {/* part */}
                                <li className="space-y-4">
                                    {/* title  */}
                                    <h3 className="text-medium-18">
                                        <Link to='/'>
                                            <span>Столы для руководителя </span>
                                            <span className="text-secondary-gray-40">(1561)</span>
                                        </Link>
                                    </h3>
                                    <ul className="space-y-2 pl-3 text-regular-16 text-primary-gray-70">
                                        <li>
                                            <Link to='/'>В наличии</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>Со скидкой</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>Кабинеты в стиле loft</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>Классика</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>Белорусские</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>С матовым покрытием</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>На металлокаркасе</Link>
                                        </li>
                                    </ul>
                                </li>

                                {/* part */}
                                <li className="space-y-4">
                                    {/* title  */}
                                    <h3 className="text-medium-18">
                                        <Link to='/'>
                                            <span>Брифинг </span>
                                            <span className="text-secondary-gray-40">(365)</span>
                                        </Link>
                                    </h3>
                                    <ul className="space-y-2 pl-3 text-regular-16 text-primary-gray-70">
                                        <li>
                                            <Link to='/'>В наличии</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>Со скидкой</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>Кабинеты в стиле loft</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>Классика</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>Белорусские</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>С матовым покрытием</Link>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>

                        <li className={`${filterLinks == 8 ? 'show-links-wrapper' : ''} grid absolute overflow-y-auto grid-cols-3 gap-8 w-full h-full top-0 right-0 -translate-x-full transition-transform-2 max-1200:grid-cols-2 max-940:gap-5 max-900:grid-cols-1`}>

                            {/* column  */}
                            <ul className="space-y-8">

                                {/* part */}
                                <li className="space-y-4">
                                    {/* title  */}
                                    <h3 className="text-medium-18">
                                        <Link to='/'>
                                            <span>Кабинеты руководителя </span>
                                            <span className="text-secondary-gray-40">(365)</span>
                                        </Link>
                                    </h3>
                                    <ul className="space-y-2 pl-3 text-regular-16 text-primary-gray-70">
                                        <li>
                                            <Link to='/'>В наличии</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>Со скидкой</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>Кабинеты в стиле loft</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>Классика</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>Белорусские</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>С матовым покрытием</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>На металлокаркасе</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>Домашние</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>Эконом-класс</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>С регулируемой высотой стола</Link>
                                        </li>
                                    </ul>
                                </li>

                                {/* part */}
                                <li className="space-y-4">
                                    {/* title  */}
                                    <h3 className="text-medium-18">
                                        <Link to='/'>
                                            <span>Столы для руководителя </span>
                                            <span className="text-secondary-gray-40">(1561)</span>
                                        </Link>
                                    </h3>
                                    <ul className="space-y-2 pl-3 text-regular-16 text-primary-gray-70">
                                        <li>
                                            <Link to='/'>В наличии</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>Со скидкой</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>Кабинеты в стиле loft</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>Классика</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>Белорусские</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>С матовым покрытием</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>На металлокаркасе</Link>
                                        </li>
                                    </ul>
                                </li>
                            </ul>

                            {/* column  */}
                            <ul className="space-y-8">

                                {/* part */}
                                <li className="space-y-4">
                                    {/* title  */}
                                    <h3 className="text-medium-18">
                                        <Link to='/'>
                                            <span>Офисные тумбы </span>
                                            <span className="text-secondary-gray-40">(365)</span>
                                        </Link>
                                    </h3>
                                    <ul className="space-y-2 pl-3 text-regular-16 text-primary-gray-70">
                                        <li>
                                            <Link to='/'>В наличии</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>Со скидкой</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>Кабинеты в стиле loft</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>Классика</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>Белорусские</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>С матовым покрытием</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>На металлокаркасе</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>Домашние</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>Эконом-класс</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>С регулируемой высотой стола</Link>
                                        </li>
                                    </ul>
                                </li>

                                {/* part */}
                                <li className="space-y-4">
                                    {/* title  */}
                                    <h3 className="text-medium-18">
                                        <Link to='/'>
                                            <span>Офисные шкафы </span>
                                            <span className="text-secondary-gray-40">(1561)</span>
                                        </Link>
                                    </h3>
                                    <ul className="space-y-2 pl-3 text-regular-16 text-primary-gray-70">
                                        <li>
                                            <Link to='/'>В наличии</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>Со скидкой</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>Кабинеты в стиле loft</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>Классика</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>Белорусские</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>С матовым покрытием</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>На металлокаркасе</Link>
                                        </li>
                                    </ul>
                                </li>
                            </ul>

                            {/* column  */}
                            <ul className="space-y-8">

                                {/* part */}
                                <li className="space-y-4">
                                    {/* title  */}
                                    <h3 className="text-medium-18">
                                        <Link to='/'>
                                            <span>Кабинеты руководителя </span>
                                            <span className="text-secondary-gray-40">(365)</span>
                                        </Link>
                                    </h3>
                                    <ul className="space-y-2 pl-3 text-regular-16 text-primary-gray-70">
                                        <li>
                                            <Link to='/'>В наличии</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>Со скидкой</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>Кабинеты в стиле loft</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>Классика</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>Белорусские</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>С матовым покрытием</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>На металлокаркасе</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>Домашние</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>Эконом-класс</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>С регулируемой высотой стола</Link>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>

                        <li className={`${filterLinks == 9 ? 'show-links-wrapper' : ''} grid absolute overflow-y-auto grid-cols-3 gap-8 w-full h-full top-0 right-0 -translate-x-full transition-transform-2 max-1200:grid-cols-2 max-940:gap-5 max-900:grid-cols-1`}>

                            {/* column  */}
                            <ul className="space-y-8">

                                {/* part */}
                                <li className="space-y-4">
                                    {/* title  */}
                                    <h3 className="text-medium-18">
                                        <Link to='/'>
                                            <span>Кабинеты руководителя </span>
                                            <span className="text-secondary-gray-40">(365)</span>
                                        </Link>
                                    </h3>
                                    <ul className="space-y-2 pl-3 text-regular-16 text-primary-gray-70">
                                        <li>
                                            <Link to='/'>В наличии</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>Со скидкой</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>Кабинеты в стиле loft</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>Классика</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>Белорусские</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>С матовым покрытием</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>На металлокаркасе</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>Домашние</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>Эконом-класс</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>С регулируемой высотой стола</Link>
                                        </li>
                                    </ul>
                                </li>

                                {/* part */}
                                <li className="space-y-4">
                                    {/* title  */}
                                    <h3 className="text-medium-18">
                                        <Link to='/'>
                                            <span>Столы для руководителя </span>
                                            <span className="text-secondary-gray-40">(1561)</span>
                                        </Link>
                                    </h3>
                                    <ul className="space-y-2 pl-3 text-regular-16 text-primary-gray-70">
                                        <li>
                                            <Link to='/'>В наличии</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>Со скидкой</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>Кабинеты в стиле loft</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>Классика</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>Белорусские</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>С матовым покрытием</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>На металлокаркасе</Link>
                                        </li>
                                    </ul>
                                </li>

                                {/* part */}
                                <li className="space-y-4">
                                    {/* title  */}
                                    <h3 className="text-medium-18">
                                        <Link to='/'>
                                            <span>Брифинг </span>
                                            <span className="text-secondary-gray-40">(365)</span>
                                        </Link>
                                    </h3>
                                    <ul className="space-y-2 pl-3 text-regular-16 text-primary-gray-70">
                                        <li>
                                            <Link to='/'>В наличии</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>Со скидкой</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>Кабинеты в стиле loft</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>Классика</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>Белорусские</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>С матовым покрытием</Link>
                                        </li>
                                    </ul>
                                </li>
                            </ul>

                            {/* column  */}
                            <ul className="space-y-8">

                                {/* part */}
                                <li className="space-y-4">
                                    {/* title  */}
                                    <h3 className="text-medium-18">
                                        <Link to='/'>
                                            <span>Офисные тумбы </span>
                                            <span className="text-secondary-gray-40">(365)</span>
                                        </Link>
                                    </h3>
                                    <ul className="space-y-2 pl-3 text-regular-16 text-primary-gray-70">
                                        <li>
                                            <Link to='/'>В наличии</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>Со скидкой</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>Кабинеты в стиле loft</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>Классика</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>Белорусские</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>С матовым покрытием</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>На металлокаркасе</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>Домашние</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>Эконом-класс</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>С регулируемой высотой стола</Link>
                                        </li>
                                    </ul>
                                </li>

                                {/* part */}
                                <li className="space-y-4">
                                    {/* title  */}
                                    <h3 className="text-medium-18">
                                        <Link to='/'>
                                            <span>Офисные шкафы </span>
                                            <span className="text-secondary-gray-40">(1561)</span>
                                        </Link>
                                    </h3>
                                    <ul className="space-y-2 pl-3 text-regular-16 text-primary-gray-70">
                                        <li>
                                            <Link to='/'>В наличии</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>Со скидкой</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>Кабинеты в стиле loft</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>Классика</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>Белорусские</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>С матовым покрытием</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>На металлокаркасе</Link>
                                        </li>
                                    </ul>
                                </li>
                            </ul>

                            {/* column  */}
                            <ul className="space-y-8">

                                {/* part */}
                                <li className="space-y-4">
                                    {/* title  */}
                                    <h3 className="text-medium-18">
                                        <Link to='/'>
                                            <span>Кабинеты руководителя </span>
                                            <span className="text-secondary-gray-40">(365)</span>
                                        </Link>
                                    </h3>
                                    <ul className="space-y-2 pl-3 text-regular-16 text-primary-gray-70">
                                        <li>
                                            <Link to='/'>В наличии</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>Со скидкой</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>Кабинеты в стиле loft</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>Классика</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>Белорусские</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>С матовым покрытием</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>На металлокаркасе</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>Домашние</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>Эконом-класс</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>С регулируемой высотой стола</Link>
                                        </li>
                                    </ul>
                                </li>

                                {/* part */}
                                <li className="space-y-4">
                                    {/* title  */}
                                    <h3 className="text-medium-18">
                                        <Link to='/'>
                                            <span>Столы для руководителя </span>
                                            <span className="text-secondary-gray-40">(1561)</span>
                                        </Link>
                                    </h3>
                                    <ul className="space-y-2 pl-3 text-regular-16 text-primary-gray-70">
                                        <li>
                                            <Link to='/'>В наличии</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>Со скидкой</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>Кабинеты в стиле loft</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>Классика</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>Белорусские</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>С матовым покрытием</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>На металлокаркасе</Link>
                                        </li>
                                    </ul>
                                </li>

                                {/* part */}
                                <li className="space-y-4">
                                    {/* title  */}
                                    <h3 className="text-medium-18">
                                        <Link to='/'>
                                            <span>Брифинг </span>
                                            <span className="text-secondary-gray-40">(365)</span>
                                        </Link>
                                    </h3>
                                    <ul className="space-y-2 pl-3 text-regular-16 text-primary-gray-70">
                                        <li>
                                            <Link to='/'>В наличии</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>Со скидкой</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>Кабинеты в стиле loft</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>Классика</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>Белорусские</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>С матовым покрытием</Link>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>

                        <li className={`${filterLinks == 10 ? 'show-links-wrapper' : ''} grid absolute overflow-y-auto grid-cols-3 gap-8 w-full h-full top-0 right-0 -translate-x-full transition-transform-2 max-1200:grid-cols-2 max-940:gap-5 max-900:grid-cols-1`}>

                            {/* column  */}
                            <ul className="space-y-8">

                                {/* part */}
                                <li className="space-y-4">
                                    {/* title  */}
                                    <h3 className="text-medium-18">
                                        <Link to='/'>
                                            <span>Кабинеты руководителя </span>
                                            <span className="text-secondary-gray-40">(365)</span>
                                        </Link>
                                    </h3>
                                    <ul className="space-y-2 pl-3 text-regular-16 text-primary-gray-70">
                                        <li>
                                            <Link to='/'>В наличии</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>Со скидкой</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>Кабинеты в стиле loft</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>Классика</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>Белорусские</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>С матовым покрытием</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>На металлокаркасе</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>Домашние</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>Эконом-класс</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>С регулируемой высотой стола</Link>
                                        </li>
                                    </ul>
                                </li>

                                {/* part */}
                                <li className="space-y-4">
                                    {/* title  */}
                                    <h3 className="text-medium-18">
                                        <Link to='/'>
                                            <span>Столы для руководителя </span>
                                            <span className="text-secondary-gray-40">(1561)</span>
                                        </Link>
                                    </h3>
                                    <ul className="space-y-2 pl-3 text-regular-16 text-primary-gray-70">
                                        <li>
                                            <Link to='/'>В наличии</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>Со скидкой</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>Кабинеты в стиле loft</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>Классика</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>Белорусские</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>С матовым покрытием</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>На металлокаркасе</Link>
                                        </li>
                                    </ul>
                                </li>
                            </ul>

                            {/* column  */}
                            <ul className="space-y-8">

                                {/* part */}
                                <li className="space-y-4">
                                    {/* title  */}
                                    <h3 className="text-medium-18">
                                        <Link to='/'>
                                            <span>Офисные тумбы </span>
                                            <span className="text-secondary-gray-40">(365)</span>
                                        </Link>
                                    </h3>
                                    <ul className="space-y-2 pl-3 text-regular-16 text-primary-gray-70">
                                        <li>
                                            <Link to='/'>В наличии</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>Со скидкой</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>Кабинеты в стиле loft</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>Классика</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>Белорусские</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>С матовым покрытием</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>На металлокаркасе</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>Домашние</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>Эконом-класс</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>С регулируемой высотой стола</Link>
                                        </li>
                                    </ul>
                                </li>

                                {/* part */}
                                <li className="space-y-4">
                                    {/* title  */}
                                    <h3 className="text-medium-18">
                                        <Link to='/'>
                                            <span>Офисные шкафы </span>
                                            <span className="text-secondary-gray-40">(1561)</span>
                                        </Link>
                                    </h3>
                                    <ul className="space-y-2 pl-3 text-regular-16 text-primary-gray-70">
                                        <li>
                                            <Link to='/'>В наличии</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>Со скидкой</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>Кабинеты в стиле loft</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>Классика</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>Белорусские</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>С матовым покрытием</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>На металлокаркасе</Link>
                                        </li>
                                    </ul>
                                </li>
                            </ul>

                            {/* column  */}
                            <ul className="space-y-8">

                                {/* part */}
                                <li className="space-y-4">
                                    {/* title  */}
                                    <h3 className="text-medium-18">
                                        <Link to='/'>
                                            <span>Кабинеты руководителя </span>
                                            <span className="text-secondary-gray-40">(365)</span>
                                        </Link>
                                    </h3>
                                    <ul className="space-y-2 pl-3 text-regular-16 text-primary-gray-70">
                                        <li>
                                            <Link to='/'>В наличии</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>Со скидкой</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>Кабинеты в стиле loft</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>Классика</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>Белорусские</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>С матовым покрытием</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>На металлокаркасе</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>Домашние</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>Эконом-класс</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>С регулируемой высотой стола</Link>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>

                {/* phone tablet ... */}
                <div className="hidden max-640:block h-full">
                    <ul className="space-y-5">
                        <li>
                            <button onClick={() => setOpenCatalogLinks(true)} className="flex-center space-x-3">
                                <span className='text-medium-18 text-primary-red-60'>Каталог мебели</span>
                                <img width={24} height={24} src={arrowIcon} alt="this is a red arrow icon" className="w-6 h-6" />
                            </button>
                        </li>
                        <li>
                            <Link to='/about-company' className='text-primary-gray-70 text-medium-18'>О компании</Link>
                        </li>
                        <li>
                            <Link to='/portfolio' className='text-primary-gray-70 text-medium-18'>Выполненные проекты</Link>
                        </li>
                        <li>
                            <Link to='/reviews' className='text-primary-gray-70 text-medium-18'>Отзывы</Link>
                        </li>
                        <li>
                            <Link to='/about-payment' className='text-primary-gray-70 text-medium-18'>Доставка и оплата</Link>
                        </li>
                        <li>
                            <Link to='/akciya' className='text-primary-gray-70 text-medium-18'>Акции</Link>
                        </li>
                        <li>
                            <Link to='/contact' className='text-primary-gray-70 text-medium-18'>Контакты</Link>
                        </li>
                    </ul>

                    {/* catalog furniture  */}
                    <div className={`absolute w-full bg-white top-0 left-0 py-8 h-full transition-transform-2 ${openCatalogLinks ? 'translate-x-0' : '-translate-x-full'}`}>
                        <div className="container space-y-8">
                            {/* back  */}
                            <button onClick={() => setOpenCatalogLinks(false)} className="flex-center">
                                <img width={16} src={leftArrowIcon} alt="this is a gray left arrow icon" className="w-4 h-2 mr-2.5" />
                                <span className="text-primary-gray-70 text-regular-16">Назад</span>
                            </button>

                            {/* list catalog */}
                            <ul className="space-y-4">
                                <li>
                                    <button onClick={() => setOpenCategoryLinks(1)} className="flex-center space-x-3">
                                        <span className='text-medium-18 text-primary-gray-70'>Кабинеты руководителя</span>
                                        <img width={24} height={24} src={arrowIcon} alt="this is a red arrow icon" className="w-6 h-6" />
                                    </button>
                                </li>
                                <li>
                                    <button onClick={() => setOpenCategoryLinks(2)} className="flex-center space-x-3">
                                        <span className='text-medium-18 text-primary-gray-70'>Мебель для персонала</span>
                                        <img width={24} height={24} src={arrowIcon} alt="this is a red arrow icon" className="w-6 h-6" />
                                    </button>
                                </li>
                                <li>
                                    <button onClick={() => setOpenCategoryLinks(3)} className="flex-center space-x-3">
                                        <span className='text-medium-18 text-primary-gray-70'>Офисные кресла</span>
                                        <img width={24} height={24} src={arrowIcon} alt="this is a red arrow icon" className="w-6 h-6" />
                                    </button>
                                </li>
                                <li>
                                    <button onClick={() => setOpenCategoryLinks(4)} className="flex-center space-x-3">
                                        <span className='text-medium-18 text-primary-gray-70'>Офисные диваны</span>
                                        <img width={24} height={24} src={arrowIcon} alt="this is a red arrow icon" className="w-6 h-6" />
                                    </button>
                                </li>
                                <li>
                                    <button onClick={() => setOpenCategoryLinks(5)} className="flex-center space-x-3">
                                        <span className='text-medium-18 text-primary-gray-70'>Стойки рецепшн</span>
                                        <img width={24} height={24} src={arrowIcon} alt="this is a red arrow icon" className="w-6 h-6" />
                                    </button>
                                </li>
                                <li>
                                    <button onClick={() => setOpenCategoryLinks(6)} className="flex-center space-x-3">
                                        <span className='text-medium-18 text-primary-gray-70'>Столы для переговоров</span>
                                        <img width={24} height={24} src={arrowIcon} alt="this is a red arrow icon" className="w-6 h-6" />
                                    </button>
                                </li>
                                <li>
                                    <button onClick={() => setOpenCategoryLinks(7)} className="flex-center space-x-3">
                                        <span className='text-medium-18 text-primary-gray-70'>Многоместные секции</span>
                                        <img width={24} height={24} src={arrowIcon} alt="this is a red arrow icon" className="w-6 h-6" />
                                    </button>
                                </li>
                                <li>
                                    <button onClick={() => setOpenCategoryLinks(8)} className="flex-center space-x-3">
                                        <span className='text-medium-18 text-primary-gray-70'>Офисные столы</span>
                                        <img width={24} height={24} src={arrowIcon} alt="this is a red arrow icon" className="w-6 h-6" />
                                    </button>
                                </li>
                                <li>
                                    <button onClick={() => setOpenCategoryLinks(9)} className="flex-center space-x-3">
                                        <span className='text-medium-18 text-primary-gray-70'>Офисные шкафы</span>
                                        <img width={24} height={24} src={arrowIcon} alt="this is a red arrow icon" className="w-6 h-6" />
                                    </button>
                                </li>
                                <li>
                                    <button onClick={() => setOpenCategoryLinks(10)} className="flex-center space-x-3">
                                        <span className='text-medium-18 text-primary-gray-70'>Офисные перегородки</span>
                                        <img width={24} height={24} src={arrowIcon} alt="this is a red arrow icon" className="w-6 h-6" />
                                    </button>
                                </li>
                            </ul>

                            {/* ctegory list */}
                            <ul className='absolute w-full h-full bg-red-300 top-0 left-0 -translate-x-full'>
                                <li className={`absolute w-full top-0 left-0 px-5 h-full space-y-8 bg-white transition-transform-2 ${openCategoryLinks == 1 ? 'translate-x-full' : 'translate-x-0'}`}>
                                    {/* back  */}
                                    <button onClick={() => setOpenCategoryLinks(0)} className="flex-center">
                                        <img width={16} src={leftArrowIcon} alt="this is a gray left arrow icon" className="w-4 h-2 mr-2.5" />
                                        <span className="text-primary-gray-70 text-regular-16">Назад</span>
                                    </button>
                                    <ul className="space-y-4">
                                        <li>
                                            <Link to='/'>
                                                <span>Кабинеты руководителя </span>
                                                <span className='!text-secondary-gray-40'>(365)</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to='/'>
                                                <span>Столы для руководителя </span>
                                                <span className='!text-secondary-gray-40'>(365)</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to='/'>
                                                <span>Брифинг </span>
                                                <span className='!text-secondary-gray-40'>(365)</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to='/'>
                                                <span>Офисные тумбы </span>
                                                <span className='!text-secondary-gray-40'>(365)</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to='/'>
                                                <span>Офисные шкафы </span>
                                                <span className='!text-secondary-gray-40'>(365)</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to='/'>
                                                <span>Стеллажи на металлокарткасе </span>
                                                <span className='!text-secondary-gray-40'>(365)</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to='/'>
                                                <span>Стеллажи </span>
                                                <span className='!text-secondary-gray-40'>(365)</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to='/'>
                                                <span>Кресла руководителя </span>
                                                <span className='!text-secondary-gray-40'>(365)</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to='/'>
                                                <span>Столы для переговоров </span>
                                                <span className='!text-secondary-gray-40'>(365)</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to='/'>
                                                <span>Кабинеты руководителя </span>
                                                <span className='!text-secondary-gray-40'>(365)</span>
                                            </Link>
                                        </li>
                                    </ul>
                                </li>
                                <li className={`absolute w-full top-0 left-0 px-5 h-full space-y-8 bg-white transition-transform-2 ${openCategoryLinks == 2 ? 'translate-x-full' : 'translate-x-0'}`}>
                                    {/* back  */}
                                    <button onClick={() => setOpenCategoryLinks(0)} className="flex-center">
                                        <img width={16} src={leftArrowIcon} alt="this is a gray left arrow icon" className="w-4 h-2 mr-2.5" />
                                        <span className="text-primary-gray-70 text-regular-16">Назад</span>
                                    </button>
                                    <ul className="space-y-4">
                                        <li>
                                            <Link to='/'>
                                                <span>Кабинеты руководителя </span>
                                                <span className='!text-secondary-gray-40'>(1365)</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to='/'>
                                                <span>Столы для руководителя </span>
                                                <span className='!text-secondary-gray-40'>(365)</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to='/'>
                                                <span>Брифинг </span>
                                                <span className='!text-secondary-gray-40'>(365)</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to='/'>
                                                <span>Офисные тумбы </span>
                                                <span className='!text-secondary-gray-40'>(365)</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to='/'>
                                                <span>Офисные шкафы </span>
                                                <span className='!text-secondary-gray-40'>(365)</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to='/'>
                                                <span>Стеллажи на металлокарткасе </span>
                                                <span className='!text-secondary-gray-40'>(365)</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to='/'>
                                                <span>Стеллажи </span>
                                                <span className='!text-secondary-gray-40'>(365)</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to='/'>
                                                <span>Кресла руководителя </span>
                                                <span className='!text-secondary-gray-40'>(365)</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to='/'>
                                                <span>Столы для переговоров </span>
                                                <span className='!text-secondary-gray-40'>(365)</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to='/'>
                                                <span>Кабинеты руководителя </span>
                                                <span className='!text-secondary-gray-40'>(365)</span>
                                            </Link>
                                        </li>
                                    </ul>
                                </li>
                                <li className={`absolute w-full top-0 left-0 px-5 h-full space-y-8 bg-white transition-transform-2 ${openCategoryLinks == 3 ? 'translate-x-full' : 'translate-x-0'}`}>
                                    {/* back  */}
                                    <button onClick={() => setOpenCategoryLinks(0)} className="flex-center">
                                        <img width={16} src={leftArrowIcon} alt="this is a gray left arrow icon" className="w-4 h-2 mr-2.5" />
                                        <span className="text-primary-gray-70 text-regular-16">Назад</span>
                                    </button>
                                    <ul className="space-y-4">
                                        <li>
                                            <Link to='/'>
                                                <span>Кабинеты руководителя </span>
                                                <span className='!text-secondary-gray-40'>(365)</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to='/'>
                                                <span>Брифинг </span>
                                                <span className='!text-secondary-gray-40'>(365)</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to='/'>
                                                <span>Офисные тумбы </span>
                                                <span className='!text-secondary-gray-40'>(365)</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to='/'>
                                                <span>Офисные шкафы </span>
                                                <span className='!text-secondary-gray-40'>(365)</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to='/'>
                                                <span>Стеллажи </span>
                                                <span className='!text-secondary-gray-40'>(365)</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to='/'>
                                                <span>Кресла руководителя </span>
                                                <span className='!text-secondary-gray-40'>(365)</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to='/'>
                                                <span>Столы для переговоров </span>
                                                <span className='!text-secondary-gray-40'>(365)</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to='/'>
                                                <span>Кабинеты руководителя </span>
                                                <span className='!text-secondary-gray-40'>(365)</span>
                                            </Link>
                                        </li>
                                    </ul>
                                </li>
                                <li className={`absolute w-full top-0 left-0 px-5 h-full space-y-8 bg-white transition-transform-2 ${openCategoryLinks == 4 ? 'translate-x-full' : 'translate-x-0'}`}>
                                    {/* back  */}
                                    <button onClick={() => setOpenCategoryLinks(0)} className="flex-center">
                                        <img width={16} src={leftArrowIcon} alt="this is a gray left arrow icon" className="w-4 h-2 mr-2.5" />
                                        <span className="text-primary-gray-70 text-regular-16">Назад</span>
                                    </button>
                                    <ul className="space-y-4">
                                        <li>
                                            <Link to='/'>
                                                <span>Кабинеты руководителя </span>
                                                <span className='!text-secondary-gray-40'>(365)</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to='/'>
                                                <span>Столы для руководителя </span>
                                                <span className='!text-secondary-gray-40'>(365)</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to='/'>
                                                <span>Брифинг </span>
                                                <span className='!text-secondary-gray-40'>(365)</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to='/'>
                                                <span>Офисные тумбы </span>
                                                <span className='!text-secondary-gray-40'>(365)</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to='/'>
                                                <span>Офисные шкафы </span>
                                                <span className='!text-secondary-gray-40'>(365)</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to='/'>
                                                <span>Стеллажи на металлокарткасе </span>
                                                <span className='!text-secondary-gray-40'>(365)</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to='/'>
                                                <span>Стеллажи </span>
                                                <span className='!text-secondary-gray-40'>(365)</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to='/'>
                                                <span>Кресла руководителя </span>
                                                <span className='!text-secondary-gray-40'>(365)</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to='/'>
                                                <span>Столы для переговоров </span>
                                                <span className='!text-secondary-gray-40'>(365)</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to='/'>
                                                <span>Кабинеты руководителя </span>
                                                <span className='!text-secondary-gray-40'>(365)</span>
                                            </Link>
                                        </li>
                                    </ul>
                                </li>
                                <li className={`absolute w-full top-0 left-0 px-5 h-full space-y-8 bg-white transition-transform-2 ${openCategoryLinks == 5 ? 'translate-x-full' : 'translate-x-0'}`}>
                                    {/* back  */}
                                    <button onClick={() => setOpenCategoryLinks(0)} className="flex-center">
                                        <img width={16} src={leftArrowIcon} alt="this is a gray left arrow icon" className="w-4 h-2 mr-2.5" />
                                        <span className="text-primary-gray-70 text-regular-16">Назад</span>
                                    </button>
                                    <ul className="space-y-4">
                                        <li>
                                            <Link to='/'>
                                                <span>Кабинеты руководителя </span>
                                                <span className='!text-secondary-gray-40'>(365)</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to='/'>
                                                <span>Столы для руководителя </span>
                                                <span className='!text-secondary-gray-40'>(365)</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to='/'>
                                                <span>Брифинг </span>
                                                <span className='!text-secondary-gray-40'>(365)</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to='/'>
                                                <span>Офисные тумбы </span>
                                                <span className='!text-secondary-gray-40'>(365)</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to='/'>
                                                <span>Офисные шкафы </span>
                                                <span className='!text-secondary-gray-40'>(365)</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to='/'>
                                                <span>Стеллажи на металлокарткасе </span>
                                                <span className='!text-secondary-gray-40'>(365)</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to='/'>
                                                <span>Стеллажи </span>
                                                <span className='!text-secondary-gray-40'>(365)</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to='/'>
                                                <span>Кресла руководителя </span>
                                                <span className='!text-secondary-gray-40'>(365)</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to='/'>
                                                <span>Столы для переговоров </span>
                                                <span className='!text-secondary-gray-40'>(365)</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to='/'>
                                                <span>Кабинеты руководителя </span>
                                                <span className='!text-secondary-gray-40'>(365)</span>
                                            </Link>
                                        </li>
                                    </ul>
                                </li>
                                <li className={`absolute w-full top-0 left-0 px-5 h-full space-y-8 bg-white transition-transform-2 ${openCategoryLinks == 6 ? 'translate-x-full' : 'translate-x-0'}`}>
                                    {/* back  */}
                                    <button onClick={() => setOpenCategoryLinks(0)} className="flex-center">
                                        <img width={16} src={leftArrowIcon} alt="this is a gray left arrow icon" className="w-4 h-2 mr-2.5" />
                                        <span className="text-primary-gray-70 text-regular-16">Назад</span>
                                    </button>
                                    <ul className="space-y-4">
                                        <li>
                                            <Link to='/'>
                                                <span>Кабинеты руководителя </span>
                                                <span className='!text-secondary-gray-40'>(365)</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to='/'>
                                                <span>Брифинг </span>
                                                <span className='!text-secondary-gray-40'>(365)</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to='/'>
                                                <span>Офисные тумбы </span>
                                                <span className='!text-secondary-gray-40'>(365)</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to='/'>
                                                <span>Офисные шкафы </span>
                                                <span className='!text-secondary-gray-40'>(365)</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to='/'>
                                                <span>Стеллажи </span>
                                                <span className='!text-secondary-gray-40'>(365)</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to='/'>
                                                <span>Кресла руководителя </span>
                                                <span className='!text-secondary-gray-40'>(365)</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to='/'>
                                                <span>Столы для переговоров </span>
                                                <span className='!text-secondary-gray-40'>(365)</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to='/'>
                                                <span>Кабинеты руководителя </span>
                                                <span className='!text-secondary-gray-40'>(365)</span>
                                            </Link>
                                        </li>
                                    </ul>
                                </li>
                                <li className={`absolute w-full top-0 left-0 px-5 h-full space-y-8 bg-white transition-transform-2 ${openCategoryLinks == 7 ? 'translate-x-full' : 'translate-x-0'}`}>
                                    {/* back  */}
                                    <button onClick={() => setOpenCategoryLinks(0)} className="flex-center">
                                        <img width={16} src={leftArrowIcon} alt="this is a gray left arrow icon" className="w-4 h-2 mr-2.5" />
                                        <span className="text-primary-gray-70 text-regular-16">Назад</span>
                                    </button>
                                    <ul className="space-y-4">
                                        <li>
                                            <Link to='/'>
                                                <span>Кабинеты руководителя </span>
                                                <span className='!text-secondary-gray-40'>(365)</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to='/'>
                                                <span>Столы для руководителя </span>
                                                <span className='!text-secondary-gray-40'>(365)</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to='/'>
                                                <span>Брифинг </span>
                                                <span className='!text-secondary-gray-40'>(365)</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to='/'>
                                                <span>Офисные тумбы </span>
                                                <span className='!text-secondary-gray-40'>(365)</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to='/'>
                                                <span>Офисные шкафы </span>
                                                <span className='!text-secondary-gray-40'>(365)</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to='/'>
                                                <span>Стеллажи на металлокарткасе </span>
                                                <span className='!text-secondary-gray-40'>(365)</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to='/'>
                                                <span>Стеллажи </span>
                                                <span className='!text-secondary-gray-40'>(365)</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to='/'>
                                                <span>Кресла руководителя </span>
                                                <span className='!text-secondary-gray-40'>(365)</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to='/'>
                                                <span>Столы для переговоров </span>
                                                <span className='!text-secondary-gray-40'>(365)</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to='/'>
                                                <span>Кабинеты руководителя </span>
                                                <span className='!text-secondary-gray-40'>(365)</span>
                                            </Link>
                                        </li>
                                    </ul>
                                </li>
                                <li className={`absolute w-full top-0 left-0 px-5 h-full space-y-8 bg-white transition-transform-2 ${openCategoryLinks == 8 ? 'translate-x-full' : 'translate-x-0'}`}>
                                    {/* back  */}
                                    <button onClick={() => setOpenCategoryLinks(0)} className="flex-center">
                                        <img width={16} src={leftArrowIcon} alt="this is a gray left arrow icon" className="w-4 h-2 mr-2.5" />
                                        <span className="text-primary-gray-70 text-regular-16">Назад</span>
                                    </button>
                                    <ul className="space-y-4">
                                        <li>
                                            <Link to='/'>
                                                <span>Кабинеты руководителя </span>
                                                <span className='!text-secondary-gray-40'>(365)</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to='/'>
                                                <span>Столы для руководителя </span>
                                                <span className='!text-secondary-gray-40'>(365)</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to='/'>
                                                <span>Брифинг </span>
                                                <span className='!text-secondary-gray-40'>(365)</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to='/'>
                                                <span>Офисные тумбы </span>
                                                <span className='!text-secondary-gray-40'>(365)</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to='/'>
                                                <span>Офисные шкафы </span>
                                                <span className='!text-secondary-gray-40'>(365)</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to='/'>
                                                <span>Стеллажи на металлокарткасе </span>
                                                <span className='!text-secondary-gray-40'>(365)</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to='/'>
                                                <span>Стеллажи </span>
                                                <span className='!text-secondary-gray-40'>(365)</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to='/'>
                                                <span>Кресла руководителя </span>
                                                <span className='!text-secondary-gray-40'>(365)</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to='/'>
                                                <span>Столы для переговоров </span>
                                                <span className='!text-secondary-gray-40'>(365)</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to='/'>
                                                <span>Кабинеты руководителя </span>
                                                <span className='!text-secondary-gray-40'>(365)</span>
                                            </Link>
                                        </li>
                                    </ul>
                                </li>
                                <li className={`absolute w-full top-0 left-0 px-5 h-full space-y-8 bg-white transition-transform-2 ${openCategoryLinks == 9 ? 'translate-x-full' : 'translate-x-0'}`}>
                                    {/* back  */}
                                    <button onClick={() => setOpenCategoryLinks(0)} className="flex-center">
                                        <img width={16} src={leftArrowIcon} alt="this is a gray left arrow icon" className="w-4 h-2 mr-2.5" />
                                        <span className="text-primary-gray-70 text-regular-16">Назад</span>
                                    </button>
                                    <ul className="space-y-4">
                                        <li>
                                            <Link to='/'>
                                                <span>Кабинеты руководителя </span>
                                                <span className='!text-secondary-gray-40'>(365)</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to='/'>
                                                <span>Брифинг </span>
                                                <span className='!text-secondary-gray-40'>(365)</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to='/'>
                                                <span>Офисные тумбы </span>
                                                <span className='!text-secondary-gray-40'>(365)</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to='/'>
                                                <span>Офисные шкафы </span>
                                                <span className='!text-secondary-gray-40'>(365)</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to='/'>
                                                <span>Стеллажи </span>
                                                <span className='!text-secondary-gray-40'>(365)</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to='/'>
                                                <span>Кресла руководителя </span>
                                                <span className='!text-secondary-gray-40'>(365)</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to='/'>
                                                <span>Столы для переговоров </span>
                                                <span className='!text-secondary-gray-40'>(365)</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to='/'>
                                                <span>Кабинеты руководителя </span>
                                                <span className='!text-secondary-gray-40'>(365)</span>
                                            </Link>
                                        </li>
                                    </ul>
                                </li>
                                <li className={`absolute w-full top-0 left-0 px-5 h-full space-y-8 bg-white  transition-transform-2 ${openCategoryLinks == 10 ? 'translate-x-full' : 'translate-x-0'}`}>
                                    {/* back  */}
                                    <button onClick={() => setOpenCategoryLinks(0)} className="flex-center">
                                        <img width={16} src={leftArrowIcon} alt="this is a gray left arrow icon" className="w-4 h-2 mr-2.5" />
                                        <span className="text-primary-gray-70 text-regular-16">Назад</span>
                                    </button>
                                    <ul className="space-y-4">
                                        <li>
                                            <Link to='/'>
                                                <span>Кабинеты руководителя </span>
                                                <span className='!text-secondary-gray-40'>(365)</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to='/'>
                                                <span>Брифинг </span>
                                                <span className='!text-secondary-gray-40'>(365)</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to='/'>
                                                <span>Офисные тумбы </span>
                                                <span className='!text-secondary-gray-40'>(365)</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to='/'>
                                                <span>Офисные шкафы </span>
                                                <span className='!text-secondary-gray-40'>(365)</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to='/'>
                                                <span>Стеллажи </span>
                                                <span className='!text-secondary-gray-40'>(365)</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to='/'>
                                                <span>Кресла руководителя </span>
                                                <span className='!text-secondary-gray-40'>(365)</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to='/'>
                                                <span>Столы для переговоров </span>
                                                <span className='!text-secondary-gray-40'>(365)</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to='/'>
                                                <span>Кабинеты руководителя </span>
                                                <span className='!text-secondary-gray-40'>(365)</span>
                                            </Link>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Menu;