import React from 'react';
import { Link } from 'react-router-dom';

// images 
import truckImg from '../assets/images/svg/truck.svg';
import creditCardImg from '../assets/images/svg/credit-card.svg';
import shiledImg from '../assets/images/svg/shield-check-icon.svg';

// img 
import image from '../assets/images/other/homepage-hero-bg1.jpg';

const ProductDesignHero = () => {
    return (
        <section className='pt-20'>
            <div className="container">

                {/* breadcrumb */}
                <ul className="breadcrumb">
                    <li>
                        <Link to='/catalog'>Каталог</Link>
                    </li>
                    <li>
                        <Link to={-1}>Кабинеты для руководителей</Link>
                    </li>
                    <li>
                        <span>Кабинет для руководителя Gamma Direct</span>
                    </li>
                </ul>

                {/* main content  */}
                <div className="grid grid-cols-16 gap-8">
                    {/* first child */}
                    <div className="flex flex-col gap-8 col-start-1 col-end-11">

                        <div className="flex gap-8">
                            <div className='space-y-4'>
                                <img width={160} height={116} src={image} alt="image" className="rounded-2.5xl w-40 h-28 object-cover object-center" />
                                <img width={160} height={116} src={image} alt="image" className="rounded-2.5xl w-40 h-28 object-cover object-center" />
                                <img width={160} height={116} src={image} alt="image" className="rounded-2.5xl w-40 h-28 object-cover object-center" />
                                <img width={160} height={116} src={image} alt="image" className="rounded-2.5xl w-40 h-28 object-cover object-center" />
                                <button className="flex-center justify-center w-40 rounded-lg bg-primary-gray-10 py-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="8" viewBox="0 0 10 8" fill="none">
                                        <path d="M5 8L0.669873 0.499999L9.33013 0.5L5 8Z" fill="#222222" />
                                    </svg>
                                </button>
                            </div>
                            <img src={image} alt="image" className="w-full h-550px rounded-2.5xl object-cover object-center" />
                        </div>

                        <ul className="flex-center space-x-8">
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
                    <div className="space-y-8 col-start-11 col-end-17">
                        {/* top  */}
                        <div className='space-y-3'>

                            <div className="flex-center space-x-8">
                                {/* id  */}
                                <span className="text-primary-gray-70">ID:209723</span>
                                <div className="flex space-x-2.5">
                                    {/* stars */}
                                    <div className="flex-center space-x-0.5">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="19" viewBox="0 0 20 19" fill="none">
                                            <path d="M10 0.5L12.2451 7.40983H19.5106L13.6327 11.6803L15.8779 18.5902L10 14.3197L4.12215 18.5902L6.36729 11.6803L0.489435 7.40983H7.75486L10 0.5Z" fill="#CCCCCC" />
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="19" viewBox="0 0 20 19" fill="none">
                                            <path d="M10 0.5L12.2451 7.40983H19.5106L13.6327 11.6803L15.8779 18.5902L10 14.3197L4.12215 18.5902L6.36729 11.6803L0.489435 7.40983H7.75486L10 0.5Z" fill="#CCCCCC" />
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="19" viewBox="0 0 20 19" fill="none">
                                            <path d="M10 0.5L12.2451 7.40983H19.5106L13.6327 11.6803L15.8779 18.5902L10 14.3197L4.12215 18.5902L6.36729 11.6803L0.489435 7.40983H7.75486L10 0.5Z" fill="#CCCCCC" />
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="19" viewBox="0 0 20 19" fill="none">
                                            <path d="M10 0.5L12.2451 7.40983H19.5106L13.6327 11.6803L15.8779 18.5902L10 14.3197L4.12215 18.5902L6.36729 11.6803L0.489435 7.40983H7.75486L10 0.5Z" fill="#CCCCCC" />
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="19" viewBox="0 0 20 19" fill="none">
                                            <path d="M10 0.5L12.2451 7.40983H19.5106L13.6327 11.6803L15.8779 18.5902L10 14.3197L4.12215 18.5902L6.36729 11.6803L0.489435 7.40983H7.75486L10 0.5Z" fill="#CCCCCC" />
                                        </svg>
                                    </div>
                                    <span className="text-primary-gray-70">Отзывы (0)</span>
                                </div>
                            </div>

                            <h3 className="text-regular-36">Кабинет для руководителя Gamma Direct</h3>
                        </div>

                        {/* colors  */}
                        <div className="flex-center space-x-6">
                            <div className="flex space-x-4">
                                <div className="w-10 h-10 rounded-full border border-primary-gray-70"></div>
                                <div className="w-10 h-10 rounded-full border border-primary-gray-70 bg-[#1C1C1C]"></div>
                                <div className="w-10 h-10 rounded-full bg-[#DCCCB0]"></div>
                                <div className="w-10 h-10 rounded-full bg-[#251E18]"></div>
                                <div className="w-10 h-10 rounded-full bg-[#764421]"></div>
                            </div>
                            <button className="text-regular-14 text-primary-gray-80">Показать все</button>
                        </div>

                        {/* list wrapper */}
                        <div>

                            <ul className="mb-4">
                                <li className="flex-c-b gap-5 py-2 border-b border-primary-gray-20 border-t text-regular-16 text-primary-gray-70">

                                    <div className='flex-center space-x-1 '>
                                        <span className="flex justify-center w-7 leading-5">1</span>
                                        <span>Стол руководителя 180x97x75 см</span>
                                    </div>

                                    <div className='flex-center space-x-5'>
                                        <div className="flex-center space-x-2.5">
                                            <button className="red-btn !bg-primary-red-50 disabled:!bg-primary-gray-10 disabled:text-secondary-blue-70 rounded w-8 h-8">-</button>
                                            <span className='text-black'>1</span>
                                            <button className="red-btn !bg-primary-red-50 rounded w-8 h-8 disabled:!bg-primary-gray-10 disabled:text-secondary-blue-70">+</button>
                                        </div>

                                        <div className="space-y-1">
                                            <del className="text-regular-12 text-primary-gray-50">от 14 690₽</del>
                                            <p className="text-regular-16">от 11 690₽</p>
                                        </div>
                                    </div>

                                </li>
                                <li className="flex-c-b gap-5 py-2 border-b border-primary-gray-20 border-t text-regular-16 text-primary-gray-70">

                                    <div className='flex-center space-x-1 '>
                                        <span className="flex justify-center w-7 leading-5">2</span>
                                        <span>Стол руководителя 180x97x75 см</span>
                                    </div>

                                    <div className='flex-center space-x-5'>
                                        <div className="flex-center space-x-2.5">
                                            <button className="red-btn !bg-primary-red-50 disabled:!bg-primary-gray-10 disabled:text-secondary-blue-70 rounded w-8 h-8">-</button>
                                            <span className='text-black'>1</span>
                                            <button className="red-btn !bg-primary-red-50 rounded w-8 h-8 disabled:!bg-primary-gray-10 disabled:text-secondary-blue-70">+</button>
                                        </div>

                                        <div className="space-y-1">
                                            <p className="text-regular-16">от 11 690₽</p>
                                        </div>
                                    </div>

                                </li>
                                <li className="flex-c-b gap-5 py-2 border-b border-primary-gray-20 border-t text-regular-16 text-primary-gray-70">

                                    <div className='flex-center space-x-1 '>
                                        <span className="flex justify-center w-7 leading-5">3</span>
                                        <span>Стол руководителя 180x97x75 см</span>
                                    </div>

                                    <div className='flex-center space-x-5'>
                                        <div className="flex-center space-x-2.5">
                                            <button className="red-btn !bg-primary-red-50 disabled:!bg-primary-gray-10 disabled:text-secondary-blue-70 rounded w-8 h-8">-</button>
                                            <span className='text-black'>1</span>
                                            <button className="red-btn !bg-primary-red-50 rounded w-8 h-8 disabled:!bg-primary-gray-10 disabled:text-secondary-blue-70">+</button>
                                        </div>

                                        <div className="space-y-1">
                                            <p className="text-regular-16">от 11 690₽</p>
                                        </div>
                                    </div>

                                </li>
                                <li className="flex-c-b gap-5 py-2 border-b border-primary-gray-20 border-t text-regular-16 text-primary-gray-70">

                                    <div className='flex-center space-x-1 '>
                                        <span className="flex justify-center w-7 leading-5">4</span>
                                        <span>Стол руководителя 180x97x75 см</span>
                                    </div>

                                    <div className='flex-center space-x-5'>
                                        <div className="flex-center space-x-2.5">
                                            <button className="red-btn !bg-primary-red-50 disabled:!bg-primary-gray-10 disabled:text-secondary-blue-70 rounded w-8 h-8">-</button>
                                            <span className='text-black'>1</span>
                                            <button className="red-btn !bg-primary-red-50 rounded w-8 h-8 disabled:!bg-primary-gray-10 disabled:text-secondary-blue-70">+</button>
                                        </div>

                                        <div className="space-y-1">
                                            <p className="text-regular-16">от 11 690₽</p>
                                        </div>
                                    </div>

                                </li>
                                <li className="flex-c-b gap-5 py-2 border-b border-primary-gray-20 border-t text-regular-16 text-primary-gray-70">

                                    <div className='flex-center space-x-1 '>
                                        <span className="flex justify-center w-7 leading-5">5</span>
                                        <span>Стол руководителя 180x97x75 см</span>
                                    </div>

                                    <div className='flex-center space-x-5'>
                                        <div className="flex-center space-x-2.5">
                                            <button className="red-btn !bg-primary-red-50 disabled:!bg-primary-gray-10 disabled:text-secondary-blue-70 rounded w-8 h-8">-</button>
                                            <span className='text-black'>1</span>
                                            <button className="red-btn !bg-primary-red-50 rounded w-8 h-8 disabled:!bg-primary-gray-10 disabled:text-secondary-blue-70">+</button>
                                        </div>

                                        <div className="space-y-1">
                                            <p className="text-regular-16">от 11 690₽</p>
                                        </div>
                                    </div>

                                </li>
                            </ul>

                            <div className="flex-e-b mb-10">
                                <p className="text-regular-16">Цена за комплект:</p>
                                <div className="flex-e-b space-x-6">
                                    <del className="text-primary-gray-70 text-regular-20">от 11 690₽</del>
                                    <p className="flex-end space-x-2">
                                        <span className="inline-block text-regular-16">от</span>
                                        <span className="inline-block text-regular-28">11 690₽</span>
                                    </p>
                                </div>
                            </div>

                            <div className="flex justify-end gap-6 text-regular-16">
                                <button className="red-btn py-3.5 px-6 bg-primary-red-50">Купить</button>
                                <button className="py-3.5 px-6 text-primary-gray-90 rounded-lg border border-primary-gray-50">Заказазать бесплатный эскиз</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default ProductDesignHero;