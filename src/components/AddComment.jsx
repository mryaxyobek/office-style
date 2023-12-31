import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import ReCAPTCHA from 'react-google-recaptcha';
const AddComment = () => {
    const navigate = useNavigate();
    const [ratingStarsValue, setRatingStarsValue] = useState(0);
    const [notARobot, setNotARobot] = useState(false);
    function onChange(value) {
        if (value !== null) {
            setNotARobot(true);
        } else {
            alert('Iltimos inson ekanligingizni tasdiqlang');
            setNotARobot(false);
        };
    };

    return (
        <section className='pt-60r pb-120r'>
            <div className="flex flex-col container items-center max-440:px-0">
                <h2 className="mb-5 max-440:px-5">Sharh qoldirish</h2>
                <p className="mb-14 max-w-763px text-regular-24 text-primary-gray-70 mx-auto text-center max-440:px-5">Sizning elektron pochtangiz saytda chop etilmaydi. Majburiy maydonlar belgilangan</p>

                {/* form */}
                <form
                    onSubmit={() => navigate('/message/comment-submitted')}
                    className="flex flex-col items-center rounded-2.5xl space-y-6 bg-primary-gray-04 p-12 max-w-1088px w-full max-800:p-8 max-540:p-5"
                >
                    {/* main content  */}
                    <div className="flex gap-8 mb-6 w-full max-730:flex-col">
                        {/* 1 */}
                        <div className="space-y-5 w-full max-800:space-y-2 max-730:space-y-5">
                            {/* name  */}
                            <div className='w-full'>
                                <label htmlFor="commentNameInput" className='mb-2 text-regular-14'>Ism yoki familiya</label>
                                <input name='user name' type="text" id='commentNameInput' placeholder='ismingizni kiriting' required />
                            </div>
                            {/* email  */}
                            <div className='w-full'>
                                <label htmlFor="commentEmilInput" className='mb-2 text-regular-14'>E-pochta</label>
                                <input name='user email' type="email" id='commentEmilInput' placeholder='e-pochta manzilingizni kiritng' required />
                            </div>
                            {/* product */}
                            <div className='w-full'>
                                <label htmlFor="commentProductInput" className='mb-2 text-regular-14'>Nima buyurdingiz?</label>
                                <input name='product' type="text" id='commentProductInput' placeholder='qanday mahsulot olganingiz haqida yozing' required />
                            </div>
                            {/* rating  */}
                            <div className='w-full'>
                                <label htmlFor="rating" className='mb-2 text-regular-14'>Bizni baholang</label>

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
                        </div>

                        {/* 2 */}
                        <div className="space-y-5 w-full">
                            {/* comment  */}
                            <div>
                                <label htmlFor="commentText" className="mb-2 text-regular-14">Fikringizni yozing</label>
                                <textarea required id='commentText' name="comment text" className='resize-none h-254px max-800:h-229.5px max-730:h-254px'></textarea>
                            </div>

                            {/* captcha  */}
                            <ReCAPTCHA
                                sitekey="6Lc0Pi0pAAAAAFuRiKfyvf8I7Vtjf88ssRWwnvGH"
                                onChange={onChange}
                                className='w-[300px] h-[75px] bg-primary-gray-20 rounded-md'
                            />
                        </div>
                    </div>

                    {/* bottom */}
                    <p className="text-center text-regular-12 text-primary-gray-70">
                        *Saytga ma'lumot yuborish orqali siz <Link to='/policy' className='text-primary-red-60'>Shaxsiy ma'lumotlarni himoya qilish siyosati shartlarini qabul qilasiz</Link>
                    </p>

                    <button type={notARobot ? 'submit' : 'button'} className='red-btn py-3.5 px-6 text-regular-16 mx-auto max-540:w-full'>Sharhni yuborish</button>
                </form>
            </div>
        </section>
    )
};

export default AddComment;