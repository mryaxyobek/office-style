import React from 'react';
import Contact from '../components/Contact';

const ContactPageMainContent = () => {
    return (
        <div className='pt-36 pb-14'>
            <div className="container">
                <h1 className="mb-14">Контакты</h1>
                <Contact />
            </div>
        </div>
    )
};

export default ContactPageMainContent;