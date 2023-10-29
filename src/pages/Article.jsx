import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// data
import { articles, products } from '../assets/data';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../css/styles.css';

// import required modules
import { EffectFade, Navigation, Pagination } from 'swiper/modules';

// images 
import laptopImg from '../assets/images/other/laptop-background-image.png'

const Article = () => {
    const [phoneNumber, setPhoneNumber] = useState('');

    const handlePhoneNumberChange = (event) => {
        const input = event.target.value;
        const formattedPhoneNumber = input.replace(/(\d{1,2})(\d{3})(\d{3})(\d{3})/, '+7 ($2) $3-$4');
        setPhoneNumber(formattedPhoneNumber);
    };
    return (
        <>
            <section className='pt-20 pb-60px'>
                <div className="container">
                    {/* breadcrumb  */}
                    <ul className="breadcrumb">
                        <li>
                            <Link to={-1}>Статьи</Link>
                        </li>
                        <li>
                            <span>Как обустроить рабочее место: 6 практичных идей</span>
                        </li>
                    </ul>

                    {/* title  */}
                    <h2 className="text-regular-36 mb-14">Как обустроить рабочее место: 6 практичных идей</h2>


                    {/* main content  */}
                    <div className="flex-start justify-between gap-5">
                        {/* first child */}
                        <div className="max-w-1312px w-full">
                            <div className="space-y-6 mb-12">
                                {/* hashtags */}
                                <ul className="flex-center space-x-3">
                                    <li className="text-regular-16 text-primary-gray-70">#Идеи</li>
                                    <li className="text-regular-16 text-primary-gray-70">#Тренды</li>
                                </ul>

                                {/* list  */}
                                <div className="p-6 rounded-2.5xl border border-primary-gray-10 w-full">
                                    <h3 className="text-regular-20 mb-3">В этой статье:</h3>
                                    <ul className="space-y-1 list-disc pl-7">
                                        <li className="text-primary-gray-70">Компактный письменный стол сбоку от окна</li>
                                        <li className="text-primary-gray-70">Рабочий стол вместо подоконника</li>
                                        <li className="text-primary-gray-70">Зонированное рабочее пространство на двоих</li>
                                    </ul>
                                </div>

                                {/* bg img */}
                                <img width={1312} height={513} src={laptopImg} alt="This is a picture of a computer in the office" className="w-full h-513px object-center object-cover rounded-2.5xl" />
                            </div>

                            <div className="space-y-12">
                                <p className="text-regular-16 text-primary-gray-70">
                                    <span className="text-regular-28 text-black">Как его обустроить и что для этого пригодится — показываем на реальных примерах.</span>
                                    <br /><br />
                                    Естественный солнечный свет улучшает настроение, повышает продуктивность и концентрацию внимания, от него не устают глаза. Поэтому рабочую зону для ребенка нужно располагать как можно ближе к окну. Дизайнеры часто проектируют ее вдоль окна. Кроме хорошего освещения такое решение позволит удачно задействовать площадь детской комнаты и поставить письменный стол с длинной столешницей.<br />
                                    Совет: рядом с письменным столом предусмотрите шкаф или стеллаж, куда ребенок будет складывать учебники, канцелярские принадлежности и прочие вещи. Удобнее, если система хранения будет находиться на расстоянии вытянутой руки от рабочего места. При расположении ориентируйтесь на ребенка: для правшей она должна быть с правой стороны, для левшей — с левой.
                                    <br /><br />
                                    Чем старше становится ребенок, тем больше он проводит времени за подготовкой к урокам. Чтобы было проще концентрироваться, не портить осанку и зрение, без удобного рабочего места не обойтись.<br />
                                    Как его обустроить и что для этого пригодится — показываем на реальных примерах.
                                    Большой рабочий стол вдоль окна
                                </p>

                                <div className="flex-c-b rounded-2.5xl py-9 px-60px bg-primary-gray-80">
                                    <h3 className="text-white text-medium-28 max-w-xl">Получите бесплатный дизайн-эскиз вашего будущего кабинета</h3>

                                    {/* form  */}
                                    <form action="https://echo.htmlacademy.ru" className="flex items-end gap-8 max-w-xl w-full">
                                        <div className='grow'>
                                            <label htmlFor='telInput' className="inline-block mb-2 text-regular-14 text-white">Ваш телефон*</label>
                                            <input autoComplete='off' id='telInput' maxLength={16} value={phoneNumber} name='phone number' onChange={handlePhoneNumberChange} placeholder='+7 (999) 999-999' required type="tel" className='leading-17.5px!' />
                                        </div>
                                        <button className="red-btn py-3.5 px-6 text-regular-16">
                                            Получить эскиз
                                        </button>
                                    </form>
                                </div>

                                <p className="text-regular-16 text-primary-gray-70">
                                    Чем старше становится ребенок, тем больше он проводит времени за подготовкой к урокам. Чтобы было проще концентрироваться, не портить осанку и зрение, без удобного рабочего места не обойтись.<br />
                                    Как его обустроить и что для этого пригодится — показываем на реальных примерах.
                                    Большой рабочий стол вдоль окна
                                    <br /><br />
                                    Естественный солнечный свет улучшает настроение, повышает продуктивность и концентрацию внимания, от него не устают глаза. Поэтому рабочую зону для ребенка нужно располагать как можно ближе к окну. Дизайнеры часто проектируют ее вдоль окна. Кроме хорошего освещения такое решение позволит удачно задействовать площадь детской комнаты и поставить письменный стол с длинной столешницей.<br />
                                    Совет: рядом с письменным столом предусмотрите шкаф или стеллаж, куда ребенок будет складывать учебники, канцелярские принадлежности и прочие вещи. Удобнее, если система хранения будет находиться на расстоянии вытянутой руки от рабочего места. При расположении ориентируйтесь на ребенка: для правшей она должна быть с правой стороны, для левшей — с левой.
                                </p>

                                {/* products  */}
                                <ul className="grid grid-cols-3 gap-8">
                                    {products.map((e) => {
                                        return (
                                            e.id < 4 &&
                                            <li key={e.id} className="w-416px product hover:active-hover">
                                                <Swiper className="product-img-swiper relative rounded-lg w-full mb-4 h-310px"
                                                    effect={'fade'}
                                                    slidesPerView={1}
                                                    spaceBetween={30}
                                                    loop={true}
                                                    pagination={{
                                                        clickable: true,
                                                    }}
                                                    navigation={true}
                                                    modules={[EffectFade, Pagination, Navigation]}
                                                >
                                                    {/* swiper images  */}
                                                    {
                                                        e.images.map((img) => {
                                                            return (
                                                                <SwiperSlide key={img.id} className="flex items-center justify-center relative">
                                                                    <img className='absolute brightness-95 img w-full min-h-full object-cover object-center transition-transform-2' width={416} height={310} src={img.img} alt="furniture image" />
                                                                    <div className="absolute tabs-wrapper top-5 right-5 transition-opacity-2">
                                                                        <div className="flex-center space-x-3 ml-auto">
                                                                            {
                                                                                e.aksiya &&
                                                                                <span className="red-tab">Акция</span>
                                                                            }
                                                                            {
                                                                                e.new &&
                                                                                <span className="green-tab">новинка</span>
                                                                            }
                                                                            {
                                                                                e.available &&
                                                                                <span className="white-tab">В наличи</span>
                                                                            }
                                                                            {
                                                                                e.order &&
                                                                                <span className="gray-tab">В наличи</span>
                                                                            }
                                                                        </div>
                                                                    </div>
                                                                </SwiperSlide>
                                                            )
                                                        })
                                                    }
                                                </Swiper>

                                                {/* top  */}
                                                <div className="flex-c-b mb-2 text-regular-14 text-primary-gray-70">
                                                    <span className="">{e.type}</span>
                                                    <span className="">ID:{e.productId}</span>
                                                </div>

                                                {/* title  */}
                                                <h3 className="mb-4 text-regular-20">{e.title}</h3>

                                                {/* list  */}
                                                <ul className="text-regular-14 text-primary-gray-70 space-y-2.5 mb-4">
                                                    <li className="flex items-end">
                                                        <span className="">Страна производитель</span>
                                                        <div className="grow border-t-2 mx-1 mb-0.5 border-primary-gray-70 border-dotted"></div>
                                                        <span className="">{e.country}</span>
                                                    </li>
                                                    <li className="flex items-end">
                                                        <span className="">Материал столешницы</span>
                                                        <div className="grow border-t-2 mx-1 mb-0.5 border-primary-gray-70 border-dotted"></div>
                                                        <span className="">{e.tableMaterial}</span>
                                                    </li>
                                                    <li className="flex items-end">
                                                        <span className="">Толщина столешницы</span>
                                                        <div className="grow border-t-2 mx-1 mb-0.5 border-primary-gray-70 border-dotted"></div>
                                                        <span className="">{e.tableThicknessn}</span>
                                                    </li>
                                                </ul>

                                                {/*  */}
                                                <div className="flex-c-b">
                                                    {/* price  */}
                                                    <div className="flex items-end">
                                                        <span className="inline-block text-regular-16 text-primary-gray-70 mr-1" >от</span>
                                                        <p className="text-regular-20 mr-3">{e.currentPrice}</p>
                                                        {
                                                            e.oldPrice && <del className='text-regular-18 text-primary-gray-50'>25 990₽</del>
                                                        }
                                                    </div>

                                                    {/* btn  */}
                                                    <button className="red-btn py-2.5 px-5">Заказать в 1 клик</button>
                                                </div>
                                            </li>
                                        )
                                    })}
                                </ul>

                                <p className="text-regular-16 text-primary-gray-70">
                                    Чем старше становится ребенок, тем больше он проводит времени за подготовкой к урокам. Чтобы было проще концентрироваться, не портить осанку и зрение, без удобного рабочего места не обойтись.<br />
                                    Как его обустроить и что для этого пригодится — показываем на реальных примерах.<br />
                                    Большой рабочий стол вдоль окна
                                    <br /><br />
                                    Естественный солнечный свет улучшает настроение, повышает продуктивность и концентрацию внимания, от него не устают глаза. Поэтому рабочую зону для ребенка нужно располагать как можно ближе к окну. Дизайнеры часто проектируют ее вдоль окна. Кроме хорошего освещения такое решение позволит удачно задействовать площадь детской комнаты и поставить письменный стол с длинной столешницей.<br />
                                    Совет: рядом с письменным столом предусмотрите шкаф или стеллаж, куда ребенок будет складывать учебники, канцелярские принадлежности и прочие вещи. Удобнее, если система хранения будет находиться на расстоянии вытянутой руки от рабочего места. При расположении ориентируйтесь на ребенка: для правшей она должна быть с правой стороны, для левшей — с левой.
                                </p>
                            </div>
                        </div>

                        {/* last child */}
                        <ul className="grid grid-cols-1 gap-10 max-w-336px pt-11">
                            {
                                articles.map((e) => {
                                    if (e.id <= 4) {
                                        return (
                                            <li key={e.id}>
                                                <Link to='article-name' rel='noopener'>
                                                    <img width={416} height={210} src={e.img} alt={e.imgName} className="w-416px h-210px object-cover object-center mb-6 rounded-2.5xl" />
                                                    <div className="space-y-3">
                                                        <span className="text-regular-14 text-primary-gray-70">{e.date}</span>
                                                        <p className="text-regular-20 text-primary-gray-90">{e.description}</p>
                                                        <div className="flex flex-wrap gap-3">
                                                            {
                                                                e.hashtags.map((hashtag) => {
                                                                    return (
                                                                        <span key={hashtag} className="text-regular-14 text-primary-gray-70">{hashtag}</span>
                                                                    )
                                                                })
                                                            }
                                                        </div>
                                                    </div></Link>
                                            </li>
                                        )
                                    }
                                })
                            }
                        </ul>
                    </div>
                </div>
            </section>

            <section className="py-60px">
                <div className="container">
                    <h2 className="mb-60px">Вам будет интересно</h2>
                    <ul className="grid grid-cols-4 gap-8">
                        {
                            articles.map((e) => {
                                if (e.id > 4 && e.id <= 8) {
                                    return (
                                        <li key={e.id}>
                                            <Link to='article-name' rel='noopener'>
                                                <img width={416} height={260} src={e.img} alt={e.imgName} className="w-416px h-260px object-cover object-center mb-6 rounded-2.5xl" />
                                                <div className="space-y-3">
                                                    <span className="text-regular-14 text-primary-gray-70">{e.date}</span>
                                                    <p className="text-regular-20 text-primary-gray-90">{e.description}</p>
                                                    <div className="flex flex-wrap gap-3">
                                                        {
                                                            e.hashtags.map((hashtag) => {
                                                                return (
                                                                    <span key={hashtag} className="text-regular-14 text-primary-gray-70">{hashtag}</span>
                                                                )
                                                            })
                                                        }
                                                    </div>
                                                </div></Link>
                                        </li>
                                    )
                                }
                            })
                        }
                    </ul>
                </div>
            </section>
        </>
    )
};

export default Article;