import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className='py-4 bg-primary-gray-04'>
            <div className="flex-c-b container">

                {/* logo  */}
                <div className='flex-center'>
                    <Link to='/' className='text-primary-gray-90 text-2xl leading-25px textblack mr-8'>ОФИС-СТИЛЬ.</Link>
                    <select className='text-14px leading-19px bg-transparent'>
                        <option>г. Краснодар</option>
                        <option>item 1</option>
                        <option>item 2</option>
                    </select>
                </div>

                {/* navbar  */}
                <nav>
                    <ul className="flex-center space-x-6">
                        <li>
                            <Link className="text-primary-gray-70 leading-17.5px" to='/'>О компании</Link>
                        </li>
                        <li>
                            <Link className="text-primary-gray-70 leading-17.5px" to='/'>Выполненные проекты</Link>
                        </li>
                        <li>
                            <Link className="text-primary-gray-70 leading-17.5px" to='/'>Отзывы</Link>
                        </li>
                        <li>
                            <Link className="text-primary-gray-70 leading-17.5px" to='/'>Доставка и оплата</Link>
                        </li>
                        <li>
                            <Link className="text-primary-gray-70 leading-17.5px" to='/'>Акции</Link>
                        </li>
                        <li>
                            <Link className="text-primary-gray-70 leading-17.5px" to='/'>Еще</Link>
                        </li>
                    </ul>
                </nav>

                {/* last child  */}
                <div className='flex-center'>
                    <p className="leading-5 text-primary-gray-70 mr-16">ул. Красных Партизан д. 198</p>
                    <div className='mr-6'>
                        <p className="text-base leading-21px text-medium">+7 (938) 5000-541</p>
                        <span className="inline-block text-xs text-primary-gray-70">пн-пт: с 9:00 до 18:00</span>
                    </div>
                    <a href="tel:+79385000541" className="bg-primary-gray-80 rounded-lg py-3.5 px-6 text-white">Заказазать звонок</a>
                </div>
            </div>
        </header>
    )
};

export default Header;