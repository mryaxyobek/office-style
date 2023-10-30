import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
    const [filterLinks, setFilterLinks] = useState(1);
    return (
        <div className='w-full min-h-full bg-white pt-16 pb-5 shadow-md'>
            <div className="container">
                <div className="flex-start justify-between gap-5">
                    {/* buttons */}
                    <div className="grid grid-cols-1 gap-6 catalog-filter-buttons">
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
                        <li className={`${filterLinks == 1 ? 'show-links-wrapper' : ''} grid absolute overflow-y-auto grid-cols-3 gap-8 w-full h-full top-0 right-0 -translate-x-full transition-transform-2`}>

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

                        <li className={`${filterLinks == 2 ? 'show-links-wrapper' : ''} grid absolute overflow-y-auto grid-cols-3 gap-8 w-full h-full top-0 right-0 -translate-x-full transition-transform-2`}>

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
                        <li className={`${filterLinks == 3 ? 'show-links-wrapper' : ''} grid absolute overflow-y-auto grid-cols-3 gap-8 w-full h-full top-0 right-0 -translate-x-full transition-transform-2`}>

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

                        <li className={`${filterLinks == 4 ? 'show-links-wrapper' : ''} grid absolute overflow-y-auto grid-cols-3 gap-8 w-full h-full top-0 right-0 -translate-x-full transition-transform-2`}>

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

                        <li className={`${filterLinks == 5 ? 'show-links-wrapper' : ''} grid absolute overflow-y-auto grid-cols-3 gap-8 w-full h-full top-0 right-0 -translate-x-full transition-transform-2`}>

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

                        <li className={`${filterLinks == 6 ? 'show-links-wrapper' : ''} grid absolute overflow-y-auto grid-cols-3 gap-8 w-full h-full top-0 right-0 -translate-x-full transition-transform-2`}>

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

                        <li className={`${filterLinks == 7 ? 'show-links-wrapper' : ''} grid absolute overflow-y-auto grid-cols-3 gap-8 w-full h-full top-0 right-0 -translate-x-full transition-transform-2`}>

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

                        <li className={`${filterLinks == 8 ? 'show-links-wrapper' : ''} grid absolute overflow-y-auto grid-cols-3 gap-8 w-full h-full top-0 right-0 -translate-x-full transition-transform-2`}>

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

                        <li className={`${filterLinks == 9 ? 'show-links-wrapper' : ''} grid absolute overflow-y-auto grid-cols-3 gap-8 w-full h-full top-0 right-0 -translate-x-full transition-transform-2`}>

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

                        <li className={`${filterLinks == 10 ? 'show-links-wrapper' : ''} grid absolute overflow-y-auto grid-cols-3 gap-8 w-full h-full top-0 right-0 -translate-x-full transition-transform-2`}>

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
            </div>
        </div>
    )
};

export default Menu;