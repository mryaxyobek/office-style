import React, { useState } from 'react';
import { productTabButtonsGroup, reviewsData } from '../assets/data';

// img 
import furnitureImg from '../assets/images/other/brown-furniture.jpg';
import { Link } from 'react-router-dom';

const ProductDetails = () => {
    const [Position, setPosition] = useState(4);
    const [Width, setWidth] = useState(144);
    const [buttonId, setButtonId] = useState(1);

    // function for tab 
    const func = (e) => {
        let parentRect = e.target.parentElement.getBoundingClientRect().left;
        let childRect = e.target.getBoundingClientRect().left;
        let childPosition = childRect - parentRect;
        let childWidth = e.target.offsetWidth;

        setPosition(childPosition);
        setWidth(childWidth);
        setButtonId(e.target.id);
    }
    return (
        <section className='py-60px'>
            <div className="container">

                {/* tab  */}
                <div className="flex-center mb-8 bg-primary-gray-04 p-1 relative rounded-lg max-w-max">
                    {/* shape  */}
                    <div style={{ left: Position + 'px', width: Width + 'px' }} className={`transition-all duration-300 absolute left-1 top-1 h-10 w-14 rounded-lg bg-primary-gray-70 z-1`}></div>

                    {/* buttons  */}
                    {productTabButtonsGroup.map((button) => {
                        return (
                            <button style={{ color: buttonId == button.id ? 'white' : '#4D4D4D' }} key={button.id} onClick={func} className="relative px-4 pt-2.5 pb-3 transition-colors-2 text-regular-14 z-2" id={button.id}>{button.text}</button>
                        )
                    })}
                </div>

                {/* details  */}
                {
                    buttonId == 1 &&
                    <ul>
                        <li className="flex py-3 gap-5">
                            <span className="w-72 text-primary-gray-70">Материал</span>
                            <span>ЛДСП</span>
                        </li>
                        <li className="flex py-3 gap-5">
                            <span className="w-72 text-primary-gray-70">Страна производитель</span>
                            <span>Россия</span>
                        </li>
                        <li className="flex py-3 gap-5">
                            <span className="w-72 text-primary-gray-70">Толщина столешницы (см)</span>
                            <span>2,5</span>
                        </li>
                        <li className="flex py-3 gap-5">
                            <span className="w-72 text-primary-gray-70">Цвет</span>
                            <span>Орех артемид/бежевый, дуб выбеленный/бежевый</span>
                        </li>
                        <li className="flex py-3 gap-5">
                            <span className="w-72 text-primary-gray-70">Стиль</span>
                            <span>Современный</span>
                        </li>
                    </ul>
                }
                {
                    buttonId == 2 &&
                    <p className="max-w-5xl">
                        Трансформируемые столы из серии Drive подходят для офисов и коворкинговых пространств, где важна возможность быстро переоборудовать помещение и рабочее место под разные задачи. В коллекции две модели с широким размерным рядом столешниц и каркасов. Цветовые решения серии — шесть древесных текстур и два моноцвета «белый» и «беж» — позволяют подобрать столы под любой интерьер.
                        <br />
                        <br />
                        Трансформируемые столы из серии Drive подходят для офисов и коворкинговых пространств, где важна возможность быстро переоборудовать помещение и рабочее место под разные задачи. В коллекции две модели с широким размерным рядом столешниц и каркасов. Цветовые решения серии — шесть древесных текстур и два моноцвета «белый» и «беж» — позволяют подобрать столы под любой интерьер.
                    </p>
                }
                {
                    buttonId == 3 &&
                    <ul className="grid grid-cols-4 gap-8">
                        <li>
                            <img width={416} height={340} src={furnitureImg} alt="brown color furniture" className="rounded-2.5xl object-cover object-center h-340px" />
                        </li>
                        <li>
                            <img width={416} height={340} src={furnitureImg} alt="brown color furniture" className="rounded-2.5xl object-cover object-center h-340px" />
                        </li>
                        <li>
                            <img width={416} height={340} src={furnitureImg} alt="brown color furniture" className="rounded-2.5xl object-cover object-center h-340px" />
                        </li>
                        <li>
                            <img width={416} height={340} src={furnitureImg} alt="brown color furniture" className="rounded-2.5xl object-cover object-center h-340px" />
                        </li>
                    </ul>
                }
                {
                    buttonId == 4 &&
                    <div className='space-y-8'>
                        <ul className="grid grid-cols-1 gap-8 max-w-1088px">
                            {
                                reviewsData.map((e) => {
                                    return (
                                        <li key={e.id} className='space-y-6 p-8 rounded-2.5xl border border-primary-gray-10'>
                                            {/* about  */}
                                            <div className="space-y-3">
                                                <h3 className='text-regular-18'>{e.userName}</h3>
                                                <div className="flex-center space-x-0.5 mb-3">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 19" fill="none"><path d="M10 0L12.2451 6.90983H19.5106L13.6327 11.1803L15.8779 18.0902L10 13.8197L4.12215 18.0902L6.36729 11.1803L0.489435 6.90983H7.75486L10 0Z" fill={`${e.rating > 0 ? '#FFA800' : '#808080'}`} /></svg>

                                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 19" fill="none"><path d="M10 0L12.2451 6.90983H19.5106L13.6327 11.1803L15.8779 18.0902L10 13.8197L4.12215 18.0902L6.36729 11.1803L0.489435 6.90983H7.75486L10 0Z" fill={`${e.rating > 1 ? '#FFA800' : '#808080'}`} /></svg>

                                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 19" fill="none"><path d="M10 0L12.2451 6.90983H19.5106L13.6327 11.1803L15.8779 18.0902L10 13.8197L4.12215 18.0902L6.36729 11.1803L0.489435 6.90983H7.75486L10 0Z" fill={`${e.rating > 2 ? '#FFA800' : '#808080'}`} /></svg>

                                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 19" fill="none"><path d="M10 0L12.2451 6.90983H19.5106L13.6327 11.1803L15.8779 18.0902L10 13.8197L4.12215 18.0902L6.36729 11.1803L0.489435 6.90983H7.75486L10 0Z" fill={`${e.rating > 3 ? '#FFA800' : '#808080'}`} /></svg>

                                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 19" fill="none"><path d="M10 0L12.2451 6.90983H19.5106L13.6327 11.1803L15.8779 18.0902L10 13.8197L4.12215 18.0902L6.36729 11.1803L0.489435 6.90983H7.75486L10 0Z" fill={`${e.rating > 4 ? '#FFA800' : '#808080'}`} /></svg>
                                                </div>
                                            </div>

                                            {/* commment  */}
                                            <p className="text-primary-gray-70">{e.comment}</p>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                        <Link to="/reviews" className="inline-block red-btn py-3.5 px-4 text-regular-16">Оставить отзыв</Link>
                    </div>
                }
                {
                    buttonId == 5 &&
                    <div>
                        <h3 className="text-regular-20 mb-5">Доставка</h3>
                        <ul className="grid grid-cols-1 gap-6 max-w-745px text-primary-gray-70 mb-8">
                            <li>
                                <h4 className="text-black text-regular-16">Доставка по Краснодару</h4>
                                <p className='text-regular-16'>Цена от 600 рублей, мебель, которая есть в наличии, доставим в течение часа, точное время сообщим при оформлении заказа.</p>
                            </li>
                            <li>
                                <h4 className="text-black text-regular-16">Доставка по Краснодарскому краю</h4>
                                <p className='text-regular-16'>Стоимость и сроки рассчитаем индивидуально, подробности уточняйте у наших специалистов.</p>
                            </li>
                            <li>
                                <h4 className="text-black text-regular-16">Самовывоз в Краснодаре</h4>
                                <p className='text-regular-16'>Вы можете забрать заказ по адресу: Краснодар, ул. Дальняя, 27.
                                    Время работы: в будние дни с 09:00 до 18:00, в субботу с 10:00 до 15:00.</p>
                            </li>
                        </ul>
                        <Link to="#" className="inline-block red-btn py-3.5 px-4 text-regular-16">Рассчитать стоимость доставки</Link>
                    </div>
                }
                {
                    buttonId == 6 &&
                    <div>
                        <h3 className="text-regular-20 mb-5">Оплата</h3>
                        <ul className="grid grid-cols-1 gap-6 max-w-745px text-primary-gray-70">
                            <li>
                                <h4 className="text-black text-regular-16">Банковской картой.</h4>
                                <p className='text-regular-16'>Во время оформления заказа на сайте или при получении, а также в офисе интернет-магазина.</p>
                            </li>
                            <li>
                                <h4 className="text-black text-regular-16">Через интернет-сервисы</h4>
                                <p className='text-regular-16'>Есть возможность оплатить покупки онлайн.</p>
                            </li>
                            <li>
                                <h4 className="text-black text-regular-16">Наличными</h4>
                                <p className='text-regular-16'>При получении товара в своем городе или офисе интернет-магазина.
                                    С НДС или без</p>
                            </li>
                            <li>
                                <p className='text-regular-16'>Выбирайте вариант, который будет удобен вам.</p>
                            </li>
                        </ul>
                    </div>
                }
                {
                    buttonId == 7 &&
                    <div>
                        <h3 className="text-regular-20 mb-5">Сборка</h3>
                        <ul className="grid grid-cols-1 gap-6 max-w-745px text-primary-gray-70">
                            <li>
                                <h4 className="text-black text-regular-16">Стоит от 5 % до 9 % суммы заказа</h4>
                                <p className='text-regular-16'>Цена зависит от серии мебели – менеджер рассчитает точную стоимость при обсуждении деталей.</p>
                            </li>
                            <li>
                                <h4 className="text-black text-regular-16">В Краснодаре и других городах РФ</h4>
                                <p className='text-regular-16'>Сотрудничаем с проверенными сборщиками по всей стране.</p>
                            </li>
                        </ul>
                    </div>
                }
            </div>
        </section>
    )
};

export default ProductDetails;