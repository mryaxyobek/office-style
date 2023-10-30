import React from 'react';
import { reviewsData } from '../assets/data';

const Reviews = () => {
    return (
        <>
            {
                reviewsData.map((e) => {
                    return (
                        <li key={e.id} className="flex gap-8 min-w-864px bg-primary-gray-04 rounded-2.5xl max-900:gap-5 max-900:min-w-788px max-670:flex-col max-670:min-w-416px max-670:gap-0 max-470:min-w-300px">
                            <img width={416} height={359} src={e.productImg} alt="user product image" className="rounded-2.5xl object-cover object-left w-416px h-359px max-900:w-96 max-670:w-full max-470:h-60" />

                            <div className='flex flex-col p-8 pl-0 max-670:p-5'>
                                <blockquote
                                 className="mb-auto max-670:mb-6 max-470:text-regular-16">"{e.comment}"</blockquote>

                                {/* rating  */}
                                <div className="flex-center space-x-0.5 mb-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 19" fill="none"><path d="M10 0L12.2451 6.90983H19.5106L13.6327 11.1803L15.8779 18.0902L10 13.8197L4.12215 18.0902L6.36729 11.1803L0.489435 6.90983H7.75486L10 0Z" fill={`${e.rating > 0 ? '#FFA800' : '#808080'}`} /></svg>

                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 19" fill="none"><path d="M10 0L12.2451 6.90983H19.5106L13.6327 11.1803L15.8779 18.0902L10 13.8197L4.12215 18.0902L6.36729 11.1803L0.489435 6.90983H7.75486L10 0Z" fill={`${e.rating > 1 ? '#FFA800' : '#808080'}`} /></svg>

                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 19" fill="none"><path d="M10 0L12.2451 6.90983H19.5106L13.6327 11.1803L15.8779 18.0902L10 13.8197L4.12215 18.0902L6.36729 11.1803L0.489435 6.90983H7.75486L10 0Z" fill={`${e.rating > 2 ? '#FFA800' : '#808080'}`} /></svg>

                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 19" fill="none"><path d="M10 0L12.2451 6.90983H19.5106L13.6327 11.1803L15.8779 18.0902L10 13.8197L4.12215 18.0902L6.36729 11.1803L0.489435 6.90983H7.75486L10 0Z" fill={`${e.rating > 3 ? '#FFA800' : '#808080'}`} /></svg>

                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 19" fill="none"><path d="M10 0L12.2451 6.90983H19.5106L13.6327 11.1803L15.8779 18.0902L10 13.8197L4.12215 18.0902L6.36729 11.1803L0.489435 6.90983H7.75486L10 0Z" fill={`${e.rating > 4 ? '#FFA800' : '#808080'}`} /></svg>
                                </div>

                                {/* name  */}
                                <h3 className="text-regular-16 text-primary-gray-70">{e.userName}</h3>
                            </div>
                        </li>
                    )
                })
            }
        </>
    )
};

export default Reviews;