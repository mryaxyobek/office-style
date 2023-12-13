import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

// data
import { articles } from '../assets/data';

const Article = () => {
    const navigate = useNavigate();
    const { articleName } = useParams();
    const article = articles.find((article) => article.title.toLowerCase().replace(/\s+/g, '-') === articleName);



    // random articles
    const randomArticles = [].filter((e) => e.id === e.id);
    for (let i = 0; i < articles.length; i++) {
        const randomIndex = Math.floor(Math.random() * articles.length);
        const randomArticle = articles[randomIndex];
        if (!randomArticles.some(article => article.id === randomArticle.id)) {
            randomArticles.push(randomArticle);
        };
    };


    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <>
            <section className='pt-20 max-1300:pt-16 max-1050:pt-10 max-900:pt-8 pb-60r max-730:pt-6 max-540:pt-4 max-440:pt-0'>
                <div className="container max-470:px-0">
                    {/* breadcrumb  */}
                    <ul className="breadcrumb max-470:px-5">
                        <li>
                            <Link to='/articles'>Maqolalar</Link>
                        </li>
                        <li>
                            <span>{article.title}</span>
                        </li>
                    </ul>

                    {/* title  */}
                    <h2 className="text-regular-36 mb-14 max-1150:mb-12 max-900:mb-10 max-900:text-regular-32 max-730:mb-9 max-440:mb-8 max-440:text-medium-28 max-470:px-5">{article.title}</h2>


                    {/* main content  */}
                    <div className="flex-start justify-between gap-5 max-1050:flex-col">
                        {/* first child */}
                        <div className="max-w-1312px w-full">
                            <div className="space-y-6 mb-12 max-470:px-5">
                                {/* hashtags */}
                                <ul className="flex-center gap-3 flex-wrap">
                                    {
                                        article.hashtags.map((hashtag, index) => {
                                            return (
                                                <li key={index} className="text-regular-16 text-primary-gray-70">#{hashtag}</li>
                                            )
                                        })
                                    }
                                </ul>

                                {/* bg img */}
                                <img width={1312} height={513} src={article.images.imgLarge.img} alt={article.images.imgLarge.alt} className="w-full h-513px object-center object-cover rounded-2.5xl max-640:h-80 max-640:rounded-2xl max-540:h-64 max-540:rounded-lg max-470:h-40 max-470:rounded-md max-440:h-32 max-440:rounded" />
                            </div>

                            {/* description */}
                            <div className="space-y-8">
                                {
                                    article.description.map((text, index) => {
                                        return (
                                            text.id <= 1 &&
                                            <p key={index} className="text-regular-16 text-primary-gray-70 max-470:px-5">{text.body}</p>
                                        )
                                    })
                                }

                                {/* cta */}
                                <div className="flex-c-b rounded-2.5xl py-9 px-60px bg-primary-gray-80 max-1450:flex-col gap-5 max-640:py-5 max-640:px-8 max-580:py-8 max-580:px-5">
                                    <h3 className="text-white text-medium-28 max-w-xl max-1450:text-center max-900:text-medium-24 max-440:text-medium-20">Kelajakdagi ofisingizning bepul dizayn eskizini oling</h3>

                                    {/* form  */}
                                    <form
                                        onSubmit={(e) => {
                                            e.preventDefault();
                                            navigate('/message/request-sent');
                                        }}
                                        className="flex items-end gap-8 max-w-xl w-full max-580:flex-col max-440:gap-6"
                                    >
                                        <div className='grow max-580:w-full'>
                                            <label htmlFor='telInput' className="inline-block mb-2 text-regular-14 text-white">Telefon raqamingiz*</label>
                                            <input autoComplete='off' id='telInput' maxLength={16} name='telefon raqam' placeholder='+998 (99) 999-99-99' required type="tel" className='leading-17.5px!' />
                                        </div>
                                        <button className="red-btn py-3.5 px-6 text-regular-16 min-w-max max-580:w-full">
                                            Eskizni olish
                                        </button>
                                    </form>
                                </div>

                                {
                                    article.description.map((text, index) => {
                                        return (
                                            text.id > 1 &&
                                            <p key={index} className="text-regular-16 text-primary-gray-70 max-470:px-5">{text.body}</p>
                                        )
                                    })
                                }
                            </div>
                        </div>

                        {/* last child */}
                        <ul className="grid grid-cols-1 gap-10 max-w-336px pt-11 max-1050:grid-cols-3 max-1050:max-w-full max-940:gap-6 max-800:grid-cols-2 max-640:grid-cols-1 max-640:min-w-full max-470:px-5">
                            {

                                randomArticles.map((e, index) => {
                                    if (index < 4) {
                                        return (
                                            <li key={index}>
                                                <Link to={`/articles/${e.title.toLowerCase().replace(/\s+/g, '-')}`}>
                                                    <img width={416} height={210} src={e.images.imgMedium.img} alt={e.images.imgMedium.alt} className="w-full h-210px object-cover object-center mb-6 rounded-2.5xl max-640:h-340px max-470:h-210px" />
                                                    <div className="space-y-3">
                                                        <span className="text-regular-14 text-primary-gray-70">{e.date}</span>
                                                        <p className="text-regular-20 text-primary-gray-90">{e.title}</p>
                                                        <div className="flex flex-wrap gap-3">
                                                            {
                                                                e.hashtags.map((hashtag) => {
                                                                    return (
                                                                        <span key={hashtag} className="text-regular-14 text-primary-gray-70">#{hashtag}</span>
                                                                    )
                                                                })
                                                            }
                                                        </div>
                                                    </div></Link>
                                            </li>
                                        )
                                    }
                                })
                            }
                        </ul>
                    </div>
                </div>
            </section>
        </>
    )
};

export default Article;