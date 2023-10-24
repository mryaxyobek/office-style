import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import telephone from '../assets/images/svg/telephone-icon.svg';
import whatsapp from '../assets/images/svg/whatsapp-logo.svg';
import vk from '../assets/images/svg/vk-logo.svg';

const Footer = () => {
    return (
        <footer className='pt-20 pb-8 bg-primary-gray-90'>
            <div className="container">
                {/* main  */}
                <div className="grid grid-cols-4 gap-8 pb-20">
                    {/* logo  */}
                    <div className='space-y-8'>
                        <Link to='/' className='text-white leading-8 text-29px textblack'>ОФИС-СТИЛЬ.</Link>
                        <p className="text-primary-gray-30 text-regular-14 max-w-336px">Информация на сайте, носит ознакомительный характер и ни при каких условиях не является публичной офертой, определяемой положениями Статьи 437 Гражданского кодекса РФ.</p>
                    </div>

                    {/* catalog  */}
                    <div className='space-y-8'>
                        {/* title  */}
                        <h3 className="text-medium-24 text-white">Каталог</h3>
                        {/* list  */}
                        <ul className="space-y-2 text-regular-14 text-primary-gray-20">
                            <li>
                                <Link to='/'>Кабинеты для руководителей</Link>
                            </li>
                            <li>
                                <Link to='/'>Мебель для персонала</Link>
                            </li>
                            <li>
                                <Link to='/'>Офисные кресла</Link>
                            </li>
                            <li>
                                <Link to='/'>Офисные диваны</Link>
                            </li>
                            <li>
                                <Link to='/'>Стойки рецепшн</Link>
                            </li>
                            <li>
                                <Link to='/'>Столы для переговоров</Link>
                            </li>
                            <li>
                                <Link to='/'>Многоместные секции</Link>
                            </li>
                            <li>
                                <Link to='/'>Офисные столы</Link>
                            </li>
                            <li>
                                <Link to='/'>Офисные шкафы</Link>
                            </li>
                            <li>
                                <Link to='/'>Офисные перегородки</Link>
                            </li>
                        </ul>
                    </div>

                    {/* company */}
                    <div className='space-y-8'>
                        {/* title  */}
                        <h3 className="text-medium-24 text-white">Компания</h3>
                        {/* list  */}
                        <ul className="space-y-2 text-regular-14 text-primary-gray-20">
                            <li>
                                <Link to='/about-company'>О компании</Link>
                            </li>
                            <li>
                                <Link to='/portfolio'>Портфолио</Link>
                            </li>
                            <li>
                                <Link to='/reviews'>Отзывы</Link>
                            </li>
                            <li>
                                <Link to='/about-payment'>Доставка и оплата</Link>
                            </li>
                            <li>
                                <Link to='/akciya'>Акции</Link>
                            </li>
                            <li>
                                <Link to='/articles'>Статьи</Link>
                            </li>
                            <li>
                                <Link to='/news'>Новости</Link>
                            </li>
                            <li>
                                <Link to='/contact'>Контакты</Link>
                            </li>
                        </ul>
                    </div>

                    {/* contact */}
                    <div className='space-y-8'>
                        {/* title  */}
                        <h3 className="text-medium-24 text-white">Контакты</h3>

                        {/* main  */}
                        <div>
                            {/* tel */}
                            <a target='_blank' href='tel:+79385000541' className="flex-center mb-6">
                                <img width={28} height={28} src={telephone} alt="telephone icon" className="w-7 h-7 p-2 rounded-full border border-white mr-4" />
                                <span className="text-regular-24 text-white">+7 (938) 5000-541</span>
                            </a>
                            {/* address  */}
                            <div className="flex flex-col space-y-2 text-regular-16 text-primary-gray-20 mb-7">
                                <address className='not-italic'>г. Краснодар, ул. Красных Партизан д. 198</address>
                                <span className="inline-block">пн-пт с 9:00 до 18:00</span>
                                <a href="mailto:info@territory-office.ru" target='_blank' className="inline-block">info@territory-office.ru</a>
                            </div>
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
                    </div>
                </div>

                {/* bottom  */}
                <div className="flex-c-b pt-8 text-regular-16 text-primary-gray-30 border-t border-primary-gray-70">
                    <p>© «Офис-стиль», 2023</p>
                    <p>Политика конфиденциальности</p>
                    <p>Разработка - Алина Колос</p>
                </div>
            </div>
        </footer>
    )
};

export default Footer;