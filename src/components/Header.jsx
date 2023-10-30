import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

// components 
import Menu from './Menu';


const Header = () => {
    // href
    const [changeText, setChangeText] = useState(true);
    useEffect(() => {
        if (location.pathname === '/') {
            setChangeText(true);
        } else {
            setChangeText(false);
        };
    }, [location.pathname]);
    // toggle catalog button 
    const [openCatalog, setOpenCatalog] = useState(false);
    const openCatalogFunc = () => {
        setOpenCatalog(!openCatalog);
    };

    // toggle search button 
    const [openSearchInput, setOpenSearchInput] = useState(false);
    const openSearchInputFunc = () => {
        setOpenSearchInput(!openSearchInput);
    };

    // close search 
    document.addEventListener('keyup', function (e) {
        e.key == 'Escape' && setOpenSearchInput(false); setOpenCatalog(false);
    });

    // prevent default 
    const preventdefault = (e) => {
        e.preventDefault();
    };
    return (
        <header className={`py-4 bg-primary-gray-04 relative`}>
            <div className="flex-c-b container">

                {/* logo  */}
                <div className='flex-center'>
                    <Link to='/' className='text-primary-gray-90 text-2xl leading-25px textblack mr-8'>ОФИС-СТИЛЬ.</Link>
                    <select className='text-14px leading-19px bg-transparent'>
                        <option>г. Краснодар</option>
                        <option>item 1</option>
                        <option>item 2</option>
                    </select>
                </div>

                {/* nav */}
                <nav>
                    <ul className="flex-center space-x-6 text-regular-14">
                        <li>
                            <Link className="text-primary-gray-70" to='/about-company'>О компании</Link>
                        </li>
                        <li>
                            <Link className="text-primary-gray-70" to='/'>Выполненные проекты</Link>
                        </li>
                        <li>
                            <Link className="text-primary-gray-70" to='/reviews'>Отзывы</Link>
                        </li>
                        <li>
                            <Link className="text-primary-gray-70" to='/about-payment'>Доставка и оплата</Link>
                        </li>
                        <li>
                            <Link className="text-primary-gray-70" to='/'>Акции</Link>
                        </li>
                        <li>
                            <Link className="text-primary-gray-70" to='/'>Еще</Link>
                        </li>
                    </ul>
                </nav>

                {/* last child  */}
                <div className='flex-center'>
                    <p className="leading-5 text-primary-gray-70 mr-16 text-regular-14">ул. Красных Партизан д. 198</p>
                    <div className='mr-6'>
                        <p className="text-base leading-21.6px text-medium">+7 (938) 5000-541</p>
                        <span className="inline-block text-xs text-primary-gray-70">пн-пт: с 9:00 до 18:00</span>
                    </div>
                    <a href="tel:+79385000541" className="bg-primary-gray-80 rounded-lg py-3.5 px-6 text-white text-regular-14">Заказазать звонок</a>
                </div>

                {/* bottom content  */}
                <div style={{ backgroundColor: openCatalog ? 'white' : 'transparent' }} className="z-3 absolute w-full -bottom-20 left-0 py-18px transition-colors-2">
                    <div className="flex-c-b container">
                        <div className="flex-center">
                            <button onClick={openCatalogFunc} className="flex-center red-btn py-3 px-4 mr-10">
                                {/* cross  */}
                                <span className={`${openCatalog ? '-rotate-45' : 'rotate-0'} flex-center transition-transform-2 justify-between mr-2 w-5 h-5 relative`}>
                                    <span className={`${openCatalog ? 'translate-y-0 w-4 rotate-90' : '-translate-y-5px w-3.5'} inline-block absolute transition-sizing-and-transfrom bg-white h-0.5`}></span>
                                    <span className={`${openCatalog ? 'opacity-0' : 'opacity-100'} inline-block absolute transition-opacity bg-white h-0.5 w-4`}></span>
                                    <span className={`${openCatalog ? 'translate-y-0 w-4' : 'translate-y-5px w-2.5'} inline-block absolute transition-sizing-and-transfrom bg-white h-0.5`}></span>
                                </span>
                                {/* text  */}
                                <span className='text-regular-16'>Каталог</span>
                            </button>

                            {/* nav  */}
                            <nav className={`${openSearchInput ? 'hidden' : ''}`}>
                                <ul className={`${openCatalog ? 'black' : changeText ? 'text-white' : ''} flex-center space-x-10 text-regular-16`}>
                                    <li>
                                        <Link to='/'>Кабинеты для руководителей</Link>
                                    </li>
                                    <li>
                                        <Link to='/'>Мебель для персонала</Link>
                                    </li>
                                    <li>
                                        <Link to='/'>Офисные кресла</Link>
                                    </li>
                                    <li>
                                        <Link to='/'>Стойки рецепшн</Link>
                                    </li>
                                    <li>
                                        <Link to='/'>Столы для переговоров</Link>
                                    </li>
                                </ul>
                            </nav>
                        </div>

                        {/*  */}
                        <div className="flex-center space-x-3.5">
                            {/* search */}
                            <div className={`${openCatalog ? 'translate-x-full' : ''} relative transition-transform-2`}>
                                <form onSubmit={preventdefault} className="flex-center justify-center relative">
                                    {/* search input  */}
                                    <div className={`absolute z-0 right-full transition-opacity-2 ${openSearchInput ? 'opacity-100' : 'opacity-0'}`}>
                                        <input placeholder={`${openSearchInput ? 'Введите запрос' : ''}`} type="text" className={`w-394px h-41px leading-17px text-restangle-14 py-11px search-input`} />

                                        {/* search results  */}
                                    </div>

                                    {/* search btn */}
                                    <button type='button' onClick={openSearchInputFunc} className={`${openSearchInput ? 'border-l-0 search-btn bg-white' : ''} ${changeText ? openSearchInput ? 'border-secondary-gray-50' : 'border-white' : openSearchInput ? 'border-secondary-gray-50' : 'border-black'} ${openSearchInput ? 'border' : openCatalog ? 'border-0' : 'border'} transition-all duration-300 relative z-1 p-11px rounded-lg`}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                                            <path fillRule="evenodd" className={`${changeText ? openSearchInput ? 'text-black' : 'text-white' : 'text-black'}  transition-colors-2`} clipRule="evenodd" d="M15.5355 16.7363L11.6926 12.8863C8.69326 15.2551 4.36773 14.8755 1.82676 12.0205C-0.71421 9.16545 -0.590064 4.8244 2.10978 2.11923C4.80975 -0.585937 9.1498 -0.71775 12.0089 1.81858C14.868 4.3549 15.2552 8.68042 12.8922 11.6844L16.7351 15.5344C16.9591 15.7468 17.0502 16.0639 16.973 16.3628C16.8959 16.6616 16.6629 16.8951 16.3642 16.9727C16.0655 17.0503 15.7483 16.9598 15.5357 16.7363L15.5355 16.7363ZM1.71634 7.21456C1.7109 9.43369 3.03684 11.4397 5.08058 12.3041C7.12419 13.1685 9.48685 12.7226 11.0752 11.1729C11.0915 11.1537 11.1085 11.1353 11.1263 11.1176C11.1443 11.0995 11.1624 11.0826 11.1815 11.0666C12.9256 9.28543 13.2599 6.55614 11.9971 4.40655C10.7344 2.25695 8.18785 1.2205 5.78321 1.87734C3.37857 2.53419 1.71232 4.72137 1.71737 7.21453L1.71634 7.21456Z" fill={openCatalog ? 'black' : 'currentColor'} />
                                        </svg>
                                    </button>

                                </form>
                            </div>

                            {/* link  */}
                            <Link to='/' className={`inline-block  transition-all duration-300  ${openSearchInput ? '!rounded-100%' : 'rounded-lg'} ${openCatalog ? 'scale-0 !m-0' : 'scale-100'} ${changeText ? 'border-white' : 'border-black'} border relative p-11px`}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                                    <path className={`${changeText ? 'text-white' : 'text-black'}`} fillRule="evenodd" clipRule="evenodd" d="M8.53736 0.500039C6.42705 0.506342 4.70867 2.19779 4.66904 4.30763C4.66668 4.32905 4.66542 4.3506 4.66526 4.37214V5.0175H2.72921C2.37281 5.0175 2.08385 5.30641 2.08385 5.66285V10.8257C2.05817 11.6291 2.08732 12.4334 2.17098 13.2328C2.14491 13.9489 2.41795 14.6434 2.92473 15.1499C3.43151 15.6564 4.12618 15.9291 4.84219 15.9026C5.42429 15.9899 6.01355 16.0186 6.60131 15.9884L10.4734 15.9885C11.0621 16.0187 11.6524 15.9896 12.2352 15.9013C12.9512 15.9275 13.6458 15.6544 14.1523 15.1477C14.6588 14.6409 14.9316 13.9462 14.905 13.2302C14.988 12.4316 15.0166 11.6282 14.9909 10.8257V5.66285C14.9909 5.30641 14.7019 5.0175 14.3455 5.0175H12.4095V4.37214C12.4096 4.34776 12.4084 4.32342 12.4056 4.29924C12.3612 2.19279 10.6443 0.506539 8.53744 0.5L8.53736 0.500039ZM8.53738 1.79074C9.22275 1.78853 9.88063 2.05977 10.3652 2.54437C10.8498 3.02894 11.1211 3.68685 11.1188 4.37214V5.01749H5.95598V4.37214C5.95369 3.68681 6.225 3.02894 6.70957 2.54433C7.19413 2.05977 7.85209 1.7885 8.53738 1.79074ZM3.37457 6.30822H4.66528V7.59892C4.66205 7.82955 4.7821 8.04433 4.98015 8.16238C5.17828 8.28047 5.4243 8.28386 5.62558 8.17132C5.82686 8.05879 5.95283 7.84739 5.95598 7.6168C5.95598 7.61121 5.95598 7.60475 5.95598 7.59892V6.30822H11.1188V7.59892C11.1156 7.82955 11.2356 8.04433 11.4337 8.16238C11.6318 8.28047 11.8778 8.28386 12.0791 8.17132C12.2804 8.05879 12.4063 7.84739 12.4095 7.6168C12.4095 7.61121 12.4095 7.60475 12.4095 7.59892V6.30822H13.7002V10.8257C13.7241 11.5795 13.6981 12.3341 13.6221 13.0844C13.6821 13.5063 13.5402 13.9317 13.239 14.2331C12.9379 14.5345 12.5125 14.6767 12.0907 14.6171C11.5558 14.701 11.0138 14.728 10.4734 14.6978H6.60133C6.06225 14.7285 5.52152 14.7023 4.98795 14.6197C4.56617 14.6797 4.14069 14.5378 3.83929 14.2367C3.53788 13.9355 3.39561 13.5102 3.45524 13.0883C3.37812 12.3368 3.35118 11.5809 3.37457 10.8257V6.30822Z" fill="currentColor" />
                                </svg>

                                {/* num  */}
                                <span className='flex-center justify-center leading-3 absolute -top-3px -right-3px w-18px h-18px rounded-full bg-primary-red-60 text-white text-xs'>0</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div style={{ transform: openCatalog ? `translateX(0vw)` : `translateX(-100vw)`, top: '157px' }} className='absolute -top-1 z-30 max-h-max w-full bg-slate-400 transition-transform-2'>
                <Menu />
            </div>
        </header>
    )
};

export default Header;