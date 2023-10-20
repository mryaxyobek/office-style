import React from 'react';
import whatsapp from '../assets/images/svg/whatsapp-logo.svg';
import vk from '../assets/images/svg/vk-logo.svg';
import map from '../assets/images/other/map.png';

const Contact = () => {
    return (
        <div className='flex justify-between gap-5'>
            {/* informations  */}
            <div className="flex flex-col max-w-639px">
                {/* list 1 */}
                <ul className="space-y-3 mb-12">
                    <li className='flex flex-col'>
                        <span className="mb-0.5 text-regular-14 text-primary-gray-70">Адрес:</span>
                        <address className='not-italic'>350051, г. Краснодар, ул. Дальняя д. 27, офис 4</address>
                    </li>
                    <li className='flex flex-col'>
                        <span className="mb-0.5 text-regular-14 text-primary-gray-70">Телефон:</span>
                        <a target='_blank' href='tel:+79385000541'>+7 (938) 5000-541</a>
                    </li>
                    <li className='flex flex-col'>
                        <span className="mb-0.5 text-regular-14 text-primary-gray-70">Почта:</span>
                        <a target='_blank' href='mailto:info@territory-office.ru'>info@territory-office.ru</a>
                    </li>
                    <li className='flex flex-col'>
                        <span className="mb-0.5 text-regular-14 text-primary-gray-70">Режим работы:</span>
                        <p>пн-пт с 9:00 до 18:00</p>
                    </li>
                </ul>

                {/* list 2 */}
                <ul className="space-y-3 mb-auto">
                    <li className='flex flex-col'>
                        <span className="mb-0.5 text-regular-14 text-primary-gray-70">Адрес:</span>
                        <address className='not-italic'>350051, г. Краснодар, ул. Дальняя д. 27, офис 4</address>
                    </li>
                    <li className='flex flex-col'>
                        <span className="mb-0.5 text-regular-14 text-primary-gray-70">Телефон:</span>
                        <a target='_blank' href='tel:+79385000541'>+7 (938) 5000-541</a>
                    </li>
                    <li className='flex flex-col'>
                        <span className="mb-0.5 text-regular-14 text-primary-gray-70">Почта:</span>
                        <a target='_blank' href='mailto:info@territory-office.ru'>info@territory-office.ru</a>
                    </li>
                    <li className='flex flex-col'>
                        <span className="mb-0.5 text-regular-14 text-primary-gray-70">Режим работы:</span>
                        <p>пн-пт с 9:00 до 18:00</p>
                    </li>
                </ul>

                {/* social  */}
                <div className="flex-center space-x-4">
                    <a href="https://example.com" target='_blank' className="flex-center justify-center rounded-lg w-12 h-12 bg-secondary-whatsapp">
                        <img width={32} height={32} src={whatsapp} alt="" className="" />
                    </a>
                    <a href="https://example.com" target='_blank' className="flex-center justify-center rounded-lg w-12 h-12 bg-secondary-vk">
                        <img width={26} height={17} src={vk} alt="" className="" />
                    </a>
                    <a href="https://example.com" target='_blank' className="red-btn py-3.5 px-6 text-regular-16">Связаться с нами</a>
                </div>
            </div>

            {/* map  */}
            <div className="flex items-center justify-center bg-primary-gray-10 rounded-2.5xl overflow-hidden relative">
                <img width={976} height={612} src={map} alt="map image" />

                {/* icon  */}
                <div className="absolute">
                    <div className="flex justify-center relative py-18px px-4 text-white text-lg leading-19px textblack bg-primary-red-50">
                        ОФИС-СТИЛЬ.

                        {/* polygon  */}
                        <svg className='absolute -bottom-4' xmlns="http://www.w3.org/2000/svg" width="22" height="18" viewBox="0 0 22 18" fill="none">
                            <path d="M11.0004 18C11.0004 18 9.94822 3.5 1.47411 1.5C-7.00001 -0.500001 29 -0.499999 20.5267 1.5C12.0533 3.5 11.0004 18 11.0004 18Z" fill="#DA0916" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Contact;