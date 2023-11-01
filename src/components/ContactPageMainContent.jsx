import React from 'react';
import Contact from '../components/Contact';

const ContactPageMainContent = () => {
    return (
        <div className='pt-36r pb-14 max-730:pb-10 max-440:pb-8'>
            <div className="container">
                <h1 className="mb-14 max-730:mb-10 max-440:mb-8">Контакты</h1>
                <Contact />
            </div>
        </div>
    )
};

export default ContactPageMainContent;