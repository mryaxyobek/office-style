import React, { useState } from 'react';
import calendarImg from '../assets/images/svg/calendar-icon.svg';
import toolsImg from '../assets/images/svg/tools-icon.svg';
import parameterImg from '../assets/images/svg/settings-icon.svg';
import shieldImg from '../assets/images/svg/shield-check-icon.svg';
import plusImg from '../assets/images/svg/plus-icon.svg';
import furniture from '../assets/images/other/office-furnitures.png';

const AboutFurnitureSize = () => {
    const [isClicked, setIsClicked] = useState(false);

    const toggleBtnFunc = () => {
        setIsClicked(!isClicked);
    };

    const [isClicked1, setIsClicked1] = useState(false);
    const toggleBtnFunc1 = () => {
        setIsClicked1(!isClicked1);
    };

    const [isClicked2, setIsClicked2] = useState(false);
    const toggleBtnFunc2 = () => {
        setIsClicked2(!isClicked2);
    };

    const [isClicked3, setIsClicked3] = useState(false);
    const toggleBtnFunc3 = () => {
        setIsClicked3(!isClicked3);
    };

    const [isClicked4, setIsClicked4] = useState(false);
    const toggleBtnFunc4 = () => {
        setIsClicked4(!isClicked4);
    };

    const [isClicked5, setIsClicked5] = useState(false);
    const toggleBtnFunc5 = () => {
        setIsClicked5(!isClicked5);
    };

    return (
        <section className='py-60px'>
            <div className="container">
                <h2 className="mb-60px">Мебель по вашим размерам</h2>
                <div className="grid grid-cols-16 gap-10">

                    {/* img parent  */}
                    <div className="furniture-imgs col-span-11 relative">
                        <img width={1200} height={596} src={furniture} alt="office furniture image" className="rounded-2.5xl" />
                        {/* buttons  */}
                        <div className="absolute left-153px bottom-198px">
                            <div className="flex-center flex-col relative">
                                {/* text  */}
                                <div className={`${isClicked ? 'active-text' : ''} opacity-0 text-parent absolute bottom-full pb-5 transition-opacity-2`}>
                                    <div className="flex-center relative py-2 px-3 rounded-xl bg-white">
                                        <p className="w-190px text-regular-16 text-center">Стулья и кресла
                                            для персонала, для руководителя</p>

                                        <svg className='triangle-shape' xmlns="http://www.w3.org/2000/svg" width="18" height="13" viewBox="0 0 18 13" fill="none">
                                            <g clipPath="url(#clip0_536_31956)">
                                                <path d="M9 12L1.63879 -0.750001L16.3612 -0.75L9 12Z" fill="white" />
                                            </g>
                                        </svg>
                                    </div>
                                </div>
                                {/* button  */}
                                <button onClick={toggleBtnFunc} className="plus-btn red-btn p-3.5 rounded-full">
                                    <img width={24} height={24} src={plusImg} alt="plus icon image" className="" />
                                </button>
                            </div>
                        </div>

                        <div className="absolute top-153px left-223px">
                            <div className="flex-center flex-col relative">
                                {/* text  */}
                                <div className={`${isClicked1 ? 'active-text' : ''} opacity-0 text-parent absolute bottom-full pb-5 transition-opacity-2`}>
                                    <div className="flex-center relative py-2 px-3 rounded-xl bg-white">
                                        <p className="w-190px text-regular-16 text-center">Стойки рецепшн, стойки для офисной кухни</p>

                                        <svg className='triangle-shape' xmlns="http://www.w3.org/2000/svg" width="18" height="13" viewBox="0 0 18 13" fill="none">
                                            <g clipPath="url(#clip0_536_31956)">
                                                <path d="M9 12L1.63879 -0.750001L16.3612 -0.75L9 12Z" fill="white" />
                                            </g>
                                        </svg>
                                    </div>
                                </div>
                                {/* button  */}
                                <button onClick={toggleBtnFunc1} className="plus-btn red-btn p-3.5 rounded-full">
                                    <img width={24} height={24} src={plusImg} alt="plus icon image" className="" />
                                </button>
                            </div>
                        </div>

                        <div className="absolute bottom-52 left-96">
                            <div className="flex-center flex-col relative">
                                {/* text  */}
                                <div className={`${isClicked2 ? 'active-text' : ''} opacity-0 text-parent absolute bottom-full pb-5 transition-opacity-2`}>
                                    <div className="flex-center relative py-2 px-3 rounded-xl bg-white">
                                        <p className="w-190px text-regular-16 text-center">Столы для персонала, для руководителя,
                                            для переговоров</p>

                                        <svg className='triangle-shape' xmlns="http://www.w3.org/2000/svg" width="18" height="13" viewBox="0 0 18 13" fill="none">
                                            <g clipPath="url(#clip0_536_31956)">
                                                <path d="M9 12L1.63879 -0.750001L16.3612 -0.75L9 12Z" fill="white" />
                                            </g>
                                        </svg>
                                    </div>
                                </div>
                                {/* button  */}
                                <button onClick={toggleBtnFunc2} className="plus-btn red-btn p-3.5 rounded-full">
                                    <img width={24} height={24} src={plusImg} alt="plus icon image" className="" />
                                </button>
                            </div>
                        </div>

                        <div className="absolute bottom-104px left-556px">
                            <div className="flex-center flex-col relative">
                                {/* text  */}
                                <div className={`${isClicked3 ? 'active-text' : ''} opacity-0 text-parent absolute bottom-full pb-5 transition-opacity-2`}>
                                    <div className="flex-center relative py-2 px-3 rounded-xl bg-white">
                                        <p className="w-190px text-regular-16 text-center">Тумбы и приставные секции</p>

                                        <svg className='triangle-shape' xmlns="http://www.w3.org/2000/svg" width="18" height="13" viewBox="0 0 18 13" fill="none">
                                            <g clipPath="url(#clip0_536_31956)">
                                                <path d="M9 12L1.63879 -0.750001L16.3612 -0.75L9 12Z" fill="white" />
                                            </g>
                                        </svg>
                                    </div>
                                </div>
                                {/* button  */}
                                <button onClick={toggleBtnFunc3} className="plus-btn red-btn p-3.5 rounded-full">
                                    <img width={24} height={24} src={plusImg} alt="plus icon image" className="" />
                                </button>
                            </div>
                        </div>

                        <div className="absolute top-104px left-411px">
                            <div className="flex-center flex-col relative">
                                {/* text  */}
                                <div className={`${isClicked4 ? 'active-text' : ''} opacity-0 text-parent absolute bottom-full pb-5 transition-opacity-2`}>
                                    <div className="flex-center relative py-2 px-3 rounded-xl bg-white">
                                        <p className="w-147px text-regular-16 text-center">Шкафы и полки, навесные секции и перегородки</p>

                                        <svg className='triangle-shape' xmlns="http://www.w3.org/2000/svg" width="18" height="13" viewBox="0 0 18 13" fill="none">
                                            <g clipPath="url(#clip0_536_31956)">
                                                <path d="M9 12L1.63879 -0.750001L16.3612 -0.75L9 12Z" fill="white" />
                                            </g>
                                        </svg>
                                    </div>
                                </div>
                                {/* button  */}
                                <button onClick={toggleBtnFunc4} className="plus-btn red-btn p-3.5 rounded-full">
                                    <img width={24} height={24} src={plusImg} alt="plus icon image" className="" />
                                </button>
                            </div>
                        </div>

                        <div className="absolute bottom-48 right-70px">
                            <div className="flex-center flex-col relative">
                                {/* text  */}
                                <div className={`${isClicked5 ? 'active-text' : ''} opacity-0 text-parent absolute bottom-full pb-5 transition-opacity-2`}>
                                    <div className="flex-center relative py-2 px-3 rounded-xl bg-white">
                                        <p className="w-147px text-regular-16 text-center">Диваны, пуфы и кресла</p>

                                        <svg className='triangle-shape' xmlns="http://www.w3.org/2000/svg" width="18" height="13" viewBox="0 0 18 13" fill="none">
                                            <g clipPath="url(#clip0_536_31956)">
                                                <path d="M9 12L1.63879 -0.750001L16.3612 -0.75L9 12Z" fill="white" />
                                            </g>
                                        </svg>
                                    </div>
                                </div>
                                {/* button  */}
                                <button onClick={toggleBtnFunc5} className="plus-btn red-btn p-3.5 rounded-full">
                                    <img width={24} height={24} src={plusImg} alt="plus icon image" className="" />
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* left conent  */}
                    <div className='flex flex-col items-start col-start-12 col-end-17'>
                        {/* list  */}
                        <ul className="space-y-8 mb-auto">
                            <li className="flex-center">
                                <img className='p-2 mr-6' width={80} height={80} src={calendarImg} alt="calendar image" />
                                <p className="max-w-sm">18 лет обустраиваем офисы от эконом до премиум «под ключ»</p>
                            </li>
                            <li className="flex-center">
                                <img className='p-2 mr-6' width={80} height={80} src={toolsImg} alt="tools image" />
                                <p className="max-w-sm">Бесплатно делаем эскиз-проект дизайна офиса с 3Д-визуализацией</p>
                            </li>
                            <li className="flex-center">
                                <img className='p-2 mr-6' width={80} height={80} src={parameterImg} alt="[parameter image" />
                                <p className="max-w-sm">Монтаж и клининг. Аккуратно и оперативно соберем мебель и оставим после себя чистоту</p>
                            </li>
                            <li className="flex-center">
                                <img className='p-2 mr-6' width={80} height={80} src={shieldImg} alt="shield image" />
                                <p className="max-w-sm">Гарантийное обслуживание. Бесплатное сервисное обслуживание в течение 24 месяцев. </p>
                            </li>
                        </ul>
                        {/* btn  */}
                        <button className="red-btn py-3.5 px-6 text-regular-16 ">Больше о компании</button>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default AboutFurnitureSize;