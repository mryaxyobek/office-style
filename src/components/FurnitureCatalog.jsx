import React, { useState } from 'react';

const FurnitureCatalog = () => {
    const [phoneNumber, setPhoneNumber] = useState('');

    const handlePhoneNumberChange = (event) => {
        const input = event.target.value;
        const formattedPhoneNumber = input.replace(/(\d{1,2})(\d{3})(\d{3})(\d{3})/, '+$1 ($2) $3-$4');
        setPhoneNumber(formattedPhoneNumber);
    };
    return (
        <section className='py-60px'>
            <div className="container">
                <div className="bg-furniture-book bg-primary-gray-10 bg-no-repeat bg-right rounded-2.5xl pt-60px pl-20 pb-70px">
                    {/* title  */}
                    <h2 className="mb-4">Получите полный каталог мебели</h2>

                    {/* about  */}
                    <div className="mb-10 space-y-3 text-primary-gray-70 max-w-745px">
                        <p>Мы один из крупных производителей и поставщиков офисной мебели, в нашем ассортименте более 50 000 наименований. Мы физически не можем разместить все на сайте, но можем предоставить полный каталог по запросу. </p>
                        <p>Чтобы посмотреть всю мебель в нашем каталоге, оставьте заявку.</p>
                    </div>

                    {/* form  */}
                    <form action="https://echo.htmlacademy.ru" className="flex items-end gap-6 mb-5 max-w-620px">
                        <div className='grow'>
                            <label htmlFor='catalogTelInput' className="inline-block mb-2 text-regular-14 text-primary-gray-70">Ваш телефон*</label>
                            <input autoComplete='off' id='catalogTelInput' maxLength={16} value={phoneNumber} name='phone number' onChange={handlePhoneNumberChange} placeholder='+7 (999) 999-999' required type="tel" className='leading-17.5px!' />
                        </div>
                        <button className="red-btn py-3.5 px-6 text-regular-16">Получить полный каталог</button>
                    </form>

                    <p className="text-regular-12">*Передавая информацию сайту, Вы принимаете условия Политики защиты персональной информации</p>
                </div>
            </div>
        </section>
    )
};

export default FurnitureCatalog;