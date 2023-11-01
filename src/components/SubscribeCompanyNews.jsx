import React from 'react';

const SubscribeCompanyNews = () => {
    return (
        <section className="pt-60r">
            <div className="bg-primary-gray-10 py-10 max-670:py-9 max-440:py-8">
                <div className="flex-c-b container max-1150:flex-col">
                    {/* first child  */}
                    <div className='space-y-2 max-w-745px max-1150:mb-8'>
                        <h2 className="text-regular-32 max-1150:text-center max-730:text-regular-28 max-580:text-regular24 max-440:text-medium-20">Подпишитесь на наши новости, чтобы всегда быть в курсе последних новинок</h2>
                        <p className="text-regular-12 text-primary-gray-70 max-1150:text-center">
                            Нажимая на кнопку, вы даете согласие на обработку своих персональных данных согласно 152-ФЗ. <a href="#" className="underline">Подробнее</a>
                        </p>
                    </div>

                    {/* last child  */}
                    <form action="https://echo.htmlacademy.ru" className="flex-end gap-8 max-w-652px w-full max-640:flex-col">
                        <div className='grow max-640:w-full'>
                            <label htmlFor='ctatelinput' className="inline-block mb-2 text-regular-14 text-primary-gray-70">Электронная почта*</label>
                            <input autoComplete='off' id='ctatelinput' name='email' placeholder='Например: Иван' required type="email" className='leading-17.5px! max-640:w-full' />
                        </div>
                        <button className='red-btn py-3.5 px-6 text-regular-16 max-640:w-full'>Подписаться</button>
                    </form>
                </div>
            </div>
        </section>
    )
};

export default SubscribeCompanyNews;