import React from 'react';


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
import { Link } from 'react-router-dom';


// redux 
import { useDispatch, useSelector } from 'react-redux';
import { deleteCard } from '../store/slices/productBasketslice';

const Basket = () => {
    const { card } = useSelector((store) => store.card);
    const dispatch = useDispatch()
    return (
        <div className='pt-36r pb-60r'>
            <div className="container">
                <h1 className="mb-60r">Savatcha</h1>
                {/* products  */}
                <ul className="grid grid-cols-4 gap-8 max-1400:grid-cols-3 max-1050:grid-cols-2 max-730:grid-cols-1">
                    {
                        card.length > 0 ? card.map((product) => {
                            return (
                                <li key={product.id} className="w-full product hover:active-hover">
                                    <Swiper className="product-img-swiper relative rounded-2.5xl w-full mb-4 max-730:h-96 h-310px max-470:h-64 max-360:h-223px"
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
                                                    img.id <= 3 &&
                                                    <SwiperSlide key={img.id} className="flex items-center justify-center relative">
                                                        <img className='absolute brightness-95 img w-full min-h-full object-cover object-center transition-transform-2' width={416} height={310} src={img.img} alt="furniture image" />
                                                        <div className="absolute tabs-wrapper top-5 right-5 transition-opacity-2">
                                                            <div className="flex-center space-x-3 ml-auto">
                                                                {
                                                                    product.akciya &&
                                                                    <span className="red-tab">Aksiya</span>
                                                                }
                                                                {
                                                                    product.new &&
                                                                    <span className="green-tab">yangi</span>
                                                                }
                                                                {
                                                                    product.available &&
                                                                    <span className="white-tab">mavjud</span>
                                                                }
                                                                {
                                                                    product.order &&
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
                                        <span>{product.type}</span>
                                        <span>ID:{product.productId}</span>
                                    </div>

                                    {/* title  */}
                                    <h3 className="mb-4 text-regular-20">{product.productTitle}</h3>

                                    {/* list  */}
                                    <ul className="text-regular-14 text-primary-gray-70 space-y-2.5 mb-4">
                                        <li className="flex items-end">
                                            <span>Davlati</span>
                                            <div className="grow border-t-2 mx-1 mb-0.5 border-primary-gray-70 border-dotted"></div>
                                            <span>{product.details.country}</span>
                                        </li>
                                        <li className="flex items-end">
                                            <span>Ustki material</span>
                                            <div className="grow border-t-2 mx-1 mb-0.5 border-primary-gray-70 border-dotted"></div>
                                            <ul className='flex-center gap-0.5'>
                                                {
                                                    product.details.material.map(name => {
                                                        return (
                                                            <li key={name.id} className='after:ml-0.5 after:content-["/"] last:after:content-[""] after:text-primary-gray-70'>
                                                                {name.name}
                                                            </li>
                                                        )
                                                    })
                                                }
                                            </ul>
                                        </li>
                                        <li className="flex items-end">
                                            <span>Ustki qalinlik</span>
                                            <div className="grow border-t-2 mx-1 mb-0.5 border-primary-gray-70 border-dotted"></div>
                                            <span>{product.details.thickness}</span>
                                        </li>
                                    </ul>

                                    {/* price */}
                                    <div className="flex-c-b max-440:flex-col max-440:items-start max-440:gap-6 mb-5">
                                        <div className="flex-end max-340:flex-col max-340:items-start gap-1">
                                            <span className="inline-block text-regular-16 text-primary-gray-70 mr-1" >Narx:</span>
                                            <p className="text-regular-20 mr-3">{product.parts[0].currentPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}so'm</p>

                                            {/* old price aksiya price  */}
                                            {
                                                product.parts[0].oldprice && <del className='text-regular-18 text-primary-gray-50'>{product.parts[0].oldprice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}so'm</del>
                                            }
                                        </div>

                                        {/* btn  */}
                                    </div>

                                    {/* buttons  */}
                                    <div className="flex flex-co w-full gap-2">
                                        <Link to={`/catalog/${product.type.toLowerCase().replace(/\s+/g, '-')}/${product.productTitle.toLowerCase().replace(/\s+/g, '-')}`} className="flex-center justify-center red-btn py-2.5 px-5 w-full bg-primary-red-60">Buyurtma berish</Link>
                                        <button onClick={() => dispatch(deleteCard(product))} className="red-btn py-2.5 px-8 bg-transparent border-2 border-primary-red-60 hover:bg-white hover:button-hovered">

                                            <svg width={24} height={24} className='text-primary-red-60 transition-colors-2' clipRule="evenodd" fillRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2" viewBox="0 0 24 24" fill='currentColor' xmlns="http://www.w3.org/2000/svg"><path d="m4.015 5.494h-.253c-.413 0-.747-.335-.747-.747s.334-.747.747-.747h5.253v-1c0-.535.474-1 1-1h4c.526 0 1 .465 1 1v1h5.254c.412 0 .746.335.746.747s-.334.747-.746.747h-.254v15.435c0 .591-.448 1.071-1 1.071-2.873 0-11.127 0-14 0-.552 0-1-.48-1-1.071zm14.5 0h-13v15.006h13zm-4.25 2.506c-.414 0-.75.336-.75.75v8.5c0 .414.336.75.75.75s.75-.336.75-.75v-8.5c0-.414-.336-.75-.75-.75zm-4.5 0c-.414 0-.75.336-.75.75v8.5c0 .414.336.75.75.75s.75-.336.75-.75v-8.5c0-.414-.336-.75-.75-.75zm3.75-4v-.5h-3v.5z" fillRule="nonzero" /></svg>
                                        </button>
                                    </div>
                                </li>
                            )
                        })

                            :
                            <p>Savatcha bo'sh. Mahsulotni savatga qo'shish uchun mahsulotning pastki qismidagi savatcha tugmasini bosing</p>

                    }
                </ul>
            </div>
        </div>
    )
};

export default Basket;