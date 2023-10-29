import React from 'react';

const SubscribeCompanyNews = () => {
    return (
        <section className="pt-60px">
            <div className="bg-primary-gray-10 py-10">
                <div className="flex-c-b container">
                    {/* first child  */}
                    <div className='space-y-2 max-w-745px'>
                        <h2 className="text-regular-32">Подпишитесь на наши новости, чтобы всегда быть в курсе последних новинок</h2>
                        <p className="text-regular-12 text-primary-gray-70">
                            Нажимая на кнопку, вы даете согласие на обработку своих персональных данных согласно 152-ФЗ. <a href="#" className="underline">Подробнее</a>
                        </p>
                    </div>

                    {/* last child  */}
                    <form action="https://echo.htmlacademy.ru" className="flex-end gap-8 max-w-652px w-full">
                        <div className='grow'>
                            <label htmlFor='ctatelinput' className="inline-block mb-2 text-regular-14 text-primary-gray-70">Электронная почта*</label>
                            <input autoComplete='off' id='ctatelinput' name='email' placeholder='Например: Иван' required type="email" className='leading-17.5px!' />
                        </div>
                        <button className='red-btn py-3.5 px-6 text-regular-16'>Подписаться</button>
                    </form>
                </div>
            </div>
        </section>
    )
};

export default SubscribeCompanyNews;