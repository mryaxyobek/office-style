import React, { useState } from 'react';

const Offer = () => {
    return (
        <div className="py-60r container max-470:px-0">
            <div className="flex-c-b rounded-2.5xl py-9 px-60px bg-primary-gray-80 max-1150:flex-col max-640:px-10 max-470:px-5 max-470:py-10">
                <h3 className="text-white text-medium-28 max-w-687px max-1150:text-center max-1150:mb-8">Kelajakdagi ofisingizning bepul dizayn eskizini oling</h3>

                {/* form  */}
                <form action="https://echo.htmlacademy.ru" className="flex items-end space-x-8 min-w-max max-640:flex-col max-640:gap-6 max-640:w-full">
                    <div className='max-w-sm max-640:w-full max-640:max-w-full'>
                        <label htmlFor='ctatelinput' className="inline-block mb-2 text-regular-14 text-white">Telefon raqam</label>
                        <input autoComplete='off' id='ctatelinput' maxLength={13} name='phone number' placeholder='+998 (99) 999-99-99' required type="tel" className='leading-17.5px!' />
                    </div>
                    <button className="red-btn py-3.5 px-6 text-regular-16 max-640:w-full">
                        Eskizni olish
                    </button>
                </form>
            </div>
        </div>
    )
};

export default Offer;