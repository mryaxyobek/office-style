import React, { useState } from 'react';
import recaptchaImg from '../assets/images/other/recaptcha.png';

const AddComment = () => {
    const [ratingStarsValue, setRatingStarsValue] = useState(0);
    return (
        <section className='pt-60px pb-120px'>
            <div className="flex flex-col container items-center">
                <h2 className="mb-5">Оставить отзыв</h2>
                <p className="mb-14 max-w-763px text-regular-24 text-primary-gray-70 mx-auto text-center">Ваш e-mail не будет опубликован на сайте. Обязательные поля для заполнения помечены *</p>

                {/* form */}
                <form action="https://echo.htmlacademy.ru" className="flex flex-col items-center rounded-2.5xl space-y-6 bg-primary-gray-04 p-12 max-w-1088px">
                    {/* main content  */}
                    <div className="grid grid-cols-2 gap-8 mb-6">
                        {/* 1 */}
                        <div className="space-y-5">
                            {/* name  */}
                            <div>
                                <label htmlFor="commentNameInput" className='mb-2 text-regular-14'>Фамилия и имя*</label>
                                <input name='user name' type="text" id='commentNameInput' placeholder='Например: Иван' className='w-480px' required />
                            </div>
                            {/* email  */}
                            <div>
                                <label htmlFor="commentEmilInput" className='mb-2 text-regular-14'>Ваш e-mail*</label>
                                <input name='user email' type="email" id='commentEmilInput' placeholder='Например: ivan@mail.ru' className='w-480px' required />
                            </div>
                            {/* product */}
                            <div>
                                <label htmlFor="commentProductInput" className='mb-2 text-regular-14'>Что заказывали?*</label>
                                <input name='product' type="text" id='commentProductInput' placeholder='Например: Мебель для персонала Metall S...' className='w-480px' required />
                            </div>
                            {/* rating  */}
                            <div>
                                <label htmlFor="rating" className='mb-2 text-regular-14'>Что заказывали?*</label>

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
                        <div className="space-y-5">
                            {/* comment  */}
                            <div>
                                <label htmlFor="commentText" className="mb-2 text-regular-14">Текст отзыва*</label>
                                <textarea required id='commentText' name="comment text" className='resize-none h-254px'></textarea>
                            </div>

                            {/* captcha  */}
                            <img width={335} height={90} src={recaptchaImg} alt="this is image recaptcha security" className="" />
                        </div>
                    </div>

                    {/* bottom */}
                    <p className="text-center text-regular-12 text-primary-gray-70">
                        *Передавая информацию сайту, Вы принимаете условия <a className="text-primary-red-50">Политики защиты персональной информации</a>
                    </p>

                    <button className='red-btn py-3.5 px-6 text-regular-16 mx-auto'>Отправить отзыв</button>
                </form>
            </div>
        </section>
    )
};

export default AddComment;