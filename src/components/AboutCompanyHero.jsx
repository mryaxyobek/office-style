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
                        <h1 className="mb-12 max-900:mb-10 max-440:mb-8">О компании</h1>
                        <div className="space-y-4 text-primary-gray-70">
                            <p className='max-440:text-regular-16'>Компания «Территория офиса» — один из самых крупных производителей и поставщиков офисной мебели в России.</p>
                            <p className='max-440:text-regular-16'>«Территория офиса» предлагает лучший выбор товаров и услуг, высокий профессиональный уровень сервиса, отвечающий всем ожиданиям покупателей.</p>
                            <p className='max-440:text-regular-16'>Победы в российских и международных конкурсах, благодарность клиентов и награды, полученные за коллекции офисной мебели для руководителей и персонала, свидетельствуют о высоком рейтинге компании «Территория офиса» среди российских мебельных компаний.
                                <br /><br />
                                В распоряжении компании собственное производство, оснащённое современным оборудованием, партнёрство с ведущими фабриками Европы и России, складские комплексы в крупных городах России, сеть салонов офисной мебели по всей стране.</p>
                        </div>
                    </div>
                    {/* img  */}
                    <img src={furnitures} alt="office furnitures" width={783} height={470} className="rounded-2.5xl object-cover max-1300:w-556px max-1050:w-full" />
                </div>

                <div className="flex justify-between gap-5 max-1050:flex-col-reverse">
                    {/* img  */}
                    <img src={blackFurnitures} alt="office furnitures" width={752} height={503} className="rounded-2.5xl max-1300:w-556px max-1050:w-full" />
                    {/* text  */}
                    <div className='max-w-935px text-primary-gray-70 space-y-4'>
                        <p className='max-440:text-regular-16'>Продукцию «Территория офиса» можно купить более чем в 300 городах России. В фирменных салонах компании представлен широкий ассортимент (более 50 000 наименований) мебели для офиса: мебель для персонала, офисные стулья, кресла и столы, кабинеты руководителей, сейфы, металлические шкафы и стеллажи.</p>
                        <p className='max-440:text-regular-16'>Кроме того, в магазинах компании можно подобрать аксессуары для офиса: настольные наборы, постеры, светильники, часы, демонстрационные системы.</p>
                        <p className='max-440:text-regular-16'>Оптимальное соотношение цены и качества офисной мебели</p>
                        <p className='max-440:text-regular-16'>Вся производственная цепочка, начиная с разработки дизайн-проекта и заканчивая расстановкой готовой мебели, осуществляется сотрудниками компании «Территория офиса». Это позволяет обеспечивать высокое качество продукции. Отсутствие дополнительных затрат на привлечение сторонних ресурсов делают цену на мебель компании оптимальной.</p>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default AboutCompanyHero;