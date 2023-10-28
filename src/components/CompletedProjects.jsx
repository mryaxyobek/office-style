import React from 'react';
import { completedProjectsData } from '../assets/data';
import { Link } from 'react-router-dom';

// swiper 
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

const CompletedProjects = () => {
    return (
        <div className="pt-36 pb-120px">
            <div className="container">
                <h1 className="mb-60px">Выполненные проекты</h1>
                <ul className="grid grid-cols-1 gap-60px completed-products-list">
                    {
                        completedProjectsData.map((e) => {
                            return (
                                <li key={e.id} className='grid grid-cols-2 gap-8 p-6 bg-primary-gray-04 rounded-2.5xl'>

                                    {/* first child  */}
                                    <div className='flex flex-col items-start'>
                                        {/* title  */}
                                        <h3 className="text-regular-36 mb-9">{e.title}</h3>

                                        {/* table  */}
                                        <table className="w-full mb-9">
                                            <tbody>
                                                {
                                                    e.details.map((detail) => {
                                                        return (
                                                            <tr key={detail.id} className="inline-block w-full first:border-t py-2 border-b border-primary-gray-20">
                                                                <td className="flex-c-b">
                                                                    <div className='flex-center space-x-0.5'>
                                                                        <span className="flex-center justify-center w-7 h-7 text-primary-gray-70">{detail.id}</span>
                                                                        <p className="text-gray-700 text-regular-16">{detail.text}</p>
                                                                    </div>
                                                                    <span className='text-gray-700 text-regular-16'>{detail.price}₽</span>
                                                                </td>
                                                            </tr>
                                                        )
                                                    })
                                                }
                                            </tbody>
                                        </table>

                                        {/* total price  */}
                                        <div className="flex-e-b mb-auto w-full">
                                            <p className="text-regular-16">Цена за комплект:</p>
                                            <p className="text-regular-24">11 690₽</p>
                                        </div>

                                        <Link to='#' className='red-btn py-3.5 px-6 text-regular-16'>Хочу такой же</Link>
                                    </div>

                                    {/* last child  */}
                                    <div>
                                        <Swiper className="completed-projects-swiper rounded-2.5xl h-550px"
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
                                                            <img src={img.img} alt="furniture image" className="w-full h-full object-cover object-center" />
                                                        </SwiperSlide>
                                                    )
                                                })
                                            }
                                        </Swiper>
                                    </div>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    )
};

export default CompletedProjects;