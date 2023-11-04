import React from 'react';
import { useSelector } from 'react-redux';

const Notification = () => {
    const { notification } = useSelector((store) => store.card);

    return (
        <>
            {
                notification &&
                <div className='add-basket-notification flex-center fixed bottom-10 rounded-lg bg-black bg-opacity-75 text-white text-regular-18'>
                    <span className="rounded-l-lg border-r border-white py-3 px-5">Mahsulot savaqtchaga qo'shildi!</span>
                    <span className="inline-block rounded-r-lg py-3 px-5 count"></span>
                </div>
            }
        </>
    )
};

export default Notification;