import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { akciyaProducts } from '../assets/data';

const AkciyaDetails = () => {
    const { akciyaName } = useParams();
    const product = akciyaProducts.find(product => product.description.toLowerCase().replace(/\s+/g, '-') === akciyaName);
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className='container pt-14 max-1150:pt-12 max-940:pt-10 max-730:pt-8 max-540:pt-6'>
            <ul className="breadcrumb">
                <li>
                    <Link to='/akciya'>Aksiya</Link>
                </li>
                <li>
                    <span>
                        {
                            product ? (product.type ? product.type : product.description) : <>Nimadir xato ketdi</>
                        }
                    </span>
                </li>
            </ul>

            {/* product */}
            <div>
                {
                    product ?
                        <div>
                            <h3 className="mb-12 text-regular-36 max-580:text-regular-28 max-580:mb-10 max-440:mb-8 max-440:text-medium-24">
                                {
                                    product.type ?
                                        product.type :
                                        product.description
                                }
                            </h3>
                            <img src={product.img} alt="furniture image" className="mb-12 w-2/3 object-cover rounded-2.5xl h-424px max-1050:w-full max-730:h-80 max-540:h-72 max-440:h-52 max-440:rounded" />
                            <p className='max-w-1312px'>{product.body}</p>
                        </div>
                        :
                        <h3 className='text-regular-36 max-580:text-regular-28 max-440:text-medium-24'>Ma'lumotlarni olib bo'lmadi</h3>
                }
            </div>
        </div>
    )
};

export default AkciyaDetails;