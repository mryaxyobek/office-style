import React, { useState } from 'react';

// swiper
import { Swiper, SwiperSlide } from 'swiper/react';

// Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../css/styles.css';

// modules
import { EffectFade, Navigation, Pagination } from 'swiper/modules';

// btns 
import { products, tabButtonsGroup } from '../assets/data';

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
        <section className='py-60r'>
            <div className="container">
                {/* title  */}
                <h2 className="text-center mb-60r">Eng yaxshi mahsulotlar</h2>

                {/* tab */}
                <div className="flex w-full overflow-x-auto hidden-scroll mb-8">
                    <div className="flex-center bg-primary-gray-04 p-1 relative rounded-lg mx-auto min-w-max">
                        {/* shape  */}
                        <div style={{ left: Position + 'px', width: Width + 'px' }} className={`transition-all duration-300 absolute left-1 top-1 h-10 w-14 rounded-lg bg-primary-gray-70 z-1`}></div>

                        {/* buttons  */}
                        {tabButtonsGroup.map((button) => {
                            return (
                                <button style={{ color: buttonId == button.id ? 'white' : '#4D4D4D' }} key={button.id} onClick={func} className="relative px-4 pt-2.5 pb-3 transition-colors-2 text-regular-14 z-2" id={button.id}>{button.text}</button>
                            )
                        })}
                    </div>
                </div>

                {/* products  */}
                <ul className="flex gap-8 w-full overflow-x-auto pb-60px gray-scroll max-580:gap-6 max-440:gap-4">
                    {products.map((e) => {
                        return (
                            <li key={e.id} className="w-416px product hover:active-hover max-470:w-full max-360:min-w-280px max-360:w-full">
                                <Swiper className="product-img-swiper relative rounded-2.5xl w-full mb-4 h-310px max-470:h-56 max-360:h-175px"
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
                                                                <span className="red-tab">Aksiya</span>
                                                            }
                                                            {
                                                                e.new &&
                                                                <span className="green-tab">yangi</span>
                                                            }
                                                            {
                                                                e.available &&
                                                                <span className="white-tab">mavjud</span>
                                                            }
                                                            {
                                                                e.order &&
                                                                <span className="gray-tab">sotuvda</span>
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
                                    <span>{e.type}</span>
                                    <span>ID:{e.productId}</span>
                                </div>

                                {/* title  */}
                                <h3 className="mb-4 text-regular-20">{e.title}</h3>

                                {/* list  */}
                                <ul className="text-regular-14 text-primary-gray-70 space-y-2.5 mb-4">
                                    <li className="flex items-end">
                                        <span>Davlati</span>
                                        <div className="grow border-t-2 mx-1 mb-0.5 border-primary-gray-70 border-dotted"></div>
                                        <span>{e.country}</span>
                                    </li>
                                    <li className="flex items-end">
                                        <span>Ustki material</span>
                                        <div className="grow border-t-2 mx-1 mb-0.5 border-primary-gray-70 border-dotted"></div>
                                        <span>{e.tableMaterial}</span>
                                    </li>
                                    <li className="flex items-end">
                                        <span>Ustki qalinlik</span>
                                        <div className="grow border-t-2 mx-1 mb-0.5 border-primary-gray-70 border-dotted"></div>
                                        <span>{e.tableThicknessn}</span>
                                    </li>
                                </ul>

                                {/*  */}
                                <div className="flex-c-b max-440:flex-col max-440:items-start max-440:gap-6">
                                    {/* price  */}
                                    <div className="flex items-end">
                                        <span className="inline-block text-regular-16 text-primary-gray-70 mr-1" >narx:</span>
                                        <p className="text-regular-20 mr-3">{e.currentPrice}</p>
                                        {
                                            e.oldPrice && <del className='text-regular-18 text-primary-gray-50'>25 990₽</del>
                                        }
                                    </div>

                                    {/* btn  */}
                                    <button className="red-btn py-2.5 px-5 max-440:w-full bg-primary-red-60">Buyurtma berish</button>
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