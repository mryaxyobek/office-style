import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const CategoryHero = () => {
    const [phoneNumber, setPhoneNumber] = useState('');

    const handlePhoneNumberChange = (event) => {
        const input = event.target.value;
        const formattedPhoneNumber = input.replace(/(\d{1,2})(\d{3})(\d{3})(\d{3})/, '+7 ($2) $3-$4');
        setPhoneNumber(formattedPhoneNumber);
    };
    return (
        <div className='pt-20 container'>
            {/* breadcrumb  */}
            <ul className="breadcrumb">
                <li>
                    <Link to={-1}>Каталог</Link>
                </li>
                <li>
                    <span>Кабинеты для руководителей</span>
                </li>
            </ul>

            {/* main content  */}
            <div className="flex justify-between relative rounded-2.5xl py-14 px-60px bg-category-hero bg-cover bg-center bg-no-repeat overflow-hidden">
                {/* description */}
                <div className="flex flex-col max-w-687px z-1 place-content-between">
                    <div>
                        <h1 className="h1-bold text-white mb-8">Кабинеты для руководителей</h1>
                        <p className="text-regular-20 text-primary-gray-20">Оставьте заявку, и мы не только подберем мебель, под ваши размеры и требования, но и сделаем бесплатный дизайн-эскиз вашего будущего кабинета</p>
                    </div>

                    <div className="flex space-x-12">
                        <div className="space-y-3 max-w-245px">
                            <h3 className="text-medium-20 text-white">Доставка</h3>
                            <p className="text-medium-18 text-primary-gray-20">экспресс-доставка за 1 час товара в наличии</p>
                        </div>
                        <div className="space-y-3 max-w-305px">
                            <h3 className="text-medium-20 text-white">Оплата</h3>
                            <p className="text-medium-18 text-primary-gray-20">наличные, карта, онлайн, безнал (с НДС, без НДС)</p>
                        </div>
                    </div>
                </div>

                {/* form */}
                <form action="https://echo.htmlacademy.ru" className="bg-white rounded-2.5xl py-10 px-9 max-w-528px z-1">
                    {/* title  */}
                    <h3 className="text-center max-w-md mx-auto text-regular-24 mb-8">Оставьте заявку, и мы подскажем, какая мебель идеально подойдет для кабинета руководителя</h3>

                    {/* main  */}
                    <div className="space-y-5">
                        <div>
                            <label htmlFor='categoryNameInput' className="inline-block mb-2 text-regular-14 text-primary-gray-70">Ваше имя*</label>
                            <input autoComplete='off' id='categoryNameInput' name='name' placeholder='Например: Иван' required type="text" className='leading-17.5px!' />
                        </div>
                        <div>
                            <label htmlFor='categoryTelInput' className="inline-block mb-2 text-regular-14 text-primary-gray-70">Ваш телефон*</label>
                            <input autoComplete='off' id='categoryTelInput' maxLength={16} value={phoneNumber} name='phone number' onChange={handlePhoneNumberChange} placeholder='+7 (999) 999-999' required type="text" className='leading-17.5px!' />
                        </div>
                        <button className="red-btn w-full text-regular-16 py-3.5">Получить консультацию</button>
                        <p className="text-regular-12 text-primary-gray-70 text-center">*Передавая информацию сайту, Вы принимаете условия <a href="#" className="text-primary-red-50 underline">Политики защиты персональной информации</a></p>
                    </div>
                </form>

                {/* filter  */}
                <div className="absolute w-full h-full z-0 bg-black bg-opacity-50 top-0 right-0">
                </div>
            </div>
        </div >
    )
};

export default CategoryHero;