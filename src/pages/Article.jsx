import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

// data
import { articles } from '../assets/data';
// images 
import laptopImg from '../assets/images/other/laptop-background-image.png'

const Article = () => {
    const [phoneNumber, setPhoneNumber] = useState('');

    const handlePhoneNumberChange = (event) => {
        const input = event.target.value;
        const formattedPhoneNumber = input.replace(/(\d{1,2})(\d{3})(\d{3})(\d{3})/, '+7 ($2) $3-$4');
        setPhoneNumber(formattedPhoneNumber);
    };
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <>
            <section className='pt-20 max-1300:pt-16 max-1050:pt-10 max-900:pt-8 pb-60r max-730:pt-6 max-540:pt-4 max-440:pt-0'>
                <div className="container max-470:px-0">
                    {/* breadcrumb  */}
                    <ul className="breadcrumb flex-wrap gap-1 max-470:px-5">
                        <li>
                            <Link to={-1}>Статьи</Link>
                        </li>
                        <li>
                            <span>Как обустроить рабочее место: 6 практичных идей</span>
                        </li>
                    </ul>

                    {/* title  */}
                    <h2 className="text-regular-36 mb-14 max-1150:mb-12 max-900:mb-10 max-900:text-regular-32 max-730:mb-9 max-440:mb-8 max-440:text-medium-28 max-470:px-5">Как обустроить рабочее место: 6 практичных идей</h2>


                    {/* main content  */}
                    <div className="flex-start justify-between gap-5">
                        {/* first child */}
                        <div className="max-w-1312px w-full">
                            <div className="space-y-6 mb-12 max-470:px-5">
                                {/* hashtags */}
                                <ul className="flex-center space-x-3">
                                    <li className="text-regular-16 text-primary-gray-70">#Идеи</li>
                                    <li className="text-regular-16 text-primary-gray-70">#Тренды</li>
                                </ul>

                                {/* list  */}
                                <div className="p-6 rounded-2.5xl border border-primary-gray-10 w-full max-900:p-5 max-470:p-4">
                                    <h3 className="text-regular-20 mb-3">В этой статье:</h3>
                                    <ul className="space-y-1 list-disc pl-6">
                                        <li className="text-primary-gray-70">Компактный письменный стол сбоку от окна</li>
                                        <li className="text-primary-gray-70">Рабочий стол вместо подоконника</li>
                                        <li className="text-primary-gray-70">Зонированное рабочее пространство на двоих</li>
                                    </ul>
                                </div>

                                {/* bg img */}
                                <img width={1312} height={513} src={laptopImg} alt="This is a picture of a computer in the office" className="w-full h-513px object-center object-cover rounded-2.5xl max-640:h-80 max-640:rounded-2xl max-540:h-64 max-540:rounded-lg max-470:h-40 max-470:rounded-md max-440:h-32 max-440:rounded" />
                            </div>

                            <div className="space-y-12">
                                <p className="text-regular-16 text-primary-gray-70 max-470:px-5">
                                    <span className="text-regular-28 text-black max-900:text-regular-26 max-730:text-regular-24 max-440:text-regular-20">Как его обустроить и что для этого пригодится — показываем на реальных примерах.</span>
                                    <br /><br />
                                    Естественный солнечный свет улучшает настроение, повышает продуктивность и концентрацию внимания, от него не устают глаза. Поэтому рабочую зону для ребенка нужно располагать как можно ближе к окну. Дизайнеры часто проектируют ее вдоль окна. Кроме хорошего освещения такое решение позволит удачно задействовать площадь детской комнаты и поставить письменный стол с длинной столешницей.<br />
                                    Совет: рядом с письменным столом предусмотрите шкаф или стеллаж, куда ребенок будет складывать учебники, канцелярские принадлежности и прочие вещи. Удобнее, если система хранения будет находиться на расстоянии вытянутой руки от рабочего места. При расположении ориентируйтесь на ребенка: для правшей она должна быть с правой стороны, для левшей — с левой.
                                    <br /><br />
                                    Чем старше становится ребенок, тем больше он проводит времени за подготовкой к урокам. Чтобы было проще концентрироваться, не портить осанку и зрение, без удобного рабочего места не обойтись.<br />
                                    Как его обустроить и что для этого пригодится — показываем на реальных примерах.
                                    Большой рабочий стол вдоль окна
                                </p>

                                <div className="flex-c-b rounded-2.5xl py-9 px-60px bg-primary-gray-80 max-1450:flex-col gap-5 max-640:py-5 max-640:px-8 max-580:py-8 max-580:px-5">
                                    <h3 className="text-white text-medium-28 max-w-xl max-1450:text-center max-900:text-medium-24 max-440:text-medium-20">Получите бесплатный дизайн-эскиз вашего будущего кабинета</h3>

                                    {/* form  */}
                                    <form action="https://echo.htmlacademy.ru" className="flex items-end gap-8 max-w-xl w-full max-580:flex-col max-440:gap-6">
                                        <div className='grow max-580:w-full'>
                                            <label htmlFor='telInput' className="inline-block mb-2 text-regular-14 text-white">Ваш телефон*</label>
                                            <input autoComplete='off' id='telInput' maxLength={16} value={phoneNumber} name='phone number' onChange={handlePhoneNumberChange} placeholder='+7 (999) 999-999' required type="tel" className='leading-17.5px!' />
                                        </div>
                                        <button className="red-btn py-3.5 px-6 text-regular-16 min-w-max max-580:w-full">
                                            Получить эскиз
                                        </button>
                                    </form>
                                </div>

                                <p className="text-regular-16 text-primary-gray-70 max-470:px-5">
                                    Чем старше становится ребенок, тем больше он проводит времени за подготовкой к урокам. Чтобы было проще концентрироваться, не портить осанку и зрение, без удобного рабочего места не обойтись.<br />
                                    Как его обустроить и что для этого пригодится — показываем на реальных примерах.
                                    Большой рабочий стол вдоль окна
                                    <br /><br />
                                    Естественный солнечный свет улучшает настроение, повышает продуктивность и концентрацию внимания, от него не устают глаза. Поэтому рабочую зону для ребенка нужно располагать как можно ближе к окну. Дизайнеры часто проектируют ее вдоль окна. Кроме хорошего освещения такое решение позволит удачно задействовать площадь детской комнаты и поставить письменный стол с длинной столешницей.<br />
                                    Совет: рядом с письменным столом предусмотрите шкаф или стеллаж, куда ребенок будет складывать учебники, канцелярские принадлежности и прочие вещи. Удобнее, если система хранения будет находиться на расстоянии вытянутой руки от рабочего места. При расположении ориентируйтесь на ребенка: для правшей она должна быть с правой стороны, для левшей — с левой.
                                </p>

                                <p className="text-regular-16 text-primary-gray-70 max-470:px-5">
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
                        <ul className="grid grid-cols-1 gap-10 max-w-336px pt-11 max-1050:hidden">
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

            <section className="py-60r">
                <div className="container">
                    <h2 className="mb-60r">Вам будет интересно</h2>
                    <ul className="flex gap-8 w-full overflow-x-auto gray-scroll max-1800:pb-60r">
                        {
                            articles.map((e) => {
                                if (e.id <= 4) {
                                    return (
                                        <li key={e.id} className='min-w-416px max-470:min-w-300px'>
                                            <img width={416} height={260} src={e.img} alt={e.imgName} className="w-416px h-260px object-cover object-center mb-6 rounded-2.5xl max-470:w-300px max-470:h-52 max-360:h-175px" />
                                            <div className="space-y-3">
                                                <span className="text-regular-14 text-primary-gray-70">{e.date}</span>
                                                <p className="text-regular-20 text-primary-gray-90 max-470:text-medium-20">{e.description}</p>
                                                <div className="flex flex-wrap gap-3">
                                                    {
                                                        e.hashtags.map((hashtag) => {
                                                            return (
                                                                <span key={hashtag} className="text-regular-14 text-primary-gray-70">{hashtag}</span>
                                                            )
                                                        })
                                                    }
                                                </div>
                                            </div>
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