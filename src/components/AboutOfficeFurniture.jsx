import React from 'react';
import { Link } from 'react-router-dom';

// images 
import redChairBg from '../assets/images/other/red-chair-furniture.png';
import redSofas from '../assets/images/other/office-red-sofas.png';
import blackChair from '../assets/images/other/office-black-chair.png';
import receptionDesk from '../assets/images/other/reception-desk.png';
import staff from '../assets/images/other/furniture-for-staff.png';
import meetingTables from '../assets/images/other/meeting-tables.png';

const AboutOfficeFurniture = () => {
    return (
        <section className='py-60px max-900:py-12 max-360:py-30px'>
            <div className="container">
                {/* top  */}
                <div className="flex-c-b mb-60px max-800:mb-12 max-360:mb-8">
                    <h2>Более 5 000 единиц офисной мебели в одном месте</h2>
                    <Link to='/category' className='py-3.5 px-6 rounded-lg border border-primary-gray-50 min-w-max max-670:hidden'>Все категории</Link>
                </div>
                {/* main  */}
                <ul className="grid grid-cols-16 gap-8 max-1150:gap-5 max-1050:grid-cols-4 max-1050:gap-8 max-470:grid-cols-1 max-360:gap-4 max-670:mb-8">
                    {/* 1 */}
                    <li className="relative pl-10 pt-8 rounded-2.5xl col-span-7 row-start-1 row-end-3 overflow-hidden bg-primary-gray-04 max-1050:col-start-1 max-1050:col-end-3 max-640:col-end-5 max-640:h-96 max-470:col-end-2 max-470:h-60">
                        <h3 className="relative max-w-260px z-1 text-medium-36 max-900:text-medium-24 max-540:text-medium-20">Кабинеты руководителя</h3>
                        <img width={752} height={544} src={redChairBg} alt="Manager's offices" className="absolute z-0 w-full h-full top-0 left-0 object-cover object-right" />
                    </li>

                    {/* 2 */}
                    <li className="relative pl-8 pt-5 rounded-2.5xl col-start-8 col-end-14 overflow-hidden bg-primary-gray-04 h-64 max-1350:h-48 max-1050:col-start-3 max-1050:col-end-5 max-640:col-start-1 max-640:col-end-3 max-470:col-end-2 max-470:h-60">
                        <h3 className="relative max-w-217px z-1 text-medium-28 max-900:text-medium-22 max-540:text-medium-20">Мебель для персонала</h3>
                        <img width={456} height={286} src={staff} alt="Manager's offices" className="absolute z-0 bottom-0 right-0" />
                    </li>

                    {/* 3 */}
                    <li className="relative pl-8 pt-5 rounded-2.5xl col-start-14 col-end-17 overflow-hidden bg-primary-gray-04 max-1050:col-start-3 max-1050:col-end-4 max-730:col-end-5 max-730:h-48 max-470:col-start-1 max-470:col-end-2 max-470:h-60">
                        <h3 className="relative z-1 text-medium-24 max-900:text-medium-22 max-540:text-medium-20">Стойки рецепшн</h3>
                        <img width={305} height={256} src={receptionDesk} alt="Manager's offices" className="absolute z-0 w-full h-full top-0 right-0 max-470:w-80" />
                    </li>

                    {/* 4 */}
                    <li className="relative h-64 pl-8 pt-5 rounded-2.5xl col-start-8 col-end-11 overflow-hidden bg-primary-gray-04 max-1350:h-48 max-1050:col-start-4 max-1050:col-end-5 max-730:col-start-1 max-470:col-end-2 max-470:h-60">
                        <h3 className="relative max-w-200px z-1 text-medium-24 max-900:text-medium-22 max-540:text-medium-20">Офисные кресла</h3>
                        <img width={219} height={196} src={blackChair} alt="Manager's offices" className="absolute z-0 right-0 bottom-0" />
                    </li>

                    {/* 5 */}
                    <li className="relative pl-8 pt-5 rounded-2.5xl col-start-11 col-end-14 overflow-hidden bg-primary-gray-04 max-1050:col-start-1 max-1050:col-end-3 max-470:col-end-2 max-470:h-60">
                        <h3 className="relative max-w-200px z-1 text-medium-24 max-900:text-medium-22 max-540:text-medium-20">Офисные диваны</h3>
                        <img width={173} height={226} src={redSofas} alt="Manager's offices" className="absolute z-0 right-0 bottom-0" />
                    </li>

                    {/* 6 */}
                    <li className="relative pl-8 pt-5 rounded-2.5xl col-start-14 col-end-17 overflow-hidden bg-primary-gray-04 max-1050:col-start-3 max-1050:col-end-5 max-1050:h-48 max-470:col-start-1 max-470:col-end-2 max-470:h-60">
                        <h3 className="relative max-w-217px z-1 text-medium-24 max-900:text-medium-22 max-540:text-medium-20">Столы для переговоров</h3>
                        <img width={219} height={191} src={meetingTables} alt="Manager's offices" className="absolute z-0 right-0 bottom-0" />
                    </li>
                </ul>

                <Link to='/category' className='hidden w-full py-3.5 px-6 rounded-lg border border-primary-gray-50 min-w-max max-670:flex justify-center text-regular-16 max-360:text-regular-14'>Все категории</Link>
            </div>
        </section>
    )
};

export default AboutOfficeFurniture;