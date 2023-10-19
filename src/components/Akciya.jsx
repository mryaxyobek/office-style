import React from 'react'
import { Link } from 'react-router-dom'
import { akciyaProducts } from '../assets/data'

const Akciya = () => {
    return (
        <section className='py-60px'>
            <div className="container">
                {/* top  */}
                <div className="flex-c-b mb-60px">
                    <h2>Акции</h2>
                    <Link to='/' className='solid-gray-50-border-btn'>Все акции</Link>
                </div>

                {/* products  */}
                <ul className="grid grid-cols-4 gap-8">
                    {akciyaProducts.map((e) => {
                        return (
                            <li key={e.id} className="w-416px product hover:active-hover">
                                <Link to={`/${e.idName}`}>
                                    <img width={416} height={260} src={e.img} alt="furniture image" className="mb-6 rounded-2.5xl h-260px" />

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
        </section>
    )
}

export default Akciya