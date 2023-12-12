import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const FurnitureCatalog = () => {
    const navigate = useNavigate();
    return (
        <section className='py-60r'>
            <div className="container max-440:px-0">
                <div className="bg-furniture-book bg-primary-gray-10 bg-no-repeat bg-right rounded-2.5xl pt-60px pl-20 pb-70px max-1150:bg-200px max-940:p-10 max-730:bg-none max-730:p-8 max-640:p-6 max-440:p-5">
                    {/* title  */}
                    <h2 className="h2-medium mb-4 max-730:text-center">To'liq mebel katalogini oling</h2>

                    {/* about  */}
                    <div className="mb-10 space-y-3 text-primary-gray-70 max-w-745px max-730:mb-8 max-440:mb-6">
                        <p className='max-730:text-center max-440:text-regular-16'>Biz eng yirik ofis mebellari ishlab chiqaruvchilari va yetkazib beruvchilaridanmiz; mahsulot assortimenti 50 000 dan ortiq narsalarni o'z ichiga oladi. Biz jismonan saytda hamma narsani joylashtira olmaymiz, ammo so'rov bo'yicha to'liq katalogni taqdim etishimiz mumkin.</p>
                        <p className='max-730:text-center max-440:text-regular-16'>Katalogimizdagi barcha mebellarni ko'rish uchun so'rov qoldiring.</p>
                    </div>

                    {/* form  */}
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            navigate('/message/request-sent');
                        }}
                        className="flex items-end gap-6 mb-5 max-w-620px max-730:flex-col max-440:mb-6"
                    >
                        <div className='grow max-730:w-full'>
                            <label htmlFor='catalogTelInput' className="inline-block mb-2 text-regular-14 text-primary-gray-70">Telefon raqam</label>
                            <input autoComplete='off' id='catalogTelInput' maxLength={13} name='phone number' placeholder='+998 (99) 999-99-99' required type="tel" className='leading-17.5px!' />
                        </div>
                        <button className="red-btn py-3.5 px-6 text-regular-16 max-730:w-full">To'liq mebel katalogini olish</button>
                    </form>

                    <p className="text-regular-12 max-730:text-center">Saytga ma'lumot yuborish orqali siz <Link to='/policy' className='text-primary-red-50'>Shaxsiy ma'lumotlarni himoya qilish siyosati shartlarini qabul qilasiz</Link></p>
                </div>
            </div>
        </section>
    )
};

export default FurnitureCatalog;