import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Menu = ({ setOpenCatalog }) => {
    const location = useLocation();
    const currentPage = location.pathname;
    const [currentPageName, setCurrentPageName] = useState('/');
    const [openCatalogLinks, setOpenCatalogLinks] = useState(false);

    useEffect(() => {
        setCurrentPageName(currentPage.split('/')[1]);
        setOpenCatalogLinks(false);
        setOpenCatalog(false)
    }, [currentPage]);

    return (
        <div className='bg-white h-full relative p-9 max-440:w-full max-440:px-5 overflow-y-auto red-scroll max-800:pt-6'>
            {/* header */}
            <div className="flex-center justify-between mb-9 max-580:mb-6 max-800:hidde">
                <Link to='/' className='text-primary-gray-90 text-2xl leading-25px textblack max-800:text-xl max-800:leading-5 max-540:text-lg max-540:leading-17.5px'>
                    OFIS <span className='text-primary-red-50'>TARZI</span>
                </Link>
                {/* cross btn */}
                <button onClick={() => setOpenCatalog(false)} className="flex-center red-btn justify-center w-9 h-9 max-900:hidden">
                    <span className={`rotate-45 flex-center justify-between w-4 h-4 relative`}>
                        <span className={`translate-y-0 w-4 rotate-90 inline-block absolute bg-white h-0.5`}></span>
                        <span className={`translate-y-0 w-4 inline-block absolute bg-white h-0.5`}></span>
                    </span>
                </button>
            </div>

            {/* page < > */}
            <div className="flex-center justify-between mb-9 max-580:mb-6">
                <div className="grow w-full h-0.5 rounded-full bg-primary-gray-30 mr-2"></div>
                <div className="flex-center gap-2">
                    <Link to={-1} className='flex-center justify-center w-7 h-7 text-primary-gray-50 hover:text-primary-red-60'>
                        <svg className='rotate-180' xmlns="http://www.w3.org/2000/svg" width="8" height="16" viewBox="0 0 8 16" fill="none">
                            <path className='transition-colors-2' d="M1 14.5L6.24868 8.81393C6.67299 8.35426 6.67299 7.64574 6.24868 7.18606L1 1.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                    </Link>
                    <Link to={+1} className='flex-center justify-center w-7 h-7 text-primary-gray-50 hover:text-primary-red-60'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="8" height="16" viewBox="0 0 8 16" fill="none">
                            <path className='transition-colors-2' d="M1 14.5L6.24868 8.81393C6.67299 8.35426 6.67299 7.64574 6.24868 7.18606L1 1.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                    </Link>
                </div>
            </div>

            {/*  catalog link button */}
            <button onClick={() => setOpenCatalogLinks(!openCatalogLinks)} className={`${openCatalogLinks ? 'is-active' : ''} flex-center gap-3 is-hovered hover:hover-folder-icon w-full mb-6`}>
                {/* icon */}
                <div className="flex-center justify-center w-7 h-7">
                    <svg className='block w-7 h-7' width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path className={`${openCatalogLinks ? '!translate-y-0' : ''} hovered-line text-primary-red-60 translate-y-2 transition-transform`} stroke='currentColor' d="M7.00009 4.5002L21 4.50003" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path className={`${openCatalogLinks ? '!translate-y-0' : ''} hovered-line text-primary-red-60 translate-y-2 transition-transform-2`} stroke='currentColor' d="M5.5 6.5H22.5" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                        <path className='active-stroke active-fill-bg !fill-white' d="M22.5 23.9238H5.5C4.39543 23.9238 3.5 23.0284 3.5 21.9238V9.92383C3.5 9.37154 3.94772 8.92383 4.5 8.92383H23.5865C24.091 8.92383 24.5 9.33281 24.5 9.83732V21.9238C24.5 23.0284 23.6046 23.9238 22.5 23.9238Z" strokeWidth="2" />
                    </svg>
                </div>
                {/* link */}
                <span className='text-medium-20 w-full active-text text-start'>Mebellar katalogi</span>
            </button>

            {/* catalog links */}
            <nav className={`${openCatalogLinks ? 'pb-6 h-[424px]' : 'h-0'} overflow-hidden transition-all`}>
                <ul className='space-y-6'>
                    <li className="flex-center gap-2 before:content-[''] before:block before:rounded-full before:bg-primary-gray-50 before:w-1 before:h-1 text-primary-gray-50 hover:text-primary-red-60 hover:before:bg-primary-red-60">
                        <Link to='/catalog' className='text-medium-18 transition-colors-2 w-full'>Katalog sahifasi</Link>
                    </li>
                    <li className="flex-center gap-2 before:content-[''] before:block before:rounded-full before:bg-primary-gray-50 before:w-1 before:h-1 text-primary-gray-50 hover:text-primary-red-60 hover:before:bg-primary-red-60">
                        <Link to='/catalog/boshqaruvchilar-uchun' className='text-medium-18 transition-colors-2 w-full'>Boshqaruvchi kabineti</Link>
                    </li>
                    <li className="flex-center gap-2 before:content-[''] before:block before:rounded-full before:bg-primary-gray-50 before:w-1 before:h-1 text-primary-gray-50 hover:text-primary-red-60 hover:before:bg-primary-red-60">
                        <Link to='/catalog/xodimlar-uchun' className='text-medium-18 transition-colors-2 w-full'>Xodimlar uchun mebel</Link>
                    </li>
                    <li className="flex-center gap-2 before:content-[''] before:block before:rounded-full before:bg-primary-gray-50 before:w-1 before:h-1 text-primary-gray-50 hover:text-primary-red-60 hover:before:bg-primary-red-60">
                        <Link to='/catalog/boshqaruvchi-stuli' className='text-medium-18 transition-colors-2 w-full'>Boshqaruvchilar uchun stul</Link>
                    </li>
                    <li className="flex-center gap-2 before:content-[''] before:block before:rounded-full before:bg-primary-gray-50 before:w-1 before:h-1 text-primary-gray-50 hover:text-primary-red-60 hover:before:bg-primary-red-60">
                        <Link to='/catalog/ofis-stuli' className='text-medium-18 transition-colors-2 w-full'>Ofis stullari</Link>
                    </li>
                    <li className="flex-center gap-2 before:content-[''] before:block before:rounded-full before:bg-primary-gray-50 before:w-1 before:h-1 text-primary-gray-50 hover:text-primary-red-60 hover:before:bg-primary-red-60">
                        <Link to='/catalog/ofis-divani' className='text-medium-18 transition-colors-2 w-full'>Ofis divanlari</Link>
                    </li>
                    <li className="flex-center gap-2 before:content-[''] before:block before:rounded-full before:bg-primary-gray-50 before:w-1 before:h-1 text-primary-gray-50 hover:text-primary-red-60 hover:before:bg-primary-red-60">
                        <Link to='/catalog/qabul-qilish-stuli' className='text-medium-18 transition-colors-2 w-full'>Qabul qilish stollari</Link>
                    </li>
                    <li className="flex-center gap-2 before:content-[''] before:block before:rounded-full before:bg-primary-gray-50 before:w-1 before:h-1 text-primary-gray-50 hover:text-primary-red-60 hover:before:bg-primary-red-60">
                        <Link to='/catalog/call-markazlari-uchun-mebel' className='text-medium-18 transition-colors-2 w-full'>Call markazlari uchun mebel</Link>
                    </li>
                    <li className="flex-center gap-2 before:content-[''] before:block before:rounded-full before:bg-primary-gray-50 before:w-1 before:h-1 text-primary-gray-50 hover:text-primary-red-60 hover:before:bg-primary-red-60">
                        <Link to='/catalog/sud-mebellari' className='text-medium-18 transition-colors-2 w-full'>Sud uchun mebellar</Link>
                    </li>
                </ul>
            </nav>

            {/* main links  */}
            <nav>
                <ul className="space-y-6">
                    {/* home */}
                    <li className="flex-center gap-3 w-full">
                        <Link to='/' className={`${currentPageName === '' ? 'is-active' : ''} flex-center gap-3 w-full hover:is-hovered`}>
                            {/* icon */}
                            <div className="flex-center justify-center w-7 h-7">
                                <svg className='block w-7 h-7 active-fill-bg' xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28">
                                    <path className='active-stroke' d="M3 12.4552V20C3 22.7614 5.23858 25 8 25H20C22.7614 25 25 22.7614 25 20V12.4552C25 10.9067 24.2825 9.4456 23.0572 8.49877L17.0572 3.86241C15.2566 2.47098 12.7434 2.47098 10.9428 3.86241L4.94276 8.49877C3.71746 9.4456 3 10.9067 3 12.4552Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path className='active-stroke active-stroke-important' d="M10 20.5H19" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            {/* link */}
                            <span to='/' className='text-medium-20 w-full active-text'>Bosh sahifa</span>
                        </Link>
                    </li>

                    {/* about company */}
                    <li className="flex-center gap-3 w-full">
                        <Link to='/about-company' className={`${currentPageName === 'about-company' ? 'is-active' : ''} flex-center gap-3 w-full hover:is-hovered`}>
                            {/* icon */}
                            <div className="flex-center justify-center w-7 h-7">
                                <svg className='block w-7 h-7' xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill='black'>
                                    <path className='active-stroke active-fill-bg' d="M3 20V8C3 5.23858 5.23858 3 8 3H20C22.7614 3 25 5.23858 25 8V20C25 22.7614 22.7614 25 20 25H8C5.23858 25 3 22.7614 3 20Z" strokeWidth="2" />
                                    <rect className='active-fill active-fill-important' x="13" y="7.5" width="2" height="2" rx="1" />
                                    <path className='active-stroke active-stroke-important' d="M14 20V12" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            {/* link */}
                            <span to='/about-company' className='text-medium-20 w-full active-text'>Kompaniya haqida</span>
                        </Link>
                    </li>

                    {/* completed projects */}
                    <li className="flex-center gap-3 w-full">
                        <Link to='/portfolio' className={`${currentPageName === 'portfolio' ? 'is-active' : ''} flex-center gap-3 w-full hover:is-hovered`}>
                            {/* icon */}
                            <div className="flex-center justify-center w-7 h-7">
                                <svg className='block w-7 h-7' xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                                    <path className='active-stroke active-fill-bg' d="M3 10V5C3 3.89543 3.89543 3 5 3H10C11.1046 3 12 3.89543 12 5V10C12 11.1046 11.1046 12 10 12H5C3.89543 12 3 11.1046 3 10Z" strokeWidth="2" />
                                    <path className='active-stroke active-fill-bg' d="M3 23V18C3 16.8954 3.89543 16 5 16H10C11.1046 16 12 16.8954 12 18V23C12 24.1046 11.1046 25 10 25H5C3.89543 25 3 24.1046 3 23Z" strokeWidth="2" />
                                    <path className='active-stroke active-fill-bg' d="M16 23V18C16 16.8954 16.8954 16 18 16H23C24.1046 16 25 16.8954 25 18V23C25 24.1046 24.1046 25 23 25H18C16.8954 25 16 24.1046 16 23Z" strokeWidth="2" />
                                    <path className='active-stroke active-fill-bg' d="M16 10V5C16 3.89543 16.8954 3 18 3H23C24.1046 3 25 3.89543 25 5V10C25 11.1046 24.1046 12 23 12H18C16.8954 12 16 11.1046 16 10Z" strokeWidth="2" />
                                </svg>
                            </div>
                            {/* link */}
                            <span className='text-medium-20 w-full active-text'>Tugallangan loyihalar</span>
                        </Link>
                    </li>

                    {/* comments */}
                    <li className="flex-center gap-3 w-full">
                        <Link to='/reviews' className={`${currentPageName === 'reviews' ? 'is-active' : ''} flex-center gap-3 w-full hover:is-hovered`}>
                            {/* icon */}
                            <div className="flex-center justify-center w-7 h-7">
                                <svg className='block w-7 h-7' xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                                    <path className='active-stroke active-fill-bg' d="M3 9.5V13.0714V16.6825C3 18.3701 4.36802 19.7381 6.05556 19.7381C6.39306 19.7381 6.66667 20.0117 6.66667 20.3492V22.3115C6.66667 23.1682 7.67355 23.6282 8.32122 23.0675L11.6031 20.2261C11.9666 19.9113 12.4313 19.7381 12.9122 19.7381H20C22.7614 19.7381 25 17.4995 25 14.7381V9.5C25 6.73858 22.7614 4.5 20 4.5H8C5.23858 4.5 3 6.73858 3 9.5Z" fill={'transparent'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path className='active-stroke active-stroke-important' d="M9 9.5H19M9 14.5H19" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            {/* link */}
                            <span className='text-medium-20 w-full active-text'>Sharxlar</span>
                        </Link>
                    </li>

                    {/* delvery and payment */}
                    <li className="flex-center gap-3 w-full">
                        <Link to='/about-payment' className={`${currentPageName === 'about-payment' ? 'is-active' : ''} flex-center gap-3 w-full hover:is-hovered`}>
                            {/* icon */}
                            <div className="flex-center justify-center w-7 h-7">
                                <svg className='block w-7 h-7' xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                                    <path className='active-stroke active-fill-bg' d="M3 8V20C3 22.7614 5.23858 25 8 25H20C22.7614 25 25 22.7614 25 20V8C25 5.23858 22.7614 3 20 3H8C5.23858 3 3 5.23858 3 8Z" fill={'transparent'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path className='active-stroke active-stroke-important' d="M19 9H14H11.5C10.1193 9 9 10.1193 9 11.5V11.5C9 12.8807 10.1193 14 11.5 14H16.5C17.8807 14 19 15.1193 19 16.5V16.5C19 17.8807 17.8807 19 16.5 19H9M12.5 21V7M15.5 21V7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            {/* link */}
                            <span className='text-medium-20 w-full active-text'>Yetkazib berish va to'lash</span>
                        </Link>
                    </li>

                    {/* akciya */}
                    <li className="flex-center gap-3 w-full">
                        <Link to='/akciya' className={`${currentPageName === 'akciya' ? 'is-active' : ''} flex-center gap-3 w-full hover:is-hovered`}>
                            {/* icon */}
                            <div className="flex-center justify-center w-7 h-7">
                                <svg className='block w-7 h-7' xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                                    <path className='active-stroke active-fill-bg' d="M3 8V20C3 22.7614 5.23858 25 8 25H20C22.7614 25 25 22.7614 25 20V8C25 5.23858 22.7614 3 20 3H8C5.23858 3 3 5.23858 3 8Z" fill={'transparent'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path className='active-stroke active-stroke-important' d="M10 19L18 9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path className='active-stroke active-stroke-important' d="M16 17.5C16 18.3284 16.6716 19 17.5 19C18.3284 19 19 18.3284 19 17.5C19 16.6716 18.3284 16 17.5 16C16.6716 16 16 16.6716 16 17.5Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path className='active-stroke active-stroke-important' d="M9 10.5C9 11.3284 9.67157 12 10.5 12C11.3284 12 12 11.3284 12 10.5C12 9.67157 11.3284 9 10.5 9C9.67157 9 9 9.67157 9 10.5Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            {/* link */}
                            <span className='text-medium-20 w-full active-text'>Aksiyalar</span>
                        </Link>
                    </li>

                    {/* contact  */}
                    <li className="flex-center gap-3 w-full">
                        <Link to='/contact' className={`${currentPageName === 'contact' ? 'is-active' : ''} flex-center gap-3 w-full hover:is-hovered`}>
                            {/* icon */}
                            <div className="flex-center justify-center w-7 h-7">
                                <svg className='block w-7 h-7' xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                                    <path className='active-stroke active-fill-bg' d="M7 13.5V17.5C7 21.0899 9.91015 24 13.5 24C17.0899 24 20 21.0899 20 17.5V13.5C20 9.91015 17.0899 7 13.5 7C9.91015 7 7 9.91015 7 13.5Z" fill={'transparent'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path className='active-stroke' d="M4 17V13.5C4 8.25329 8.2533 4 13.5 4V4C18.7467 4 23 8.25329 23 13.5V19.7143C23 20.1482 22.6482 20.5 22.2143 20.5H13.5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            {/* link */}
                            <span className='text-medium-20 w-full active-text'>Qo'llab-quvvatlash</span>
                        </Link>
                    </li>
                </ul>
            </nav>
        </div >
    )
};

export default Menu;