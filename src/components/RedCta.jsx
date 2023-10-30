import React, { useState } from 'react';

const RedCta = () => {
    const [phoneNumber, setPhoneNumber] = useState('');

    const handlePhoneNumberChange = (event) => {
        const input = event.target.value;
        const formattedPhoneNumber = input.replace(/(\d{1,2})(\d{3})(\d{3})(\d{3})/, '+7 ($2) $3-$4');
        setPhoneNumber(formattedPhoneNumber);
    };

    return (
        <section className="py-60r">
            <div className="container max-540:px-0">
                <div className="flex-c-b gap-5 py-16 px-20 rounded-2.5xl bg-primary-red-60 bg-no-repeat bg-blend-lighten bg-furnituresBg bg-right max-1150:px-12 max-1050:px-10 max-1050:py-5 max-1150:py-6 max-1050:flex-col max-540:p-0 max-540:pt-6 max-1050:gap-8 max-540:bg-bottom">
                    {/* first child  */}
                    <div className="max-w-800px max-1350:max-w-2xl max-1300:max-w-xl max-1050:text-center">
                        <h2 className="mb-5 text-white max-540:px-5 max-440:mb-8">Закажите бесплатный эскизный проект своего офиса</h2>
                        <p className="text-white max-w-2xl max-540:px-5">Оставьте заявку, мы перезвоним, внимательно выслушаем Ваши задачи и потребности, предложим оптимальные варианты и бесплатно разработаем эскизный проект будущего кабинета или офиса.</p>
                    </div>

                    {/* form  */}
                    <form action="https://echo.htmlacademy.ru" className="flex flex-col p-8 space-y-6 bg-primary-gray-04 rounded-2.5xl max-1150:min-w-max max-540:min-w-full max-540:p-6">
                        <div className='max-w-352px max-540:max-w-full'>
                            <label htmlFor='ctatelinput' className="inline-block mb-2 text-regular-14 text-primary-gray-70">Ваш телефон*</label>
                            <input autoComplete='off' id='ctatelinput' maxLength={16} value={phoneNumber} name='phone number' onChange={handlePhoneNumberChange} placeholder='+7 (999) 999-999' required type="text" className='leading-17.5px! ' />
                        </div>
                        <button className="red-btn py-3.5 px-6">Заказать бесплатный эскиз</button>

                        <span className="text-center max-w-352px text-regular-12 text-primary-gray-70 leading-15px! max-540:mx-auto">*Передавая информацию сайту, Вы принимаете условия Политики защиты персональной информации</span>
                    </form>
                </div>
            </div>
        </section>
    )
};

export default RedCta;