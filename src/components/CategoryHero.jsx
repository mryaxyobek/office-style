import React from 'react';
import { Link, useParams } from 'react-router-dom';

const CategoryHero = () => {
    const { categoryName } = useParams();
    return (
        <div className='pt-20 pb-60r container max-900:pt-8 max-540:px-0 max-540:pt-0 relative'>
            {/* breadcrumb  */}
            <ul className="breadcrumb max-540:absolute top-0 z-2 max-540:left-5 max-540:pb-0">
                <li>
                    <Link className='max-540:text-primary-gray-10' to='/catalog'>Katalog</Link>
                </li>
                <li>
                    <span className='max-540:text-primary-gray-10'>
                        {
                            categoryName == 'cabinet-for-managers' &&
                            <>Boshqaruvchilar uchun kabinet</>
                        }
                        {
                            categoryName == 'furniture-for-staff' &&
                            <>Xodimlar uchun mebel</>
                        }
                        {
                            categoryName == 'office-chairs' &&
                            <>Ofis kreslolari</>
                        }
                        {
                            categoryName == 'office-sofas' &&
                            <>Ofis divanlari</>
                        }
                        {
                            categoryName == 'reception-desks' &&
                            <>Qabul qilish stollari</>
                        }
                        {
                            categoryName == 'meeting-tables' &&
                            <>Uchrashuvlar stollari</>
                        }
                        {
                            categoryName == 'office-partitions' &&
                            <>Ofis bo'limlari</>
                        }
                        {
                            categoryName == 'multi-person-sections' &&
                            <>Ko'p kishilik bo'limlar</>
                        }
                        {
                            categoryName == 'office-desks' &&
                            <>Ofis stollari</>
                        }
                        {
                            categoryName == 'office-cabinets' &&
                            <>Ofis shkaflari</>
                        }

                        {/* other  */}
                        {
                            categoryName != 'cabinet-for-managers' &&
                            categoryName != 'furniture-for-staff' &&
                            categoryName != 'office-chairs' &&
                            categoryName != 'office-sofas' &&
                            categoryName != 'reception-desks' &&
                            categoryName != 'meeting-tables' &&
                            categoryName != 'office-partitions' &&
                            categoryName != 'multi-person-sections' &&
                            categoryName != 'office-desks' &&
                            categoryName != 'office-cabinets' &&
                            <span>Sahifa topilmadi</span>
                        }
                    </span>
                </li>
            </ul>

            {/* main content  */}
            <div className="flex justify-between gap-5 relative rounded-2.5xl py-14 px-60px bg-category-hero bg-cover bg-center bg-no-repeat overflow-hidden max-1200:flex-col max-1200:gap-8 max-730:p-10 max-730:!px-8 max-540:!p-0 max-540:!pt-16">
                {/* first child */}
                <div className="flex flex-col max-w-687px z-1 place-content-between max-1200:mx-auto max-540:px-5">
                    <div>
                        <h1 className="h1-bold text-white mb-8 max-1200:text-center max-540:text-left max-670:mb-7  max-540:mb-5 max-440:mb-4">
                            {
                                categoryName == 'cabinet-for-managers' &&
                                <>Boshqaruvchilar uchun kabinet</>
                            }
                            {
                                categoryName == 'furniture-for-staff' &&
                                <>Xodimlar uchun mebel</>
                            }
                            {
                                categoryName == 'office-chairs' &&
                                <>Ofis uchun kreslolar</>
                            }
                            {
                                categoryName == 'office-sofas' &&
                                <>Ofis uchun divanlar</>
                            }
                            {
                                categoryName == 'reception-desks' &&
                                <>Qabul qilish stollari</>
                            }
                            {
                                categoryName == 'meeting-tables' &&
                                <>Uchrashuvlar uchun stollar</>
                            }
                            {
                                categoryName == 'office-partitions' &&
                                <>Offis bo'limlari</>
                            }
                            {
                                categoryName == 'multi-person-sections' &&
                                <>Ko'p kishilik bo'limlar</>
                            }
                            {
                                categoryName == 'office-desks' &&
                                <>Ofis uchun stollar</>
                            }
                            {
                                categoryName == 'office-cabinets' &&
                                <>Ofis uchun shkaflar</>
                            }

                            {/* other  */}
                            {
                                categoryName != 'cabinet-for-managers' &&
                                categoryName != 'furniture-for-staff' &&
                                categoryName != 'office-chairs' &&
                                categoryName != 'office-sofas' &&
                                categoryName != 'reception-desks' &&
                                categoryName != 'meeting-tables' &&
                                categoryName != 'office-partitions' &&
                                categoryName != 'multi-person-sections' &&
                                categoryName != 'office-desks' &&
                                categoryName != 'office-cabinets' &&
                                <span>
                                    <span className='text-yellow-200'>Siz noto'g'ri bo'limga kirib qoldingiz :(</span> <br />
                                    <Link to='/' className='text-medium-20'>Bosh sahifaga qaytish</Link>
                                </span>
                            }
                        </h1>
                        <p className="text-regular-20 text-primary-gray-10 max-1200:text-center max-540:text-left max-730:text-regular-18 max-440:text-regular-16">So'rov qoldiring, biz nafaqat sizning o'lchamingiz va talablaringizga mos mebel tanlaymiz, balki kelajakdagi ofisingizning bepul dizayn eskizini ham yaratamiz.</p>
                    </div>

                    <div className="flex space-x-12 max-1200:justify-between max-1200:mt-8 max-540:flex-col max-540:space-x-0 max-540:gap-6">
                        <div className="space-y-3 max-w-245px max-540:max-w-full">
                            <h3 className="text-medium-20 text-white">Buyurtma</h3>
                            <p className="text-medium-18 max-540:text-regular-18 text-primary-gray-10">Zaxiradagi tovarlarni 1 soat ichida tezkor yetkazib berish</p>
                        </div>
                        <div className="space-y-3 max-w-305px max-540:max-w-full">
                            <h3 className="text-medium-20 text-white">To'lov</h3>
                            <p className="text-medium-18 max-540:text-regular-18 text-primary-gray-10">Naqd pul, karta, onlayn, bank o'tkazmasi (QQS bilan, QQSsiz)</p>
                        </div>
                    </div>
                </div>

                {/* form */}
                <form action="https://echo.htmlacademy.ru" className="bg-white rounded-2.5xl py-10 px-9 max-w-528px z-1 w-full min-w-500px max-1200:mx-auto max-730:max-w-full max-730:min-w-0">
                    {/* title  */}
                    <h3 className="text-center max-w-md mx-auto text-regular-24 mb-8">So'rov qoldiring va biz sizga menejerning ofisiga qaysi mebel mos kelishini aytib beramiz</h3>

                    {/* main  */}
                    <div className="space-y-5">
                        <div>
                            <label htmlFor='categoryNameInput' className="inline-block mb-2 text-regular-14 text-primary-gray-70">Ismingiz*</label>
                            <input autoComplete='off' id='categoryNameInput' name='user name' placeholder='ismingizni kiriting' required type="text" className='leading-17.5px!' />
                        </div>
                        <div>
                            <label htmlFor='categoryTelInput' className="inline-block mb-2 text-regular-14 text-primary-gray-70">Telefon raqamingiz*</label>
                            <input autoComplete='off' id='categoryTelInput' maxLength={13} name='phone number' placeholder='+998 (99) 999-99-99' required type="text" className='leading-17.5px!' />
                        </div>
                        <button className="red-btn w-full text-regular-16 py-3.5">Maslahat olish</button>
                        <p className="text-regular-12 text-primary-gray-70 text-center">*Saytga ma'lumot yuborish orqali siz <Link className="text-primary-red-50">Shaxsiy ma'lumotlarni himoya qilish siyosati shartlarini qabul qilasiz</Link></p>
                    </div>
                </form>

                {/* filter  */}
                <div className="absolute w-full h-full z-0 bg-black bg-opacity-50 top-0 right-0">
                </div>
            </div>
        </div >
    )
};

export default CategoryHero;