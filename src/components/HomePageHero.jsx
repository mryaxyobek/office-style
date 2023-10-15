import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../css/styles.css';

// import required modules
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom';

const HomePageHero = () => {
    return (
        <>
            {/* swiper  */}
            <Swiper className="homepage-swiper relative"
                effect={'fade'}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, EffectFade, Pagination, Navigation]}
            >
                {/* 1 */}
                <SwiperSlide className={`bg-cover bg-center bg-no-repeat bg-[url(./assets/images/other/homepage-hero-bg.jpg)]`}></SwiperSlide>

                {/* 2 */}
                <SwiperSlide className={`bg-cover bg-center bg-no-repeat bg-[url(./assets/images/other/homepage-hero-bg5.jpg)]`}></SwiperSlide>

                {/* 3 */}
                <SwiperSlide className={`bg-cover bg-center bg-no-repeat bg-[url(./assets/images/other/homepage-hero-bg2.jpg)]`}></SwiperSlide>

                {/* 4 */}
                <SwiperSlide className={`bg-cover bg-center bg-no-repeat bg-[url(./assets/images/other/homepage-hero-bg3.jpg)]`}></SwiperSlide>

                {/* 5 */}
                <SwiperSlide className={`bg-cover bg-center bg-no-repeat bg-[url(./assets/images/other/homepage-hero-bg4.jpg)]`}></SwiperSlide>

                {/* filter  */}
                <div className="bg-black bg-opacity-40 absolute top-0 left-0 w-full z-0 h-full"></div>

                {/* main content  */}
                <div className="flex justify-between items-start container text-white pt-[447px] z-1 pb-152px">
                    <div className='z-1'>
                        <h1 className="mb-12 max-w-4xl">Офисная мебель <br /> В краснодаре</h1>
                        <Link to='/' className='red-btn-14 text-regular-16'>Заказать дизайн-проект</Link>
                    </div>
                    <ul className="z-1 max-w-[304px] space-y-8 mt-3">
                        <li className="text-white">
                            <h3 className="mb-4 text-bold-24">18 лет</h3>
                            <p className="text-regular-16">обустраиваем офисы от эконом <br />до премиум «под ключ»</p>
                        </li>
                        <li className="text-white">
                            <h3 className="mb-4 text-bold-24">1 час</h3>
                            <p className="text-regular-16">экспресс-доставка товара <br />в наличии</p>
                        </li>
                    </ul>
                </div>
            </Swiper>
        </>
    )
}

export default HomePageHero;