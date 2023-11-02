import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import telephone from '../assets/images/svg/telephone-icon.svg';
import whatsapp from '../assets/images/svg/whatsapp-logo.svg';
import vk from '../assets/images/svg/vk-logo.svg';

const Footer = () => {
    return (
        <footer className='pt-20 pb-8 bg-primary-gray-90 max-580:py-16'>
            <div className="container">
                {/* main  */}
                <div className="grid grid-cols-4 gap-8 pb-20 max-1150:grid-cols-2 max-580:grid-cols-1 max-730:pb-14 max-360:pb-8">
                    {/* logo  */}
                    <div className='space-y-8 max-580:hidden'>
                        <Link to='/' className='text-white leading-8 text-29px textblack'>OFIS <span className="text-primary-red-50">TARZI</span></Link>
                        <p className="text-primary-gray-30 text-regular-14 max-w-336px">Saytdagi barcha ma'lumotlar faqat ma'lumot olish uchun mo'ljallangan.</p>
                    </div>

                    {/* catalog  */}
                    <div className='space-y-8'>
                        {/* title  */}
                        <h3 className="text-medium-24 text-white">Katalog</h3>
                        {/* list  */}
                        <ul className="space-y-2 text-regular-14 text-primary-gray-20">
                            <li>
                                <Link to='/'>Ijroiya idoralari</Link>
                            </li>
                            <li>
                                <Link to='/'>Xodimlar uchun mebel</Link>
                            </li>
                            <li>
                                <Link to='/'>Ofis kreslolari</Link>
                            </li>
                            <li>
                                <Link to='/'>Ofis divanlari</Link>
                            </li>
                            <li>
                                <Link to='/'>Qabul qilish stollari</Link>
                            </li>
                            <li>
                                <Link to='/'>Uchrashuv stollari</Link>
                            </li>
                            <li>
                                <Link to='/'>Ko'p kishilik bo'limlar</Link>
                            </li>
                            <li>
                                <Link to='/'>Ofis stollari</Link>
                            </li>
                            <li>
                                <Link to='/'>Ofis kabinetlari</Link>
                            </li>
                            <li>
                                <Link to='/'>Ofis bo'limlari</Link>
                            </li>
                        </ul>
                    </div>

                    {/* company */}
                    <div className='space-y-8'>
                        {/* title  */}
                        <h3 className="text-medium-24 text-white">Kompaniya</h3>
                        {/* list  */}
                        <ul className="space-y-2 text-regular-14 text-primary-gray-20">
                            <li>
                                <Link to='/about-company'>Kompaniya haqida</Link>
                            </li>
                            <li>
                                <Link to='/portfolio'>Loyihaxlar</Link>
                            </li>
                            <li>
                                <Link to='/reviews'>Sharxlar</Link>
                            </li>
                            <li>
                                <Link to='/about-payment'>Yetkazib berish va to'lash</Link>
                            </li>
                            <li>
                                <Link to='/akciya'>Aksiya</Link>
                            </li>
                            <li>
                                <Link to='/articles'>Maqolalar</Link>
                            </li>
                            <li>
                                <Link to='/news'>Yangiliklar</Link>
                            </li>
                            <li>
                                <Link to='/contact'>Bog'lanish</Link>
                            </li>
                        </ul>
                    </div>

                    {/* contact */}
                    <div className='space-y-8'>
                        {/* title  */}
                        <h3 className="text-medium-24 text-white">Bog'lanish</h3>

                        {/* main  */}
                        <div>
                            {/* tel */}
                            <a target='_blank' href='tel:+998999999999' className="flex-center mb-6">
                                <img width={28} height={28} src={telephone} alt="telephone icon" className="w-7 h-7 p-2 rounded-full border border-white mr-4" />
                                <span className="text-regular-24 text-white">+998 (99) 999-99-99</span>
                            </a>
                            {/* address  */}
                            <div className="flex flex-col space-y-2 text-regular-16 text-primary-gray-20 mb-7">
                                <address className='not-italic'>Toshkent, Olmaliq K: No312</address>
                                <span className="inline-block">du - shan: 9:00dan 18:00gacha</span>
                                <a href="mailto:xyaxyobek4@gmail.com" target='_blank' className="inline-block">xyaxyobek4@gmail.com</a>
                            </div>
                            {/* social  */}
                            <div className="flex-start space-x-4 max-1400:flex-col max-1400:space-x-0 max-1400:space-y-4 max-1150:flex-row max-1150:space-y-0 max-1150:space-x-4 max-730:space-x-0 max-730:space-y-4 max-730:flex-col max-580:flex-row max-580:space-x-4 max-580:space-y-0 max-360:flex-col max-360:space-x-0 max-360:space-y-4">
                                <div className="flex space-x-4">
                                    <a href="https://example.com" target='_blank' className="flex-center justify-center rounded-lg w-12 h-12 bg-secondary-whatsapp">
                                        <img width={32} height={32} src={whatsapp} alt="whatsapp logo" className="" />
                                    </a>
                                    <a href="https://example.com" target='_blank' className="flex-center justify-center rounded-lg w-12 h-12 bg-secondary-vk">
                                        <img width={26} height={17} src={vk} alt="vk app logo" className="" />
                                    </a>
                                </div>
                                <a href="https://example.com" target='_blank' className="red-btn py-3.5 px-6 text-regular-16">Telegram</a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* bottom  */}
                <div className="flex-c-b pt-8 text-primary-gray-30 border-t border-primary-gray-70 max-730:flex-col max-730:space-y-2.5 max-580:items-start">
                    <p className='text-regular-16'>© «Office furnitures», 2023</p>
                    <a href='#' className='text-regular-16'>Maxfiylik siyosati</a>
                    <a href='https://t.me/mryaxyobek' target='_blank' className='text-regular-16'>Ma'sul shaxs Yaxyobek</a>
                </div>
            </div>
        </footer>
    )
};

export default Footer;