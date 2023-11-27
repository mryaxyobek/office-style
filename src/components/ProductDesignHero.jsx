import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';

// products data 
import { cabinetProductsForManagers } from '../assets/data';

// images 
import truckImg from '../assets/images/svg/truck.svg';
import creditCardImg from '../assets/images/svg/credit-card.svg';
import shiledImg from '../assets/images/svg/shield-check-icon.svg';


// swiper 
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../css/styles.css';
// import required modules
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';

const ProductDesignHero = () => {
    const { productName } = useParams();

    const allProducts = [...cabinetProductsForManagers];

    const product = allProducts.find((product) => productName === product.productTitle.toLowerCase().replace(/\s+/g, '-'));

    const [productParts, setProductParts] = useState([...product.pieces.map(item => ({ ...item, count: 1 }))]);


    const decrementCount = (index) => {
        const updatedProductParts = [...productParts]
        updatedProductParts[index].count = Math.max(0, updatedProductParts[index].count - 1);
        setProductParts(updatedProductParts);
    };

    const incrementCount = (index) => {
        const updatedProductParts = [...productParts];
        updatedProductParts[index].count++;
        setProductParts(updatedProductParts);
    };


    // total price

    let totalPrice = 0;
    productParts.forEach((part) => {
        totalPrice += part.count * part.currentPrice;
    });


    // for rating 
    let averageValue = 0;
    let totalrating = 0;
    if (product) {
        if (product.reviews.length >= 1) {
            product.reviews.map((review) => {
                let allRatingValue = totalrating += review.rating;
                averageValue = allRatingValue / product.reviews.length;
            });
        };
    };

    // select colors
    const [selectWhiteColor, setSelectWhiteColor] = useState(false);
    const [selectBlackColor, setSelectBlackColor] = useState(false);
    const [selectLightBrownColor, setSelectLightBrownColor] = useState(false);
    const [selectDarkBrownColor, setSelectDarkBrownColor] = useState(false);
    const [selectBrownColor, setSelectBrownColor] = useState(true);
    // select all colors
    const selectAllColors = () => {
        setSelectWhiteColor(true);
        setSelectBlackColor(true);
        setSelectLightBrownColor(true);
        setSelectDarkBrownColor(true);
        setSelectBrownColor(true);
    };
    return (
        <section className='pt-20 max-1150:pb-16 max-900:pt-8 max-800:pb-14 max-580:pb-12 max-540:pt-0 max-440:pb-8 pb-60r'>
            <div className="container">
                {
                    product ?
                        <div>
                            {/* breadcrumb */}
                            < ul className="breadcrumb">
                                <li>
                                    <Link to='/catalog'>Katalog</Link>
                                </li>
                                <li>
                                    {
                                        product.type == 'Boshqaruvchilar uchun' &&
                                        <Link to='/catalog/cabinet-for-managers'>Boshqaruvchilar uchun</Link>
                                    }
                                    {
                                        product.type == 'Xodimlar uchun' &&
                                        <Link to='/catalog/furniture-for-staff'>Xodimlar uchun mebel</Link>
                                    }
                                    {
                                        product.type == 'Ofis kreslosi' &&
                                        <Link to='/catalog/office-chairs'>Ofis kreslolari</Link>
                                    }
                                    {
                                        product.type == 'Ofis divani' &&
                                        <Link to='/catalog/office-sofas'>Ofis divanlari</Link>
                                    }
                                    {
                                        product.type == 'Qabul qilish stoli' &&
                                        <Link to='/catalog/reception-desks'>Qabul qilish stollari</Link>
                                    }
                                    {
                                        product.type == 'Uchrashuvlar uchun stol' &&
                                        <Link to='/catalog/meeting-tables'>Uchrashuv uchun stollar</Link>
                                    }
                                    {
                                        product.type == "Ofis bo'limlari uchun" &&
                                        <Link to='/catalog/office-partitions'>Ofis bo'limlari uchun</Link>
                                    }
                                    {
                                        product.type == "Ko'p kishilk bo'limlar uchun" &&
                                        <Link to='/catalog/multi-person-sections'>Ko'p kishilik bo'limlar uhcun</Link>
                                    }
                                    {
                                        product.type == 'Ofis stoli' &&
                                        <Link to='/catalog/office-desks'>Ofis stollari</Link>
                                    }
                                    {
                                        product.type == 'Ofis shkafi' &&
                                        <Link to='/catalog/office-cabinets'>Ofis shkaflari</Link>
                                    }
                                </li>
                                <li>
                                    <span>{product.productTitle}</span>
                                </li>
                            </ul>

                            {/* main content  */}
                            <div className="grid grid-cols-16 gap-8 max-1500:grid-cols-1">
                                {/* first child */}
                                <div className="flex flex-col gap-8 col-start-1 col-end-11 max-1500:col-end-2">

                                    {/* image wrapper  */}
                                    <div className="flex gap-8">
                                        <Swiper className="completed-projects-swiper rounded-2.5xl h-550px max-1200:h-513px max-800:h-96 max-640:h-80 max-540:h-72 max-470:h-210px"
                                            effect={'fade'}
                                            autoplay={{
                                                delay: 3000,
                                                disableOnInteraction: false,
                                            }}
                                            slidesPerView={1}
                                            spaceBetween={30}
                                            loop={true}
                                            pagination={{
                                                clickable: true,
                                            }}
                                            navigation={true}
                                            modules={[Autoplay, EffectFade, Pagination, Navigation]}
                                        >
                                            {/* swiper images  */}
                                            {
                                                product.images.map((img) => {
                                                    return (
                                                        <SwiperSlide key={img.id} className="flex items-center justify-center relative">
                                                            <img src={img.img} alt="furniture image" className="w-full h-full object-cover object-center" />
                                                        </SwiperSlide>
                                                    )
                                                })
                                            }
                                        </Swiper>
                                    </div>

                                    {/* info list  */}
                                    <ul className="flex-center space-x-8 max-800:hidden">
                                        <li className="flex-center gap-6">
                                            <img width={62} height={62} src={truckImg} alt="truck icon image" />
                                            <div className="space-y-1">
                                                <h3>Yetkazib berish va o'rnatish</h3>
                                                <p className="text-primary-gray-70 text-regular-16">Operator sizga xabar beradi</p>
                                            </div>
                                        </li>

                                        <li className="flex-center gap-6">
                                            <img width={62} height={62} src={shiledImg} alt="truck icon image" className='py-1.5 px-2.5' />
                                            <div className="space-y-1">
                                                <h3>Kafolat va qaytarish</h3>
                                                <Link href='#' className="text-regular-16 underline text-primary-red-50">Shartlar</Link>
                                            </div>
                                        </li>

                                        <li className="flex-center gap-6">
                                            <img width={62} height={62} src={creditCardImg} alt="truck icon image" />
                                            <div className="space-y-1">
                                                <h3>Har qanday to'lov turlari</h3>
                                                <p className="text-primary-gray-70 text-regular-16">Naqd pul, karta, onlayn, bank o'tkazmasi</p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>

                                {/* last child  */}
                                <div className="space-y-8 col-start-11 col-end-17 max-1500:col-start-1 max-1500:col-end-2">
                                    {/* top  */}
                                    <div className='space-y-3'>
                                        <div className="flex-center space-x-8">
                                            {/* id  */}
                                            <span className="text-primary-gray-70">ID: {product.productId}</span>
                                            <div className="flex space-x-2.5">
                                                {/* stars rating */}
                                                <div className="flex-center space-x-0.5">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="19" viewBox="0 0 20 19" fill="none">
                                                        <path d="M10 0.5L12.2451 7.40983H19.5106L13.6327 11.6803L15.8779 18.5902L10 14.3197L4.12215 18.5902L6.36729 11.6803L0.489435 7.40983H7.75486L10 0.5Z" fill={averageValue >= 1 ? '#FFA800' : '#cccccc'} />
                                                    </svg>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="19" viewBox="0 0 20 19" fill="none">
                                                        <path d="M10 0.5L12.2451 7.40983H19.5106L13.6327 11.6803L15.8779 18.5902L10 14.3197L4.12215 18.5902L6.36729 11.6803L0.489435 7.40983H7.75486L10 0.5Z" fill={averageValue >= 2 ? '#FFA800' : '#cccccc'} />
                                                    </svg>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="19" viewBox="0 0 20 19" fill="none">
                                                        <path d="M10 0.5L12.2451 7.40983H19.5106L13.6327 11.6803L15.8779 18.5902L10 14.3197L4.12215 18.5902L6.36729 11.6803L0.489435 7.40983H7.75486L10 0.5Z" fill={averageValue >= 3 ? '#FFA800' : '#cccccc'} />
                                                    </svg>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="19" viewBox="0 0 20 19" fill="none">
                                                        <path d="M10 0.5L12.2451 7.40983H19.5106L13.6327 11.6803L15.8779 18.5902L10 14.3197L4.12215 18.5902L6.36729 11.6803L0.489435 7.40983H7.75486L10 0.5Z" fill={averageValue >= 4 ? '#FFA800' : '#cccccc'} />
                                                    </svg>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="19" viewBox="0 0 20 19" fill="none">
                                                        <path d="M10 0.5L12.2451 7.40983H19.5106L13.6327 11.6803L15.8779 18.5902L10 14.3197L4.12215 18.5902L6.36729 11.6803L0.489435 7.40983H7.75486L10 0.5Z" fill={averageValue >= 5 ? '#FFA800' : '#cccccc'} />
                                                    </svg>
                                                </div>
                                                <span className="text-primary-gray-70">Sharxlar ({product.reviews.length})</span>
                                            </div>
                                        </div>
                                        <h3 className="text-regular-36">{product.productTitle}</h3>
                                    </div>

                                    {/*  select colors  */}
                                    <div className="flex-center gap-6 max-470:flex-col">
                                        <div className="flex space-x-4">
                                            <button onClick={() => setSelectWhiteColor(!selectWhiteColor)} className={`${selectWhiteColor ? 'scale-90' : ''} border !duration-150 transition-transform-2 flex-center justify-center w-10 h-10 rounded-full cursor-pointer border-primary-gray-70 bg-white`}>
                                                <svg className={`${selectWhiteColor ? 'inline-block' : 'hidden'}`} fill="#4D4D4D" width="18" height="18" viewBox="0 0 36 36" version="1.1" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink">
                                                    <path d="M13.72,27.69,3.29,17.27a1,1,0,0,1,1.41-1.41l9,9L31.29,7.29a1,1,0,0,1,1.41,1.41Z"></path>
                                                    <rect x="0" y="0" width="36" height="36" fillOpacity="0" />
                                                </svg>
                                            </button>

                                            <button onClick={() => setSelectBlackColor(!selectBlackColor)} className={`${selectBlackColor ? 'scale-90' : ''} !duration-150 transition-transform-2 flex-center justify-center w-10 h-10 rounded-full border cursor-pointer border-primary-gray-70 bg-secondary-black-light`}>
                                                <svg className={`${selectBlackColor ? 'inline-block' : 'hidden'}`} fill="#fff" width="18" height="18" viewBox="0 0 36 36" version="1.1" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink">
                                                    <path d="M13.72,27.69,3.29,17.27a1,1,0,0,1,1.41-1.41l9,9L31.29,7.29a1,1,0,0,1,1.41,1.41Z"></path>
                                                    <rect x="0" y="0" width="36" height="36" fillOpacity="0" />
                                                </svg>
                                            </button>

                                            <button onClick={() => setSelectLightBrownColor(!selectLightBrownColor)} className={`${selectLightBrownColor ? 'scale-90' : ''} !duration-150 transition-transform-2 flex-center justify-center w-10 h-10 rounded-full border cursor-pointer border-primary-gray-70 bg-secondary-brown-10`}>
                                                <svg className={`${selectLightBrownColor ? 'inline-block' : 'hidden'}`} fill="#4D4D4D" width="18" height="18" viewBox="0 0 36 36" version="1.1" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink">
                                                    <path d="M13.72,27.69,3.29,17.27a1,1,0,0,1,1.41-1.41l9,9L31.29,7.29a1,1,0,0,1,1.41,1.41Z"></path>
                                                    <rect x="0" y="0" width="36" height="36" fillOpacity="0" />
                                                </svg>
                                            </button>

                                            <button onClick={() => setSelectDarkBrownColor(!selectDarkBrownColor)} className={`${selectDarkBrownColor ? 'scale-90' : ''} !duration-150 transition-transform-2 flex-center justify-center w-10 h-10 rounded-full border cursor-pointer border-primary-gray-70 bg-secondary-brown-90`}>
                                                <svg className={`${selectDarkBrownColor ? 'inline-block' : 'hidden'}`} fill="#fff" width="18" height="18" viewBox="0 0 36 36" version="1.1" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink">
                                                    <path d="M13.72,27.69,3.29,17.27a1,1,0,0,1,1.41-1.41l9,9L31.29,7.29a1,1,0,0,1,1.41,1.41Z"></path>
                                                    <rect x="0" y="0" width="36" height="36" fillOpacity="0" />
                                                </svg>
                                            </button>

                                            <button onClick={() => setSelectBrownColor(!selectBrownColor)} className={`${selectBrownColor ? 'scale-90' : ''} !duration-150 transition-transform-2 flex-center justify-center w-10 h-10 rounded-full border cursor-pointer border-primary-gray-70 bg-secondary-brown-50`}>
                                                <svg className={`${selectBrownColor ? 'inline-block' : 'hidden'}`} fill="#fff" width="18" height="18" viewBox="0 0 36 36" version="1.1" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink">
                                                    <path d="M13.72,27.69,3.29,17.27a1,1,0,0,1,1.41-1.41l9,9L31.29,7.29a1,1,0,0,1,1.41,1.41Z"></path>
                                                    <rect x="0" y="0" width="36" height="36" fillOpacity="0" />
                                                </svg>
                                            </button>
                                        </div>
                                        <button onClick={selectAllColors} className="text-regular-14 text-primary-gray-80">Barchasini tanlash</button>
                                    </div>

                                    {/* list wrapper */}
                                    <div>
                                        <ul className="mb-4">
                                            {
                                                productParts.map((part, index) => {
                                                    return (
                                                        <li key={part.id} className="flex-c-b gap-5 py-2 border-b border-primary-gray-20 first:border-t text-regular-16 text-primary-gray-70 max-470:items-stretch">

                                                            <div className='flex-center gap-1 max-470:flex-col max-470:items-start max-470:gap-3'>
                                                                <span className="flex justify-center min-w-28px max-640:min-w-24px w-7 leading-5 max-470:border max-470:rounded-full max-470:w-6 max-470:h-6 max-470:mb-auto border-primary-gray-50 max-470:items-center">{part.id}</span>
                                                                <span>{part.type} {part.size}</span>
                                                            </div>

                                                            <div className='flex-c-b gap-1 max-w-230px w-full min-w-230px max-470:flex-col max-470:min-w-120px max-470:max-w-120px max-470:items-end'>
                                                                <div className="flex-center">
                                                                    <button onClick={() => decrementCount(index)} className="red-btn !bg-primary-red-50 disabled:!bg-primary-gray-10 disabled:text-secondary-blue-70 rounded w-8 h-8">-</button>
                                                                    <span className='flex-center justify-center text-black w-5 mx-2'>{part.count}</span>
                                                                    <button onClick={() => incrementCount(index)} className="red-btn !bg-primary-red-50 rounded w-8 h-8 disabled:!bg-primary-gray-10 disabled:text-secondary-blue-70">+</button>
                                                                </div>

                                                                <div className="space-y-1">
                                                                    {
                                                                        part.oldprice &&
                                                                        <del className="text-regular-12 text-primary-gray-50">{product.pieces[0].oldprice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}so'm</del>
                                                                    }
                                                                    <p className="text-regular-16">{part.currentPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}so'm</p>
                                                                </div>
                                                            </div>

                                                        </li>
                                                    )
                                                })
                                            }
                                        </ul>

                                        {/* total price */}
                                        <div className="flex-e-b mb-10">
                                            <p className="text-regular-16">Jami summa:</p>
                                            <div className="flex-e-b space-x-6">
                                                <p className="flex-end space-x-2">
                                                    <span className="inline-block text-regular-28">
                                                        {
                                                            totalPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
                                                        }
                                                        <span className="inline-block text-regular-16 ml-1">so'm</span>
                                                    </span>
                                                </p>
                                            </div>
                                        </div>

                                        {/* buttons  */}
                                        <div className="flex justify-end gap-6 text-regular-16 max-540:flex-col">
                                            <button disabled={totalPrice === 0} className="red-btn py-3.5 px-6 bg-primary-red-50 disabled:!bg-primary-gray-10 disabled:text-secondary-blue-70">Sotib olish</button>
                                            <button className="py-3.5 text-regular-14 px-6 text-primary-gray-90 rounded-lg border border-primary-gray-50">Bepul dizayn eskiziga zakaz berish</button>
                                        </div>
                                    </div>
                                </div >
                            </div >
                        </div >
                        :
                        // error 
                        <div className='space-y-6'>
                            <h1>Nimadir xato ketdi :(</h1>
                            <p className='text-medium-20'>Bu nimadan bo'lishi mumkin?</p>
                            <ul className="space-y-2">
                                <li>1. Sayt havolasi (linki)ni noto'g'ri kiritilgan bo'lishi mumkin.</li>
                                <li>2. Bunday mahsulot yo'q yoki mahsulot ma'lumotlarini olib bo'lmadi.</li>
                            </ul>
                            <Link to='/' className='inline-block red-btn px-6 py-4'>Bosh sahifaga o'tish</Link>
                        </div>
                }
            </div >
        </section >
    )
};

export default ProductDesignHero;