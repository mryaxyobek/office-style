import React, { useState } from 'react';
import { productTabButtonsGroup, cabinetProductsForManagers } from '../assets/data';
import { useParams } from 'react-router-dom';


const ProductDetails = () => {
    // product 
    const { productName } = useParams();
    const allProducts = [...cabinetProductsForManagers];
    const product = allProducts.find((product) => productName === product.productTitle.toLowerCase().replace(/\s+/g, '-'));


    const [Position, setPosition] = useState(4);
    const [Width, setWidth] = useState(117);
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

                {/* tab  */}
                <div className="overflow-x-auto hidden-scroll mb-8 max-580:mb-5">
                    <div className="flex-center bg-primary-gray-04 p-1 relative rounded-lg max-w-max min-w-max">
                        {/* shape  */}
                        <div style={{ left: Position + 'px', width: Width + 'px' }} className={`transition-all duration-300 absolute left-1 top-1 h-10 w-14 rounded-lg bg-primary-gray-70 z-1`}></div>

                        {/* buttons  */}
                        {productTabButtonsGroup.map((button) => {
                            return (
                                <button style={{ color: buttonId == button.id ? 'white' : '#4D4D4D' }} key={button.id} onClick={func} className="relative px-4 pt-2.5 pb-3 transition-colors-2 text-regular-14 z-2" id={button.id}>{button.text}</button>
                            )
                        })}
                    </div>
                </div>

                {/* details  */}
                {
                    buttonId == 1 &&
                    <ul className='max-w-5xl'>
                        <li className="flex py-3 gap-5">
                            <span className="text-primary-gray-70 w-1/2">Material</span>
                            <span className='w-1/2'>{product.details.material}</span>
                        </li>
                        <li className="flex py-3 gap-5">
                            <span className="text-primary-gray-70 w-1/2">Ishlab chiqarilgan davlat</span>
                            <span className='w-1/2'>{product.details.country}</span>
                        </li>
                        <li className="flex py-3 gap-5">
                            <span className="text-primary-gray-70 w-1/2">Qalinlik</span>
                            <span className='w-1/2'>{product.details.thickness} (sm)</span>
                        </li>
                        <li className="flex py-3 gap-5">
                            <span className="text-primary-gray-70 w-1/2">Rangi</span>
                            <span className='w-1/2'>{product.details.color}</span>
                        </li>
                        <li className="flex py-3 gap-5">
                            <span className="text-primary-gray-70 w-1/2">Stil</span>
                            <span className='w-1/2'>{product.details.style}</span>
                        </li>
                    </ul>
                }
                {
                    buttonId == 2 &&
                    <p className="max-w-5xl max-440:text-regular-16">
                        {product.description}
                    </p>
                }
                {
                    buttonId == 3 &&
                    <div className="overflow-x-auto gray-scroll max-1800:pb-60r">
                        <ul className="flex gap-8 min-w-max">
                            {
                                product.completedProjects.map((img) => {
                                    return (
                                        <li key={img.id}>
                                            <img width={416} height={340} src={img.img} alt="brown color furniture" className="w-416px h-340px rounded-2.5xl object-cover object-center max-540:w-300px max-540:h-300px" />
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                }
                {
                    buttonId == 4 &&
                    <div className='space-y-8'>
                        <ul className="grid grid-cols-1 gap-8 max-w-1088px">
                            {
                                product.reviews.map((e) => {
                                    return (
                                        <li key={e.id} className='space-y-6 p-8 rounded-2.5xl border border-primary-gray-10 max-670:p-7 max-470:p-4'>
                                            {/* about  */}
                                            <div className="space-y-3">
                                                <h3 className='text-regular-18'>{e.userName}</h3>
                                                <div className="flex-center space-x-0.5 mb-3">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 19" fill="none"><path d="M10 0L12.2451 6.90983H19.5106L13.6327 11.1803L15.8779 18.0902L10 13.8197L4.12215 18.0902L6.36729 11.1803L0.489435 6.90983H7.75486L10 0Z" fill={`${e.rating > 0 ? '#FFA800' : '#808080'}`} /></svg>

                                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 19" fill="none"><path d="M10 0L12.2451 6.90983H19.5106L13.6327 11.1803L15.8779 18.0902L10 13.8197L4.12215 18.0902L6.36729 11.1803L0.489435 6.90983H7.75486L10 0Z" fill={`${e.rating > 1 ? '#FFA800' : '#808080'}`} /></svg>

                                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 19" fill="none"><path d="M10 0L12.2451 6.90983H19.5106L13.6327 11.1803L15.8779 18.0902L10 13.8197L4.12215 18.0902L6.36729 11.1803L0.489435 6.90983H7.75486L10 0Z" fill={`${e.rating > 2 ? '#FFA800' : '#808080'}`} /></svg>

                                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 19" fill="none"><path d="M10 0L12.2451 6.90983H19.5106L13.6327 11.1803L15.8779 18.0902L10 13.8197L4.12215 18.0902L6.36729 11.1803L0.489435 6.90983H7.75486L10 0Z" fill={`${e.rating > 3 ? '#FFA800' : '#808080'}`} /></svg>

                                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 19" fill="none"><path d="M10 0L12.2451 6.90983H19.5106L13.6327 11.1803L15.8779 18.0902L10 13.8197L4.12215 18.0902L6.36729 11.1803L0.489435 6.90983H7.75486L10 0Z" fill={`${e.rating > 4 ? '#FFA800' : '#808080'}`} /></svg>
                                                </div>
                                            </div>

                                            {/* commment  */}
                                            <p className="text-primary-gray-70">{e.body}</p>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                        <button className="flex justify-center red-btn py-3.5 px-4 text-regular-16 max-w-max max-470:max-w-none max-470:w-full">Sharx qoldirish</button>
                    </div>
                }
                {
                    buttonId == 5 &&
                    <div>
                        <h3 className="text-regular-20 mb-5">Yetkazib berish</h3>
                        <ul className="grid grid-cols-1 gap-6 max-w-745px text-primary-gray-70 mb-8">
                            <li>
                                <h4 className="text-black text-regular-16">Toshkent bo'ylab yetkazib berish</h4>
                                <p className='text-regular-16'>Narxi 100.000 so'mdan, ombordada mavjud bo'lgan mebel bir soat ichida yetkazib beriladi, biz sizga buyurtmani joylashtirishda aniq vaqt haqida xabar beramiz.</p>
                            </li>
                            <li>
                                <h4 className="text-black text-regular-16">Boshqa hududlar</h4>
                                <p className='text-regular-16'>Xarajat va shartlarni alohida hisoblab chiqamiz, batafsil ma'lumot uchun mutaxassislarimizga murojaat qiling.</p>
                            </li>
                            <li>
                                <h4 className="text-black text-regular-16">Kompaniyadan olib ketish</h4>
                                <p className='text-regular-16'>Buyurtmani quyidagi manzildan olishingiz mumkin: <br />
                                    Toshkent, Olmaliq K: No312
                                    <br /><br />
                                    Ish vaqti:
                                    ish kunlari 09:00 dan 18:00 gacha, yakshanba kuni 10:00 dan 15:00 gacha.</p>
                            </li>
                        </ul>
                    </div>
                }
                {
                    buttonId == 6 &&
                    <div>
                        <h3 className="text-regular-20 mb-5">To'lov</h3>
                        <ul className="grid grid-cols-1 gap-6 max-w-745px text-primary-gray-70">
                            <li>
                                <h4 className="text-black text-regular-16">Bank kartasi</h4>
                                <p className='text-regular-16'>Buyurtmani veb-saytda yoki qabul qilishda, shuningdek onlayn-do'kon ofisida joylashtirishda.</p>
                            </li>
                            <li>
                                <h4 className="text-black text-regular-16">Internet xizmatlari orqali</h4>
                                <p className='text-regular-16'>Onlayn xaridlar uchun to'lovni amalga olishirishingiz mumkin.</p>
                            </li>
                            <li>
                                <h4 className="text-black text-regular-16">Naqd pul</h4>
                                <p className='text-regular-16'>Sizning shahringizda yoki onlayn do'kon ofisida tovarlarni qabul qilishda to'lovni amalga olishirishingiz mumkin.
                                    QQS bilan yoki QQSsiz</p>
                            </li>
                        </ul>
                    </div>
                }
                {
                    buttonId == 7 &&
                    <div>
                        <h3 className="text-regular-20 mb-5">Assambleya</h3>
                        <ul className="grid grid-cols-1 gap-6 max-w-745px text-primary-gray-70">
                            <li>
                                <h4 className="text-black text-regular-16">Buyurtma miqdorining 5% dan 9% gacha bo'lgan xarajatlar</h4>
                                <p className='text-regular-16'>Narx mebel seriyasiga bog'liq - menejer tafsilotlarni muhokama qilishda aniq xarajatlarni hisoblab chiqadi.</p>
                            </li>
                            <li>
                                <h4 className="text-black text-regular-16">Barcha mamlakat viloyatlari bo'ylab</h4>
                                <p className='text-regular-16'>Biz butun mamlakat bo'ylab ishonchli montajchilar bilan hamkorlik qilamiz.</p>
                            </li>
                        </ul>
                    </div>
                }
            </div>
        </section>
    )
};

export default ProductDetails;