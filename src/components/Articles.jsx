import React from 'react';
import { articles } from '../assets/data';

const Articles = () => {
    return (
        <section className='py-60r'>
            <div className="container w-full">
                <h2 className="mb-60r">Maqolalar</h2>
                <ul className="flex gap-8 w-full overflow-x-auto gray-scroll max-1800:pb-60r">
                    {
                        articles.map((e) => {
                            if (e.id <= 4) {
                                return (
                                    <li key={e.id} className='min-w-416px max-470:min-w-300px'>
                                        <img width={416} height={260} src={e.img} alt={e.imgName} className="w-416px h-260px object-cover object-center mb-6 rounded-2.5xl max-470:w-300px max-470:h-52 max-360:h-175px" />
                                        <div className="space-y-3">
                                            <span className="text-regular-14 text-primary-gray-70">{e.date}</span>
                                            <p className="text-regular-20 text-primary-gray-90 max-470:text-medium-20">{e.description}</p>
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