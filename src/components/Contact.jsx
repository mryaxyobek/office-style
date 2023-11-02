import React from 'react';

// images 
import whatsapp from '../assets/images/svg/whatsapp-logo.svg';
import vk from '../assets/images/svg/vk-logo.svg';
const Contact = () => {
    return (
        <div className='flex justify-between gap-5 max-1050:flex-col'>
            {/* informations  */}
            <div className="flex flex-col max-w-639px">
                {/* list 1 */}
                <ul className="space-y-3 mb-12 max-900:mb-10 max-440:mb-8">
                    <li className='flex flex-col'>
                        <span className="mb-0.5 text-regular-14 text-primary-gray-70">Manzil:</span>
                        <address className='not-italic'>Toshkent, Olmaliq Ko'cha: No312. Mo'ljal Korzinka do'koni orqasida</address>
                    </li>
                    <li className='flex flex-col'>
                        <span className="mb-0.5 text-regular-14 text-primary-gray-70">Telefon raqam:</span>
                        <a target='_blank' href='tel:+998999999999'>+998 (99) 999-99-99</a>
                    </li>
                    <li className='flex flex-col'>
                        <span className="mb-0.5 text-regular-14 text-primary-gray-70">Elektron pochta:</span>
                        <a target='_blank' href='mailto:xyaxyobek4@gmail.com'>xyaxyobek4@gmail.com</a>
                    </li>
                    <li className='flex flex-col'>
                        <span className="mb-0.5 text-regular-14 text-primary-gray-70">Ish vaqti:</span>
                        <p>du - shan: 9:00dan 18:00gacha</p>
                    </li>
                </ul>

                {/* list 2 */}
                <ul className="space-y-3 mb-auto max-1050:mb-8">
                    <li className='flex flex-col'>
                        <span className="mb-0.5 text-regular-14 text-primary-gray-70">Manzil:</span>
                        <address className='not-italic'>Toshkent, Olmaliq Ko'cha: No312. Mo'ljal Korzinka do'koni orqasida</address>
                    </li>
                    <li className='flex flex-col'>
                        <span className="mb-0.5 text-regular-14 text-primary-gray-70">Telefon raqam:</span>
                        <a target='_blank' href='tel:+998999999999'>+998 (99) 999-99-99</a>
                    </li>
                    <li className='flex flex-col'>
                        <span className="mb-0.5 text-regular-14 text-primary-gray-70">Elektron pochta:</span>
                        <a target='_blank' href='mailto:xyaxyobek4@gmail.com'>xyaxyobek4@gmail.com</a>
                    </li>
                    <li className='flex flex-col'>
                        <span className="mb-0.5 text-regular-14 text-primary-gray-70">Ish vaqti:</span>
                        <p>du - shan: 9:00dan 18:00gacha</p>
                    </li>
                </ul>
                {/* social  */}
                <div className="flex-start space-x-4 max-360:flex-col max-360:space-x-0 max-360:space-y-4">
                    <div className="flex-center space-x-4">
                        <a href="https://example.com" target='_blank' className="flex-center justify-center rounded-lg w-12 h-12 bg-secondary-whatsapp">
                            <img width={32} height={32} src={whatsapp} alt="" className="" />
                        </a>
                        <a href="https://example.com" target='_blank' className="flex-center justify-center rounded-lg w-12 h-12 bg-secondary-vk">
                            <img width={26} height={17} src={vk} alt="" className="" />
                        </a>
                    </div>
                    <a href="https://t.me/mryaxyobek" target='_blank' className="red-btn py-3.5 px-6 text-regular-16">Telegram</a>
                </div>
            </div>

            {/* map  */}
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8395.303036926065!2d69.14454517715944!3d41.27083684645601!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae89e429bf5339%3A0x4df5395d904db17c!2sComfort%20style!5e0!3m2!1sen!2s!4v1698856778376!5m2!1sen!2s" width="976" height="600" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className='rounded-2.5xl max-1450:w-800px bg-primary-gray-70 max-1050:w-full max-730:h-411px max-440:h-340px'></iframe>
        </div>
    )
};

export default Contact;