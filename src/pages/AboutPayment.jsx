import React, { useEffect } from 'react';
import DeliveryAndPayment from '../components/DeliveryAndPayment';
import PaymentPageContactSection from '../components/PaymentPageContactSection';

const AboutPayment = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    },[]);
    return (
        <>
            <DeliveryAndPayment />
            <PaymentPageContactSection />
        </>
    )
};

export default AboutPayment;