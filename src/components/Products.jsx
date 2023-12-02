import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

// data 
import { cabinetProductsForManagers, furnitureForStaff } from '../assets/data';


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


// redux 
import { addCard } from '../store/slices/productBasketslice';

// ant design
import { Slider } from 'antd';

const Products = () => {

    // product
    const { categoryName } = useParams();

    const addToCard = (product) => {
        dispatch(addCard(product));
    };

    const [slideValue, setSlideValue] = useState([0, 10000000]);

    const changeSlideValue = (event) => {
        setSlideValue(event);
    };

    // filter
    const [openFilter, setOpenFilter] = useState(false);

    // material 
    const [materialLDSP, setMaterialLDSP] = useState(false);
    const [materialDSP, setMaterialDSP] = useState(false);
    const [materialMDF, setMaterialMDF] = useState(false);
    const [materialMelamin, setMaterialMelamin] = useState(false);
    const [materialMetal, setMaterialMetal] = useState(false);
    const [materialMetalFrame, setMaterialMetalFrame] = useState(false);
    // country 
    const [countryRussia, setCountryRussia] = useState(false);
    const [countryChina, setCountryChina] = useState(false);
    const [countryTurkey, setCountryTurkey] = useState(false);
    const [countryBelarus, setCountryBelarus] = useState(false);
    const [countryUkraine, setCountryUkraine] = useState(false);
    // size
    const [size40, setSize40] = useState(false);
    const [size38, setSize38] = useState(false);
    const [size36, setSize36] = useState(false);
    const [size32, setSize32] = useState(false);
    const [size26, setSize26] = useState(false);
    const [size25, setSize25] = useState(false);
    const [size24, setSize24] = useState(false);
    const [size22, setSize22] = useState(false);
    const [size18, setSize18] = useState(false);
    const [size17, setSize17] = useState(false);

    // sort
    const [openSortButton, setOpenSortButton] = useState(false);

    const [priceIncrease, setPriceIncrease] = useState(false);
    const [priceReduction, setPriceReduction] = useState(false);

    // key event
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            setOpenFilter(false);
            setOpenSortButton(false);
        };
    });



    // product
    let foundProducts = [];

    if (categoryName === 'boshqaruvchilar-uchun') {
        console.log(1);
        foundProducts = cabinetProductsForManagers;
    };

    if (categoryName === 'xodimlar-uchun') {
        console.log(2);
        foundProducts = furnitureForStaff;
    };

    const [products, setProducts] = useState(foundProducts);


    // filter products 
    const filterProducts = () => {
        const filteredProducts = foundProducts.filter((product) => {
            const filterWithMaterialName = product.details.material.some((materialName) => {
                return (materialLDSP && materialName.name.toLowerCase() === 'ldsp') ||
                    (materialMDF && materialName.name.toLowerCase() === 'mdf') ||
                    (materialDSP && materialName.name.toLowerCase() === 'dsp') ||
                    (materialMelamin && materialName.name.toLowerCase() === 'melamin') ||
                    (materialMetal && materialName.name.toLowerCase() === 'metall') ||
                    (materialMetalFrame && materialName.name.toLowerCase() === 'metall ramka');
            });

            const filterWithCountryName =
                (countryRussia && product.details.country.toLowerCase() === 'rossiya') ||
                (countryChina && product.details.country.toLowerCase() === 'china') ||
                (countryTurkey && product.details.country.toLowerCase() === 'turkiya') ||
                (countryUkraine && product.details.country.toLowerCase() === 'ukraina') ||
                (countryBelarus && product.details.country.toLowerCase() === 'belarussiya');

            const filterWithSize =
                (size40 && product.details.thickness.toLowerCase() === '4.0') ||
                (size38 && product.details.thickness.toLowerCase() === '3.8') ||
                (size36 && product.details.thickness.toLowerCase() === '3.6') ||
                (size32 && product.details.thickness.toLowerCase() === '3.2') ||
                (size26 && product.details.thickness.toLowerCase() === '2.6') ||
                (size25 && product.details.thickness.toLowerCase() === '2.5') ||
                (size24 && product.details.thickness.toLowerCase() === '2.4') ||
                (size22 && product.details.thickness.toLowerCase() === '2.2') ||
                (size18 && product.details.thickness.toLowerCase() === '1.8') ||
                (size17 && product.details.thickness.toLowerCase() === '1.7');

            return (
                product.parts[0].currentPrice > slideValue[0] &&
                product.parts[0].currentPrice < slideValue[1] &&
                (materialLDSP || materialMDF || materialDSP || materialMelamin || materialMetal ? filterWithMaterialName || materialMetalFrame : true) &&
                (countryRussia || countryChina || countryTurkey || countryUkraine || countryBelarus ? filterWithCountryName : true) &&
                (size38 || size36 || size32 || size26 || size25 || size24 || size22 || size18 || size17 || size40 ? filterWithSize : true)
            );
        });

        if (priceIncrease) {
            const sortedProducts = filteredProducts.sort((a, b) => a.parts[0].currentPrice - b.parts[0].currentPrice);
            setProducts(sortedProducts);
        }

        // sort products 
        if (priceReduction) {
            const sortedProducts = filteredProducts.sort((a, b) => a.parts[0].currentPrice - b.parts[0].currentPrice).reverse();
            setProducts(sortedProducts);
        }

        if (!priceIncrease && !priceReduction) {
            setProducts(filteredProducts);
        }
    };

    // sort products 
    useEffect(() => {
        if (priceIncrease) {
            const sortedProducts = products.sort((a, b) => a.parts[0].currentPrice - b.parts[0].currentPrice);
            setProducts(sortedProducts);
        }
    }, [priceIncrease])

    useEffect(() => {
        if (priceReduction) {
            const sortedProducts = products.sort((a, b) => a.parts[0].currentPrice - b.parts[0].currentPrice).reverse();
            setProducts(sortedProducts);
        }
    }, [priceReduction])


    const resetFilter = () => {
        // reset products
        setProducts(foundProducts);
        // slidebar 
        setSlideValue([0, 10000000]);
        // material 
        setMaterialLDSP(false);
        setMaterialDSP(false);
        setMaterialMDF(false);
        setMaterialMelamin(false);
        setMaterialMetal(false);
        // country 
        setCountryRussia(false);
        setCountryChina(false);
        setCountryTurkey(false);
        setCountryBelarus(false);
        setCountryUkraine(false);
        // size 
        setSize40(false);
        setSize38(false);
        setSize36(false);
        setSize32(false);
        setSize26(false);
        setSize25(false);
        setSize24(false);
        setSize22(false);
        setSize18(false);
        setSize17(false);
        // price increment and price reduction
        setPriceIncrease(false);
        setPriceReduction(false);
    };


    // products not found
    const [productNotFound, setProductNotFound] = useState(false);

    useEffect(() => {
        if (products.length === 0) {
            setProductNotFound(true);
        } else {
            setProductNotFound(false);
        }
    }, [products]);

    return (
        <div className="container">

            {/* overlay  */}
            <div onClick={() => { setOpenFilter(false); setOpenSortButton(false); }} className={`${openFilter || openSortButton ? 'block' : 'hidden'} fixed bg-black bg-opacity-75 w-full min-h-screen top-0 right-0 z-4`}></div>

            {/* filter place */}
            <div className={`${openFilter ? 'translate-x-0' : 'translate-x-full'} transition-transform-2 fixed top-0 right-0 w-96 h-screen z-5 bg-white pr-6 p-12 pt-16 max-440:p-6 max-440:pt-14 max-440:w-80 max-360:w-full`}>
                {/* close and reset filter button  */}
                <div className="flex-start justify-between absolute top-5 right-0 w-full pl-12 pr-6 max-440:pl-6">
                    <button onClick={resetFilter} className="flex-center text-primary-red-60 gap-2.5">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
                            <g clipPath="url(#clip0_1602_76)">
                                <path fillRule="evenodd" clipRule="evenodd" d="M12 0V1.41176C17.8391 1.41176 22.5882 6.16094 22.5882 12C22.5882 17.8391 17.8391 22.5882 12 22.5882C6.16094 22.5882 1.41176 17.8391 1.41176 12C1.41176 8.66118 2.99435 5.55106 5.64706 3.55341V8.47059H7.05881V1.41176H0V2.82353H4.28613C1.58823 5.09225 0 8.43389 0 12C0 18.6169 5.38306 24 12 24C18.6169 24 24 18.6169 24 12C24 5.38306 18.6169 0 12 0Z" fill="#AE0712" />
                            </g>
                        </svg>
                        <span className="inline-block">Asl holatiga qaytarish</span>
                    </button>

                    <button onClick={() => setOpenFilter(false)} className="red-btn">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M13.4099 12.0002L17.7099 7.71019C17.8982 7.52188 18.004 7.26649 18.004 7.00019C18.004 6.73388 17.8982 6.47849 17.7099 6.29019C17.5216 6.10188 17.2662 5.99609 16.9999 5.99609C16.7336 5.99609 16.4782 6.10188 16.2899 6.29019L11.9999 10.5902L7.70994 6.29019C7.52164 6.10188 7.26624 5.99609 6.99994 5.99609C6.73364 5.99609 6.47824 6.10188 6.28994 6.29019C6.10164 6.47849 5.99585 6.73388 5.99585 7.00019C5.99585 7.26649 6.10164 7.52188 6.28994 7.71019L10.5899 12.0002L6.28994 16.2902C6.19621 16.3831 6.12182 16.4937 6.07105 16.6156C6.02028 16.7375 5.99414 16.8682 5.99414 17.0002C5.99414 17.1322 6.02028 17.2629 6.07105 17.3848C6.12182 17.5066 6.19621 17.6172 6.28994 17.7102C6.3829 17.8039 6.4935 17.8783 6.61536 17.9291C6.73722 17.9798 6.86793 18.006 6.99994 18.006C7.13195 18.006 7.26266 17.9798 7.38452 17.9291C7.50638 17.8783 7.61698 17.8039 7.70994 17.7102L11.9999 13.4102L16.2899 17.7102C16.3829 17.8039 16.4935 17.8783 16.6154 17.9291C16.7372 17.9798 16.8679 18.006 16.9999 18.006C17.132 18.006 17.2627 17.9798 17.3845 17.9291C17.5064 17.8783 17.617 17.8039 17.7099 17.7102C17.8037 17.6172 17.8781 17.5066 17.9288 17.3848C17.9796 17.2629 18.0057 17.1322 18.0057 17.0002C18.0057 16.8682 17.9796 16.7375 17.9288 16.6156C17.8781 16.4937 17.8037 16.3831 17.7099 16.2902L13.4099 12.0002Z" fill="#fff" />
                        </svg>
                    </button>
                </div>


                {/* main content */}
                <div className='relative h-full red-scroll overflow-y-auto space-y-6 pr-6 pb-40'>
                    {/* price  */}
                    <div className="flex flex-col gap-3 max-w-264px ml-1">
                        <h3 className="text-primary-gray-70 text-normal">Narx</h3>
                        <Slider
                            className='w-full price-slider'
                            range={{ draggableTrack: true }}
                            step={100}
                            max={15000000}
                            min={400000}
                            value={slideValue}
                            defaultValue={slideValue}
                            onChange={changeSlideValue}
                        />
                    </div>

                    {/* material  */}
                    <div className="flex flex-col gap-3">
                        <h3 className="text-primary-gray-70 text-normal">Material</h3>
                        <ul className="space-y-3">
                            <li>
                                <button onClick={() => setMaterialLDSP(!materialLDSP)} className='flex-center gap-2'>
                                    <div className={`${materialLDSP ? 'border-primary-red-50 bg-primary-red-50' : 'border-primary-gray-20'} flex-center justify-center w-4 h-4 border  transition-colors-2`}>
                                        <svg className={`${materialLDSP ? 'block' : 'hidden'}`} xmlns="http://www.w3.org/2000/svg" width="10" height="7" viewBox="0 0 10 7" fill="none">
                                            <path d="M1 3L3.82353 6L9 1" stroke="#fff" strokeLinecap="round" />
                                        </svg>
                                    </div>
                                    <span className='text-primary-gray-70 text-regular-14'>LDSP</span>
                                </button>
                            </li>
                            <li>
                                <button onClick={() => setMaterialDSP(!materialDSP)} className='flex-center gap-2'>
                                    <div className={`${materialDSP ? 'border-primary-red-50 bg-primary-red-50' : 'border-primary-gray-20'} flex-center justify-center w-4 h-4 border  transition-colors-2`}>
                                        <svg className={`${materialDSP ? 'block' : 'hidden'}`} xmlns="http://www.w3.org/2000/svg" width="10" height="7" viewBox="0 0 10 7" fill="none">
                                            <path d="M1 3L3.82353 6L9 1" stroke="#fff" strokeLinecap="round" />
                                        </svg>
                                    </div>
                                    <span className='text-primary-gray-70 text-regular-14'>DSP</span>
                                </button>
                            </li>
                            <li>
                                <button onClick={() => setMaterialMDF(!materialMDF)} className='flex-center gap-2'>
                                    <div className={`${materialMDF ? 'border-primary-red-50 bg-primary-red-50' : 'border-primary-gray-20'} flex-center justify-center w-4 h-4 border  transition-colors-2`}>
                                        <svg className={`${materialMDF ? 'block' : 'hidden'}`} xmlns="http://www.w3.org/2000/svg" width="10" height="7" viewBox="0 0 10 7" fill="none">
                                            <path d="M1 3L3.82353 6L9 1" stroke="#fff" strokeLinecap="round" />
                                        </svg>
                                    </div>
                                    <span className='text-primary-gray-70 text-regular-14'>MDF</span>
                                </button>
                            </li>
                            <li>
                                <button onClick={() => setMaterialMelamin(!materialMelamin)} className='flex-center gap-2'>
                                    <div className={`${materialMelamin ? 'border-primary-red-50 bg-primary-red-50' : 'border-primary-gray-20'} flex-center justify-center w-4 h-4 border  transition-colors-2`}>
                                        <svg className={`${materialMelamin ? 'block' : 'hidden'}`} xmlns="http://www.w3.org/2000/svg" width="10" height="7" viewBox="0 0 10 7" fill="none">
                                            <path d="M1 3L3.82353 6L9 1" stroke="#fff" strokeLinecap="round" />
                                        </svg>
                                    </div>
                                    <span className='text-primary-gray-70 text-regular-14'>Melamin</span>
                                </button>
                            </li>
                            <li>
                                <button onClick={() => setMaterialMetal(!materialMetal)} className='flex-center gap-2'>
                                    <div className={`${materialMetal ? 'border-primary-red-50 bg-primary-red-50' : 'border-primary-gray-20'} flex-center justify-center w-4 h-4 border  transition-colors-2`}>
                                        <svg className={`${materialMetal ? 'block' : 'hidden'}`} xmlns="http://www.w3.org/2000/svg" width="10" height="7" viewBox="0 0 10 7" fill="none">
                                            <path d="M1 3L3.82353 6L9 1" stroke="#fff" strokeLinecap="round" />
                                        </svg>
                                    </div>
                                    <span className='text-primary-gray-70 text-regular-14'>Metall</span>
                                </button>
                            </li>
                            <li>
                                <button onClick={() => setMaterialMetalFrame(!materialMetalFrame)} className='flex-center gap-2'>
                                    <div className={`${materialMetalFrame ? 'border-primary-red-50 bg-primary-red-50' : 'border-primary-gray-20'} flex-center justify-center w-4 h-4 border  transition-colors-2`}>
                                        <svg className={`${materialMetalFrame ? 'block' : 'hidden'}`} xmlns="http://www.w3.org/2000/svg" width="10" height="7" viewBox="0 0 10 7" fill="none">
                                            <path d="M1 3L3.82353 6L9 1" stroke="#fff" strokeLinecap="round" />
                                        </svg>
                                    </div>
                                    <span className='text-primary-gray-70 text-regular-14'>Metall ramka</span>
                                </button>
                            </li>
                        </ul>
                    </div>

                    {/* country  */}
                    <div className="flex flex-col gap-3">
                        <h3 className="text-primary-gray-70 text-normal">Davlat</h3>
                        <ul className="space-y-3">
                            <li>
                                <button onClick={() => setCountryRussia(!countryRussia)} className='flex-center gap-2'>
                                    <div className={`${countryRussia ? 'border-primary-red-50 bg-primary-red-50' : 'border-primary-gray-20'} flex-center justify-center w-4 h-4 border  transition-colors-2`}>
                                        <svg className={`${countryRussia ? 'block' : 'hidden'}`} xmlns="http://www.w3.org/2000/svg" width="10" height="7" viewBox="0 0 10 7" fill="none">
                                            <path d="M1 3L3.82353 6L9 1" stroke="#fff" strokeLinecap="round" />
                                        </svg>
                                    </div>
                                    <span className='text-primary-gray-70 text-regular-14'>Rossiya</span>
                                </button>
                            </li>
                            <li>
                                <button onClick={() => setCountryChina(!countryChina)} className='flex-center gap-2'>
                                    <div className={`${countryChina ? 'border-primary-red-50 bg-primary-red-50' : 'border-primary-gray-20'} flex-center justify-center w-4 h-4 border  transition-colors-2`}>
                                        <svg className={`${countryChina ? 'block' : 'hidden'}`} xmlns="http://www.w3.org/2000/svg" width="10" height="7" viewBox="0 0 10 7" fill="none">
                                            <path d="M1 3L3.82353 6L9 1" stroke="#fff" strokeLinecap="round" />
                                        </svg>
                                    </div>
                                    <span className='text-primary-gray-70 text-regular-14'>Xitoy</span>
                                </button>
                            </li>
                            <li>
                                <button onClick={() => setCountryTurkey(!countryTurkey)} className='flex-center gap-2'>
                                    <div className={`${countryTurkey ? 'border-primary-red-50 bg-primary-red-50' : 'border-primary-gray-20'} flex-center justify-center w-4 h-4 border  transition-colors-2`}>
                                        <svg className={`${countryTurkey ? 'block' : 'hidden'}`} xmlns="http://www.w3.org/2000/svg" width="10" height="7" viewBox="0 0 10 7" fill="none">
                                            <path d="M1 3L3.82353 6L9 1" stroke="#fff" strokeLinecap="round" />
                                        </svg>
                                    </div>
                                    <span className='text-primary-gray-70 text-regular-14'>Turkiya</span>
                                </button>
                            </li>
                            <li>
                                <button onClick={() => setCountryBelarus(!countryBelarus)} className='flex-center gap-2'>
                                    <div className={`${countryBelarus ? 'border-primary-red-50 bg-primary-red-50' : 'border-primary-gray-20'} flex-center justify-center w-4 h-4 border  transition-colors-2`}>
                                        <svg className={`${countryBelarus ? 'block' : 'hidden'}`} xmlns="http://www.w3.org/2000/svg" width="10" height="7" viewBox="0 0 10 7" fill="none">
                                            <path d="M1 3L3.82353 6L9 1" stroke="#fff" strokeLinecap="round" />
                                        </svg>
                                    </div>
                                    <span className='text-primary-gray-70 text-regular-14'>Belarussiya</span>
                                </button>
                            </li>
                            <li>
                                <button onClick={() => setCountryUkraine(!countryUkraine)} className='flex-center gap-2'>
                                    <div className={`${countryUkraine ? 'border-primary-red-50 bg-primary-red-50' : 'border-primary-gray-20'} flex-center justify-center w-4 h-4 border  transition-colors-2`}>
                                        <svg className={`${countryUkraine ? 'block' : 'hidden'}`} xmlns="http://www.w3.org/2000/svg" width="10" height="7" viewBox="0 0 10 7" fill="none">
                                            <path d="M1 3L3.82353 6L9 1" stroke="#fff" strokeLinecap="round" />
                                        </svg>
                                    </div>
                                    <span className='text-primary-gray-70 text-regular-14'>Ukraina</span>
                                </button>
                            </li>
                        </ul>
                    </div>

                    {/* size  */}
                    <div className="flex flex-col gap-3">
                        <h3 className="text-primary-gray-70 text-normal">O'lcham</h3>
                        <ul className="space-y-3">
                            <li>
                                <button onClick={() => setSize40(!size40)} className='flex-center gap-2'>
                                    <div className={`${size40 ? 'border-primary-red-50 bg-primary-red-50' : 'border-primary-gray-20'} flex-center justify-center w-4 h-4 border  transition-colors-2`}>
                                        <svg className={`${size40 ? 'block' : 'hidden'}`} xmlns="http://www.w3.org/2000/svg" width="10" height="7" viewBox="0 0 10 7" fill="none">
                                            <path d="M1 3L3.82353 6L9 1" stroke="#fff" strokeLinecap="round" />
                                        </svg>
                                    </div>
                                    <span className='text-primary-gray-70 text-regular-14'>4.0</span>
                                </button>
                            </li>

                            <li>
                                <button onClick={() => setSize38(!size38)} className='flex-center gap-2'>
                                    <div className={`${size38 ? 'border-primary-red-50 bg-primary-red-50' : 'border-primary-gray-20'} flex-center justify-center w-4 h-4 border  transition-colors-2`}>
                                        <svg className={`${size38 ? 'block' : 'hidden'}`} xmlns="http://www.w3.org/2000/svg" width="10" height="7" viewBox="0 0 10 7" fill="none">
                                            <path d="M1 3L3.82353 6L9 1" stroke="#fff" strokeLinecap="round" />
                                        </svg>
                                    </div>
                                    <span className='text-primary-gray-70 text-regular-14'>3.8</span>
                                </button>
                            </li>

                            <li>
                                <button onClick={() => setSize36(!size36)} className='flex-center gap-2'>
                                    <div className={`${size36 ? 'border-primary-red-50 bg-primary-red-50' : 'border-primary-gray-20'} flex-center justify-center w-4 h-4 border  transition-colors-2`}>
                                        <svg className={`${size36 ? 'block' : 'hidden'}`} xmlns="http://www.w3.org/2000/svg" width="10" height="7" viewBox="0 0 10 7" fill="none">
                                            <path d="M1 3L3.82353 6L9 1" stroke="#fff" strokeLinecap="round" />
                                        </svg>
                                    </div>
                                    <span className='text-primary-gray-70 text-regular-14'>3.6</span>
                                </button>
                            </li>
                            <li>
                                <button onClick={() => setSize32(!size32)} className='flex-center gap-2'>
                                    <div className={`${size32 ? 'border-primary-red-50 bg-primary-red-50' : 'border-primary-gray-20'} flex-center justify-center w-4 h-4 border  transition-colors-2`}>
                                        <svg className={`${size32 ? 'block' : 'hidden'}`} xmlns="http://www.w3.org/2000/svg" width="10" height="7" viewBox="0 0 10 7" fill="none">
                                            <path d="M1 3L3.82353 6L9 1" stroke="#fff" strokeLinecap="round" />
                                        </svg>
                                    </div>
                                    <span className='text-primary-gray-70 text-regular-14'>3.2</span>
                                </button>
                            </li>
                            <li>
                                <button onClick={() => setSize26(!size26)} className='flex-center gap-2'>
                                    <div className={`${size26 ? 'border-primary-red-50 bg-primary-red-50' : 'border-primary-gray-20'} flex-center justify-center w-4 h-4 border  transition-colors-2`}>
                                        <svg className={`${size26 ? 'block' : 'hidden'}`} xmlns="http://www.w3.org/2000/svg" width="10" height="7" viewBox="0 0 10 7" fill="none">
                                            <path d="M1 3L3.82353 6L9 1" stroke="#fff" strokeLinecap="round" />
                                        </svg>
                                    </div>
                                    <span className='text-primary-gray-70 text-regular-14'>2.6</span>
                                </button>
                            </li>
                            <li>
                                <button onClick={() => setSize25(!size25)} className='flex-center gap-2'>
                                    <div className={`${size25 ? 'border-primary-red-50 bg-primary-red-50' : 'border-primary-gray-20'} flex-center justify-center w-4 h-4 border  transition-colors-2`}>
                                        <svg className={`${size25 ? 'block' : 'hidden'}`} xmlns="http://www.w3.org/2000/svg" width="10" height="7" viewBox="0 0 10 7" fill="none">
                                            <path d="M1 3L3.82353 6L9 1" stroke="#fff" strokeLinecap="round" />
                                        </svg>
                                    </div>
                                    <span className='text-primary-gray-70 text-regular-14'>2.5</span>
                                </button>
                            </li>
                            <li>
                                <button onClick={() => setSize24(!size24)} className='flex-center gap-2'>
                                    <div className={`${size24 ? 'border-primary-red-50 bg-primary-red-50' : 'border-primary-gray-20'} flex-center justify-center w-4 h-4 border  transition-colors-2`}>
                                        <svg className={`${size24 ? 'block' : 'hidden'}`} xmlns="http://www.w3.org/2000/svg" width="10" height="7" viewBox="0 0 10 7" fill="none">
                                            <path d="M1 3L3.82353 6L9 1" stroke="#fff" strokeLinecap="round" />
                                        </svg>
                                    </div>
                                    <span className='text-primary-gray-70 text-regular-14'>2.4</span>
                                </button>
                            </li>
                            <li>
                                <button onClick={() => setSize22(!size22)} className='flex-center gap-2'>
                                    <div className={`${size22 ? 'border-primary-red-50 bg-primary-red-50' : 'border-primary-gray-20'} flex-center justify-center w-4 h-4 border  transition-colors-2`}>
                                        <svg className={`${size22 ? 'block' : 'hidden'}`} xmlns="http://www.w3.org/2000/svg" width="10" height="7" viewBox="0 0 10 7" fill="none">
                                            <path d="M1 3L3.82353 6L9 1" stroke="#fff" strokeLinecap="round" />
                                        </svg>
                                    </div>
                                    <span className='text-primary-gray-70 text-regular-14'>2.2</span>
                                </button>
                            </li>
                            <li>
                                <button onClick={() => setSize18(!size18)} className='flex-center gap-2'>
                                    <div className={`${size18 ? 'border-primary-red-50 bg-primary-red-50' : 'border-primary-gray-20'} flex-center justify-center w-4 h-4 border  transition-colors-2`}>
                                        <svg className={`${size18 ? 'block' : 'hidden'}`} xmlns="http://www.w3.org/2000/svg" width="10" height="7" viewBox="0 0 10 7" fill="none">
                                            <path d="M1 3L3.82353 6L9 1" stroke="#fff" strokeLinecap="round" />
                                        </svg>
                                    </div>
                                    <span className='text-primary-gray-70 text-regular-14'>1.8</span>
                                </button>
                            </li>
                            <li>
                                <button onClick={() => setSize17(!size17)} className='flex-center gap-2'>
                                    <div className={`${size17 ? 'border-primary-red-50 bg-primary-red-50' : 'border-primary-gray-20'} flex-center justify-center w-4 h-4 border  transition-colors-2`}>
                                        <svg className={`${size17 ? 'block' : 'hidden'}`} xmlns="http://www.w3.org/2000/svg" width="10" height="7" viewBox="0 0 10 7" fill="none">
                                            <path d="M1 3L3.82353 6L9 1" stroke="#fff" strokeLinecap="round" />
                                        </svg>
                                    </div>
                                    <span className='text-primary-gray-70 text-regular-14'>1.7</span>
                                </button>
                            </li>

                        </ul>
                    </div>

                    {/* filter button */}
                    <div className="fixed w-full pb-12 bottom-0 right-0 bg-white before:content-[''] before:absolute before:block before:w-full before:h-28 before:bg-whiteLinear before:right-0 before:bottom-full pl-12 pr-6 max-440:pl-6">
                        <button onClick={() => {
                            filterProducts();
                            setOpenFilter(false);
                        }} className='flex-center justify-center red-btn w-full !py-3.5'>Filtrlash</button>
                    </div>
                </div>
            </div>

            {/* open filter place buttons */}
            <div className="flex items-start flex-wrap gap-8 pb-60r">
                <button onClick={() => setOpenFilter(true)} className='flex-center space-x-2.5 px-5 py-4 rounded-lg border border-primary-gray-90'>
                    <span>
                        Mahsulotlarni filtrlash
                    </span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M10.547 13.3334L14.0003 13.3334C14.1771 13.3334 14.3467 13.2632 14.4717 13.1382C14.5968 13.0132 14.667 12.8436 14.667 12.6668C14.667 12.49 14.5968 12.3204 14.4717 12.1954C14.3467 12.0703 14.1771 12.0001 14.0003 12.0001L10.547 12.0001C10.4069 11.614 10.1512 11.2804 9.81488 11.0447C9.47852 10.8089 9.07774 10.6825 8.66699 10.6825C8.25625 10.6825 7.85546 10.8089 7.5191 11.0447C7.18274 11.2804 6.92713 11.614 6.78699 12.0001L2.00033 12.0001C1.82351 12.0001 1.65395 12.0703 1.52892 12.1954C1.4039 12.3204 1.33366 12.49 1.33366 12.6668C1.33366 12.8436 1.4039 13.0132 1.52892 13.1382C1.65395 13.2632 1.82351 13.3334 2.00033 13.3334L6.78699 13.3334C6.92713 13.7195 7.18274 14.0531 7.5191 14.2889C7.85546 14.5246 8.25625 14.6511 8.66699 14.6511C9.07774 14.6511 9.47852 14.5246 9.81488 14.2889C10.1512 14.0531 10.4069 13.7195 10.547 13.3334ZM8.00033 12.6668C8.00033 12.5349 8.03942 12.406 8.11268 12.2964C8.18593 12.1868 8.29005 12.1013 8.41187 12.0509C8.53369 12.0004 8.66773 11.9872 8.79705 12.0129C8.92637 12.0386 9.04516 12.1021 9.1384 12.1954C9.23163 12.2886 9.29513 12.4074 9.32085 12.5367C9.34657 12.666 9.33337 12.8001 9.28291 12.9219C9.23245 13.0437 9.14701 13.1478 9.03737 13.2211C8.92774 13.2943 8.79885 13.3334 8.66699 13.3334C8.49018 13.3334 8.32061 13.2632 8.19559 13.1382C8.07056 13.0132 8.00033 12.8436 8.00033 12.6668ZM6.54699 8.66677L14.0003 8.66677C14.1771 8.66677 14.3467 8.59653 14.4717 8.47151C14.5968 8.34649 14.667 8.17692 14.667 8.00011C14.667 7.82329 14.5968 7.65373 14.4717 7.5287C14.3467 7.40368 14.1771 7.33344 14.0003 7.33344L6.54699 7.33344C6.40686 6.94734 6.15124 6.61375 5.81488 6.378C5.47852 6.14225 5.07774 6.01579 4.66699 6.01579C4.25625 6.01579 3.85546 6.14225 3.5191 6.378C3.18275 6.61375 2.92713 6.94734 2.78699 7.33344L2.00033 7.33344C1.82351 7.33344 1.65395 7.40368 1.52892 7.5287C1.4039 7.65372 1.33366 7.82329 1.33366 8.0001C1.33366 8.17692 1.4039 8.34648 1.52892 8.47151C1.65395 8.59653 1.82351 8.66677 2.00033 8.66677L2.78699 8.66677C2.92713 9.05287 3.18275 9.38646 3.5191 9.62221C3.85546 9.85796 4.25625 9.98442 4.66699 9.98442C5.07774 9.98442 5.47852 9.85796 5.81488 9.62221C6.15124 9.38646 6.40686 9.05287 6.54699 8.66677ZM4.00033 8.0001C4.00033 7.86825 4.03942 7.73936 4.11268 7.62972C4.18593 7.52009 4.29005 7.43464 4.41187 7.38418C4.53369 7.33373 4.66773 7.32052 4.79705 7.34625C4.92637 7.37197 5.04516 7.43547 5.1384 7.5287C5.23163 7.62194 5.29513 7.74072 5.32085 7.87004C5.34657 7.99937 5.33337 8.13341 5.28291 8.25523C5.23245 8.37704 5.14701 8.48116 5.03737 8.55442C4.92774 8.62767 4.79885 8.66677 4.66699 8.66677C4.49018 8.66677 4.32061 8.59653 4.19559 8.47151C4.07056 8.34648 4.00033 8.17692 4.00033 8.0001ZM11.8803 4.00011L14.0003 4.00011C14.1771 4.00011 14.3467 3.92987 14.4717 3.80484C14.5968 3.67982 14.667 3.51025 14.667 3.33344C14.667 3.15663 14.5968 2.98706 14.4717 2.86203C14.3467 2.73701 14.1771 2.66677 14.0003 2.66677L11.8803 2.66677C11.7402 2.28067 11.4846 1.94708 11.1482 1.71133C10.8119 1.47559 10.4111 1.34912 10.0003 1.34912C9.58958 1.34912 9.18879 1.47559 8.85244 1.71133C8.51608 1.94708 8.26046 2.28067 8.12033 2.66677L2.00033 2.66677C1.82351 2.66677 1.65395 2.73701 1.52892 2.86203C1.4039 2.98706 1.33366 3.15663 1.33366 3.33344C1.33366 3.51025 1.4039 3.67982 1.52892 3.80484C1.65395 3.92987 1.82351 4.0001 2.00033 4.0001L8.12033 4.00011C8.26046 4.38621 8.51608 4.7198 8.85244 4.95554C9.18879 5.19129 9.58958 5.31776 10.0003 5.31776C10.4111 5.31776 10.8119 5.19129 11.1482 4.95554C11.4846 4.7198 11.7402 4.38621 11.8803 4.00011ZM9.33366 3.33344C9.33366 3.20158 9.37276 3.07269 9.44601 2.96306C9.51927 2.85343 9.62339 2.76798 9.7452 2.71752C9.86702 2.66706 10.0011 2.65386 10.1304 2.67958C10.2597 2.70531 10.3785 2.7688 10.4717 2.86203C10.565 2.95527 10.6285 3.07406 10.6542 3.20338C10.6799 3.3327 10.6667 3.46674 10.6162 3.58856C10.5658 3.71038 10.4803 3.8145 10.3707 3.88775C10.2611 3.96101 10.1322 4.00011 10.0003 4.00011C9.82351 4.00011 9.65395 3.92987 9.52892 3.80484C9.4039 3.67982 9.33366 3.51025 9.33366 3.33344Z" fill="#222222" />
                    </svg>
                </button>

                {/* sort  */}
                <div className={`${openFilter ? 'z-3' : "z-10"} relative bg-white rounded-lg`}>
                    <button onClick={() => setOpenSortButton(!openSortButton)} className={`${openSortButton ? 'border-b-0 rounded-b-none' : ''} bg-white flex-center w-[270px] px-5 py-4 rounded-lg border border-primary-gray-90 `}>
                        <span className='inline-block mr-auto'>
                            Saralash
                        </span>
                        <svg className={`${openSortButton ? '-rotate-180' : 'rotate-0'} transition-transform`} xmlns="http://www.w3.org/2000/svg" width="14" height="6" viewBox="0 0 14 6" fill="none">
                            <path d="M1 0.5L7 5.5L13 0.500001" stroke="#222222" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>

                    <ul className={`${openSortButton ? 'block' : 'hidden'} absolute bg-white w-[270px] border border-primary-gray-90 border-t-0 rounded-b-lg px-1 pb-1 space-y-1`}>
                        <li>
                            <button
                                onClick={() => {
                                    priceReduction && setPriceReduction(false);
                                    setPriceIncrease(!priceIncrease);
                                }}
                                className={`${priceIncrease ? 'bg-primary-gray-10' : 'bg-transparent'} text-start transition-colors text-primary-gray-70 py-2 rounded-lg px-4 w-full`}>Narxlar o'sish tartibida</button>
                        </li>
                        <li>
                            <button
                                onClick={() => {
                                    priceIncrease && setPriceIncrease(false);
                                    setPriceReduction(!priceReduction);
                                }}
                                className={`${priceReduction ? 'bg-primary-gray-10' : 'bg-transparent'} text-start transition-colors text-primary-gray-70 py-2 rounded-lg px-4 w-full`}>Narxlar kamayish tartibida</button>
                        </li>
                    </ul>
                </div>
            </div>


            {/* products */}
            <ul className="grid grid-cols-4 gap-8 max-1400:grid-cols-3 max-1050:grid-cols-2 max-730:grid-cols-1">
                {products.map((product) => {
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
                                <Link to={`/catalog/${categoryName}/${product.productTitle.toLowerCase().replace(/\s+/g, '-')}`} className="flex-center justify-center red-btn py-2.5 px-5 w-full bg-primary-red-60">Buyurtma berish</Link>
                                <button onClick={() => addToCard(product)} className="rounded-lg transition-colors-2 hover:button-hovered py-2.5 px-8 bg-transparent border-2 border-primary-red-60 ">
                                    <svg xmlns="http://www.w3.org/2000/svg" className='text-primary-red-60 transition-colors-2  ' width="24" height="24" viewBox="0 0 17 17" fill="none">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M8.53724 0.500039C6.42693 0.506342 4.70854 2.19779 4.66892 4.30762C4.66655 4.32905 4.66529 4.3506 4.66514 4.37214V5.0175H2.72908C2.37269 5.0175 2.08373 5.30641 2.08373 5.66285V10.8257C2.05805 11.6291 2.0872 12.4334 2.17086 13.2328C2.14479 13.9489 2.41783 14.6434 2.92461 15.1499C3.43139 15.6564 4.12606 15.9291 4.84207 15.9026C5.42416 15.9899 6.01342 16.0186 6.60119 15.9884L10.4733 15.9885C11.062 16.0187 11.6523 15.9896 12.2351 15.9013C12.9511 15.9275 13.6457 15.6544 14.1522 15.1477C14.6587 14.6409 14.9314 13.9462 14.9049 13.2302C14.9878 12.4316 15.0165 11.6282 14.9907 10.8257V5.66285C14.9907 5.30641 14.7018 5.0175 14.3454 5.0175H12.4093V4.37214C12.4095 4.34776 12.4082 4.32342 12.4055 4.29924C12.3611 2.19279 10.6442 0.506539 8.53732 0.5L8.53724 0.500039ZM8.53726 1.79074C9.22263 1.78853 9.8805 2.05977 10.3651 2.54437C10.8497 3.02894 11.1209 3.68685 11.1187 4.37214V5.01749H5.95586V4.37214C5.95357 3.68681 6.22488 3.02894 6.70945 2.54433C7.19401 2.05977 7.85197 1.7885 8.53726 1.79074V1.79074ZM3.37445 6.30822H4.66515V7.59892C4.66192 7.82955 4.78198 8.04433 4.98003 8.16238C5.17816 8.28047 5.42418 8.28386 5.62546 8.17132C5.82674 8.05879 5.9527 7.84739 5.95586 7.6168C5.95586 7.61121 5.95586 7.60475 5.95586 7.59892V6.30822H11.1187V7.59892C11.1154 7.82955 11.2355 8.04433 11.4335 8.16238C11.6317 8.28047 11.8777 8.28386 12.079 8.17132C12.2802 8.05879 12.4062 7.84739 12.4094 7.6168C12.4094 7.61121 12.4094 7.60475 12.4094 7.59892V6.30822H13.7001V10.8257C13.724 11.5795 13.6979 12.3341 13.622 13.0844C13.6819 13.5063 13.5401 13.9317 13.2389 14.2331C12.9378 14.5345 12.5124 14.6767 12.0905 14.6171C11.5557 14.701 11.0136 14.728 10.4732 14.6978H6.60121C6.06213 14.7285 5.52139 14.7023 4.98783 14.6197C4.56605 14.6797 4.14057 14.5378 3.83916 14.2367C3.53776 13.9355 3.39549 13.5102 3.45512 13.0883C3.378 12.3368 3.35106 11.5809 3.37445 10.8257V6.30822V6.30822Z" fill="currentColor" />
                                        <path d="M8.5 12.5V10.5M8.5 8.5V10.5M8.5 10.5H10.5H6.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </button>
                            </div>
                        </li>
                    )
                })}
            </ul>
            {
                productNotFound &&
                <div className='flex-center flex-col justify-center w-full space-y-2.5'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="140" height="140" viewBox="0 0 140 140" fill="none">
                        <path d="M105 131.25C121.914 131.25 135.625 117.539 135.625 100.625C135.625 83.7113 121.914 70 105 70C88.0863 70 74.375 83.7113 74.375 100.625C74.375 117.539 88.0863 131.25 105 131.25Z" stroke="#AE0712" strokeWidth="4" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M95.8125 91.4375L114.188 109.813" stroke="#AE0712" strokeWidth="4" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M95.8125 109.813L114.188 91.4375" stroke="#AE0712" strokeWidth="4" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M61.25 56.875C85.4125 56.875 105 47.0812 105 35C105 22.9188 85.4125 13.125 61.25 13.125C37.0875 13.125 17.5 22.9188 17.5 35C17.5 47.0812 37.0875 56.875 61.25 56.875Z" stroke="#AE0712" strokeWidth="4" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M105 70V35" stroke="#AE0712" strokeWidth="4" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M17.5 35V70C17.5 82.25 37.1875 91.875 61.25 91.875C66.5 91.875 71.3125 91.4375 76.125 90.5625" stroke="#AE0712" strokeWidth="4" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M17.5 70V105C17.5 117.25 37.1875 126.875 61.25 126.875C70 126.875 77.875 125.563 84.4375 123.375" stroke="#AE0712" strokeWidth="4" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <h3 className='text-center text-medium-28'>Afsuski bizda bunday mahsulot yo'q!</h3>
                    <p className="max-w-2xl text-center">Balki sizga boshqa mahsulotlarimiz yoqishi mumkindir. Mahsulotlarni qayta filtrlab ko'ring.
                    </p>
                    <div className="flex gap-5 flex-wrap justify-center">
                        {/* reset filter  */}
                        <button onClick={resetFilter} className="red-btn px-5 py-3.5">Mahsulotlarni asl holiga qaytarish</button>
                        <button onClick={() => setOpenFilter(true)} className="red-btn px-5 py-3.5">Mahsulotlarni qayta filtrlash</button>
                    </div>
                </div>
            }
        </div >
    )
};

export default Products;