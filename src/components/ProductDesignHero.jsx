import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { minusCount1, plusCount1, minusCount2, plusCount2, minusCount3, plusCount3, minusCount4, plusCount4, minusCount5, plusCount5 } from '../store/slices/productDetailsSlice'
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
    const { products } = useSelector((store) => store.products);

    // for rating 
    let averageValue = 0;
    let totalrating = 0;
    if (products.length <= 1) {
        products.map((e) => {
            if (e.reviews.length >= 1) {
                e.reviews.map((review) => {
                    let allRatingValue = totalrating += review.rating;
                    averageValue = allRatingValue / e.reviews.length;
                });
            }
        });
    };
    const dispatch = useDispatch();
    return (
        <section className='pt-20 max-1150:pb-16 max-800:pb-14 max-580:pb-12 max-440:pb-8 pb-60r'>
            <div className="container">
                {
                    products.length == 1 ?
                        products.map((product) => {
                            return (
                                <div key={product.id}>
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
                                            {
                                                product.type == 'Boshqaruvchilar uchun' &&
                                                product.type == 'Xodimlar uchun' &&
                                                product.type == 'Ofis kreslosi' &&
                                                product.type == 'Ofis divani' &&
                                                product.type == 'Qabul qilish stoli' &&
                                                product.type == 'Uchrashuvlar uchun stol' &&
                                                product.type == "Ofis bo'limlari uchun" &&
                                                product.type == "Ko'p kishilk bo'limlar uchun" &&
                                                product.type == 'Ofis stoli' &&
                                                product.type == 'Ofis shkafi' &&
                                                <span>Sahifa topilmadi</span>
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
                                                        <h3>Доставка и монтаж</h3>
                                                        <p className="text-primary-gray-70 text-regular-16">Завтра после 12:00</p>
                                                    </div>
                                                </li>

                                                <li className="flex-center gap-6">
                                                    <img width={62} height={62} src={shiledImg} alt="truck icon image" className='py-1.5 px-2.5' />
                                                    <div className="space-y-1">
                                                        <h3>Гарантия и возврат</h3>
                                                        <a href='#' className="text-regular-16 underline text-primary-red-50">Условия</a>
                                                    </div>
                                                </li>

                                                <li className="flex-center gap-6">
                                                    <img width={62} height={62} src={creditCardImg} alt="truck icon image" />
                                                    <div className="space-y-1">
                                                        <h3>Любые формы оплаты</h3>
                                                        <p className="text-primary-gray-70 text-regular-16">наличные, карта, онлайн, безнал</p>
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
                                            <div className="flex-center space-x-6">
                                                <div className="flex space-x-4">
                                                    <div className="w-10 h-10 rounded-full border border-primary-gray-70"></div>
                                                    <div className="w-10 h-10 rounded-full border border-primary-gray-70 bg-[#1C1C1C]"></div>
                                                    <div className="w-10 h-10 rounded-full bg-[#DCCCB0]"></div>
                                                    <div className="w-10 h-10 rounded-full bg-[#251E18]"></div>
                                                    <div className="w-10 h-10 rounded-full bg-[#764421]"></div>
                                                </div>
                                                <button className="text-regular-14 text-primary-gray-80">Barchasini tanlash</button>
                                            </div>

                                            {/* list wrapper */}
                                            <div>
                                                <ul className="mb-4">
                                                    <li className="flex-c-b gap-5 py-2 border-b border-primary-gray-20 first:border-t text-regular-16 text-primary-gray-70">

                                                        <div className='flex-center space-x-1 '>
                                                            <span className="flex justify-center w-7 leading-5">{product.pieces[0].id}</span>
                                                            <span>{product.pieces[0].type} {product.pieces[0].size}</span>
                                                        </div>

                                                        <div className='flex-center space-x-5'>
                                                            <div className="flex-center">
                                                                <button disabled={product.count1 === 0} onClick={() => dispatch(minusCount1(product.id))} className="red-btn !bg-primary-red-50 disabled:!bg-primary-gray-10 disabled:text-secondary-blue-70 rounded w-8 h-8">-</button>
                                                                <span className='flex-center justify-center text-black w-5 mx-2'>{product.count1}</span>
                                                                <button disabled={product.count1 === 99} onClick={() => dispatch(plusCount1(product.id))} className="red-btn !bg-primary-red-50 rounded w-8 h-8 disabled:!bg-primary-gray-10 disabled:text-secondary-blue-70">+</button>
                                                            </div>

                                                            <div className="space-y-1">
                                                                {
                                                                    product.pieces[0].oldprice &&
                                                                    <del className="text-regular-12 text-primary-gray-50">{product.pieces[0].oldprice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}so'm</del>
                                                                }
                                                                <p className="text-regular-16">{product.pieces[0].currentPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}so'm</p>
                                                            </div>
                                                        </div>

                                                    </li>
                                                    <li className="flex-c-b gap-5 py-2 border-b border-primary-gray-20 first:border-t text-regular-16 text-primary-gray-70">

                                                        <div className='flex-center space-x-1 '>
                                                            <span className="flex justify-center w-7 leading-5">{product.pieces[1].id}</span>
                                                            <span>{product.pieces[1].type} {product.pieces[1].size}</span>
                                                        </div>

                                                        <div className='flex-center space-x-5'>
                                                            <div className="flex-center">
                                                                <button disabled={product.count2 === 0} onClick={() => dispatch(minusCount2(product.id))} className="red-btn !bg-primary-red-50 disabled:!bg-primary-gray-10 disabled:text-secondary-blue-70 rounded w-8 h-8">-</button>
                                                                <span className='flex-center justify-center text-black w-5 mx-2'>{product.count2}</span>
                                                                <button disabled={product.count2 === 99} onClick={() => dispatch(plusCount2(product.id))} className="red-btn !bg-primary-red-50 rounded w-8 h-8 disabled:!bg-primary-gray-10 disabled:text-secondary-blue-70">+</button>
                                                            </div>

                                                            <div className="space-y-1">
                                                                {
                                                                    product.pieces[1].oldprice &&
                                                                    <del className="text-regular-12 text-primary-gray-50">{product.pieces[1].oldprice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}so'm</del>
                                                                }
                                                                <p className="text-regular-16">{product.pieces[1].currentPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}so'm</p>
                                                            </div>
                                                        </div>

                                                    </li>
                                                    <li className="flex-c-b gap-5 py-2 border-b border-primary-gray-20 first:border-t text-regular-16 text-primary-gray-70">

                                                        <div className='flex-center space-x-1 '>
                                                            <span className="flex justify-center w-7 leading-5">{product.pieces[2].id}</span>
                                                            <span>{product.pieces[2].type} {product.pieces[2].size}</span>
                                                        </div>

                                                        <div className='flex-center space-x-5'>
                                                            <div className="flex-center">
                                                                <button disabled={product.count3 === 0} onClick={() => dispatch(minusCount3(product.id))} className="red-btn !bg-primary-red-50 disabled:!bg-primary-gray-10 disabled:text-secondary-blue-70 rounded w-8 h-8">-</button>
                                                                <span className='flex-center justify-center text-black w-5 mx-2'>{product.count3}</span>
                                                                <button disabled={product.count3 === 99} onClick={() => dispatch(plusCount3(product.id))} className="red-btn !bg-primary-red-50 rounded w-8 h-8 disabled:!bg-primary-gray-10 disabled:text-secondary-blue-70">+</button>
                                                            </div>

                                                            <div className="space-y-1">
                                                                {
                                                                    product.pieces[2].oldprice &&
                                                                    <del className="text-regular-12 text-primary-gray-50">{product.pieces[2].oldprice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}so'm</del>
                                                                }
                                                                <p className="text-regular-16">{product.pieces[2].currentPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}so'm</p>
                                                            </div>
                                                        </div>

                                                    </li>
                                                    <li className="flex-c-b gap-5 py-2 border-b border-primary-gray-20 first:border-t text-regular-16 text-primary-gray-70">

                                                        <div className='flex-center space-x-1 '>
                                                            <span className="flex justify-center w-7 leading-5">{product.pieces[3].id}</span>
                                                            <span>{product.pieces[3].type} {product.pieces[3].size}</span>
                                                        </div>

                                                        <div className='flex-center space-x-5'>
                                                            <div className="flex-center">
                                                                <button disabled={product.count4 === 0} onClick={() => dispatch(minusCount4(product.id))} className="red-btn !bg-primary-red-50 disabled:!bg-primary-gray-10 disabled:text-secondary-blue-70 rounded w-8 h-8">-</button>
                                                                <span className='flex-center justify-center text-black w-5 mx-2'>{product.count4}</span>
                                                                <button disabled={product.count4 === 99} onClick={() => dispatch(plusCount4(product.id))} className="red-btn !bg-primary-red-50 rounded w-8 h-8 disabled:!bg-primary-gray-10 disabled:text-secondary-blue-70">+</button>
                                                            </div>

                                                            <div className="space-y-1">
                                                                {
                                                                    product.pieces[3].oldprice &&
                                                                    <del className="text-regular-12 text-primary-gray-50">{product.pieces[3].oldprice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}so'm</del>
                                                                }
                                                                <p className="text-regular-16">{product.pieces[3].currentPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}so'm</p>
                                                            </div>
                                                        </div>

                                                    </li>
                                                    <li className="flex-c-b gap-5 py-2 border-b border-primary-gray-20 first:border-t text-regular-16 text-primary-gray-70">

                                                        <div className='flex-center space-x-1 '>
                                                            <span className="flex justify-center w-7 leading-5">{product.pieces[4].id}</span>
                                                            <span>{product.pieces[4].type} {product.pieces[4].size}</span>
                                                        </div>

                                                        <div className='flex-center space-x-5'>
                                                            <div className="flex-center">
                                                                <button disabled={product.count5 === 0} onClick={() => dispatch(minusCount5(product.id))} className="red-btn !bg-primary-red-50 disabled:!bg-primary-gray-10 disabled:text-secondary-blue-70 rounded w-8 h-8">-</button>
                                                                <span className='flex-center justify-center text-black w-5 mx-2'>{product.count5}</span>
                                                                <button disabled={product.count5 === 99} onClick={() => dispatch(plusCount5(product.id))} className="red-btn !bg-primary-red-50 rounded w-8 h-8 disabled:!bg-primary-gray-10 disabled:text-secondary-blue-70">+</button>
                                                            </div>

                                                            <div className="space-y-1">
                                                                {
                                                                    product.pieces[4].oldprice &&
                                                                    <del className="text-regular-12 text-primary-gray-50">{product.pieces[4].oldprice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}so'm</del>
                                                                }
                                                                <p className="text-regular-16">{product.pieces[4].currentPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}so'm</p>
                                                            </div>
                                                        </div>

                                                    </li>
                                                </ul>

                                                {/* total price */}
                                                <div className="flex-e-b mb-10">
                                                    <p className="text-regular-16">Jami summa:</p>
                                                    <div className="flex-e-b space-x-6">
                                                        <p className="flex-end space-x-2">
                                                            <span className="inline-block text-regular-28">
                                                                {
                                                                    `${product.count1 * product.pieces[0].currentPrice
                                                                        +
                                                                        product.count2 * product.pieces[1].currentPrice
                                                                        +
                                                                        product.count3 * product.pieces[2].currentPrice
                                                                        +
                                                                        product.count4 * product.pieces[3].currentPrice
                                                                        +
                                                                        product.count5 * product.pieces[4].currentPrice}`.replace(/\B(?=(\d{3})+(?!\d))/g, ".")
                                                                }
                                                                <span className="inline-block text-regular-16 ml-1">so'm</span>
                                                            </span>
                                                        </p>
                                                    </div>
                                                </div>

                                                {/* buttons  */}
                                                <div className="flex justify-end gap-6 text-regular-16">
                                                    <button disabled={product.count1 == 0 && product.count2 == 0 && product.count3 == 0 && product.count4 == 0 && product.count5 == 0} className="red-btn py-3.5 px-6 bg-primary-red-50 disabled:!bg-primary-gray-10 disabled:text-secondary-blue-70">Sotib olish</button>
                                                    <button className="py-3.5 px-6 text-primary-gray-90 rounded-lg border border-primary-gray-50">Bepul dizayn eskiziga zakaz berish</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                        :
                        <h1>Nimadir xato ketdi...</h1>
                }
            </div>
        </section >
    )
};

export default ProductDesignHero;