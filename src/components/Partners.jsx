import React from 'react';

// images 
import sberbankImg from '../assets/images/svg/sberbank-company-logo.svg';
import rosvodokanalImg from '../assets/images/svg/rosvodokanal-company-logo.svg';
import ksgImg from '../assets/images/other/ksg-company-logo.png';
import anonymImg from '../assets/images/other/anonym-company-logo.png';
import riveraImg from '../assets/images/other/rivera-company-logo.png';
import phsvImg from '../assets/images/other/phsv-company-logo.png';
import dedalImg from '../assets/images/other/dedal-company-logo.png';

const Partners = () => {
    return (
        <section className='py-60r'>
            <div className="container">
                <h2 className="mb-60px max-900:mb-12 max-470:mb-8">Biz eng yirik kompaniyalar bilan hamkorlik qilamiz</h2>

                {/* company */}
                <ul className="flex-center gap-8 overflow-x-auto w-full hidden-scroll">
                    <li className="flex-center justify-center min-w-224px h-104px rounded-2xl bg-primary-gray-04">
                        <img width={183} height={28} src={sberbankImg} alt="sberbank company logo" />
                    </li>

                    <li className="flex-center justify-center min-w-224px h-104px rounded-2xl bg-primary-gray-04">
                        <img width={100} height={54} src={ksgImg} alt="sberbank company logo" />
                    </li>

                    <li className="flex-center justify-center min-w-224px h-104px rounded-2xl bg-primary-gray-04">
                        <img width={177} height={49} src={rosvodokanalImg} alt="sberbank company logo" />
                    </li>

                    <li className="flex-center justify-center min-w-224px h-104px rounded-2xl bg-primary-gray-04">
                        <img width={66} height={52} src={anonymImg} alt="sberbank company logo" />
                    </li>

                    <li className="flex-center justify-center min-w-224px h-104px rounded-2xl bg-primary-gray-04">
                        <img width={96} height={52} src={riveraImg} alt="sberbank company logo" />
                    </li>

                    <li className="flex-center justify-center min-w-224px h-104px rounded-2xl bg-primary-gray-04">
                        <img width={163} height={29} src={phsvImg} alt="sberbank company logo" />
                    </li>

                    <li className="flex-center justify-center min-w-224px h-104px rounded-2xl bg-primary-gray-04">
                        <img width={190} height={46} src={dedalImg} alt="sberbank company logo" />
                    </li>

                </ul>
            </div>
        </section>
    )
};

export default Partners;