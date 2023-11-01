import React, { useState } from 'react';

const Offer = () => {
    const [phoneNumber, setPhoneNumber] = useState('');

    const handlePhoneNumberChange = (event) => {
        const input = event.target.value;
        const formattedPhoneNumber = input.replace(/(\d{1,2})(\d{3})(\d{3})(\d{3})/, '+7 ($2) $3-$4');
        setPhoneNumber(formattedPhoneNumber);
    };
    return (
        <div className="py-60r container max-470:px-0">
            <div className="flex-c-b rounded-2.5xl py-9 px-60px bg-primary-gray-80 max-1150:flex-col max-640:px-10 max-470:px-5 max-470:py-10">
                <h3 className="text-white text-medium-28 max-w-687px max-1150:text-center max-1150:mb-8">Получите бесплатный дизайн-эскиз вашего будущего кабинета</h3>

                {/* form  */}
                <form action="https://echo.htmlacademy.ru" className="flex items-end space-x-8 min-w-max max-640:flex-col max-640:gap-6 max-640:w-full">
                    <div className='max-w-sm max-640:w-full max-640:max-w-full'>
                        <label htmlFor='ctatelinput' className="inline-block mb-2 text-regular-14 text-white">Ваш телефон*</label>
                        <input autoComplete='off' id='ctatelinput' maxLength={16} value={phoneNumber} name='phone number' onChange={handlePhoneNumberChange} placeholder='+7 (999) 999-999' required type="tel" className='leading-17.5px!' />
                    </div>
                    <button className="red-btn py-3.5 px-6 text-regular-16 max-640:w-full">
                        Получить эскиз
                    </button>
                </form>
            </div>
        </div>
    )
};

export default Offer;