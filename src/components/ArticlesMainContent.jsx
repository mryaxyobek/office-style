import React from 'react';

// data 
import { articles } from '../assets/data';
import { Link } from 'react-router-dom';

const ArticlesMainContent = () => {
    return (
        <div className='pt-36r pb-60r'>
            <div className="container space-y-14 max-900:space-y-10 max-440:space-y-8">
                {/* title  */}
                <h1>Maqolalar</h1>

                {/* filter  */}
                <div className="flex flex-wrap gap-5">
                    <button className="py-2 px-5 rounded-full bg-primary-red-60 text-white">Barchasi</button>
                    <button className="py-2 px-5 rounded-full bg-primary-gray-10 text-primary-gray-70">Ideya</button>
                    <button className="py-2 px-5 rounded-full bg-primary-gray-10 text-primary-gray-70">Mashxur</button>
                    <button className="py-2 px-5 rounded-full bg-primary-gray-10 text-primary-gray-70">Yangi</button>
                </div>

                {/* article  */}
                <ul className="grid grid-cols-4 gap-8 max-1450:grid-cols-3 max-940:grid-cols-2 max-670:grid-cols-1">
                    {
                        articles.map((e) => {
                            return (
                                <li key={e.id}>
                                    <Link to='article-name' rel='noopener'>
                                        <img width={416} height={260} src={e.img} alt={e.imgName} className="w-full h-260px object-cover object-center mb-6 rounded-2.5xl max-670:h-80 max-540:h-64 max-360:h-52" />
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