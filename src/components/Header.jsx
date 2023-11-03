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
                <Link to='/' className='text-primary-gray-90 text-2xl leading-25px textblack max-800:text-xl max-800:leading-5 max-540:text-lg max-540:leading-17.5px max-440:text-base max-440:leading-4'>
                    OFIS <span className='text-primary-red-50'>TARZI</span>
                </Link>

                {/* nav */}
                <nav className='max-900:hidden'>
                    <ul className="flex-center space-x-6 text-regular-14">
                        <li>
                            <Link className="text-primary-gray-70" to='/about-company'>Kompaniya haqida</Link>
                        </li>
                        <li>
                            <Link className="text-primary-gray-70" to='/portfolio'>Loyihalar</Link>
                        </li>
                        <li>
                            <Link className="text-primary-gray-70" to='/reviews'>Sharxlar</Link>
                        </li>
                        <li>
                            <Link className="text-primary-gray-70" to='/about-payment'>Yetkazib berish va to'lash</Link>
                        </li>
                        <li>
                            <Link className="text-primary-gray-70" to='/akciya'>Aksiya</Link>
                        </li>
                        <li>
                            <Link className="text-primary-gray-70" to='/catalog'>Katalog</Link>
                        </li>
                    </ul>
                </nav>

                {/* last child  */}
                <div className='flex-center'>
                    <address className="leading-5 text-primary-gray-70 mr-16 max-1500:mr-5 text-regular-14 max-1300:hidden not-italic">Toshkent, Olmaliq K: No312</address>

                    <div className='mr-6 max-1500:hidden'>
                        <a target='_blank' href='tel:+998999999999' className="block text-base leading-21.6px text-medium">+998 (99) 999 99-99</a>
                        <span className="inline-block text-xs text-primary-gray-70">du - shan: 9:00dan 18:00gacha</span>
                    </div>

                    <button className="flex items-center justify-center bg-primary-gray-80 rounded-lg max-1200:!text-xs py-3.5 px-6 text-white text-regular-14 max-1050:bg-transparent max-1050:w-9 max-1050:h-9 max-1050:border max-1050:p-0 max-1050:border-primary-gray-20 max-900:mr-4 max-730:mr-3 max-670:mr-2">
                        <span className="max-1050:hidden">Qo'ng'iroqqa buyurtma</span>
                        <svg className='hidden max-1050:block' xmlns="http://www.w3.org/2000/svg" width="18" height="16" viewBox="0 0 18 16" fill="none">
                            <path d="M17.316 13.5404C17.1098 14.0338 16.3076 14.9586 15.7472 15.3536C15.2396 15.7104 14.8807 15.8472 14.4065 15.868C14.0163 15.8857 13.8546 15.8549 13.3558 15.6637C9.44286 14.168 6.31876 11.9362 3.83778 8.86934C2.54241 7.2679 1.55588 5.60692 0.881786 3.88383C0.488612 2.87866 0.469258 2.44231 0.792202 1.92792C0.931832 1.71128 1.52574 1.17405 1.95679 0.8745C2.67651 0.378337 3.00775 0.19481 3.27263 0.143474C3.45373 0.107025 3.76893 0.13526 3.96967 0.20251C4.06727 0.233569 4.21741 0.306209 4.30395 0.357545C4.83371 0.683273 6.3077 2.4323 6.78963 3.30501C7.06529 3.80374 7.15764 4.1731 7.07137 4.44698C6.98262 4.74139 6.8347 4.89617 6.17415 5.38977C5.90927 5.58844 5.66126 5.79276 5.62227 5.84692C5.52163 5.98116 5.44061 6.24452 5.44061 6.43061C5.44421 6.86235 5.74531 7.64471 6.1407 8.24688C6.44705 8.7143 6.99644 9.31365 7.54003 9.77388C8.17818 10.316 8.74112 10.6854 9.3765 10.9775C10.1933 11.3545 10.6921 11.45 11.057 11.2924C11.1491 11.2539 11.2467 11.2021 11.2774 11.1789C11.3056 11.1556 11.5199 10.9128 11.7543 10.644C12.2059 10.1171 12.3084 10.0318 12.6178 9.93353C13.0107 9.80981 13.4117 9.84318 13.8162 10.0344C14.1231 10.1817 14.7919 10.5665 15.2238 10.8455C15.792 11.2149 17.008 12.1346 17.172 12.3178C17.4615 12.649 17.5107 13.073 17.316 13.5404Z" fill="black" />
                            <path d="M17.1713 12.3181C17.0073 12.1348 15.7913 11.2154 15.2231 10.8457C14.7912 10.5667 14.1227 10.182 13.8155 10.0346C13.411 9.8434 13.0101 9.81003 12.6172 9.93375C12.3078 10.0321 12.2052 10.1173 11.7537 10.6442C11.5192 10.913 11.3049 11.1558 11.2767 11.1792C11.246 11.2023 11.1484 11.2541 11.0564 11.2926C10.6914 11.4502 10.1926 11.3547 9.37584 10.9777C8.74045 10.6856 8.17751 10.3162 7.53937 9.7741C6.99578 9.31387 6.44666 8.71452 6.14003 8.24711C5.74437 7.64493 5.44327 6.86231 5.43995 6.43083C5.43995 6.24474 5.52096 5.98164 5.6216 5.84714C5.63736 5.82507 5.68769 5.77809 5.75957 5.71777C4.77581 6.26553 3.59463 6.58535 2.32359 6.58535C2.29096 6.58535 2.25861 6.5833 2.22571 6.58279C2.6963 7.35822 3.23187 8.12056 3.83739 8.86956C6.31837 11.9364 9.44219 14.1682 13.3554 15.6639C13.8542 15.8551 14.016 15.8862 14.4061 15.8682C14.8803 15.8472 15.2392 15.7104 15.7468 15.3538C16.307 14.9588 17.1094 14.034 17.3156 13.5406C17.5106 13.073 17.4613 12.6489 17.1713 12.3181Z" fill="black" />
                            <path d="M17.1717 12.3177C17.0077 12.1344 15.7917 11.215 15.2235 10.8454C14.7916 10.5664 14.1231 10.1816 13.8159 10.0343C13.4114 9.84303 13.0105 9.80966 12.6176 9.93338C12.3082 10.0317 12.2056 10.1169 11.7541 10.6439C11.5196 10.9126 11.3053 11.1554 11.2771 11.1788C11.2481 11.2009 11.1577 11.2484 11.0695 11.2863C10.3777 12.06 9.56288 12.7289 8.651 13.2618C10.076 14.2094 11.6402 15.0072 13.3564 15.663C13.8552 15.8542 14.0169 15.8853 14.407 15.8673C14.8812 15.8463 15.2401 15.7095 15.7478 15.3529C16.3079 14.9579 17.1103 14.0331 17.3166 13.5397C17.511 13.0726 17.4617 12.6486 17.1717 12.3177Z" fill="black" />
                        </svg>
                    </button>

                    {/* responsive  */}
                    <div className="hidden space-x-4 max-900:flex max-670:space-x-2 max-730:space-x-3">
                        <Link to='/' className={`flex-center justify-center w-9 h-9 rounded-lg border-primary-gray-20 border relative`}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                                <path fillRule="evenodd" className='text-black' clipRule="evenodd" d="M15.5355 16.7363L11.6926 12.8863C8.69326 15.2551 4.36773 14.8755 1.82676 12.0205C-0.71421 9.16545 -0.590064 4.8244 2.10978 2.11923C4.80975 -0.585937 9.1498 -0.71775 12.0089 1.81858C14.868 4.3549 15.2552 8.68042 12.8922 11.6844L16.7351 15.5344C16.9591 15.7468 17.0502 16.0639 16.973 16.3628C16.8959 16.6616 16.6629 16.8951 16.3642 16.9727C16.0655 17.0503 15.7483 16.9598 15.5357 16.7363L15.5355 16.7363ZM1.71634 7.21456C1.7109 9.43369 3.03684 11.4397 5.08058 12.3041C7.12419 13.1685 9.48685 12.7226 11.0752 11.1729C11.0915 11.1537 11.1085 11.1353 11.1263 11.1176C11.1443 11.0995 11.1624 11.0826 11.1815 11.0666C12.9256 9.28543 13.2599 6.55614 11.9971 4.40655C10.7344 2.25695 8.18785 1.2205 5.78321 1.87734C3.37857 2.53419 1.71232 4.72137 1.71737 7.21453L1.71634 7.21456Z" fill={openCatalog ? 'black' : 'currentColor'} />
                            </svg>
                        </Link>


                        {/* link */}
                        <Link to='/' className={`flex-center justify-center w-9 h-9 rounded-lg border-primary-gray-20 border relative`}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                                <path className='text-black' fillRule="evenodd" clipRule="evenodd" d="M8.53736 0.500039C6.42705 0.506342 4.70867 2.19779 4.66904 4.30763C4.66668 4.32905 4.66542 4.3506 4.66526 4.37214V5.0175H2.72921C2.37281 5.0175 2.08385 5.30641 2.08385 5.66285V10.8257C2.05817 11.6291 2.08732 12.4334 2.17098 13.2328C2.14491 13.9489 2.41795 14.6434 2.92473 15.1499C3.43151 15.6564 4.12618 15.9291 4.84219 15.9026C5.42429 15.9899 6.01355 16.0186 6.60131 15.9884L10.4734 15.9885C11.0621 16.0187 11.6524 15.9896 12.2352 15.9013C12.9512 15.9275 13.6458 15.6544 14.1523 15.1477C14.6588 14.6409 14.9316 13.9462 14.905 13.2302C14.988 12.4316 15.0166 11.6282 14.9909 10.8257V5.66285C14.9909 5.30641 14.7019 5.0175 14.3455 5.0175H12.4095V4.37214C12.4096 4.34776 12.4084 4.32342 12.4056 4.29924C12.3612 2.19279 10.6443 0.506539 8.53744 0.5L8.53736 0.500039ZM8.53738 1.79074C9.22275 1.78853 9.88063 2.05977 10.3652 2.54437C10.8498 3.02894 11.1211 3.68685 11.1188 4.37214V5.01749H5.95598V4.37214C5.95369 3.68681 6.225 3.02894 6.70957 2.54433C7.19413 2.05977 7.85209 1.7885 8.53738 1.79074ZM3.37457 6.30822H4.66528V7.59892C4.66205 7.82955 4.7821 8.04433 4.98015 8.16238C5.17828 8.28047 5.4243 8.28386 5.62558 8.17132C5.82686 8.05879 5.95283 7.84739 5.95598 7.6168C5.95598 7.61121 5.95598 7.60475 5.95598 7.59892V6.30822H11.1188V7.59892C11.1156 7.82955 11.2356 8.04433 11.4337 8.16238C11.6318 8.28047 11.8778 8.28386 12.0791 8.17132C12.2804 8.05879 12.4063 7.84739 12.4095 7.6168C12.4095 7.61121 12.4095 7.60475 12.4095 7.59892V6.30822H13.7002V10.8257C13.7241 11.5795 13.6981 12.3341 13.6221 13.0844C13.6821 13.5063 13.5402 13.9317 13.239 14.2331C12.9379 14.5345 12.5125 14.6767 12.0907 14.6171C11.5558 14.701 11.0138 14.728 10.4734 14.6978H6.60133C6.06225 14.7285 5.52152 14.7023 4.98795 14.6197C4.56617 14.6797 4.14069 14.5378 3.83929 14.2367C3.53788 13.9355 3.39561 13.5102 3.45524 13.0883C3.37812 12.3368 3.35118 11.5809 3.37457 10.8257V6.30822Z" fill="currentColor" />
                            </svg>
                            {/* num  */}
                            <span className='flex-center justify-center leading-3 absolute -top-3px -right-3px w-18px h-18px rounded-full bg-primary-red-60 text-white text-xs'>0</span>
                        </Link>

                        {/* hamburger (catalog) btn  */}
                        <button onClick={openCatalogFunc} className="flex-center red-btn justify-center w-9 h-9">
                            {/* cross  */}
                            <span className={`${openCatalog ? '-rotate-45' : 'rotate-0'} flex-center transition-transform-2 justify-between w-4 h-4 relative`}>
                                <span className={`${openCatalog ? 'translate-y-0 w-4 rotate-90' : '-translate-y-5px w-3.5'} inline-block absolute transition-sizing-and-transfrom bg-white h-0.5`}></span>
                                <span className={`${openCatalog ? 'opacity-0' : 'opacity-100'} inline-block absolute transition-opacity bg-white h-0.5 w-4`}></span>
                                <span className={`${openCatalog ? 'translate-y-0 w-4' : 'translate-y-5px w-2.5'} inline-block absolute transition-sizing-and-transfrom bg-white h-0.5`}></span>
                            </span>
                        </button>
                    </div>
                </div>

                {/* bottom content  */}
                <div style={{ backgroundColor: openCatalog ? 'white' : 'transparent' }} className="z-3 absolute w-full -bottom-20 left-0 py-18px transition-colors-2 max-900:hidden">
                    <div className="flex-c-b container">
                        <div className="flex-center">

                            {/* catalog btn  */}
                            <button onClick={openCatalogFunc} className="flex-center red-btn py-3 px-4 mr-10">
                                {/* cross  */}
                                <span className={`${openCatalog ? '-rotate-45' : 'rotate-0'} flex-center transition-transform-2 justify-between mr-2 w-5 h-5 relative`}>
                                    <span className={`${openCatalog ? 'translate-y-0 w-4 rotate-90' : '-translate-y-5px w-3.5'} inline-block absolute transition-sizing-and-transfrom bg-white h-0.5`}></span>
                                    <span className={`${openCatalog ? 'opacity-0' : 'opacity-100'} inline-block absolute transition-opacity bg-white h-0.5 w-4`}></span>
                                    <span className={`${openCatalog ? 'translate-y-0 w-4' : 'translate-y-5px w-2.5'} inline-block absolute transition-sizing-and-transfrom bg-white h-0.5`}></span>
                                </span>
                                {/* text  */}
                                <span className='text-regular-16'>Katalog</span>
                            </button>

                            {/* nav  */}
                            <nav className={`${openSearchInput ? 'hidden' : ''} max-1350:hidden`}>
                                <ul className={`${openCatalog ? 'black' : changeText ? 'text-white' : ''} flex-center space-x-10 text-regular-16`}>
                                    <li>
                                        <Link to='/catalog/cabinet-for-managers'>Boshqaruvchi kabineti</Link>
                                    </li>
                                    <li>
                                        <Link to='/catalog/furniture-for-staff'>Xodimlar uchun mebel</Link>
                                    </li>
                                    <li>
                                        <Link to='/catalog/office-chairs'>Ofis kreslolari</Link>
                                    </li>
                                    <li>
                                        <Link to='/catalog/reception-desks'>Qabul qilish stollari</Link>
                                    </li>
                                    <li>
                                        <Link to='/catalog/meeting-tables'>Uchrashuv stollari</Link>
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

            <div style={{ transform: openCatalog ? `translateX(0vw)` : `translateX(-100vw)`, top: '155px' }} className='absolute -top-1 z-30 max-h-max w-full bg-slate-400 transition-transform-2 max-1050:!top-36 max-900:!top-68px'>
                <Menu />
            </div>
        </header>
    )
};

export default Header;