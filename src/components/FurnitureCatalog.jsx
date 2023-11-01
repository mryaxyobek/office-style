import React, { useState } from 'react';

const FurnitureCatalog = () => {
    const [phoneNumber, setPhoneNumber] = useState('');

    const handlePhoneNumberChange = (event) => {
        const input = event.target.value;
        const formattedPhoneNumber = input.replace(/(\d{1,2})(\d{3})(\d{3})(\d{3})/, '+$1 ($2) $3-$4');
        setPhoneNumber(formattedPhoneNumber);
    };
    return (
        <section className='py-60r'>
            <div className="container max-440:px-0">
                <div className="bg-furniture-book bg-primary-gray-10 bg-no-repeat bg-right rounded-2.5xl pt-60px pl-20 pb-70px max-1150:bg-200px max-940:p-10 max-730:bg-none max-730:p-8 max-640:p-6 max-440:p-5">
                    {/* title  */}
                    <h2 className="h2-medium mb-4 max-730:text-center">Получите полный каталог мебели</h2>

                    {/* about  */}
                    <div className="mb-10 space-y-3 text-primary-gray-70 max-w-745px max-730:mb-8 max-440:mb-6">
                        <p className='max-730:text-center max-440:text-regular-16'>Мы один из крупных производителей и поставщиков офисной мебели, в нашем ассортименте более 50 000 наименований. Мы физически не можем разместить все на сайте, но можем предоставить полный каталог по запросу. </p>
                        <p className='max-730:text-center max-440:text-regular-16'>Чтобы посмотреть всю мебель в нашем каталоге, оставьте заявку.</p>
                    </div>

                    {/* form  */}
                    <form action="https://echo.htmlacademy.ru" className="flex items-end gap-6 mb-5 max-w-620px max-730:flex-col max-440:mb-6">
                        <div className='grow max-730:w-full'>
                            <label htmlFor='catalogTelInput' className="inline-block mb-2 text-regular-14 text-primary-gray-70">Ваш телефон*</label>
                            <input autoComplete='off' id='catalogTelInput' maxLength={16} value={phoneNumber} name='phone number' onChange={handlePhoneNumberChange} placeholder='+7 (999) 999-999' required type="tel" className='leading-17.5px!' />
                        </div>
                        <button className="red-btn py-3.5 px-6 text-regular-16 max-730:w-full">Получить полный каталог</button>
                    </form>

                    <p className="text-regular-12 max-730:text-center">*Передавая информацию сайту, Вы принимаете условия Политики защиты персональной информации</p>
                </div>
            </div>
        </section>
    )
};

export default FurnitureCatalog;