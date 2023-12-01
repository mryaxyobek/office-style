import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

function QuestionAnswer() {
    const [showText, setShowText] = useState(false);
    const titleH = useRef(35);
    useEffect(() => {
        const handleResize = () => {
            titleH.current.parentElement.style.maxHeight = `${titleH.current.clientHeight}px`;
        };
        titleH.current.parentElement.style.maxHeight = `${titleH.current.clientHeight}px`;
        window.addEventListener("resize", handleResize); return () => { window.removeEventListener("resize", handleResize); };
    }, []);

    const [showText2, setShowText2] = useState(false);
    const titleH2 = useRef(35);
    useEffect(() => {
        const handleResize = () => {
            titleH2.current.parentElement.style.maxHeight = `${titleH2.current.clientHeight}px`;
        };
        titleH2.current.parentElement.style.maxHeight = `${titleH2.current.clientHeight}px`;
        window.addEventListener("resize", handleResize); return () => { window.removeEventListener("resize", handleResize); };
    }, []);

    const [showText3, setShowText3] = useState(false);
    const titleH3 = useRef(35);
    useEffect(() => {
        const handleResize = () => {
            titleH3.current.parentElement.style.maxHeight = `${titleH3.current.clientHeight}px`;
        };
        titleH3.current.parentElement.style.maxHeight = `${titleH3.current.clientHeight}px`;
        window.addEventListener("resize", handleResize); return () => { window.removeEventListener("resize", handleResize); };
    }, []);

    const [showText4, setShowText4] = useState(false);
    const titleH4 = useRef(35);
    useEffect(() => {
        const handleResize = () => {
            titleH4.current.parentElement.style.maxHeight = `${titleH4.current.clientHeight}px`;
        };
        titleH4.current.parentElement.style.maxHeight = `${titleH4.current.clientHeight}px`;
        window.addEventListener("resize", handleResize); return () => { window.removeEventListener("resize", handleResize); };
    }, []);

    const [showText5, setShowText5] = useState(false);
    const titleH5 = useRef(35);
    useEffect(() => {
        const handleResize = () => {
            titleH5.current.parentElement.style.maxHeight = `${titleH5.current.clientHeight}px`;
        };
        titleH5.current.parentElement.style.maxHeight = `${titleH5.current.clientHeight}px`;
        window.addEventListener("resize", handleResize); return () => { window.removeEventListener("resize", handleResize); };
    }, []);

    const [showText6, setShowText6] = useState(false);
    const titleH6 = useRef(35);
    useEffect(() => {
        const handleResize = () => {
            titleH6.current.parentElement.style.maxHeight = `${titleH6.current.clientHeight}px`;
        };
        titleH6.current.parentElement.style.maxHeight = `${titleH6.current.clientHeight}px`;
        window.addEventListener("resize", handleResize); return () => { window.removeEventListener("resize", handleResize); };
    }, []);

    const [showText7, setShowText7] = useState(false);
    const titleH7 = useRef(35);
    useEffect(() => {
        const handleResize = () => {
            titleH7.current.parentElement.style.maxHeight = `${titleH7.current.clientHeight}px`;
        };
        titleH7.current.parentElement.style.maxHeight = `${titleH7.current.clientHeight}px`;
        window.addEventListener("resize", handleResize); return () => { window.removeEventListener("resize", handleResize); };
    }, []);

    const [showText8, setShowText8] = useState(false);
    const titleH8 = useRef(35);
    useEffect(() => {
        const handleResize = () => {
            titleH8.current.parentElement.style.maxHeight = `${titleH8.current.clientHeight}px`;
        };
        titleH8.current.parentElement.style.maxHeight = `${titleH8.current.clientHeight}px`;
        window.addEventListener("resize", handleResize); return () => { window.removeEventListener("resize", handleResize); };
    }, []);
    return (
        <section className='py-60r'>
            <div className="container max-470:px-0">
                <h2 className="mb-60r max-470:px-5">Savollaringizga javob beramiz</h2>

                {/* main content wrapper */}
                <div className="grid grid-cols-16 gap-8 items-start max-1150:grid-cols-1 max-1150:max-w-5xl max-1150:mx-auto">
                    {/* QuestionAnswer  */}
                    <ul className="space-y-2 col-start-1 col-end-12 max-1150:col-end-2 max-470:px-5">
                        <li className="flex items-start justify-between gap-8 p-6 rounded-xl border border-primary-gray-10 max-640:p-5 max-640:gap-2 max-470:p-4">
                            <div className={`${showText ? '!max-h-max' : ''} overflow-y-hidden`}>
                                <h3 key={1} ref={titleH} className="text-medium-20 mb-3 !leading-25px max-580:text-medium-18 max-440:text-medium-16">Yig'ish yetkazib berish 1 kunda amalga oshiriladimi va yig'ish qancha turadi?</h3>
                                <p className="text-primary-gray-70 text-regular-16 max-w-4xl">Buyurtma va yetkazib berish 1 kunda yig'iladi (qo'shimcha ravishda logist bilan kelishilgan). Siz yig'ish narxining tariflarini "Buyurtma berish" bo'limda ko'rishingiz mumkin: <Link to='/about-payment' className='text-primary-red-50'>"Buyurtma berish"</Link></p>
                            </div>
                            {/* button  */}
                            <button onClick={() => setShowText(!showText)} className={`${showText ? '-rotate-45' : ''} p-0.5 transition-transform-2`}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 23 23" fill="none">
                                    <path d="M21.125 10.125H12.875V1.875C12.875 1.51033 12.7301 1.16059 12.4723 0.902728C12.2144 0.644866 11.8647 0.5 11.5 0.5C11.1353 0.5 10.7856 0.644866 10.5277 0.902728C10.2699 1.16059 10.125 1.51033 10.125 1.875V10.125H1.875C1.51033 10.125 1.16059 10.2699 0.902728 10.5277C0.644866 10.7856 0.5 11.1353 0.5 11.5C0.5 11.8647 0.644866 12.2144 0.902728 12.4723C1.16059 12.7301 1.51033 12.875 1.875 12.875H10.125V21.125C10.125 21.4897 10.2699 21.8394 10.5277 22.0973C10.7856 22.3551 11.1353 22.5 11.5 22.5C11.8647 22.5 12.2144 22.3551 12.4723 22.0973C12.7301 21.8394 12.875 21.4897 12.875 21.125V12.875H21.125C21.4897 12.875 21.8394 12.7301 22.0973 12.4723C22.3551 12.2144 22.5 11.8647 22.5 11.5C22.5 11.1353 22.3551 10.7856 22.0973 10.5277C21.8394 10.2699 21.4897 10.125 21.125 10.125Z" fill="#B3B3B3" />
                                </svg>
                            </button>
                        </li>
                        <li className="flex items-start justify-between gap-8 p-6 rounded-xl border border-primary-gray-10 max-640:p-5 max-640:gap-2 max-470:p-4">
                            <div className={`${showText2 ? '!max-h-max' : ''} overflow-y-hidden`}>
                                <h3 key={2} ref={titleH2} className="text-medium-20 mb-3 !leading-25px max-580:text-medium-18 max-440:text-medium-16">Xarid qilingan mebellarni qaytarish yoki almashtirish mumkinmi?</h3>
                                <p className="text-primary-gray-70 text-regular-16 max-w-4xl">Qaytish yoki almashtirish shartlari menejer bilan alohida muhokama qilinadi (boshqa model uchun qo'shimcha to'lov, farqni qaytarish, muddatlar va boshqalar).</p>
                            </div>
                            {/* button  */}
                            <button onClick={() => setShowText2(!showText2)} className={`${showText2 ? '-rotate-45' : ''} p-0.5 transition-transform-2`}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 23 23" fill="none">
                                    <path d="M21.125 10.125H12.875V1.875C12.875 1.51033 12.7301 1.16059 12.4723 0.902728C12.2144 0.644866 11.8647 0.5 11.5 0.5C11.1353 0.5 10.7856 0.644866 10.5277 0.902728C10.2699 1.16059 10.125 1.51033 10.125 1.875V10.125H1.875C1.51033 10.125 1.16059 10.2699 0.902728 10.5277C0.644866 10.7856 0.5 11.1353 0.5 11.5C0.5 11.8647 0.644866 12.2144 0.902728 12.4723C1.16059 12.7301 1.51033 12.875 1.875 12.875H10.125V21.125C10.125 21.4897 10.2699 21.8394 10.5277 22.0973C10.7856 22.3551 11.1353 22.5 11.5 22.5C11.8647 22.5 12.2144 22.3551 12.4723 22.0973C12.7301 21.8394 12.875 21.4897 12.875 21.125V12.875H21.125C21.4897 12.875 21.8394 12.7301 22.0973 12.4723C22.3551 12.2144 22.5 11.8647 22.5 11.5C22.5 11.1353 22.3551 10.7856 22.0973 10.5277C21.8394 10.2699 21.4897 10.125 21.125 10.125Z" fill="#B3B3B3" />
                                </svg>
                            </button>
                        </li>
                        <li className="flex items-start justify-between gap-8 p-6 rounded-xl border border-primary-gray-10 max-640:p-5 max-640:gap-2 max-470:p-4">
                            <div className={`${showText3 ? '!max-h-max' : ''} overflow-y-hidden`}>
                                <h3 key={3} ref={titleH3} className="text-medium-20 mb-3 !leading-25px max-580:text-medium-18 max-440:text-medium-16">Kabinet uchun ishlab chiqarish yoki yetkazib berish muddatlari qanday?</h3>
                                <p className="text-primary-gray-70 text-regular-16 max-w-4xl">Oldindan tayyor, mavjud bo'lgan mebellarni yetkazib berish 1 kundan boshlab. Maxsus buyurtma bo'yicha mebellar 20 kundan 6 oygacha.</p>
                            </div>
                            {/* button  */}
                            <button onClick={() => setShowText3(!showText3)} className={`${showText3 ? '-rotate-45' : ''} p-0.5 transition-transform-2`}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 23 23" fill="none">
                                    <path d="M21.125 10.125H12.875V1.875C12.875 1.51033 12.7301 1.16059 12.4723 0.902728C12.2144 0.644866 11.8647 0.5 11.5 0.5C11.1353 0.5 10.7856 0.644866 10.5277 0.902728C10.2699 1.16059 10.125 1.51033 10.125 1.875V10.125H1.875C1.51033 10.125 1.16059 10.2699 0.902728 10.5277C0.644866 10.7856 0.5 11.1353 0.5 11.5C0.5 11.8647 0.644866 12.2144 0.902728 12.4723C1.16059 12.7301 1.51033 12.875 1.875 12.875H10.125V21.125C10.125 21.4897 10.2699 21.8394 10.5277 22.0973C10.7856 22.3551 11.1353 22.5 11.5 22.5C11.8647 22.5 12.2144 22.3551 12.4723 22.0973C12.7301 21.8394 12.875 21.4897 12.875 21.125V12.875H21.125C21.4897 12.875 21.8394 12.7301 22.0973 12.4723C22.3551 12.2144 22.5 11.8647 22.5 11.5C22.5 11.1353 22.3551 10.7856 22.0973 10.5277C21.8394 10.2699 21.4897 10.125 21.125 10.125Z" fill="#B3B3B3" />
                                </svg>
                            </button>
                        </li>
                        <li className="flex items-start justify-between gap-8 p-6 rounded-xl border border-primary-gray-10 max-640:p-5 max-640:gap-2 max-470:p-4">
                            <div className={`${showText4 ? '!max-h-max' : ''} overflow-y-hidden`}>
                                <h3 key={4} ref={titleH4} className="text-medium-20 mb-3 !leading-25px max-580:text-medium-18 max-440:text-medium-16">Maxsus loyihaga qanday buyurtma berish mumkin?</h3>
                                <p className="text-primary-gray-70 text-regular-16 max-w-4xl">Siz individual loyihani ishlab chiqish bo'yicha so'rovni veb-saytga orqali yoki <a href="tel:+998999999999" className="text-primary-red-50">+998 (99) 999-99-99</a>raqamiga qo'ng'iroq qilib ariza qoldirishingiz mumkin. Sizning arizangiz menejerga yuboriladi, u siz bilan barcha tafsilotlar bo'yicha o'rganadi va tezda to'g'ri maslahat beradi.</p>
                            </div>
                            {/* button  */}
                            <button onClick={() => setShowText4(!showText4)} className={`${showText4 ? '-rotate-45' : ''} p-0.5 transition-transform-2`}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 23 23" fill="none">
                                    <path d="M21.125 10.125H12.875V1.875C12.875 1.51033 12.7301 1.16059 12.4723 0.902728C12.2144 0.644866 11.8647 0.5 11.5 0.5C11.1353 0.5 10.7856 0.644866 10.5277 0.902728C10.2699 1.16059 10.125 1.51033 10.125 1.875V10.125H1.875C1.51033 10.125 1.16059 10.2699 0.902728 10.5277C0.644866 10.7856 0.5 11.1353 0.5 11.5C0.5 11.8647 0.644866 12.2144 0.902728 12.4723C1.16059 12.7301 1.51033 12.875 1.875 12.875H10.125V21.125C10.125 21.4897 10.2699 21.8394 10.5277 22.0973C10.7856 22.3551 11.1353 22.5 11.5 22.5C11.8647 22.5 12.2144 22.3551 12.4723 22.0973C12.7301 21.8394 12.875 21.4897 12.875 21.125V12.875H21.125C21.4897 12.875 21.8394 12.7301 22.0973 12.4723C22.3551 12.2144 22.5 11.8647 22.5 11.5C22.5 11.1353 22.3551 10.7856 22.0973 10.5277C21.8394 10.2699 21.4897 10.125 21.125 10.125Z" fill="#B3B3B3" />
                                </svg>
                            </button>
                        </li>
                        <li className="flex items-start justify-between gap-8 p-6 rounded-xl border border-primary-gray-10 max-640:p-5 max-640:gap-2 max-470:p-4">
                            <div className={`${showText5 ? '!max-h-max' : ''} overflow-y-hidden`}>
                                <h3 key={5} ref={titleH5} className="text-medium-20 mb-3 !leading-25px max-580:text-medium-18 max-440:text-medium-16">Mebelni kompaniya (ishlab chiqarishzavodidan) sotib olsam bo'ladimi?</h3>
                                <div className="text-primary-gray-70 text-regular-16 max-w-4xl">Ha albatta siz bizning ofizimizga kelgan holda sotib olsangiz bo'ladi bizning manzil: <address className='not-italic'>Toshkent, Olmaliq K: No312</address></div>
                            </div>
                            {/* button  */}
                            <button onClick={() => setShowText5(!showText5)} className={`${showText5 ? '-rotate-45' : ''} p-0.5 transition-transform-2`}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 23 23" fill="none">
                                    <path d="M21.125 10.125H12.875V1.875C12.875 1.51033 12.7301 1.16059 12.4723 0.902728C12.2144 0.644866 11.8647 0.5 11.5 0.5C11.1353 0.5 10.7856 0.644866 10.5277 0.902728C10.2699 1.16059 10.125 1.51033 10.125 1.875V10.125H1.875C1.51033 10.125 1.16059 10.2699 0.902728 10.5277C0.644866 10.7856 0.5 11.1353 0.5 11.5C0.5 11.8647 0.644866 12.2144 0.902728 12.4723C1.16059 12.7301 1.51033 12.875 1.875 12.875H10.125V21.125C10.125 21.4897 10.2699 21.8394 10.5277 22.0973C10.7856 22.3551 11.1353 22.5 11.5 22.5C11.8647 22.5 12.2144 22.3551 12.4723 22.0973C12.7301 21.8394 12.875 21.4897 12.875 21.125V12.875H21.125C21.4897 12.875 21.8394 12.7301 22.0973 12.4723C22.3551 12.2144 22.5 11.8647 22.5 11.5C22.5 11.1353 22.3551 10.7856 22.0973 10.5277C21.8394 10.2699 21.4897 10.125 21.125 10.125Z" fill="#B3B3B3" />
                                </svg>
                            </button>
                        </li>
                        <li className="flex items-start justify-between gap-8 p-6 rounded-xl border border-primary-gray-10 max-640:p-5 max-640:gap-2 max-470:p-4">
                            <div className={`${showText6 ? '!max-h-max' : ''} overflow-y-hidden`}>
                                <h3 key={5} ref={titleH6} className="text-medium-20 mb-3 !leading-25px max-580:text-medium-18 max-440:text-medium-16">Mebelni kompaniya (ishlab chiqarishzavodidan) sotib olsam bo'ladimi?</h3>
                                <div className="text-primary-gray-70 text-regular-16 max-w-4xl">Ha albatta siz bizning ofizimizga kelgan holda sotib olsangiz bo'ladi bizning manzil: <address className='not-italic'>Toshkent, Olmaliq K: No312</address></div>
                            </div>-
                            {/* button  */}
                            <button onClick={() => setShowText6(!showText6)} className={`${showText6 ? '-rotate-45' : ''} p-0.5 transition-transform-2`}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 23 23" fill="none">
                                    <path d="M21.125 10.125H12.875V1.875C12.875 1.51033 12.7301 1.16059 12.4723 0.902728C12.2144 0.644866 11.8647 0.5 11.5 0.5C11.1353 0.5 10.7856 0.644866 10.5277 0.902728C10.2699 1.16059 10.125 1.51033 10.125 1.875V10.125H1.875C1.51033 10.125 1.16059 10.2699 0.902728 10.5277C0.644866 10.7856 0.5 11.1353 0.5 11.5C0.5 11.8647 0.644866 12.2144 0.902728 12.4723C1.16059 12.7301 1.51033 12.875 1.875 12.875H10.125V21.125C10.125 21.4897 10.2699 21.8394 10.5277 22.0973C10.7856 22.3551 11.1353 22.5 11.5 22.5C11.8647 22.5 12.2144 22.3551 12.4723 22.0973C12.7301 21.8394 12.875 21.4897 12.875 21.125V12.875H21.125C21.4897 12.875 21.8394 12.7301 22.0973 12.4723C22.3551 12.2144 22.5 11.8647 22.5 11.5C22.5 11.1353 22.3551 10.7856 22.0973 10.5277C21.8394 10.2699 21.4897 10.125 21.125 10.125Z" fill="#B3B3B3" />
                                </svg>
                            </button>
                        </li>
                        <li className="flex items-start justify-between gap-8 p-6 rounded-xl border border-primary-gray-10 max-640:p-5 max-640:gap-2 max-470:p-4">
                            <div className={`${showText7 ? '!max-h-max' : ''} overflow-y-hidden`}>
                                <h3 key={7} ref={titleH7} className="text-medium-20 mb-3 !leading-25px max-580:text-medium-18 max-440:text-medium-16">Manzil, telefon raqami va ish vaqti qanday?</h3>
                                <p className="text-primary-gray-70 text-regular-16 max-w-4xl">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis, obcaecati.</p>
                            </div>
                            {/* button  */}
                            <button onClick={() => setShowText7(!showText7)} className={`${showText7 ? '-rotate-45' : ''} p-0.5 transition-transform-2`}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 23 23" fill="none">
                                    <path d="M21.125 10.125H12.875V1.875C12.875 1.51033 12.7301 1.16059 12.4723 0.902728C12.2144 0.644866 11.8647 0.5 11.5 0.5C11.1353 0.5 10.7856 0.644866 10.5277 0.902728C10.2699 1.16059 10.125 1.51033 10.125 1.875V10.125H1.875C1.51033 10.125 1.16059 10.2699 0.902728 10.5277C0.644866 10.7856 0.5 11.1353 0.5 11.5C0.5 11.8647 0.644866 12.2144 0.902728 12.4723C1.16059 12.7301 1.51033 12.875 1.875 12.875H10.125V21.125C10.125 21.4897 10.2699 21.8394 10.5277 22.0973C10.7856 22.3551 11.1353 22.5 11.5 22.5C11.8647 22.5 12.2144 22.3551 12.4723 22.0973C12.7301 21.8394 12.875 21.4897 12.875 21.125V12.875H21.125C21.4897 12.875 21.8394 12.7301 22.0973 12.4723C22.3551 12.2144 22.5 11.8647 22.5 11.5C22.5 11.1353 22.3551 10.7856 22.0973 10.5277C21.8394 10.2699 21.4897 10.125 21.125 10.125Z" fill="#B3B3B3" />
                                </svg>
                            </button>
                        </li>
                        <li className="flex items-start justify-between gap-8 p-6 rounded-xl border border-primary-gray-10 max-640:p-5 max-640:gap-2 max-470:p-4">
                            <div className={`${showText8 ? '!max-h-max' : ''} overflow-y-hidden`}>
                                <h3 key={8} ref={titleH8} className="text-medium-20 mb-3 !leading-25px max-580:text-medium-18 max-440:text-medium-16">Ko'rgazma zalida qanday modellar taqdim etiladi?</h3>
                                <p className="text-primary-gray-70 text-regular-16 max-w-4xl">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis architecto mollitia deleniti beatae ullam, voluptate sed quos ratione! Quasi quae voluptas ex sapiente debitis distinctio.</p>
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
                    <form action="https://echo.htmlacademy.ru" className="bg-primary-gray-10 rounded-2.5xl p-8 col-start-12 col-end-17 min-w-500px max-1150:col-start-1 max-1150:col-end-2 max-1150:min-w-0 max-470:px-5">
                        {/* title  */}
                        <h3 className="text-center max-w-md mx-auto text-medium-28 mb-3">Savollaringiz bormi?</h3>
                        <p className="text-center text-primary-gray-70 mb-8 max-440:text-regular-16">Biz sizga qayta qo'ng'iroq qilamiz, sizning vazifalaringiz va ehtiyojlaringizni diqqat bilan tinglaymiz, eng yaxshi variantlarni taklif qilamiz va kelajakdagi kabinetingiz yoki ofisingiz uchun bepul loyihasini ishlab chiqamiz.</p>
                        {/* main  */}
                        <div className="space-y-6 mb-8">
                            <div>
                                <label htmlFor='categoryTelInput' className="inline-block mb-2 text-regular-14 text-primary-gray-70">Telefon raqamingiz*</label>
                                <input autoComplete='off' id='categoryTelInput' maxLength={13} name='phone number' placeholder='+998 (99) 999-99-99' required type="tel" className='leading-17.5px!' />
                            </div>

                            <div>
                                <label htmlFor='questionTextarea' className="inline-block mb-2 text-regular-14 text-primary-gray-70">Savolingizni yozing*</label>
                                <textarea id='questionTextarea' name='question text' required className='leading-17.5px! h-36 resize-none' />
                            </div>

                            <button className="red-btn w-full text-regular-16 py-3.5">Savolni yuborish</button>
                        </div>

                        <p className="text-regular-12 text-center">*Saytga ma'lumot yuborish orqali siz <Link className='text-primary-red-50' to='/processing-of-personal-data'>Shaxsiy ma'lumotlarni himoya qilish siyosati shartlarini qabul qilasiz</Link></p>
                    </form>
                </div>
            </div>
        </section>
    )
};

export default QuestionAnswer;