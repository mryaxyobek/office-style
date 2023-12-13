import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

const NotificationPage = () => {
    const { message } = useParams();
    const navigate = useNavigate();
    const [currentPage, setCurrentPage] = useState('');
    useEffect(() => {
        if (message === 'comment-submitted') {
            setCurrentPage('comment');
        } else if (message === 'question-sent') {
            setCurrentPage('question');
        } else {
            setCurrentPage('request');
        };
    }, [message]);
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className='pt-36r pb-60r'>
            <div className="container flex-center flex-col justify-center">

                {/* comment */}
                <div className={`${(currentPage === 'comment') ? 'flex-center' : 'hidden'} w-full justify-center flex-col gap-4 mb-4`}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 200 200" fill="none">
                        <g>
                            <path d="M100 200C155.228 200 200 155.228 200 100C200 44.7715 155.228 0 100 0C44.7715 0 0 44.7715 0 100C0 155.228 44.7715 200 100 200Z" fill="#DA0916" />
                            <path d="M51.45 165.491V138.606H85.0563L51.45 165.491Z" fill="white" />
                            <path d="M54.0344 143.85H124.288C136.769 143.85 146.981 133.638 146.981 121.156V94.9563C146.981 82.475 136.769 72.2625 124.288 72.2625H54.0344C41.5531 72.2625 31.3406 82.475 31.3406 94.9563V121.156C31.3406 133.638 41.5531 143.85 54.0344 143.85Z" fill="white" />
                            <g filter="url(#filter0_f_9_141)">
                                <path d="M122.5 132C155.913 132 183 104.913 183 71.5C183 38.0868 155.913 11 122.5 11C89.0868 11 62 38.0868 62 71.5C62 104.913 89.0868 132 122.5 132Z" fill="black" fillOpacity="0.2" />
                            </g>
                            <path d="M174.159 91.9938H78.3375C73.5469 91.9938 69.625 88.075 69.625 83.2812V22.3063C69.625 17.5156 73.5437 13.5938 78.3375 13.5938H174.159C178.95 13.5938 182.872 17.5125 182.872 22.3063V83.2844C182.872 88.075 178.95 91.9938 174.159 91.9938Z" fill="#333333" />
                            <path d="M128.416 118.128V83.2844H84.8625L128.416 118.128Z" fill="#333333" />
                            <path d="M126.5 31V53.5M126.5 53.5V76M126.5 53.5H149H104" stroke="white" />
                        </g>
                        <defs>
                            <filter id="filter0_f_9_141" x="42" y="-9" width="161" height="161" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                <feGaussianBlur stdDeviation="10" result="effect1_foregroundBlur_9_141" />
                            </filter>
                            <clipPath id="clip0_9_141">
                                <rect width="200" height="200" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                    <h1 className='text-center'>Sharxingiz yuborildi!</h1>
                    <p className="text-primary-gray-70 text-regular-20 max-w-xl text-center">Tez orada sizning sharxingiz ko'rib chiqiladi va operatorlar tomonidan tasdiqlanganidan so'ng qo'shiladi.</p>
                </div>

                {/* request */}
                <div className={`${(currentPage === 'request') ? 'flex-center' : 'hidden'} w-full justify-center flex-col gap-4 mb-4`}>
                    <svg width="260" height="260" viewBox="0 0 282 282" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M125 241C180.228 241 225 196.228 225 141C225 85.7715 180.228 41 125 41C69.7715 41 25 85.7715 25 141C25 196.228 69.7715 241 125 241Z" fill="#DA0916" />
                        <mask id="mask0_8_129" maskUnits="userSpaceOnUse" x="51" y="93" width="149" height="95">
                            <path d="M180 93H71C59.9543 93 51 101.954 51 113V168C51 179.046 59.9543 188 71 188H180C191.046 188 200 179.046 200 168V113C200 101.954 191.046 93 180 93Z" fill="white" />
                        </mask>
                        <g mask="url(#mask0_8_129)">
                            <path d="M80.2403 188H170.76C200 188 200 188 200 157.884V123.116C200 93 200 93 170.76 93H80.2403C51 93 51 93 51 123.116V157.884C51 188 51 188 80.2403 188Z" fill="white" />
                            <path d="M51 93L125.5 140.5L200 93" stroke="#DA0916" strokeWidth="2" />
                        </g>
                        <g filter="url(#filter0_d_8_129)">
                            <path d="M206 266C239.137 266 266 239.137 266 206C266 172.863 239.137 146 206 146C172.863 146 146 172.863 146 206C146 239.137 172.863 266 206 266Z" fill="#1E1E1E" />
                        </g>
                        <path d="M229 191L197 221.673L182 204.5" stroke="white" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
                        <defs>
                            <filter id="filter0_d_8_129" x="122" y="122" width="160" height="160" filterUnits="userSpaceOnUse">
                                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                <feOffset dx="-4" dy="-4" />
                                <feGaussianBlur stdDeviation="10" />
                                <feComposite in2="hardAlpha" operator="out" />
                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_8_129" />
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_8_129" result="shape" />
                            </filter>
                        </defs>
                    </svg>

                    <h1 className='text-center'>So'rov yuborildi!</h1>
                    <p className="text-primary-gray-70 text-regular-20 max-w-xl text-center">So'rovingiz yuborildi. Bizning operatorlarimiz tez orada siz bilan bog'lanishadi.</p>
                </div>

                {/* question */}
                <div className={`${(currentPage === 'question') ? 'flex-center' : 'hidden'} w-full justify-center flex-col gap-4 mb-4`}>


                    <svg width="260" height="260" viewBox="0 0 282 282" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M133 233C188.228 233 233 188.228 233 133C233 77.7715 188.228 33 133 33C77.7715 33 33 77.7715 33 133C33 188.228 77.7715 233 133 233Z" fill="#DA0916" />
                        <path d="M133.692 161C133.692 161 133.692 153.59 133.692 144.6C133.692 135.61 173 133.667 173 106.333C173 89.9333 156.154 79 133.692 79C116.846 79 100 89.9333 100 106.333" stroke="white" strokeWidth="16" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M143 182C143 186.971 138.971 191 134 191C129.03 191 125 186.971 125 182C125 177.03 129.03 173 134 173C138.971 173 143 177.03 143 182Z" fill="white" />
                        <g filter="url(#filter0_d_8_129)">
                            <path d="M206 266C239.137 266 266 239.137 266 206C266 172.863 239.137 146 206 146C172.863 146 146 172.863 146 206C146 239.137 172.863 266 206 266Z" fill="#1E1E1E" />
                        </g>
                        <path d="M229 191L197 221.673L182 204.5" stroke="white" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
                        <defs>
                            <filter id="filter0_d_8_129" x="122" y="122" width="160" height="160" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                <feOffset dx="-4" dy="-4" />
                                <feGaussianBlur stdDeviation="10" />
                                <feComposite in2="hardAlpha" operator="out" />
                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_8_129" />
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_8_129" result="shape" />
                            </filter>
                        </defs>
                    </svg>



                    <h1 className='text-center'>Savol yuborildi!</h1>
                    <p className="text-primary-gray-70 text-regular-20 max-w-xl text-center">Savolingiz yuborildi. Bizning operatorlarimiz tez orada siz bilan bog'lanishadi va savolingizga javob berishadi.</p>
                </div>

                {/* buttons */}
                <div className="flex-center gap-4 flex-wrap justify-center">
                    <Link className='red-btn py-3.5 px-6 max-470:w-full text-center' to={-1}>Oldingi sahifaga qaytish</Link>
                    <Link className='red-btn py-3.5 px-6 max-470:w-full text-center' to='/'>Bosh sahifaga qaytish</Link>
                </div>
            </div>
        </div >
    )
}

export default NotificationPage