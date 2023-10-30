import React from 'react';

// data 
import { articles } from '../assets/data';
import { Link } from 'react-router-dom';

const ArticlesMainContent = () => {
    return (
        <div className='pt-36 pb-60px'>
            <div className="container space-y-14">
                {/* title  */}
                <h1>Статьи</h1>

                {/* filter  */}
                <div className="space-x-5">
                    <button className="py-2 px-5 rounded-full bg-primary-red-60 text-white">Все</button>
                    <button className="py-2 px-5 rounded-full bg-primary-gray-10 text-primary-gray-70">Идеи</button>
                    <button className="py-2 px-5 rounded-full bg-primary-gray-10 text-primary-gray-70">Тренды</button>
                    <button className="py-2 px-5 rounded-full bg-primary-gray-10 text-primary-gray-70">Новинки</button>
                </div>

                {/* article  */}
                <ul className="grid grid-cols-4 gap-8">
                    {
                        articles.map((e) => {
                            return (
                                <li key={e.id}>
                                    <Link to='article-name' rel='noopener'>
                                        <img width={416} height={260} src={e.img} alt={e.imgName} className="w-416px h-260px object-cover object-center mb-6 rounded-2.5xl" />
                                        <div className="space-y-3">
                                            <span className="text-regular-14 text-primary-gray-70">{e.date}</span>
                                            <p className="text-regular-20 text-primary-gray-90">{e.description}</p>
                                            <div className="flex flex-wrap gap-3">
                                                {
                                                    e.hashtags.map((hashtag) => {
                                                        return (
                                                            <span key={hashtag} className="text-regular-14 text-primary-gray-70">{hashtag}</span>
                                                        )
                                                    })
                                                }
                                            </div>
                                        </div>
                                    </Link>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    )
};

export default ArticlesMainContent;