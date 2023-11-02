import React, { useState } from 'react';
import calendarImg from '../assets/images/svg/calendar-icon.svg';
import toolsImg from '../assets/images/svg/tools-icon.svg';
import parameterImg from '../assets/images/svg/settings-icon.svg';
import shieldImg from '../assets/images/svg/shield-check-icon.svg';
import plusImg from '../assets/images/svg/plus-icon.svg';
import furniture from '../assets/images/other/office-furnitures.png';
import { Link } from 'react-router-dom';

const AboutFurnitureSize = () => {

    return (
        <section className='py-60r'>
            <div className="container">
                <h2 className="mb-60px max-1350:mb-8">Sizning o'lchovlaringiz bo'yicha mebel</h2>
                <div className="grid grid-cols-16 gap-10 max-1350:grid-cols-1 max-1350:gap-8">

                    {/* img parent  */}
                    <div className="furniture-imgs col-span-11 relative max-1350:col-span-1">
                        <img width={1200} height={596} src={furniture} alt="office furniture image" className="rounded-2.5xl max-1350:w-full max-360:h-40 object-cover" />
                        {/* buttons  */}
                        <div className="absolute left-153px bottom-198px max-1500:left-24 max-1500:bottom-36 max-1050:hidden">
                            <div className="flex-center flex-col relative">
                                {/* button  */}
                                <div className="plus-btn red-btn p-3.5 rounded-full">
                                    <img width={24} height={24} src={plusImg} alt="plus icon image" />
                                </div>

                                {/* text  */}
                                <div className={`hidden-text opacity-0 absolute bottom-full pb-5 transition-opacity-2`}>
                                    <div className="flex-center relative py-2 px-3 rounded-xl bg-white">
                                        <p className="w-190px text-regular-16 text-center">Kreslolar xodimlar va menejerlar uchun</p>

                                        <svg className='triangle-shape' xmlns="http://www.w3.org/2000/svg" width="18" height="13" viewBox="0 0 18 13" fill="none">
                                            <g clipPath="url(#clip0_536_31956)">
                                                <path d="M9 12L1.63879 -0.750001L16.3612 -0.75L9 12Z" fill="white" />
                                            </g>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="absolute top-153px left-223px max-1500:top-20 max-1500:left-40 max-1050:hidden">
                            <div className="flex-center flex-col relative">
                                {/* button  */}
                                <div className="plus-btn red-btn p-3.5 rounded-full">
                                    <img width={24} height={24} src={plusImg} alt="plus icon image" />
                                </div>
                                
                                {/* text  */}
                                <div className={`hidden-text opacity-0 absolute bottom-full pb-5 transition-opacity-2`}>
                                    <div className="flex-center relative py-2 px-3 rounded-xl bg-white">
                                        <p className="w-190px text-regular-16 text-center">Qabul qilish stollari, ofis oshxonalari uchun peshtaxtalar</p>
                                        <svg className='triangle-shape' xmlns="http://www.w3.org/2000/svg" width="18" height="13" viewBox="0 0 18 13" fill="none">
                                            <g clipPath="url(#clip0_536_31956)">
                                                <path d="M9 12L1.63879 -0.750001L16.3612 -0.75L9 12Z" fill="white" />
                                            </g>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="absolute bottom-52 left-96 max-1500:bottom-40 max-1500:left-80 max-1350:left-96 max-1350:bottom-60 max-1200:bottom-48 max-1050:hidden">
                            <div className="flex-center flex-col relative">
                                {/* button  */}
                                <div className="plus-btn red-btn p-3.5 rounded-full">
                                    <img width={24} height={24} src={plusImg} alt="plus icon image" />
                                </div>

                                {/* text  */}
                                <div className={`hidden-text opacity-0 absolute bottom-full pb-5 transition-opacity-2`}>
                                    <div className="flex-center relative py-2 px-3 rounded-xl bg-white">
                                        <p className="w-190px text-regular-16 text-center">Xodimlar, menejerlar va muzokaralar uchun stollar</p>
                                        <svg className='triangle-shape' xmlns="http://www.w3.org/2000/svg" width="18" height="13" viewBox="0 0 18 13" fill="none">
                                            <g clipPath="url(#clip0_536_31956)">
                                                <path d="M9 12L1.63879 -0.750001L16.3612 -0.75L9 12Z" fill="white" />
                                            </g>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="absolute bottom-104px left-556px max-1500:bottom-16 max-1500:left-96 max-1350:left-556px max-1200:left-96 max-1050:hidden">
                            <div className="flex-center flex-col relative">
                                {/* button  */}
                                <div className="plus-btn red-btn p-3.5 rounded-full">
                                    <img width={24} height={24} src={plusImg} alt="plus icon image" />
                                </div>

                                {/* text  */}
                                <div className={`hidden-text opacity-0 absolute bottom-full pb-5 transition-opacity-2`}>
                                    <div className="flex-center relative py-2 px-3 rounded-xl bg-white">
                                        <p className="w-190px text-regular-16 text-center">Shkaflar va yon qismlar</p>

                                        <svg className='triangle-shape' xmlns="http://www.w3.org/2000/svg" width="18" height="13" viewBox="0 0 18 13" fill="none">
                                            <g clipPath="url(#clip0_536_31956)">
                                                <path d="M9 12L1.63879 -0.750001L16.3612 -0.75L9 12Z" fill="white" />
                                            </g>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="absolute top-104px left-411px max-1500:left-80 max-1350:left-411px max-1050:hidden">
                            <div className="flex-center flex-col relative">
                                {/* button  */}
                                <div className="plus-btn red-btn p-3.5 rounded-full">
                                    <img width={24} height={24} src={plusImg} alt="plus icon image" />
                                </div>

                                {/* text  */}
                                <div className={`hidden-text opacity-0 absolute bottom-full pb-5 transition-opacity-2`}>
                                    <div className="flex-center relative py-2 px-3 rounded-xl bg-white">
                                        <p className="w-147px text-regular-16 text-center">Shkaflar va javonlar, osilgan qismlar va bo'limlar</p>
                                        <svg className='triangle-shape' xmlns="http://www.w3.org/2000/svg" width="18" height="13" viewBox="0 0 18 13" fill="none">
                                            <g clipPath="url(#clip0_536_31956)">
                                                <path d="M9 12L1.63879 -0.750001L16.3612 -0.75L9 12Z" fill="white" />
                                            </g>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="absolute bottom-48 right-70px max-1500:bottom-40 max-1500:right-12 max-1050:hidden">
                            <div className="flex-center flex-col relative">
                                {/* button  */}
                                <div className="plus-btn red-btn p-3.5 rounded-full">
                                    <img width={24} height={24} src={plusImg} alt="plus icon image" />
                                </div>

                                {/* text  */}
                                <div className={`hidden-text opacity-0 absolute bottom-full pb-5 transition-opacity-2`}>
                                    <div className="flex-center relative py-2 px-3 rounded-xl bg-white">
                                        <p className="w-147px text-regular-16 text-center">Divanlar va kreslolar</p>
                                        <svg className='triangle-shape' xmlns="http://www.w3.org/2000/svg" width="18" height="13" viewBox="0 0 18 13" fill="none">
                                            <g clipPath="url(#clip0_536_31956)">
                                                <path d="M9 12L1.63879 -0.750001L16.3612 -0.75L9 12Z" fill="white" />
                                            </g>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* right conent  */}
                    <div className='flex flex-col items-start col-start-12 col-end-17 max-1350:col-start-1 max-1350:col-end-2'>
                        {/* list  */}
                        <ul className="space-y-8 mb-auto max-1500:space-y-4 max-1350:mb-8">
                            <li className="flex-start">
                                <img className='p-2 mr-6 w-20 h-20 max-800:w-16 max-800:h-16 max-470:w-12 max-470:h-12 max-470:p-1' width={80} height={80} src={calendarImg} alt="calendar image" />
                                <p className="max-w-sm max-470:text-regular-16">18 yildan beri biz ofislarni iqtisoddan tortib to premiumgacha yetkazib beramiz</p>
                            </li>
                            <li className="flex-start">
                                <img className='p-2 mr-6 w-20 h-20 max-800:w-16 max-800:h-16 max-470:w-12 max-470:h-12 max-470:p-1' width={80} height={80} src={toolsImg} alt="tools image" />
                                <p className="max-w-sm max-470:text-regular-16">Biz 3D vizualizatsiya bilan bepul ofis dizayni eskizini yaratamiz</p>
                            </li>
                            <li className="flex-start">
                                <img className='p-2 mr-6 w-20 h-20 max-800:w-16 max-800:h-16 max-470:w-12 max-470:h-12 max-470:p-1' width={80} height={80} src={parameterImg} alt="parameter image" />
                                <p className="max-w-sm max-470:text-regular-16">O'rnatish va tozalash. Biz mebellarni ehtiyotkorlik bilan tezda yig'amiz va tozalikni ortda qoldiramiz.</p>
                            </li>
                            <li className="flex-start">
                                <img className='p-2 mr-6 w-20 h-20 max-800:w-16 max-800:h-16 max-470:w-12 max-470:h-12 max-470:p-1.5' width={80} height={80} src={shieldImg} alt="shield image" />
                                <p className="max-w-sm max-470:text-regular-16">Kafolat xizmati. 24 oy davomida bepul xizmat.</p>
                            </li>
                        </ul>
                        {/* btn  */}
                        <Link to='/about-company' className="red-btn py-3.5 px-6 text-regular-16 max-470:w-full">Kompaniya haqida batafsil</Link>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default AboutFurnitureSize;