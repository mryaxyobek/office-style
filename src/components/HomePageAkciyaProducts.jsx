import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

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


// data  
import { cabinetProductsForManagers, courtFurnitures, furnitureForCallCenter, furnitureForStaff, managersChair, officeChair, officeSofas, receptionDesks, tabButtonsGroup } from '../assets/data';

// redux
import { addCard } from '../store/slices/productBasketslice';
import { useDispatch } from 'react-redux';

const HomePageAkciyaProducts = () => {
    const [Position, setPosition] = useState(4);
    const [Width, setWidth] = useState(89);
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
    };
    // all products
    const allProducts = [...cabinetProductsForManagers, ...furnitureForStaff, ...officeSofas, ...managersChair, ...officeChair, ...receptionDesks, ...courtFurnitures, ...furnitureForCallCenter].filter((product) => product.akciya == true);
    const randomProducts = [];

    for (let i = 0; i < 13; i++) {
        const randomIndex = Math.floor(Math.random() * allProducts.length);
        const randomProduct = allProducts[randomIndex];
        if (!randomProducts.some((product) => product.productId === randomProduct.productId)) {
            randomProducts.push(randomProduct);
        }
    };

    const [foundProducts, setFoundProducts] = useState(randomProducts);
    const [products, setProducts] = useState(foundProducts);

    useEffect(() => {
        if (buttonId == 1) {
            setProducts(foundProducts);
        } else if (buttonId == 2) {
            const filteredProducts = foundProducts.filter(product => product.type.toLowerCase().includes('boshqaruvchi'));
            setProducts(filteredProducts);
        } else if (buttonId == 3) {
            const filteredProducts = foundProducts.filter(product => product.type.toLowerCase().includes('xodim'));
            setProducts(filteredProducts);
        } else if (buttonId == 4) {
            const filteredProducts = foundProducts.filter(product => product.type.toLowerCase().includes('ofis divani'));
            setProducts(filteredProducts);
        } else if (buttonId == 5) {
            const filteredProducts = foundProducts.filter(product => product.type.toLowerCase().includes('qabul qilish stoli'));
            setProducts(filteredProducts);
        } else if (buttonId == 6) {
            const filteredProducts = foundProducts.filter((product) => {
                return !(product.type.toLowerCase().includes('boshqaruvchi')) && !(product.type.toLowerCase().includes('xodim')) && !(product.type.toLowerCase().includes('ofis divani')) && !(product.type.toLowerCase().includes('qabul qilish stoli'));
            });
            setProducts(filteredProducts);
        } else {
            setButtonId(1);
        };
    }, [buttonId])

    // add basket
    const dispatch = useDispatch();
    const addToCard = (product) => {
        dispatch(addCard(product));
    };

    return (
        <section className='py-60r'>
            <div className="container">
                {/* title  */}
                <h2 className="text-center mb-60r">Aksiyadagi mahsulotlar</h2>

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
                    {products.map((product, index) => {
                        return (
                            <li key={index} className={`flex flex-col product hover:active-hover w-416px max-440:w-full`}>
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
                                                    <img className='absolute brightness-95 img w-full min-h-full object-cover object-center transition-transform-2 bg-primary-gray-30' width={416} height={310} src={img.img} alt="furniture image" />
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
                                <ul className="text-regular-14 text-primary-gray-70 space-y-2.5 mt-4 mb-auto">
                                    <li className="flex items-end">
                                        <span>Davlati</span>
                                        <div className="grow border-t-2 mx-1 mb-0.5 border-primary-gray-70 border-dotted"></div>
                                        <span>{product.details.country}</span>
                                    </li>
                                    <li className="flex items-end">
                                        <span>Material</span>
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

                                    {
                                        product.details.thickness &&
                                        <li className="flex items-end">
                                            <span>Qalinlik</span>
                                            <div className="grow border-t-2 mx-1 mb-0.5 border-primary-gray-70 border-dotted"></div>
                                            <span>{product.details.thickness}</span>
                                        </li>
                                    }

                                    {
                                        product.details.endurance &&
                                        <li className="flex items-end">
                                            <span>Yuklama</span>
                                            <div className="grow border-t-2 mx-1 mb-0.5 border-primary-gray-70 border-dotted"></div>
                                            <span>{product.details.endurance}</span>
                                        </li>
                                    }
                                </ul>

                                {/* price */}
                                <div className="flex-c-b max-440:flex-col max-440:items-start max-440:gap-6 mt-4 mb-5">
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
                                    <button onClick={() => addToCard(product)} className="rounded-lg transition-colors-2 hover:button-hovered py-2.5 px-8 bg-transparent border-2 border-primary-red-60 ">
                                        <svg xmlns="http://www.w3.org/2000/svg" className='text-primary-red-60 transition-colors-2' width="24" height="24" viewBox="0 0 17 17" fill="none">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M8.53724 0.500039C6.42693 0.506342 4.70854 2.19779 4.66892 4.30762C4.66655 4.32905 4.66529 4.3506 4.66514 4.37214V5.0175H2.72908C2.37269 5.0175 2.08373 5.30641 2.08373 5.66285V10.8257C2.05805 11.6291 2.0872 12.4334 2.17086 13.2328C2.14479 13.9489 2.41783 14.6434 2.92461 15.1499C3.43139 15.6564 4.12606 15.9291 4.84207 15.9026C5.42416 15.9899 6.01342 16.0186 6.60119 15.9884L10.4733 15.9885C11.062 16.0187 11.6523 15.9896 12.2351 15.9013C12.9511 15.9275 13.6457 15.6544 14.1522 15.1477C14.6587 14.6409 14.9314 13.9462 14.9049 13.2302C14.9878 12.4316 15.0165 11.6282 14.9907 10.8257V5.66285C14.9907 5.30641 14.7018 5.0175 14.3454 5.0175H12.4093V4.37214C12.4095 4.34776 12.4082 4.32342 12.4055 4.29924C12.3611 2.19279 10.6442 0.506539 8.53732 0.5L8.53724 0.500039ZM8.53726 1.79074C9.22263 1.78853 9.8805 2.05977 10.3651 2.54437C10.8497 3.02894 11.1209 3.68685 11.1187 4.37214V5.01749H5.95586V4.37214C5.95357 3.68681 6.22488 3.02894 6.70945 2.54433C7.19401 2.05977 7.85197 1.7885 8.53726 1.79074V1.79074ZM3.37445 6.30822H4.66515V7.59892C4.66192 7.82955 4.78198 8.04433 4.98003 8.16238C5.17816 8.28047 5.42418 8.28386 5.62546 8.17132C5.82674 8.05879 5.9527 7.84739 5.95586 7.6168C5.95586 7.61121 5.95586 7.60475 5.95586 7.59892V6.30822H11.1187V7.59892C11.1154 7.82955 11.2355 8.04433 11.4335 8.16238C11.6317 8.28047 11.8777 8.28386 12.079 8.17132C12.2802 8.05879 12.4062 7.84739 12.4094 7.6168C12.4094 7.61121 12.4094 7.60475 12.4094 7.59892V6.30822H13.7001V10.8257C13.724 11.5795 13.6979 12.3341 13.622 13.0844C13.6819 13.5063 13.5401 13.9317 13.2389 14.2331C12.9378 14.5345 12.5124 14.6767 12.0905 14.6171C11.5557 14.701 11.0136 14.728 10.4732 14.6978H6.60121C6.06213 14.7285 5.52139 14.7023 4.98783 14.6197C4.56605 14.6797 4.14057 14.5378 3.83916 14.2367C3.53776 13.9355 3.39549 13.5102 3.45512 13.0883C3.378 12.3368 3.35106 11.5809 3.37445 10.8257V6.30822V6.30822Z" fill="currentColor" />
                                            <path d="M8.5 12.5V10.5M8.5 8.5V10.5M8.5 10.5H10.5H6.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </button>
                                </div>
                            </li>
                        )
                    })}
                </ul>

                {/* not found product */}
                {
                    products.length === 0 &&
                    <h3 className='flex justify-center w-full'>Hech qanday mahsulot topilmadi</h3>
                }
            </div>
        </section >
    )
}

export default HomePageAkciyaProducts;