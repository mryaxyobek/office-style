import React from 'react';
import { articles } from '../assets/data';

const Articles = () => {
    return (
        <section className='py-60px'>
            <div className="container">
                <h2 className="mb-60px">Статьи</h2>
                <ul className="grid grid-cols-4 gap-8">
                    {
                        articles.map((e) => {
                            if (e.id <= 4) {
                                return (
                                    <li key={e.id}>
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
                                    </li>
                                )
                            }
                        })
                    }
                </ul>
            </div>
        </section>
    )
};

export default Articles;