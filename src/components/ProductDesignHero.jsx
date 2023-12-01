import React, { useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';

// products data 
import { cabinetProductsForManagers, furnitureForStaff } from '../assets/data';

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
    const location = useLocation();
    const pathArr = location.pathname.split("/").filter((path) => path !== "");



    const { productName } = useParams();

    const allProducts = [...cabinetProductsForManagers, ...furnitureForStaff];

    const product = allProducts.find((product) => productName === product.productTitle.toLowerCase().replace(/\s+/g, '-'));

    const [productParts, setProductParts] = useState([...product.parts.map(item => ({ ...item, count: 1 }))]);


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


    // modal
    const [openModal, setOpenModal] = useState(false);
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            setOpenModal(false);
        };
    });
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
                                        pathArr[1] &&
                                        <Link to={`/catalog/${pathArr[1]}`}>{product.type}</Link>
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
                                                                        <del className="text-regular-12 text-primary-gray-50">{part.oldprice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}so'm</del>
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
                                            <button
                                                disabled={totalPrice === 0}
                                                onClick={() => setOpenModal(true)}
                                                className="red-btn py-3.5 px-6 bg-primary-red-50 disabled:!bg-primary-gray-10 disabled:text-secondary-blue-70">Sotib olish</button>
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

                {/* modal wrapper  */}
                <div className={`${openModal ? 'flex-center' : 'hidden'} flex-center fixed justify-center top-0 right-0 w-full h-screen z-10`}>
                    {/* overlay */}
                    <div onClick={() => setOpenModal(false)} className={`justify-center fixed bg-black bg-opacity-75 w-full min-h-screen top-0 right-0 z-1`}></div>
                    {/* modal */}
                    <div className="flex relative max-h-640px h-full bg-primary-gray-10 w-1080px rounded-2.5xl overflow-auto max-1050:w-full max-800:w-411px max-800:flex-col max-800:max-h-640px max-800:h-full max-470:w-full max-470:rounded-none max-470:max-h-ful">
                        {/* close modal button */}
                        <button onClick={() => setOpenModal(false)} className="absolute red-btn top-5 right-5 z-5">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M13.4099 12.0002L17.7099 7.71019C17.8982 7.52188 18.004 7.26649 18.004 7.00019C18.004 6.73388 17.8982 6.47849 17.7099 6.29019C17.5216 6.10188 17.2662 5.99609 16.9999 5.99609C16.7336 5.99609 16.4782 6.10188 16.2899 6.29019L11.9999 10.5902L7.70994 6.29019C7.52164 6.10188 7.26624 5.99609 6.99994 5.99609C6.73364 5.99609 6.47824 6.10188 6.28994 6.29019C6.10164 6.47849 5.99585 6.73388 5.99585 7.00019C5.99585 7.26649 6.10164 7.52188 6.28994 7.71019L10.5899 12.0002L6.28994 16.2902C6.19621 16.3831 6.12182 16.4937 6.07105 16.6156C6.02028 16.7375 5.99414 16.8682 5.99414 17.0002C5.99414 17.1322 6.02028 17.2629 6.07105 17.3848C6.12182 17.5066 6.19621 17.6172 6.28994 17.7102C6.3829 17.8039 6.4935 17.8783 6.61536 17.9291C6.73722 17.9798 6.86793 18.006 6.99994 18.006C7.13195 18.006 7.26266 17.9798 7.38452 17.9291C7.50638 17.8783 7.61698 17.8039 7.70994 17.7102L11.9999 13.4102L16.2899 17.7102C16.3829 17.8039 16.4935 17.8783 16.6154 17.9291C16.7372 17.9798 16.8679 18.006 16.9999 18.006C17.132 18.006 17.2627 17.9798 17.3845 17.9291C17.5064 17.8783 17.617 17.8039 17.7099 17.7102C17.8037 17.6172 17.8781 17.5066 17.9288 17.3848C17.9796 17.2629 18.0057 17.1322 18.0057 17.0002C18.0057 16.8682 17.9796 16.7375 17.9288 16.6156C17.8781 16.4937 17.8037 16.3831 17.7099 16.2902L13.4099 12.0002Z" fill="#fff" />
                            </svg>
                        </button>
                        {/* form */}
                        <form action="https://echo.htmlacademy.ru" className="flex flex-col overflow-y-auto bg-white rounded-2.5xl px-11 hidden-scroll py-14 pb-auto z-2 max-w-screen-540 w-full h-full max-1050:p-8 max-1050:w-1/2 max-1050:rounded-r-none max-800:w-full max-470:rounded-none">
                            {/* title  */}
                            <h3 className="text-center max-w-md mx-auto text-medium-28 mb-3">Biz sizga qo'ng'iroq qilamiz</h3>
                            <p className="text-center text-primary-gray-70 mb-8 max-440:text-regular-16">va biz sizga mebelning konfiguratsiyasi, o'lchami va rangi haqida qaror qabul qilishingizga yordam beramiz. Shuningdek, biz dastlabki loyihani bepul tuzamiz va aniq narx va vaqtni hisoblaymiz.</p>
                            {/* main  */}
                            <div className="space-y-6 mb-8">
                                <div>
                                    <label htmlFor='nameInput' className="inline-block mb-2 text-regular-14 text-primary-gray-70">Ismingiz</label>
                                    <input autoComplete='off' id='nameInput' maxLength={13} name='user name' placeholder='Ismingiz' required type="text" className='leading-17.5px!' />
                                </div>

                                <div>
                                    <label htmlFor='phoneNumInput' className="inline-block mb-2 text-regular-14 text-primary-gray-70">Telefon raqamingiz</label>
                                    <input autoComplete='off' id='phoneNumInput' maxLength={13} name='phone number' placeholder='+998 (99) 999-99-99' required type="tel" className='leading-17.5px!' />
                                </div>

                                <button className="red-btn w-full text-regular-16 py-3.5">Buyurtma berish</button>
                            </div>

                            <p className="text-regular-12 text-center">Saytga ma'lumot yuborish orqali siz <Link className='text-primary-red-50' to='/processing-of-personal-data'>Shaxsiy ma'lumotlarni himoya qilish siyosati shartlarini qabul qilasiz</Link></p>
                        </form>

                        {/* image  */}
                        <img src={product.images[0].img} width={600} height={640} alt={product.images[0].alt} className="absolute z-1 right-0 top-0 h-full w-3/5 object-cover object-right max-800:hidden" />
                    </div>
                </div>

            </div >
        </section >
    )
};

export default ProductDesignHero;