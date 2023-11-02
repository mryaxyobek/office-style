import React, { useState } from 'react';

const AboutCompany = () => {
    const [toggleShowText, setToggleShowText] = useState(false);

    const toogleShowTextFunc = () => {
        setToggleShowText(!toggleShowText);
    };

    return (
        <section className="py-60r">
            <div className="container">
                <div className="border border-primary-gray-20 rounded-2.5xl p-10 max-730:p-8 max-640:p-7 max-470:p-5">
                    <h2 className="mb-7 text-normal">Ofis mebellari</h2>
                    <div className={`${toggleShowText ? 'max-h-max pb-10' : 'max-h-223px'} grid grid-cols-2 gap-8 relative overflow-hidden max-580:grid-cols-1`}>
                        <p className="text-regular-16 text-primary-gray-60">Sizning e'tiboringizga zamonaviy, ergonomik va ayni paytda maksimal darajada funktsional ofis interyerlarini yaratish uchun kerak bo'lgan barcha narsalarni o'z ichiga olgan narxlari bilan ofis mebellari katalogini taqdim etamiz.<br /> Bizning yordamimiz bilan siz har qanday ofisni, qanchalik katta bo'lmasin, bemalol jihozlashingiz, menejerlar va xodimlar uchun qulay ish sharoitlarini yaratishingiz mumkin. Biz taklif qilayotgan mebel mahsulotlarining narxlari diapazoni keng – bizda Rossiyada ishlab chiqarilgan arzon ofis mebellari ham, Italiya, Ispaniya, Germaniya, AQSh va Xitoyning hashamatli modellari ham bor.
                            <br /><br />
                            Sizning e'tiboringizga zamonaviy, ergonomik va ayni paytda maksimal darajada funktsional ofis interyerlarini yaratish uchun kerak bo'lgan barcha narsalarni o'z ichiga olgan narxlari bilan ofis mebellari katalogini taqdim etamiz.
                            <br /><br />
                            Bizning yordamimiz bilan siz har qanday ofisni, qanchalik katta bo'lmasin, bemalol jihozlashingiz, menejerlar va xodimlar uchun qulay ish sharoitlarini yaratishingiz mumkin. Biz taklif qilayotgan mebel mahsulotlarining narxlari diapazoni keng – bizda Rossiyada ishlab chiqarilgan arzon ofis mebellari ham, Italiya, Ispaniya, Germaniya, AQSh va Xitoyning hashamatli modellari ham bor.
                            <br /><br />
                            Sizning e'tiboringizga zamonaviy, ergonomik va ayni paytda maksimal darajada funktsional ofis interyerlarini yaratish uchun kerak bo'lgan barcha narsalarni o'z ichiga olgan narxlari bilan ofis mebellari katalogini taqdim etamiz.</p>
                        <p className="text-regular-16 text-primary-gray-60">Bizning yordamimiz bilan siz har qanday ofisni, qanchalik katta bo'lmasin, bemalol jihozlashingiz, menejerlar va xodimlar uchun qulay ish sharoitlarini yaratishingiz mumkin. Biz taklif qilayotgan mebel mahsulotlarining narxlari diapazoni keng – bizda Rossiyada ishlab chiqarilgan arzon ofis mebellari ham, Italiya, Ispaniya, Germaniya, AQSh va Xitoyning hashamatli modellari ham bor.
                            <br /><br />
                            Sizning e'tiboringizga zamonaviy, ergonomik va ayni paytda maksimal darajada funktsional ofis interyerlarini yaratish uchun kerak bo'lgan barcha narsalarni o'z ichiga olgan narxlari bilan ofis mebellari katalogini taqdim etamiz.
                            <br /><br />
                            Bizning yordamimiz bilan siz har qanday ofisni, qanchalik katta bo'lmasin, bemalol jihozlashingiz, menejerlar va xodimlar uchun qulay ish sharoitlarini yaratishingiz mumkin. Biz taklif qilayotgan mebel mahsulotlarining narxlari diapazoni keng – bizda Rossiyada ishlab chiqarilgan arzon ofis mebellari ham, Italiya, Ispaniya, Germaniya, AQSh va Xitoyning hashamatli modellari ham bor.
                            <br /><br />
                            Sizning e'tiboringizga zamonaviy, ergonomik va ayni paytda maksimal darajada funktsional ofis interyerlarini yaratish uchun kerak bo'lgan barcha narsalarni o'z ichiga olgan narxlari bilan ofis mebellari katalogini taqdim etamiz.
                        </p>

                        {/* filter  */}
                        <div className={`${toggleShowText ? 'hidden' : 'block'} absolute w-full h-36 bottom-0 left-0 bg-whiteLinear transition-opacity-2`}></div>

                        {/* toggle btn  */}
                        <button onClick={toogleShowTextFunc} className={`${toggleShowText ? 'bottom-0' : 'bottom-0'} absolute text-regular-16 left-0 text-primary-red-60`}>
                            <span className={`${toggleShowText ? 'inline-block' : 'hidden'}`}>Yopish</span>
                            <span className={`${toggleShowText ? 'hidden' : 'inline-block'}`}>Matnni kengaytirish</span>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default AboutCompany;