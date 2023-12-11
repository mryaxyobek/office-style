import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { akciyaProducts } from '../assets/data'

const AkciyaPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    },[]);
    return (
        <div className='pt-36r container'>
            <h1 className="mb-14">Aksiyalar</h1>

            <ul className="flex w-full gap-8 overflow-x-auto gray-scroll pb-14 max-900:pb-10 max-470:pb-8 max-360:min-w-280px">
                {akciyaProducts.map((e) => {
                    return (
                        <li key={e.id} className="min-w-416px product hover:active-hover max-470:min-w-300px">
                            <Link rel='noopener' to={`/akciya/${e.description.toLowerCase().replace(/\s+/g, '-')}`}>
                                <img width={416} height={260} src={e.img} alt="furniture image" className="mb-6 rounded-2.5xl h-260px max-470:h-52 max-360:h-175px" />

                                {/* date */}
                                <span className="flex-c-b mb-3 text-regular-14 text-primary-gray-70">{e.date}</span>

                                {/* title  */}
                                <p className="text-medium-20 leading-25px!">{e.description}</p>
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default AkciyaPage