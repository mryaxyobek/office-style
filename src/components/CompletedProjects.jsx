import React from 'react';
import { completedProjects } from '../assets/data';

// swiper 
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../css/styles.css';
// import required modules
import { EffectFade, Navigation, Pagination } from 'swiper/modules';
import { useDispatch } from 'react-redux';
import { addCard } from '../store/slices/productBasketslice';

const CompletedProjects = () => {
    const dispatch = useDispatch();
    const addToCart = (product) => {
        dispatch(addCard(product));
    };
    return (
        <div className="pt-36r pb-120px max-900:pb-24 max-440:pb-16">
            <div className="container">
                <h1 className="mb-60r">Tugallangan loyihalar</h1>
                <ul className="grid grid-cols-1 gap-60px completed-products-list max-1200:gap-14 max-1050:gap-12 max-900:gap-10 max-440:gap-8">
                    {
                        completedProjects.map((product) => {
                            return (
                                <li key={product.id} className='grid grid-cols-2 gap-8 p-6 bg-primary-gray-04 rounded-2.5xl max-640:p-0'>

                                    {/* first child  */}
                                    <div className='flex flex-col items-start max-640:p-6 max-640:!pt-0 max-540:p-5 max-440:p-4'>
                                        {/* title  */}
                                        <h3 className="text-regular-36 mb-9 max-900:text-regular-32 max-900:mb-8 max-640:mb-7 max-640:text-regular-28 max-440:text-regular-24 max-440:mb-6 max-360:text-regular-20">{product.productTitle}</h3>

                                        {/* table  */}
                                        <table className="w-full mb-9 max-900:mb-8 max-640:mb-7 max-440:mb-6">
                                            <tbody>
                                                {
                                                    product.parts.map((detail) => {
                                                        return (
                                                            <tr key={detail.id} className="inline-block w-full first:border-t py-2 border-b border-primary-gray-20">
                                                                <td className="flex-c-b gap-5">
                                                                    <div className='flex-center space-x-0.5 max-440:space-x-2'>
                                                                        <span className="flex-center justify-center w-7 h-7 text-primary-gray-70 max-640:w-5 max-440:w-2.5">{detail.id}</span>
                                                                        <p className="text-gray-700 text-regular-16">{detail.type}</p>
                                                                    </div>

                                                                    {/* price  */}
                                                                    <span className='text-gray-700 text-regular-16 min-w-max'>{detail.currentPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}so'm</span>
                                                                </td>
                                                            </tr>
                                                        )
                                                    })
                                                }
                                            </tbody>
                                        </table>

                                        {/* total price  */}
                                        <div className="flex-e-b mb-auto w-full max-1050:mb-8 max-640:mb-7 max-440:mb-6">
                                            <p className="text-regular-16">Umumiy narx:</p>
                                            <p className="text-regular-24">{
                                                (() => {
                                                    // calculating total price
                                                    let totalPrice = 0;
                                                    product.parts.forEach((price) => totalPrice += price.currentPrice);
                                                    return totalPrice;
                                                })().toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
                                            }so'm</p>
                                        </div>

                                        <button onClick={() => addToCart(product)} className='flex justify-center red-btn py-3.5 px-6 text-regular-16 max-470:w-full'>Savatchaga qo'shish</button>
                                    </div>

                                    {/* last child  */}
                                    <div>
                                        <Swiper className="completed-projects-swiper rounded-2.5xl h-550px max-1200:h-513px max-800:h-96 max-640:h-80 max-540:h-72 max-470:h-210px"
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
                                                product.images.map((img) => {
                                                    return (
                                                        <SwiperSlide key={img.id} className="flex items-center justify-center relative">
                                                            <img src={img.img} alt="furniture image" className="w-full h-full object-cover object-center bg-primary-gray-30" />
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