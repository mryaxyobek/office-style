import React, { useState } from 'react';
import furnituresBg from '../assets/images/other/drawing-furnitures.png';

const RedCta = () => {
    const [phoneNumber, setPhoneNumber] = useState('');

    const handlePhoneNumberChange = (event) => {
        const input = event.target.value;
        const formattedPhoneNumber = input.replace(/(\d{1,2})(\d{3})(\d{3})(\d{3})/, '+7 ($2) $3-$4');
        setPhoneNumber(formattedPhoneNumber);
    };

    return (
        <section className="pt-60px pb-70px">
            <div className="container">
                <div className="flex-c-b py-16 px-20 rounded-2.5xl bg-primary-red-60 bg-no-repeat bg-blend-lighten bg-furnituresBg bg-right">
                    {/* first child  */}
                    <div className="max-w-800px">
                        <h2 className="mb-5 text-white">Закажите бесплатный эскизный проект своего офиса</h2>
                        <p className="text-white max-w-2xl">Оставьте заявку, мы перезвоним, внимательно выслушаем Ваши задачи и потребности, предложим оптимальные варианты и бесплатно разработаем эскизный проект будущего кабинета или офиса.</p>
                    </div>

                    {/* form  */}
                    <form action="https://echo.htmlacademy.ru" className="flex flex-col p-8 space-y-6 bg-white rounded-2.5xl">
                        <div className='max-w-352px'>
                            <label htmlFor='ctatelinput' className="inline-block mb-2 text-regular-14 text-primary-gray-70">Ваш телефон*</label>
                            <input autoComplete='off' id='ctatelinput' maxLength={16} value={phoneNumber} name='phone number' onChange={handlePhoneNumberChange} placeholder='+7 (999) 999-999' required type="text" className='leading-17.5px!' />
                        </div>
                        <button className="red-btn py-3.5 px-6">Заказать бесплатный эскиз</button>

                        <span className="text-center max-w-352px text-regular-12 text-primary-gray-70 leading-15px!">*Передавая информацию сайту, Вы принимаете условия Политики защиты персональной информации</span>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default RedCta