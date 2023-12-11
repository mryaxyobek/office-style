import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

const NotificationPage = () => {
    const { message } = useParams();
    const navigate = useNavigate();
    const [currentPage, setCurrentPage] = useState('');
    useEffect(() => {
        if (message === 'comment-submitted') {
            setCurrentPage('comment')
        } else if (message === '') {
            setCurrentPage('')
        } else if (message === '') {
            setCurrentPage('')
        } else if (message === '') {
            setCurrentPage('')
        } else {
            navigate(-1);
        }
    }, [message])
    return (
        <div className='pt-36r pb-60r'>
            <div className="container flex-center flex-col justify-center">

                {/* comment submitted */}
                {
                    currentPage === 'comment' &&
                    <div className="flex-center w-full justify-center flex-col gap-4 mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 200 200" fill="none">
                            <path d="M100 200C155.228 200 200 155.228 200 100C200 44.7715 155.228 0 100 0C44.7715 0 0 44.7715 0 100C0 155.228 44.7715 200 100 200Z" fill="#DA0916" />
                            <path d="M51.45 165.491V138.606H85.0563L51.45 165.491Z" fill="white" />
                            <path d="M54.0344 143.85H124.288C136.769 143.85 146.981 133.638 146.981 121.156V94.9563C146.981 82.475 136.769 72.2625 124.288 72.2625H54.0344C41.5531 72.2625 31.3406 82.475 31.3406 94.9563V121.156C31.3406 133.638 41.5531 143.85 54.0344 143.85Z" fill="white" />
                            <path d="M174.159 91.9938H78.3375C73.5469 91.9938 69.625 88.075 69.625 83.2812V22.3063C69.625 17.5156 73.5437 13.5938 78.3375 13.5938H174.159C178.95 13.5938 182.872 17.5125 182.872 22.3063V83.2844C182.872 88.075 178.95 91.9938 174.159 91.9938Z" fill="#333" />
                            <path d="M128.416 118.128V83.2844H84.8625L128.416 118.128Z" fill="#333" />
                            <path d="M126.5 31L126.5 53.5M126.5 76L126.5 53.5M126.5 53.5H149H104" stroke="white" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <h1 className='text-center'>Sharxingiz yuborildi!</h1>
                        <p className="text-primary-gray-70 text-regular-20 max-w-xl text-center">Tez orada sizning sharxingiz ko'rib chiqiladi va operatorlar tomonidan tasdiqlanganidan so'ng qo'shiladi.</p>
                    </div>
                }

                {/* buttons */}
                <div className="flex-center gap-4 flex-wrap justify-center">
                    <Link className='red-btn py-3.5 px-6 max-470:w-full text-center' to={-1}>Oldingi sahifaga qaytish</Link>
                    <Link className='red-btn py-3.5 px-6 max-470:w-full text-center' to='/'>Bosh sahifaga qaytish</Link>
                </div>
            </div>
        </div>
    )
}

export default NotificationPage