import Link from 'antd/es/typography/Link';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { closeAddReviewModal } from '../store/slices/modalSlice';
import addReview from '../assets/images/other/add-review.png';

const CallModal = () => {
    const dispatch = useDispatch();

    // close modal
    const closeAddReviewModalFunction = () => {
        dispatch(closeAddReviewModal());
    };

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeAddReviewModalFunction();
        };
    });


    // for rating
    const [ratingStarsValue, setRatingStarsValue] = useState(0);
    return (
        <>
            {/* modal parent  */}
            <div className="flex-center' flex-center fixed justify-center top-0 right-0 w-full h-screen z-10">
                {/* overlay */}
                <div onClick={closeAddReviewModalFunction} className={`justify-center fixed bg-black bg-opacity-75 w-full min-h-screen top-0 right-0 z-1`}></div>

                {/* modal wrapper */}
                <div className="flex relative w-full max-w-1088px h-full max-h-640px max-730:justify-center max-580:max-h-full">
                    {/* close modal button */}
                    <button onClick={closeAddReviewModalFunction} className="absolute red-btn top-5 right-5 z-5">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M13.4099 12.0002L17.7099 7.71019C17.8982 7.52188 18.004 7.26649 18.004 7.00019C18.004 6.73388 17.8982 6.47849 17.7099 6.29019C17.5216 6.10188 17.2662 5.99609 16.9999 5.99609C16.7336 5.99609 16.4782 6.10188 16.2899 6.29019L11.9999 10.5902L7.70994 6.29019C7.52164 6.10188 7.26624 5.99609 6.99994 5.99609C6.73364 5.99609 6.47824 6.10188 6.28994 6.29019C6.10164 6.47849 5.99585 6.73388 5.99585 7.00019C5.99585 7.26649 6.10164 7.52188 6.28994 7.71019L10.5899 12.0002L6.28994 16.2902C6.19621 16.3831 6.12182 16.4937 6.07105 16.6156C6.02028 16.7375 5.99414 16.8682 5.99414 17.0002C5.99414 17.1322 6.02028 17.2629 6.07105 17.3848C6.12182 17.5066 6.19621 17.6172 6.28994 17.7102C6.3829 17.8039 6.4935 17.8783 6.61536 17.9291C6.73722 17.9798 6.86793 18.006 6.99994 18.006C7.13195 18.006 7.26266 17.9798 7.38452 17.9291C7.50638 17.8783 7.61698 17.8039 7.70994 17.7102L11.9999 13.4102L16.2899 17.7102C16.3829 17.8039 16.4935 17.8783 16.6154 17.9291C16.7372 17.9798 16.8679 18.006 16.9999 18.006C17.132 18.006 17.2627 17.9798 17.3845 17.9291C17.5064 17.8783 17.617 17.8039 17.7099 17.7102C17.8037 17.6172 17.8781 17.5066 17.9288 17.3848C17.9796 17.2629 18.0057 17.1322 18.0057 17.0002C18.0057 16.8682 17.9796 16.7375 17.9288 16.6156C17.8781 16.4937 17.8037 16.3831 17.7099 16.2902L13.4099 12.0002Z" fill="#fff" />
                        </svg>
                    </button>

                    {/* form (main content, modal) */}
                    <form action="https://echo.htmlacademy.ru" className="flex flex-col overflow-y-auto bg-white z-2 py-8 px-12 w-1/2 rounded-2.5xl hidden-scroll max-800:px-8 max-800:py-6 max-730:w-full max-730:max-w-md max-580:max-w-full max-540:px-5 max-580:rounded-none max-580:h-full">
                        <div className="my-auto">
                            {/* title  */}
                            <h3 className="text-center max-w-md mx-auto text-medium-28 mb-3">Sharx qoldirish</h3>
                            <p className="text-center text-primary-gray-70 mb-8 max-440:text-regular-16">Sizning elektron pochtangiz saytda chop etilmaydi. Majburiy maydonlar belgilangan*</p>

                            {/* main  */}
                            <div className="space-y-6 mb-8">
                                {/* name */}
                                <div>
                                    <label htmlFor='addReviewModalNameInput' className="inline-block mb-2 text-regular-14 text-primary-gray-70">Ismingiz*</label>
                                    <input autoComplete='off' id='addReviewModalNameInput' name='user name' placeholder='Ismingiz' required type="text" className='leading-17.5px!' />
                                </div>

                                {/* email */}
                                <div>
                                    <label htmlFor='addReviewModalEmailInput' className="inline-block mb-2 text-regular-14 text-primary-gray-70">E-pochtangiz*</label>
                                    <input autoComplete='off' id='addReviewModalEmailInput' name='email' placeholder='E-pochtangiz' required type="email" className='leading-17.5px!' />
                                </div>

                                {/* product */}
                                <div>
                                    <label htmlFor='addReviewModalProductInput' className="inline-block mb-2 text-regular-14 text-primary-gray-70">Qanday mahsulot buyurtma qildingiz*</label>
                                    <input autoComplete='off' id='addReviewModalProductInput' name='product' placeholder='Masalan: Boshqaruvchi kabineti Gamm...' required type="text" className='leading-17.5px!' />
                                </div>

                                {/* rating */}
                                <div className='w-full'>
                                    <label htmlFor="rating" className='mb-2 text-regular-14'>Mahsulotni baholang</label>

                                    {/* starts  */}
                                    <div className="flex-center space-x-0.5">
                                        <label>
                                            <input onChange={() => setRatingStarsValue(1)} className='hidden' type="radio" name='rating number' value={1} />
                                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 20 19" fill="none"><path d="M10 0L12.2451 6.90983H19.5106L13.6327 11.1803L15.8779 18.0902L10 13.8197L4.12215 18.0902L6.36729 11.1803L0.489435 6.90983H7.75486L10 0Z" fill={`${ratingStarsValue > 0 ? '#FFA800' : '#808080'}`} /></svg>
                                        </label>

                                        <label>
                                            <input onChange={() => setRatingStarsValue(2)} className='hidden' type="radio" name='rating number' value={2} />
                                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 20 19" fill="none"><path d="M10 0L12.2451 6.90983H19.5106L13.6327 11.1803L15.8779 18.0902L10 13.8197L4.12215 18.0902L6.36729 11.1803L0.489435 6.90983H7.75486L10 0Z" fill={`${ratingStarsValue > 1 ? '#FFA800' : '#808080'}`} /></svg>
                                        </label>
                                        <label>
                                            <input onChange={() => setRatingStarsValue(3)} className='hidden' type="radio" name='rating number' value={3} />
                                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 20 19" fill="none"><path d="M10 0L12.2451 6.90983H19.5106L13.6327 11.1803L15.8779 18.0902L10 13.8197L4.12215 18.0902L6.36729 11.1803L0.489435 6.90983H7.75486L10 0Z" fill={`${ratingStarsValue > 2 ? '#FFA800' : '#808080'}`} /></svg>
                                        </label>
                                        <label>
                                            <input onChange={() => setRatingStarsValue(4)} className='hidden' type="radio" name='rating number' value={4} />
                                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 20 19" fill="none"><path d="M10 0L12.2451 6.90983H19.5106L13.6327 11.1803L15.8779 18.0902L10 13.8197L4.12215 18.0902L6.36729 11.1803L0.489435 6.90983H7.75486L10 0Z" fill={`${ratingStarsValue > 3 ? '#FFA800' : '#808080'}`} /></svg>
                                        </label>
                                        <label>
                                            <input id='rating' onChange={() => setRatingStarsValue(5)} className='hidden' type="radio" name='rating number' value={5} />
                                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 20 19" fill="none"><path d="M10 0L12.2451 6.90983H19.5106L13.6327 11.1803L15.8779 18.0902L10 13.8197L4.12215 18.0902L6.36729 11.1803L0.489435 6.90983H7.75486L10 0Z" fill={`${ratingStarsValue > 4 ? '#FFA800' : '#808080'}`} /></svg>
                                        </label>
                                    </div>
                                </div>

                                {/* comment text */}
                                <div>
                                    <label htmlFor='addReviewModalTextarea' className="inline-block mb-2 text-regular-14 text-primary-gray-70">Xabar matni*</label>
                                    <textarea autoComplete='off' id='addReviewModalTextarea' name='comment text' required className='leading-17.5px! h-24 resize-none' ></textarea>
                                </div>
                                <button className="red-btn w-full text-regular-16 py-3.5">Buyurtma berish</button>
                            </div>

                            <p className="text-regular-12 text-center">Saytga ma'lumot yuborish orqali siz <Link className='!text-primary-red-50' to='/processing-of-personal-data'>Shaxsiy ma'lumotlarni himoya qilish siyosati shartlarini qabul qilasiz</Link></p>
                        </div>
                    </form>

                    {/* image */}
                    <img src={addReview} width={600} height={640} alt='add review image' className="absolute z-1 right-0 rounded-r-2.5xl top-0 h-full w-52% object-cover object-right-top max-730:hidden" />
                </div >
            </div >
        </>
    )
};

export default CallModal;