import React from 'react';

// images
import ksg from '../assets/images/other/ksg-company-contract.png';
import phsv from '../assets/images/other/phsv-company-contract.png';
import dolina from '../assets/images/other/dolina-company-contract.png';
import dedal from '../assets/images/other/dedal-company-contract.png';

const Contracts = () => {
    return (
        <section className='py-60r'>
            <div className="flex container gap-8 gray-scroll max-1800:pb-60r overflow-x-auto">
                <img width={416} height={589} src={ksg} alt="ksg company contract image" className='w-411px max-800:w-394px max-670:w-80 max-440:w-300px max-440:h-424px bg-primary-gray-30' />
                <img width={416} height={589} src={phsv} alt="phsv company contract image" className='w-411px max-800:w-394px max-670:w-80 max-440:w-300px max-440:h-424px bg-primary-gray-30' />
                <img width={416} height={589} src={dolina} alt="dolina solna company contract image" className='w-411px max-800:w-394px max-670:w-80 max-440:w-300px max-440:h-424px bg-primary-gray-30' />
                <img width={416} height={589} src={dedal} alt="dedal company contract image" className='w-411px max-800:w-394px max-670:w-80 max-440:w-300px max-440:h-424px bg-primary-gray-30' />
            </div>
        </section>
    )
};

export default Contracts;