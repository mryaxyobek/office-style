import React, { useState } from 'react';
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

// btns 
import { newProducts, tabButtonsGroup } from '../assets/data';

const HomePageNewProducts = () => {
    const [Position, setPosition] = useState(4);
    const [Width, setWidth] = useState(57);
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
        <section className='pt-100px pb-60px'>
            <div className="container">
                {/* title  */}
                <h2 className="text-center mb-60px">Новинки каталога</h2>

                {/* tab */}
                <div className="flex-center mb-8 bg-primary-gray-04 p-1 relative rounded-lg mx-auto max-w-max">
                    {/* shape  */}
                    <div style={{ left: Position + 'px', width: Width + 'px' }} className={`transition-all duration-300 absolute left-1 top-1 h-10 w-14 rounded-lg bg-primary-gray-70 z-1`}></div>

                    {/* buttons  */}
                    {tabButtonsGroup.map((button) => {
                        return (
                            <button style={{ color: buttonId == button.id ? 'white' : '#4D4D4D' }} key={button.id} onClick={func} className="relative px-4 pt-2.5 pb-3 transition-colors-2 text-regular-14 z-2" id={button.id}>{button.text}</button>
                        )
                    })}
                </div>

                {/* products  */}
                <ul className="flex gap-8 w-full overflow-auto pb-60px gray-scroll">
                    {newProducts.map((e) => {
                        return (
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
            </div>
        </section>
    )
}

export default HomePageNewProducts;