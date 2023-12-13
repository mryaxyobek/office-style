import React, { useEffect, useState } from 'react';

// data 
import { articles } from '../assets/data';
import { Link } from 'react-router-dom';

const ArticlesMainContent = () => {
    const [allArticles, setAllArticles] = useState(articles);
    const [articleType, setArticleType] = useState('all');
    useEffect(() => {
        if (articleType === 'idea') {
            setAllArticles(articles.filter(article => article.hashtags.some(hashtag => hashtag.toLowerCase() === 'ideya')));
        } else if (articleType === 'popular') {
            setAllArticles(articles.filter(article => article.hashtags.some(hashtag => hashtag.toLowerCase() === 'mashxur')));
        } else if (articleType === 'new') {
            setAllArticles(articles.filter(article => article.hashtags.some(hashtag => hashtag.toLowerCase() === 'yangi')));
        } else {
            setAllArticles(articles);
        }
    }, [articleType])
    return (
        <div className='pt-36r pb-60r'>
            <div className="container space-y-14 max-900:space-y-10 max-440:space-y-8">
                {/* title  */}
                <h1>Maqolalar</h1>

                {/* filter  */}
                <div className="flex flex-wrap gap-5">
                    <button onClick={() => setArticleType('all')} className={`${(articleType === 'all') ? 'bg-primary-red-60 text-white' : 'bg-primary-gray-10 text-primary-gray-70'} py-2 px-5 rounded-full transition-colors-2`}>Barchasi</button>
                    <button onClick={() => setArticleType('idea')} className={`${(articleType === 'idea') ? 'bg-primary-red-60 text-white' : 'bg-primary-gray-10 text-primary-gray-70'} py-2 px-5 rounded-full transition-colors-2`}>Ideya</button>
                    <button onClick={() => setArticleType('popular')} className={`${(articleType === 'popular') ? 'bg-primary-red-60 text-white' : 'bg-primary-gray-10 text-primary-gray-70'} py-2 px-5 rounded-full transition-colors-2`}>Mashxur</button>
                    <button onClick={() => setArticleType('new')} className={`${(articleType === 'new') ? 'bg-primary-red-60 text-white' : 'bg-primary-gray-10 text-primary-gray-70'} py-2 px-5 rounded-full transition-colors-2`}>Yangi</button>
                </div>

                {/* article  */}
                <ul className="grid grid-cols-4 gap-8 max-1450:grid-cols-3 max-940:grid-cols-2 max-670:grid-cols-1">
                    {
                        allArticles.map((e) => {
                            return (
                                <li key={e.id}>
                                    <Link to={`/articles/${e.title.toLowerCase().replace(/\s+/g, '-')}`} rel='noopener'>
                                        <img width={416} height={260} src={e.images.imgMedium.img} alt={e.images.imgMedium.alt} className="w-full h-260px object-cover object-center mb-6 rounded-2.5xl max-670:h-80 max-540:h-64 max-360:h-52" />
                                        <div className="space-y-3">
                                            <span className="text-regular-14 text-primary-gray-70">{e.date}</span>
                                            <h3 className="text-regular-20 text-primary-gray-90">{e.title}</h3>
                                            <div className="flex flex-wrap gap-3">
                                                {
                                                    e.hashtags.map((hashtag, index) => {
                                                        return (
                                                            <span key={index} className="text-regular-14 text-primary-gray-70">#{hashtag}</span>
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