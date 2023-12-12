import React from 'react';
import furnitures from '../assets/images/other/messy-office.png';
import blackFurnitures from '../assets/images/other/black-furnitures.png';

const AboutCompanyHero = () => {
    return (
        <div className='pt-36r pb-60r'>
            <div className="container">
                <div className="flex justify-between gap-5 mb-14 max-900:mb-10 max-440:mb-8 max-1050:flex-col">
                    {/* text  */}
                    <div className='max-w-864px'>
                        <h1 className="mb-12 max-900:mb-10 max-440:mb-8">Kompaniya haqida</h1>
                        <div className="space-y-4 text-primary-gray-70">
                            <p className='max-440:text-regular-16'>"Ofis Mebellari" - O'zbekistondagi eng yirik ofis mebellarini ishlab chiqaruvchi va yetkazib beruvchilardan biri hisoblanadi.</p>
                            <p className='max-440:text-regular-16'>"Ofis Mebellari" tovar va xizmatlarning eng yaxshi tanlovini, mijozlarning barcha talablariga javob beradigan yuqori professional xizmat ko'rsatish darajasini taklif etadi.</p>
                            <p className='max-440:text-regular-16'>O'zbekiston va xalqaro tanlovlardagi g'alabalar, mijozlarning minnatdorchiligi va menejerlar va xodimlar uchun ofis mebellari kolleksiyalari uchun olingan mukofotlar O'zbekiston mebel kompaniyalari orasida Office furnitures kompaniyasining yuqori reytingini ko'rsatadi.<br /><br />
                            </p>
                        </div>
                    </div>
                    {/* img  */}
                    <img src={furnitures} alt="ofis Mebellari" width={783} height={470} className="rounded-2.5xl object-cover max-1300:w-556px max-1050:w-full bg-primary-gray-30" />
                </div>

                <div className="flex justify-between gap-5 max-1050:flex-col-reverse">
                    {/* img  */}
                    <img src={blackFurnitures} alt="ofis Mebellari" width={752} height={503} className="rounded-2.5xl max-1300:w-556px max-1050:w-full bg-primary-gray-20" />
                    {/* text  */}
                    <div className='max-w-935px text-primary-gray-70 space-y-4'>
                        <p className='max-440:text-regular-16'>Office furnitures mahsulotlarini O'zbekistonning 300 dan ortiq shaharlarida sotib olish mumkin. Kompaniyaning brend ko'rgazma zallarida keng assortimentdagi (50 000 dan ortiq turdagi) ofis mebellari taklif etiladi: xodimlar uchun mebellar, ofis stullari, kreslolar va stollar, boshqaruv idoralari, seyflar, metall shkaflar va javonlar.</p>
                        <p className='max-440:text-regular-16'>Bundan tashqari, kompaniyaning do'konlarida siz ofis uchun aksessuarlarni tanlashingiz mumkin: stol to'plamlari, plakatlar, lampalar, soatlar, namoyish tizimlari.</p>
                        <p className='max-440:text-regular-16'>Ofis mebellarining optimal narx-sifat nisbati</p>
                        <p className='max-440:text-regular-16'>Dizayn loyihasini ishlab chiqishdan boshlab va tayyor mebelni tartibga solishgacha bo'lgan barcha ishlab chiqarish zanjiri Office furnitures kompaniyasining xodimlari tomonidan amalga oshiriladi. Bu bizga yuqori sifatli mahsulotlarni ta'minlash imkonini beradi. Uchinchi tomon resurslarini jalb qilish uchun qo'shimcha xarajatlarning yo'qligi kompaniya mebellarining narxini maqbul qiladi.</p>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default AboutCompanyHero;