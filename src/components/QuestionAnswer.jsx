import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

function QuestionAnswer() {
    const [showText, setShowText] = useState(false);
    const titleH = useRef(35);
    useEffect(() => { titleH.current.parentElement.style.maxHeight = `${titleH.current.clientHeight}px`; }, []);

    const [showText2, setShowText2] = useState(false);
    const titleH2 = useRef(35);
    useEffect(() => { titleH2.current.parentElement.style.maxHeight = `${titleH2.current.clientHeight}px`; }, []);

    const [showText3, setShowText3] = useState(false);
    const titleH3 = useRef(35);
    useEffect(() => { titleH3.current.parentElement.style.maxHeight = `${titleH3.current.clientHeight}px`; }, []);

    const [showText4, setShowText4] = useState(false);
    const titleH4 = useRef(35);
    useEffect(() => { titleH4.current.parentElement.style.maxHeight = `${titleH4.current.clientHeight}px`; }, []);

    const [showText5, setShowText5] = useState(false);
    const titleH5 = useRef(35);
    useEffect(() => { titleH5.current.parentElement.style.maxHeight = `${titleH5.current.clientHeight}px`; }, []);

    const [showText6, setShowText6] = useState(false);
    const titleH6 = useRef(35);
    useEffect(() => { titleH6.current.parentElement.style.maxHeight = `${titleH6.current.clientHeight}px`; }, []);

    const [showText7, setShowText7] = useState(false);
    const titleH7 = useRef(35);
    useEffect(() => { titleH7.current.parentElement.style.maxHeight = `${titleH7.current.clientHeight}px`; }, []);

    const [showText8, setShowText8] = useState(false);
    const titleH8 = useRef(35);
    useEffect(() => { titleH8.current.parentElement.style.maxHeight = `${titleH8.current.clientHeight}px`; }, []);

    // 
    const [phoneNumber, setPhoneNumber] = useState('');

    const handlePhoneNumberChange = (event) => {
        const input = event.target.value;
        const formattedPhoneNumber = input.replace(/(\d{1,2})(\d{3})(\d{3})(\d{3})/, '+7 ($2) $3-$4');
        setPhoneNumber(formattedPhoneNumber);
    };
    return (
        <section className=''>
            <div className="container">
                <h2 className="mb-60px">Отвечаем на ваши вопросы</h2>

                {/* main content wrapper */}
                <div className="grid grid-cols-16 gap-8 items-start">
                    {/* QuestionAnswer  */}
                    <ul className="space-y-2 col-start-1 col-end-12">
                        <li className="flex items-start justify-between gap-8 p-6 rounded-xl border border-primary-gray-10">
                            <div className={`${showText ? '!max-h-max' : ''} overflow-y-hidden`}>
                                <h3 key={1} ref={titleH} className="text-medium-20 mb-3 !leading-25px">Сборка осуществляется в день доставки и сколько стоит сборка?</h3>
                                <p className="text-primary-gray-70 text-regular-16 max-w-4xl">Сборка заказа осуществляется в день доставки (согласовывается с логистом дополнительно). Тарифы по стоимости сборки Вы можете увидеть в разделе: <Link to='/about-payment' className='text-primary-red-50'>«Доставка»</Link></p>
                            </div>
                            {/* button  */}
                            <button onClick={() => setShowText(!showText)} className={`${showText ? '-rotate-45' : ''} p-0.5 transition-transform-2`}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 23 23" fill="none">
                                    <path d="M21.125 10.125H12.875V1.875C12.875 1.51033 12.7301 1.16059 12.4723 0.902728C12.2144 0.644866 11.8647 0.5 11.5 0.5C11.1353 0.5 10.7856 0.644866 10.5277 0.902728C10.2699 1.16059 10.125 1.51033 10.125 1.875V10.125H1.875C1.51033 10.125 1.16059 10.2699 0.902728 10.5277C0.644866 10.7856 0.5 11.1353 0.5 11.5C0.5 11.8647 0.644866 12.2144 0.902728 12.4723C1.16059 12.7301 1.51033 12.875 1.875 12.875H10.125V21.125C10.125 21.4897 10.2699 21.8394 10.5277 22.0973C10.7856 22.3551 11.1353 22.5 11.5 22.5C11.8647 22.5 12.2144 22.3551 12.4723 22.0973C12.7301 21.8394 12.875 21.4897 12.875 21.125V12.875H21.125C21.4897 12.875 21.8394 12.7301 22.0973 12.4723C22.3551 12.2144 22.5 11.8647 22.5 11.5C22.5 11.1353 22.3551 10.7856 22.0973 10.5277C21.8394 10.2699 21.4897 10.125 21.125 10.125Z" fill="#B3B3B3" />
                                </svg>
                            </button>
                        </li>
                        <li className="flex items-start justify-between gap-8 p-6 rounded-xl border border-primary-gray-10">
                            <div className={`${showText2 ? '!max-h-max' : ''} overflow-y-hidden`}>
                                <h3 key={2} ref={titleH2} className="text-medium-20 mb-3 !leading-25px">Могу ли я вернуть или обменять приобретенную мебель?</h3>
                                <p className="text-primary-gray-70 text-regular-16 max-w-4xl">Условия возврата или обмена обсуждаются индивидуально с менеджером (доплата за иную модель, возврат разницы, сроки, и т.д.).</p>
                            </div>
                            {/* button  */}
                            <button onClick={() => setShowText2(!showText2)} className={`${showText2 ? '-rotate-45' : ''} p-0.5 transition-transform-2`}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 23 23" fill="none">
                                    <path d="M21.125 10.125H12.875V1.875C12.875 1.51033 12.7301 1.16059 12.4723 0.902728C12.2144 0.644866 11.8647 0.5 11.5 0.5C11.1353 0.5 10.7856 0.644866 10.5277 0.902728C10.2699 1.16059 10.125 1.51033 10.125 1.875V10.125H1.875C1.51033 10.125 1.16059 10.2699 0.902728 10.5277C0.644866 10.7856 0.5 11.1353 0.5 11.5C0.5 11.8647 0.644866 12.2144 0.902728 12.4723C1.16059 12.7301 1.51033 12.875 1.875 12.875H10.125V21.125C10.125 21.4897 10.2699 21.8394 10.5277 22.0973C10.7856 22.3551 11.1353 22.5 11.5 22.5C11.8647 22.5 12.2144 22.3551 12.4723 22.0973C12.7301 21.8394 12.875 21.4897 12.875 21.125V12.875H21.125C21.4897 12.875 21.8394 12.7301 22.0973 12.4723C22.3551 12.2144 22.5 11.8647 22.5 11.5C22.5 11.1353 22.3551 10.7856 22.0973 10.5277C21.8394 10.2699 21.4897 10.125 21.125 10.125Z" fill="#B3B3B3" />
                                </svg>
                            </button>
                        </li>
                        <li className="flex items-start justify-between gap-8 p-6 rounded-xl border border-primary-gray-10">
                            <div className={`${showText3 ? '!max-h-max' : ''} overflow-y-hidden`}>
                                <h3 key={3} ref={titleH3} className="text-medium-20 mb-3 !leading-25px">Какие сроки производства или поставки кабинета?</h3>
                                <p className="text-primary-gray-70 text-regular-16 max-w-4xl">Поставки кабинета который в наличии в шоуруме от 1 дня.  Кабинеты под заказ от 20 дней до 6 месяцев.</p>
                            </div>
                            {/* button  */}
                            <button onClick={() => setShowText3(!showText3)} className={`${showText3 ? '-rotate-45' : ''} p-0.5 transition-transform-2`}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 23 23" fill="none">
                                    <path d="M21.125 10.125H12.875V1.875C12.875 1.51033 12.7301 1.16059 12.4723 0.902728C12.2144 0.644866 11.8647 0.5 11.5 0.5C11.1353 0.5 10.7856 0.644866 10.5277 0.902728C10.2699 1.16059 10.125 1.51033 10.125 1.875V10.125H1.875C1.51033 10.125 1.16059 10.2699 0.902728 10.5277C0.644866 10.7856 0.5 11.1353 0.5 11.5C0.5 11.8647 0.644866 12.2144 0.902728 12.4723C1.16059 12.7301 1.51033 12.875 1.875 12.875H10.125V21.125C10.125 21.4897 10.2699 21.8394 10.5277 22.0973C10.7856 22.3551 11.1353 22.5 11.5 22.5C11.8647 22.5 12.2144 22.3551 12.4723 22.0973C12.7301 21.8394 12.875 21.4897 12.875 21.125V12.875H21.125C21.4897 12.875 21.8394 12.7301 22.0973 12.4723C22.3551 12.2144 22.5 11.8647 22.5 11.5C22.5 11.1353 22.3551 10.7856 22.0973 10.5277C21.8394 10.2699 21.4897 10.125 21.125 10.125Z" fill="#B3B3B3" />
                                </svg>
                            </button>
                        </li>
                        <li className="flex items-start justify-between gap-8 p-6 rounded-xl border border-primary-gray-10">
                            <div className={`${showText4 ? '!max-h-max' : ''} overflow-y-hidden`}>
                                <h3 key={4} ref={titleH4} className="text-medium-20 mb-3 !leading-25px">Как заказать проект кабинета?</h3>
                                <p className="text-primary-gray-70 text-regular-16 max-w-4xl">Вы можете оставить заявку на разработку индивидуального проекта перейдя на сайт или по телефону <a href="tel:+79385000541" className="text-primary-red-50">+7 (938) 500 05-41</a> Ваша заявка будет направлен менеджеру, который в кратчайшие сроки согласует с вами все детали заказа  и создаст проект.</p>
                            </div>
                            {/* button  */}
                            <button onClick={() => setShowText4(!showText4)} className={`${showText4 ? '-rotate-45' : ''} p-0.5 transition-transform-2`}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 23 23" fill="none">
                                    <path d="M21.125 10.125H12.875V1.875C12.875 1.51033 12.7301 1.16059 12.4723 0.902728C12.2144 0.644866 11.8647 0.5 11.5 0.5C11.1353 0.5 10.7856 0.644866 10.5277 0.902728C10.2699 1.16059 10.125 1.51033 10.125 1.875V10.125H1.875C1.51033 10.125 1.16059 10.2699 0.902728 10.5277C0.644866 10.7856 0.5 11.1353 0.5 11.5C0.5 11.8647 0.644866 12.2144 0.902728 12.4723C1.16059 12.7301 1.51033 12.875 1.875 12.875H10.125V21.125C10.125 21.4897 10.2699 21.8394 10.5277 22.0973C10.7856 22.3551 11.1353 22.5 11.5 22.5C11.8647 22.5 12.2144 22.3551 12.4723 22.0973C12.7301 21.8394 12.875 21.4897 12.875 21.125V12.875H21.125C21.4897 12.875 21.8394 12.7301 22.0973 12.4723C22.3551 12.2144 22.5 11.8647 22.5 11.5C22.5 11.1353 22.3551 10.7856 22.0973 10.5277C21.8394 10.2699 21.4897 10.125 21.125 10.125Z" fill="#B3B3B3" />
                                </svg>
                            </button>
                        </li>
                        <li className="flex items-start justify-between gap-8 p-6 rounded-xl border border-primary-gray-10">
                            <div className={`${showText5 ? '!max-h-max' : ''} overflow-y-hidden`}>
                                <h3 key={5} ref={titleH5} className="text-medium-20 mb-3 !leading-25px">Сборка осуществляется в день доставки и сколько стоит сборка?</h3>
                                <p className="text-primary-gray-70 text-regular-16 max-w-4xl">Сборка осуществляется в день доставки и сколько стоит сборка?</p>
                            </div>
                            {/* button  */}
                            <button onClick={() => setShowText5(!showText5)} className={`${showText5 ? '-rotate-45' : ''} p-0.5 transition-transform-2`}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 23 23" fill="none">
                                    <path d="M21.125 10.125H12.875V1.875C12.875 1.51033 12.7301 1.16059 12.4723 0.902728C12.2144 0.644866 11.8647 0.5 11.5 0.5C11.1353 0.5 10.7856 0.644866 10.5277 0.902728C10.2699 1.16059 10.125 1.51033 10.125 1.875V10.125H1.875C1.51033 10.125 1.16059 10.2699 0.902728 10.5277C0.644866 10.7856 0.5 11.1353 0.5 11.5C0.5 11.8647 0.644866 12.2144 0.902728 12.4723C1.16059 12.7301 1.51033 12.875 1.875 12.875H10.125V21.125C10.125 21.4897 10.2699 21.8394 10.5277 22.0973C10.7856 22.3551 11.1353 22.5 11.5 22.5C11.8647 22.5 12.2144 22.3551 12.4723 22.0973C12.7301 21.8394 12.875 21.4897 12.875 21.125V12.875H21.125C21.4897 12.875 21.8394 12.7301 22.0973 12.4723C22.3551 12.2144 22.5 11.8647 22.5 11.5C22.5 11.1353 22.3551 10.7856 22.0973 10.5277C21.8394 10.2699 21.4897 10.125 21.125 10.125Z" fill="#B3B3B3" />
                                </svg>
                            </button>
                        </li>
                        <li className="flex items-start justify-between gap-8 p-6 rounded-xl border border-primary-gray-10">
                            <div className={`${showText6 ? '!max-h-max' : ''} overflow-y-hidden`}>
                                <h3 key={6} ref={titleH6} className="text-medium-20 mb-3 !leading-25px">Могу ли я купить и забрать кабинет из шоу-рума?</h3>
                                <p className="text-primary-gray-70 text-regular-16 max-w-4xl">Кабинет можно забрать с шоурума при полном осмотре на повреждения. Гарантии на сохранность изделия  при собственной перевозки нет.</p>
                            </div>
                            {/* button  */}
                            <button onClick={() => setShowText6(!showText6)} className={`${showText6 ? '-rotate-45' : ''} p-0.5 transition-transform-2`}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 23 23" fill="none">
                                    <path d="M21.125 10.125H12.875V1.875C12.875 1.51033 12.7301 1.16059 12.4723 0.902728C12.2144 0.644866 11.8647 0.5 11.5 0.5C11.1353 0.5 10.7856 0.644866 10.5277 0.902728C10.2699 1.16059 10.125 1.51033 10.125 1.875V10.125H1.875C1.51033 10.125 1.16059 10.2699 0.902728 10.5277C0.644866 10.7856 0.5 11.1353 0.5 11.5C0.5 11.8647 0.644866 12.2144 0.902728 12.4723C1.16059 12.7301 1.51033 12.875 1.875 12.875H10.125V21.125C10.125 21.4897 10.2699 21.8394 10.5277 22.0973C10.7856 22.3551 11.1353 22.5 11.5 22.5C11.8647 22.5 12.2144 22.3551 12.4723 22.0973C12.7301 21.8394 12.875 21.4897 12.875 21.125V12.875H21.125C21.4897 12.875 21.8394 12.7301 22.0973 12.4723C22.3551 12.2144 22.5 11.8647 22.5 11.5C22.5 11.1353 22.3551 10.7856 22.0973 10.5277C21.8394 10.2699 21.4897 10.125 21.125 10.125Z" fill="#B3B3B3" />
                                </svg>
                            </button>
                        </li>
                        <li className="flex items-start justify-between gap-8 p-6 rounded-xl border border-primary-gray-10">
                            <div className={`${showText7 ? '!max-h-max' : ''} overflow-y-hidden`}>
                                <h3 key={7} ref={titleH7} className="text-medium-20 mb-3 !leading-25px">Адрес, телефон, режим работы шоу-рума?</h3>
                                <p className="text-primary-gray-70 text-regular-16 max-w-4xl">Все зависит от типа серии мебели  и фабрики производителя. Все индивидуально вам объяснит менеджер.</p>
                            </div>
                            {/* button  */}
                            <button onClick={() => setShowText7(!showText7)} className={`${showText7 ? '-rotate-45' : ''} p-0.5 transition-transform-2`}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 23 23" fill="none">
                                    <path d="M21.125 10.125H12.875V1.875C12.875 1.51033 12.7301 1.16059 12.4723 0.902728C12.2144 0.644866 11.8647 0.5 11.5 0.5C11.1353 0.5 10.7856 0.644866 10.5277 0.902728C10.2699 1.16059 10.125 1.51033 10.125 1.875V10.125H1.875C1.51033 10.125 1.16059 10.2699 0.902728 10.5277C0.644866 10.7856 0.5 11.1353 0.5 11.5C0.5 11.8647 0.644866 12.2144 0.902728 12.4723C1.16059 12.7301 1.51033 12.875 1.875 12.875H10.125V21.125C10.125 21.4897 10.2699 21.8394 10.5277 22.0973C10.7856 22.3551 11.1353 22.5 11.5 22.5C11.8647 22.5 12.2144 22.3551 12.4723 22.0973C12.7301 21.8394 12.875 21.4897 12.875 21.125V12.875H21.125C21.4897 12.875 21.8394 12.7301 22.0973 12.4723C22.3551 12.2144 22.5 11.8647 22.5 11.5C22.5 11.1353 22.3551 10.7856 22.0973 10.5277C21.8394 10.2699 21.4897 10.125 21.125 10.125Z" fill="#B3B3B3" />
                                </svg>
                            </button>
                        </li>
                        <li className="flex items-start justify-between gap-8 p-6 rounded-xl border border-primary-gray-10">
                            <div className={`${showText8 ? '!max-h-max' : ''} overflow-y-hidden`}>
                                <h3 key={8} ref={titleH8} className="text-medium-20 mb-3 !leading-25px">Какие модели представлены в шоу-руме?</h3>
                                <p className="text-primary-gray-70 text-regular-16 max-w-4xl">Сборка заказа осуществляется в день доставки (согласовывается с логистом дополнительно). Тарифы по стоимости сборки Вы можете увидеть в разделе: <Link to='/about-payment' className='text-primary-red-50'>«Доставка»</Link></p>
                            </div>
                            {/* button  */}
                            <button onClick={() => setShowText8(!showText8)} className={`${showText8 ? '-rotate-45' : ''} p-0.5 transition-transform-2`}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 23 23" fill="none">
                                    <path d="M21.125 10.125H12.875V1.875C12.875 1.51033 12.7301 1.16059 12.4723 0.902728C12.2144 0.644866 11.8647 0.5 11.5 0.5C11.1353 0.5 10.7856 0.644866 10.5277 0.902728C10.2699 1.16059 10.125 1.51033 10.125 1.875V10.125H1.875C1.51033 10.125 1.16059 10.2699 0.902728 10.5277C0.644866 10.7856 0.5 11.1353 0.5 11.5C0.5 11.8647 0.644866 12.2144 0.902728 12.4723C1.16059 12.7301 1.51033 12.875 1.875 12.875H10.125V21.125C10.125 21.4897 10.2699 21.8394 10.5277 22.0973C10.7856 22.3551 11.1353 22.5 11.5 22.5C11.8647 22.5 12.2144 22.3551 12.4723 22.0973C12.7301 21.8394 12.875 21.4897 12.875 21.125V12.875H21.125C21.4897 12.875 21.8394 12.7301 22.0973 12.4723C22.3551 12.2144 22.5 11.8647 22.5 11.5C22.5 11.1353 22.3551 10.7856 22.0973 10.5277C21.8394 10.2699 21.4897 10.125 21.125 10.125Z" fill="#B3B3B3" />
                                </svg>
                            </button>
                        </li>
                    </ul>

                    {/* form  */}
                    <form action="https://echo.htmlacademy.ru" className="bg-primary-gray-10 rounded-2.5xl p-8 col-start-12 col-end-17">
                        {/* title  */}
                        <h3 className="text-center max-w-md mx-auto text-medium-28 mb-3">Остались вопросы?</h3>
                        <p className="text-center text-primary-gray-70 mb-8">Мы перезвоним, внимательно выслушаем Ваши задачи и потребности, предложим оптимальные варианты и бесплатно разработаем эскизный проект будущего кабинета или офиса.</p>
                        {/* main  */}
                        <div className="space-y-6 mb-8">
                            <div>
                                <label htmlFor='categoryTelInput' className="inline-block mb-2 text-regular-14 text-primary-gray-70">Ваш телефон*</label>
                                <input autoComplete='off' id='categoryTelInput' maxLength={16} value={phoneNumber} name='phone number' onChange={handlePhoneNumberChange} placeholder='+7 (999) 999-999' required type="text" className='leading-17.5px!' />
                            </div>

                            <div>
                                <label htmlFor='questionTextArea' className="inline-block mb-2 text-regular-14 text-primary-gray-70">Задайте вопрос*</label>
                                <textarea id='questionTextArea' name='question' required className='leading-17.5px! h-36 resize-none' />
                            </div>

                            <button className="red-btn w-full text-regular-16 py-3.5">Получить консультацию</button>
                        </div>

                        <p className="text-regular-12 text-primary-gray-70 text-center max-w-sm mx-auto">*Передавая информацию сайту, Вы принимаете условия <a href="#" className="text-primary-red-50 underline">Политики защиты персональной информации</a></p>
                    </form>
                </div>
            </div>
        </section>
    )
};

export default QuestionAnswer;