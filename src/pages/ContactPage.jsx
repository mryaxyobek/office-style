import React, { useEffect } from 'react';
import ContactPageMainContent from '../components/ContactPageMainContent';
import Props from '../components/Props';

const ContactPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    },[]);
    return (
        <>
            <ContactPageMainContent />
            <Props />
        </>
    )
};

export default ContactPage;