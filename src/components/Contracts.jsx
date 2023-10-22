import React from 'react';

// images
import ksg from '../assets/images/other/ksg-company-contract.png';
import phsv from '../assets/images/other/phsv-company-contract.png';
import dolina from '../assets/images/other/dolina-company-contract.png';
import dedal from '../assets/images/other/dedal-company-contract.png';

const Contracts = () => {
    return (
        <section className='py-60px'>
            <div className="grid container grid-cols-4 gap-8">
                <img width={416} height={589} src={ksg} alt="ksg company contract image" />
                <img width={416} height={589} src={phsv} alt="phsv company contract image" />
                <img width={416} height={589} src={dolina} alt="dolina solna company contract image" />
                <img width={416} height={589} src={dedal} alt="dedal company contract image" />
            </div>
        </section>
    )
};

export default Contracts;